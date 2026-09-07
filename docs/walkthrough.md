# Walkthrough: MVP FIBA Basketball Regel-Quiz 🏀

Der MVP für das interaktive, mobile **FIBA Basketball Regel-Quiz** ist fertiggestellt. Die App läuft komplett ohne Build-Tools (Vanilla HTML/CSS/JS) und kann direkt über **GitHub Pages** gehostet oder lokal im Browser geöffnet werden.

---

## 🚀 Umgesetzte Funktionen

### 1. Rollenabfrage ("Wer bist du?")
- Direkter Einstieg auf der Startseite mit 5 zielgruppengerechten Rollen:
  - 🟨 **Schiedsrichter:** Schöpft aus allen Fragen (Handzeichen, Zylinderprinzip, knifflige Situationen).
  - ⏱️ **Kampfgericht:** Anschreibetisch, 24s-Uhr (Reset-Bedingungen), Handzeichen, Wechselzeiten.
  - 🏃 **Spieler:** In-Game Regeln wie Schrittfehler, Doppeldribbel, Rückspiel, Zylinderprinzip.
  - 📋 **Trainer:** Timeouts, Wechsel, Bankverhalten, taktische Besonderheiten.
  - 🍿 **Zuschauer:** Grundlegende Signale und Spielregeln verständlich erklärt.

### 2. Quiz-Durchlauf (5 Fragen im MVP)
- **Top-Bar:** Anzeige der aktuellen Rolle, Fortschrittszähler ("Frage 2 von 5") und animierter Fortschrittsbalken.
- **Modulare Medien:** Jede Frage unterstützt Bilder (SVG/PNG), animierte GIFs, kurze Videos oder YouTube-Clips sowie einen Fallback-Basketball-Platzhalter.
- **4 Antwort-Optionen (A–D):** Deterministisch mit dem Runden-Seed gemischt, sodass nicht immer derselbe Buchstabe richtig ist.

### 3. Fokussiertes Feedback-Overlay
- Nach dem Antippen einer Antwort legt sich das Feedback-Panel über den Antwortbereich:
  - Großes Status-Badge: **„Richtig! 🎉“** (grün) bzw. **„Falsch! ❌“** (rot).
  - Bei falscher Antwort Anzeige der korrekten Lösung.
  - Detaillierte Erklärung mit Bezug auf den offiziellen FIBA-Artikel.
  - Daumenfreundlicher **„Weiter ➔“** bzw. **„Zum Ergebnis 🏆“**-Button.

### 4. Ergebnis & Wordle-Style Sharing mit URL-Seed
- **Score-Anzeige:** z. B. `4 / 5 Fragen korrekt` mit motivierender Bewertung.
- **Wordle Emoji-Vorschau:** z. B. `🟩🟩🟥🟩🟩`.
- **„Ergebnis teilen“-Button:**
  - Nutzt auf Mobilgeräten `navigator.share` (direkt für WhatsApp, Telegram, Signal) oder kopiert in die Zwischenablage mit Benachrichtigungs-Toast.
  - Generiert einen Seed-Link (z. B. `?role=spieler&seed=a8f2c`), mit dem Freunde **exakt dieselben 5 Fragen** in derselben Reihenfolge spielen können.
- **„Neues Quiz starten“-Button:** Setzt die Parameter zurück und führt zur Startseite.

---

## 📁 Dateistruktur

```text
e:/Projects/ref_test/
├── index.html                           # App-Struktur mit den 3 Screens & Overlay
├── style.css                            # Mobile-First Styles, Dark-Mode, Touch-Targets
├── app.js                               # Quiz-Logik, Mulberry32 PRNG, Feedback & Share
├── questions.js                         # 12 praxisnahe FIBA-Fragen mit Metadaten
├── assets/
│   └── signals/
│       ├── travelling.svg               # Handzeichen: Schrittfehler
│       ├── backcourt.svg                # Handzeichen: Rückspiel
│       ├── stop_clock_foul.svg          # Handzeichen: Stoppen der Uhr (Foul)
│       └── timeout.svg                  # Handzeichen: Auszeit
└── README.md                            # Projektbeschreibung & Konzept
```

---

## 🧪 Durchgeführte Tests & Ergebnisse

| Test | Durchführung | Ergebnis |
| :--- | :--- | :--- |
| **Fragen-Integrität** | Validierung aller 12 Fragen via Node.js auf Schema, 4 Optionen, Wertebereich und Dateipfade | **Bestanden** (12/12 Fragen valide) |
| **Rollen-Pools** | Überprüfung der Poolgrößen je Rolle | **Bestanden** (Jede Rolle $\ge 6$ Fragen, ausreichend für 5er-Runden) |
| **Seed-Determinismus** | 2 Durchläufe mit demselben Seed `a8f2c` im PRNG | **Bestanden** (Identische Fragenreihenfolge und Optionenverteilung) |
| **Optionen-Mischung** | Prüfung der Position der korrekten Antwort | **Bestanden** (Gleichmäßig auf A, B, C und D verteilt) |

---

## 🌐 Lokales Testen & GitHub Pages Deployment

### 1. Lokal ansehen:
Da alles in Vanilla JS ohne Build-Schritt umgesetzt ist, kannst du die [`index.html`](file:///e:/Projects/ref_test/index.html) direkt per Doppelklick in jedem Browser öffnen.

Alternativ über einen lokalen Webserver (z. B. mit Node oder Python):
```bash
# Mit Python:
python -m http.server 8000

# Oder mit Node:
npx serve .
```

### 2. Bereitstellung auf GitHub Pages:
1. Repository auf GitHub erstellen und Code pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial MVP: FIBA Basketball Regel-Quiz"
   git remote add origin https://github.com/<dein-user>/ref_test.git
   git push -u origin main
   ```
2. Auf GitHub im Repository unter **Settings $\rightarrow$ Pages**:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` / `/(root)` auswählen und speichern.
   - Die Seite ist innerhalb von 1–2 Minuten unter `https://<dein-user>.github.io/ref_test/` online!
