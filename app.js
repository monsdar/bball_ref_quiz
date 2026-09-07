/**
 * FIBA Basketball Regeltest - Anwendungslogik
 */

(function () {
  'use strict';

  const QUESTIONS_PER_ROUND = 5;

  const ROLE_NAMES = {
    schiedsrichter: 'Schiedsrichter',
    kampfgericht: 'Kampfgericht',
    spieler: 'Spieler',
    trainer: 'Trainer',
    zuschauer: 'Zuschauer'
  };

  // State
  let currentRole = null;
  let currentSeed = null;
  let isChallenge = false;
  let activeQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let answersLog = []; // Array von boolean (true = richtig, false = falsch)

  // DOM Elements
  const screenRole = document.getElementById('screen-role');
  const screenQuiz = document.getElementById('screen-quiz');
  const screenResult = document.getElementById('screen-result');

  const headerSeedBadge = document.getElementById('header-seed-badge');

  // Quiz DOM
  const quizRoleBadge = document.getElementById('quiz-role-badge');
  const quizProgressText = document.getElementById('quiz-progress-text');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const mediaContainer = document.getElementById('media-container');
  const questionText = document.getElementById('question-text');
  const answersGrid = document.getElementById('answers-grid');
  const feedbackOverlay = document.getElementById('feedback-overlay');
  const feedbackStatus = document.getElementById('feedback-status');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackExplanation = document.getElementById('feedback-explanation');
  const feedbackRule = document.getElementById('feedback-rule');
  const btnNextQuestion = document.getElementById('btn-next-question');

  // Result DOM
  const resultRoleBadge = document.getElementById('result-role-badge');
  const resultScoreNumber = document.getElementById('result-score-number');
  const resultFeedbackMessage = document.getElementById('result-feedback-message');
  const resultEmojiRow = document.getElementById('result-emoji-row');
  const btnShare = document.getElementById('btn-share');
  const btnRestart = document.getElementById('btn-restart');
  const toast = document.getElementById('toast');

  // -------------------------------------------------------------
  // Seed & PRNG (Mulberry32) für reproduzierbare Fragenketten
  // -------------------------------------------------------------
  function stringToHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (Math.imul(31, hash) + str.charCodeAt(i)) | 0;
    }
    return hash;
  }

  function mulberry32(a) {
    return function () {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function generateRandomSeed() {
    return Math.random().toString(36).substring(2, 8);
  }

  function shuffleSeeded(array, rng) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // -------------------------------------------------------------
  // Screen Management
  // -------------------------------------------------------------
  function showScreen(targetScreen) {
    [screenRole, screenQuiz, screenResult].forEach((screen) => {
      if (screen === targetScreen) {
        screen.classList.remove('hidden');
        screen.classList.add('screen-active');
      } else {
        screen.classList.add('hidden');
        screen.classList.remove('screen-active');
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // -------------------------------------------------------------
  // Polymorpher Media-Renderer (SVG, PNG, GIF, Video, YouTube)
  // -------------------------------------------------------------
  function renderMedia(media) {
    mediaContainer.innerHTML = '';

    if (!media || !media.type) {
      // Fallback: Eleganter Basketball-Grafik-Platzhalter
      mediaContainer.innerHTML = `
        <div class="media-placeholder">
          <span class="media-placeholder-icon">🏀</span>
          <span>FIBA Regelfrage (Breitensport)</span>
        </div>
      `;
      return;
    }

    switch (media.type) {
      case 'image':
      case 'gif': {
        const img = document.createElement('img');
        img.src = media.src;
        img.alt = media.alt || 'FIBA Schiedsrichter Handzeichen';
        img.loading = 'eager';
        mediaContainer.appendChild(img);
        break;
      }
      case 'video': {
        const video = document.createElement('video');
        video.src = media.src;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.setAttribute('aria-label', media.alt || 'Basketball Spielszene');
        mediaContainer.appendChild(video);
        break;
      }
      case 'youtube': {
        const iframe = document.createElement('iframe');
        const start = media.start ? `&start=${media.start}` : '';
        const end = media.end ? `&end=${media.end}` : '';
        iframe.src = `https://www.youtube-nocookie.com/embed/${media.videoId}?autoplay=1&mute=1&loop=1&playlist=${media.videoId}${start}${end}`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        mediaContainer.appendChild(iframe);
        break;
      }
      default: {
        mediaContainer.innerHTML = `
          <div class="media-placeholder">
            <span class="media-placeholder-icon">🏀</span>
            <span>FIBA Regelfrage</span>
          </div>
        `;
      }
    }
  }

  // -------------------------------------------------------------
  // Quiz Logik
  // -------------------------------------------------------------
  function startQuiz(role, seed = null) {
    currentRole = role;
    currentSeed = seed || generateRandomSeed();

    // Challenge Badge im Header aktualisieren
    if (isChallenge) {
      headerSeedBadge.classList.remove('hidden');
    } else {
      headerSeedBadge.classList.add('hidden');
    }

    // Passende Fragen nach Zielgruppe filtern
    let pool = QUESTIONS.filter((q) => {
      if (role === 'schiedsrichter') return true; // Schiedsrichter bekommen alle Fragen
      return q.meta && q.meta.zielgruppen && q.meta.zielgruppen.includes(role);
    });

    // Falls weniger als 5 Fragen im Pool sind (z. B. bei Erweiterungen), mit restlichen Fragen auffüllen
    if (pool.length < QUESTIONS_PER_ROUND) {
      const remaining = QUESTIONS.filter((q) => !pool.includes(q));
      pool = [...pool, ...remaining];
    }

    // Mit Seed deterministisch mischen
    const rng = mulberry32(stringToHash(currentSeed));
    activeQuestions = shuffleSeeded(pool, rng)
      .slice(0, QUESTIONS_PER_ROUND)
      .map((q) => {
        const options = q.antworten.map((text, originalIdx) => ({
          text,
          isCorrect: originalIdx === q.korrekteAntwort
        }));
        return {
          ...q,
          shuffledOptions: shuffleSeeded(options, rng)
        };
      });

    // State zurücksetzen
    currentIndex = 0;
    score = 0;
    answersLog = [];

    // URL aktualisieren ohne Reload
    const url = new URL(window.location.href);
    url.searchParams.set('role', currentRole);
    url.searchParams.set('seed', currentSeed);
    window.history.replaceState({}, '', url.toString());

    // UI initialisieren
    quizRoleBadge.textContent = `Rolle: ${ROLE_NAMES[currentRole] || currentRole}`;
    renderCurrentQuestion();
    showScreen(screenQuiz);
  }

  function renderCurrentQuestion() {
    const q = activeQuestions[currentIndex];
    if (!q) return;

    // Fortschritt
    quizProgressText.textContent = `Frage ${currentIndex + 1} von ${QUESTIONS_PER_ROUND}`;
    const progressPercent = (currentIndex / QUESTIONS_PER_ROUND) * 100;
    quizProgressFill.style.width = `${progressPercent}%`;

    // Medien und Fragetext
    renderMedia(q.media);
    questionText.textContent = q.frage;

    // Feedback Overlay verstecken
    feedbackOverlay.classList.add('hidden');
    feedbackOverlay.classList.remove('correct', 'incorrect');

    // Antwortoptionen aufbauen
    answersGrid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.shuffledOptions.forEach((option, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'answer-btn';
      btn.innerHTML = `
        <span class="answer-letter">${letters[idx]}</span>
        <span class="answer-text">${escapeHtml(option.text)}</span>
      `;
      btn.addEventListener('click', () => handleSelectAnswer(option, btn));
      answersGrid.appendChild(btn);
    });
  }

  function handleSelectAnswer(selectedOption, clickedBtn) {
    const q = activeQuestions[currentIndex];
    const isCorrect = selectedOption.isCorrect;

    // Antwort-Buttons deaktivieren
    const buttons = answersGrid.querySelectorAll('.answer-btn');
    buttons.forEach((btn) => (btn.disabled = true));

    // Loggen & Score
    if (isCorrect) {
      score++;
      answersLog.push(true);
      feedbackOverlay.classList.add('correct');
      feedbackOverlay.classList.remove('incorrect');
      feedbackIcon.textContent = '🎉';
      feedbackTitle.textContent = 'Richtig!';
    } else {
      answersLog.push(false);
      feedbackOverlay.classList.add('incorrect');
      feedbackOverlay.classList.remove('correct');
      feedbackIcon.textContent = '❌';
      feedbackTitle.textContent = 'Falsch!';
    }

    // Erklärung und Regelbezug
    const correctOption = q.shuffledOptions.find((opt) => opt.isCorrect);
    const recapHtml = !isCorrect && correctOption
      ? `<strong style="display:block; margin-bottom: 6px; color: var(--text-main);">Richtige Antwort: ${escapeHtml(correctOption.text)}</strong>`
      : '';
    feedbackExplanation.innerHTML = `${recapHtml}${escapeHtml(q.erklaerung)}`;
    feedbackRule.textContent = q.meta.fibaArtikel || 'FIBA Regelwerk';

    // Button Beschriftung (bei letzter Frage "Zum Ergebnis")
    if (currentIndex === QUESTIONS_PER_ROUND - 1) {
      btnNextQuestion.innerHTML = `<span>Zum Ergebnis</span> <span class="btn-arrow">🏆</span>`;
    } else {
      btnNextQuestion.innerHTML = `<span>Weiter</span> <span class="btn-arrow">➔</span>`;
    }

    // Fortschrittsbalken aktualisieren (aktuelle Frage abgeschlossen)
    const completedPercent = ((currentIndex + 1) / QUESTIONS_PER_ROUND) * 100;
    quizProgressFill.style.width = `${completedPercent}%`;

    // Overlay einblenden
    feedbackOverlay.classList.remove('hidden');
  }

  function handleNextQuestion() {
    currentIndex++;
    if (currentIndex < QUESTIONS_PER_ROUND) {
      renderCurrentQuestion();
    } else {
      showResults();
    }
  }

  // -------------------------------------------------------------
  // Ergebnis & Wordle-Style Sharing
  // -------------------------------------------------------------
  function showResults() {
    resultRoleBadge.textContent = `Rolle: ${ROLE_NAMES[currentRole] || currentRole}`;
    resultScoreNumber.textContent = `${score} / ${QUESTIONS_PER_ROUND}`;

    // Motivierender Text basierend auf Score
    let message = '';
    if (score === QUESTIONS_PER_ROUND) {
      message = 'Perfekt! 🏆 Du beherrschst die FIBA-Regeln im Schlaf!';
    } else if (score >= 4) {
      message = 'Super Leistung! 🔥 Du bist bestens vorbereitet für die Halle!';
    } else if (score >= 3) {
      message = 'Solide Runde! 👍 Ein paar Feinheiten kannst du noch festigen.';
    } else {
      message = 'Guter Versuch! 💪 Übung macht den Meister – starte direkt eine neue Runde!';
    }
    resultFeedbackMessage.textContent = message;

    // Wordle Emojis erzeugen
    const emojiRow = answersLog.map((correct) => (correct ? '🟩' : '🟥')).join('');
    resultEmojiRow.textContent = emojiRow;

    showScreen(screenResult);
  }

  function buildShareText() {
    const roleName = ROLE_NAMES[currentRole] || 'Basketball-Fan';
    const emojiRow = answersLog.map((correct) => (correct ? '🟩' : '🟥')).join('');
    const challengeUrl = `${window.location.origin}${window.location.pathname}?role=${currentRole}&seed=${currentSeed}`;

    return [
      `🏀 Basketball Ref-Quiz (Rolle: ${roleName})`,
      `${emojiRow} (${score}/${QUESTIONS_PER_ROUND})`,
      ``,
      `Schlägst du mein Ergebnis? Spiele dieselben 5 Fragen:`,
      `👉 ${challengeUrl}`
    ].join('\n');
  }

  async function handleShare() {
    const shareText = buildShareText();
    const challengeUrl = `${window.location.origin}${window.location.pathname}?role=${currentRole}&seed=${currentSeed}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'FIBA Basketball Regel-Quiz',
          text: shareText,
          url: challengeUrl
        });
        return;
      } catch (err) {
        // Abbruch durch Nutzer oder Desktop-Fallback -> zu Clipboard wechseln
        if (err.name !== 'AbortError') {
          copyToClipboard(shareText);
        }
      }
    } else {
      copyToClipboard(shareText);
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showToast).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast();
    } catch (e) {
      alert('Kopieren fehlgeschlagen. Bitte manuell kopieren:\n\n' + text);
    }
    document.body.removeChild(textarea);
  }

  function showToast() {
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2800);
  }

  function restartQuiz() {
    // Challenge-Parameter aus der URL entfernen für frischen Start
    const url = new URL(window.location.href);
    url.searchParams.delete('role');
    url.searchParams.delete('seed');
    window.history.replaceState({}, '', url.pathname);

    isChallenge = false;
    currentSeed = null;
    headerSeedBadge.classList.add('hidden');

    showScreen(screenRole);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // -------------------------------------------------------------
  // Initialisierung & Event Listener
  // -------------------------------------------------------------
  function init() {
    // Rollen-Buttons
    const roleButtons = document.querySelectorAll('.role-card');
    roleButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const role = btn.getAttribute('data-role');
        if (role) {
          startQuiz(role);
        }
      });
    });

    // Weiter-Button im Overlay
    btnNextQuestion.addEventListener('click', handleNextQuestion);

    // Share & Restart
    btnShare.addEventListener('click', handleShare);
    btnRestart.addEventListener('click', restartQuiz);

    // URL Query Parameter prüfen (?role=...&seed=...)
    const params = new URLSearchParams(window.location.search);
    const urlRole = params.get('role');
    const urlSeed = params.get('seed');

    if (urlRole && ROLE_NAMES[urlRole] && urlSeed) {
      isChallenge = true;
      startQuiz(urlRole, urlSeed);
    } else {
      showScreen(screenRole);
    }
  }

  // Start bei DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
