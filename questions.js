/**
 * FIBA Basketball Regeltest - Fragenpool
 * 
 * Jede Frage enthält:
 * - id: Eindeutige Kennung
 * - frage: Fragetext
 * - media: Medienelement (type: 'image' | 'video' | 'youtube' | 'gif' | null)
 * - antworten: Array mit genau 4 Optionen
 * - korrekteAntwort: 0-basierter Index der richtigen Option
 * - erklaerung: Detaillierte Regelerklärung mit FIBA-Bezug
 * - meta: Metadaten zur Filterung nach Zielgruppen und Kategorien
 */

const QUESTIONS = [
  {
    id: "q01",
    frage: "Was zeigt der Schiedsrichter mit zwei vor der Brust umeinander rotierenden Fäusten an?",
    media: {
      type: "image",
      src: "assets/signals/travelling.svg",
      alt: "Schiedsrichter rollt Fäuste vor der Brust"
    },
    antworten: [
      "Schrittfehler (Travelling)",
      "Doppeldribbel",
      "Rückspiel ins Rückfeld",
      "3-Sekunden-Übertretung"
    ],
    korrekteAntwort: 0,
    erklaerung: "Das Rollen der Fäuste umeinander signalisiert einen Schrittfehler (Art. 25). Ein Spieler darf nach Beendigung des Dribblings oder Ballannahme nicht unerlaubt viele Schritte machen.",
    meta: {
      zielgruppen: ["schiedsrichter", "spieler", "zuschauer"],
      kategorie: "handzeichen",
      fibaArtikel: "Art. 25"
    }
  },
  {
    id: "q02",
    frage: "Was bedeutet eine senkrecht nach oben gereckte, geschlossene Faust des Schiedsrichters?",
    media: {
      type: "image",
      src: "assets/signals/stop_clock_foul.svg",
      alt: "Schiedsrichter hebt geballte Faust nach oben"
    },
    antworten: [
      "Uhr anhalten wegen Foul",
      "Wechselnder Ballbesitz (Sprungball)",
      "Technisches Foul gegen die Bank",
      "Auszeit angefordert"
    ],
    korrekteAntwort: 0,
    erklaerung: "Eine erhobene geschlossene Faust bedeutet: Stoppen der Spieluhr wegen eines persönlichen Fouls. Danach zeigt der Schiedsrichter auf den betreffenden Spieler und meldet die Spielernummer sowie Foulart am Anschreibetisch.",
    meta: {
      zielgruppen: ["schiedsrichter", "kampfgericht", "spieler", "trainer", "zuschauer"],
      kategorie: "handzeichen",
      fibaArtikel: "Art. B (Signale)"
    }
  },
  {
    id: "q03",
    frage: "Welches Vergehen wird angezeigt, wenn der Schiedsrichter den Arm mit Zeigefinger vor dem Körper hin und her winkt?",
    media: {
      type: "image",
      src: "assets/signals/backcourt.svg",
      alt: "Schiedsrichter winkt mit Arm und Zeigefinger quer vor dem Körper"
    },
    antworten: [
      "Rückspiel ins Rückfeld (Backcourt)",
      "Einwurf muss wiederholt werden",
      "Unerlaubtes Fußspiel",
      "Angriffsuhr (24s) neu starten"
    ],
    korrekteAntwort: 0,
    erklaerung: "Dieses Zeichen bedeutet Rückspiel (Art. 30). Hat die angreifende Mannschaft den Ball im Vorfeld vollständig unter Kontrolle gebracht, darf der Ball nicht mehr von einem Teammitglied ins Rückfeld zurückgespielt oder dort berührt werden.",
    meta: {
      zielgruppen: ["schiedsrichter", "spieler", "zuschauer"],
      kategorie: "handzeichen",
      fibaArtikel: "Art. 30"
    }
  },
  {
    id: "q04",
    frage: "Was signalisieren die Hände, wenn eine flache Hand horizontal über dem aufgerichteten Zeigefinger der anderen Hand liegt (T-Form)?",
    media: {
      type: "image",
      src: "assets/signals/timeout.svg",
      alt: "Schiedsrichter bildet mit den Händen ein T"
    },
    antworten: [
      "Auszeit (Timeout)",
      "Korb zählt nicht (Wurf annulliert)",
      "Doppelfoul beider Teams",
      "Ersatzspieler darf das Feld betreten"
    ],
    korrekteAntwort: 0,
    erklaerung: "Das Bilden eines 'T' mit beiden Händen signalisiert eine Auszeit (Art. 18). Der Schiedsrichter weist damit das Kampfgericht und beide Teams an, dass die 60-sekündige Auszeit beginnt.",
    meta: {
      zielgruppen: ["schiedsrichter", "kampfgericht", "trainer", "zuschauer"],
      kategorie: "handzeichen",
      fibaArtikel: "Art. 18"
    }
  },
  {
    id: "q05",
    frage: "Ein Wurf berührt den Ring und prallt ab. Das angreifende Team sichert sich den Rebound. Auf wie viele Sekunden wird die Wurfuhr gesetzt?",
    media: null,
    antworten: [
      "14 Sekunden",
      "24 Sekunden",
      "Sie läuft ohne Reset weiter",
      "10 Sekunden"
    ],
    korrekteAntwort: 0,
    erklaerung: "Nach einer Ringberührung des Balls und erneutem Ballbesitz für denselben Angreifer (Offensivrebound) wird die Wurfuhr auf 14 Sekunden zurückgesetzt (Art. 29). Bei Ballbesitz für die gegnerische Verteidigung wären es volle 24 Sekunden.",
    meta: {
      zielgruppen: ["kampfgericht", "schiedsrichter", "trainer"],
      kategorie: "regeln",
      fibaArtikel: "Art. 29"
    }
  },
  {
    id: "q06",
    frage: "Wann darf das Kampfgericht dem Schiedsrichter das Hupe-/Tisch-Signal für einen Spielerwechsel geben?",
    media: null,
    antworten: [
      "Sobald der Ball 'tot' ist und die Spieluhr steht",
      "Jederzeit während eines laufenden Angriffs",
      "Nur in den Viertelpausen",
      "Sofort nach jedem verwandelten Freiwurf, noch vor dem Einwurf"
    ],
    korrekteAntwort: 0,
    erklaerung: "Eine Wechselgelegenheit beginnt, wenn der Ball tot ist, die Spieluhr angehalten ist und die Schiedsrichter ihre Meldung am Anschreibetisch beendet haben (Art. 19).",
    meta: {
      zielgruppen: ["kampfgericht", "trainer", "schiedsrichter"],
      kategorie: "regeln",
      fibaArtikel: "Art. 19"
    }
  },
  {
    id: "q07",
    frage: "Ein Spieler schließt sein Dribbling ab, indem er den Ball mit beiden Händen festhält. Darf er danach noch einmal dribbeln?",
    media: null,
    antworten: [
      "Nein, das wäre ein Doppeldribbel (Illegal Dribble)",
      "Ja, solange er seinen Standfuß nicht versetzt",
      "Ja, wenn er danach nur mit einer Hand weiterdribbelt",
      "Ja, bis zu zwei weitere Dribblings sind erlaubt"
    ],
    korrekteAntwort: 0,
    erklaerung: "Sobald ein Spieler sein erstes Dribbling beendet hat (Ball mit beiden Händen berührt oder in der Hand zur Ruhe kommen lassen), darf er kein zweites Dribbling beginnen (Art. 24). Er muss passen oder werfen.",
    meta: {
      zielgruppen: ["spieler", "schiedsrichter", "zuschauer"],
      kategorie: "regeln",
      fibaArtikel: "Art. 24"
    }
  },
  {
    id: "q08",
    frage: "Wie viel Zeit hat ein Team nach Einwurf im eigenen Rückfeld, um den Ball ins Vorfeld zu bringen?",
    media: null,
    antworten: [
      "8 Sekunden",
      "5 Sekunden",
      "10 Sekunden",
      "14 Sekunden"
    ],
    korrekteAntwort: 0,
    erklaerung: "Das Team mit Ballkontrolle im Rückfeld muss dafür sorgen, dass der Ball innerhalb von 8 aufeinanderfolgenden Sekunden ins Vorfeld gelangt (Art. 28). Gelingt dies nicht, ist das eine 8-Sekunden-Übertretung.",
    meta: {
      zielgruppen: ["spieler", "schiedsrichter", "kampfgericht"],
      kategorie: "regeln",
      fibaArtikel: "Art. 28"
    }
  },
  {
    id: "q09",
    frage: "Wie viele Auszeiten (Timeouts) stehen einem Team in der gesamten 2. Halbzeit (3. & 4. Viertel) regulär zu?",
    media: null,
    antworten: [
      "3 Auszeiten (maximal 2 in den letzten 2 Spielminuten)",
      "2 Auszeiten beliebig verteilt",
      "4 Auszeiten",
      "Unbegrenzt viele kurze Auszeiten"
    ],
    korrekteAntwort: 0,
    erklaerung: "In der zweiten Halbzeit stehen jedem Team bis zu 3 Auszeiten zu. Taktisch wichtig für den Breitensport: In den letzten 2 Spielminuten des vierten Viertels dürfen davon maximal 2 Auszeiten genommen werden (Art. 18).",
    meta: {
      zielgruppen: ["trainer", "kampfgericht", "schiedsrichter"],
      kategorie: "regeln",
      fibaArtikel: "Art. 18"
    }
  },
  {
    id: "q10",
    frage: "Wer darf sich während des laufenden Spiels auf der Mannschaftsbank aufhalten und stehend Anweisungen geben?",
    media: null,
    antworten: [
      "Ausschließlich der Cheftrainer (Headcoach)",
      "Alle Auswechselspieler gleichzeitig",
      "Headcoach und Co-Trainer gleichzeitig",
      "Jeder Betreuer mit offiziellem Pass"
    ],
    korrekteAntwort: 0,
    erklaerung: "Nur der Cheftrainer darf während des Spiels stehen, um sein Team zu coachen (Art. 7). Co-Trainer, Auswechselspieler und Mannschaftsbegleiter müssen grundsätzlich auf der Bank sitzen.",
    meta: {
      zielgruppen: ["trainer", "schiedsrichter"],
      kategorie: "verhalten",
      fibaArtikel: "Art. 7"
    }
  },
  {
    id: "q11",
    frage: "Wann zählt ein erzielter Feldkorb offiziell als 3-Punkte-Treffer?",
    media: null,
    antworten: [
      "Wenn der Werfer beim Absprung vollständig hinter der 3er-Linie stand",
      "Nur wenn der Ball ohne Brettberührung durch das Netz fällt",
      "Wenn der Wurf von der Mittellinie ausgeführt wurde",
      "Immer dann, wenn gleichzeitig ein Foul begangen wurde"
    ],
    korrekteAntwort: 0,
    erklaerung: "Ein Feldkorb zählt 3 Punkte, wenn der Wurf aus dem Bereich außerhalb der 3-Punkte-Linie losgelassen wird. Beim Absprung darf der Spieler die Linie weder berühren noch übertreten haben (Art. 16).",
    meta: {
      zielgruppen: ["zuschauer", "spieler"],
      kategorie: "regeln",
      fibaArtikel: "Art. 16"
    }
  },
  {
    id: "q12",
    frage: "Was besagt das 'Zylinderprinzip' für einen Verteidiger in korrekter Verteidigungshaltung?",
    media: null,
    antworten: [
      "Er hat das Recht auf den Luftraum senkrecht über seiner eingenommenen Position",
      "Er darf die Hände nach vorne ausstrecken, um Kontakt aufzunehmen",
      "Er verliert seine Schutzrechte, sobald er den Boden für einen Block verlässt",
      "Er muss immer mindestens eine Armlänge Sicherheitsabstand wahren"
    ],
    korrekteAntwort: 0,
    erklaerung: "Das Zylinderprinzip (Art. 33) gewährt Spielern den gedachten Zylinder über ihrer Bodenfläche. Der Verteidiger darf senkrecht hochspringen und die Arme nach oben strecken, ohne ein Foul zu begehen, solange er nicht in den Zylinder des Angreifers eindringt.",
    meta: {
      zielgruppen: ["schiedsrichter", "spieler", "trainer"],
      kategorie: "regeln",
      fibaArtikel: "Art. 33"
    }
  }
];
