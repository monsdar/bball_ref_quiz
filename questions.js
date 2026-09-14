/**
 * Basketball Regeltest - Fragenpool (Offizielle DBB / FIBA Regeln)
 * 
 * Jede Frage enthält:
 * - id: Eindeutige Kennung
 * - frage: Fragetext
 * - media: Medienelement (type: 'image' | 'video' | 'youtube' | 'gif' | null)
 * - antworten: Array mit genau 4 Optionen
 * - korrekteAntwort: 0-basierter Index der richtigen Option
 * - erklaerung: Detaillierte Regelerklärung mit FIBA/DBB-Bezug
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
      artikel: "Art. 25"
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
    erklaerung: "Eine erhobene geschlossene Faust bedeutet: Stoppen der Spieluhr wegen eines persönlichen Fouls (Art. B). Danach zeigt der Schiedsrichter auf den betreffenden Spieler und meldet die Spielernummer sowie Foulart am Anschreibetisch.",
    meta: {
      zielgruppen: ["schiedsrichter", "kampfgericht", "spieler", "trainer", "zuschauer"],
      kategorie: "handzeichen",
      artikel: "Art. B (Signale)"
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
      artikel: "Art. 30"
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
    erklaerung: "Das Bilden eines 'T' mit einer flachen Hand und einem Zeigefinger signalisiert eine Auszeit (Art. 18). Der Schiedsrichter weist damit das Kampfgericht und beide Teams an, dass die 60-sekündige Auszeit beginnt.",
    meta: {
      zielgruppen: ["schiedsrichter", "kampfgericht", "trainer", "zuschauer"],
      kategorie: "handzeichen",
      artikel: "Art. 18"
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
      artikel: "Art. 29"
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
      artikel: "Art. 19"
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
      artikel: "Art. 24"
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
      artikel: "Art. 28"
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
    erklaerung: "In der zweiten Halbzeit stehen jedem Team bis zu 3 Auszeiten zu. Taktisch wichtig: In den letzten 2 Spielminuten des vierten Viertels dürfen davon maximal 2 Auszeiten genommen werden (Art. 18).",
    meta: {
      zielgruppen: ["trainer", "kampfgericht", "schiedsrichter"],
      kategorie: "regeln",
      artikel: "Art. 18"
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
      artikel: "Art. 7"
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
      zielgruppen: ["zuschauer", "spieler", "schiedsrichter"],
      kategorie: "regeln",
      artikel: "Art. 16"
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
      artikel: "Art. 33"
    }
  },
  {
    id: "q13",
    frage: "Was zeigt der Schiedsrichter an, wenn er beide Arme über den Kopf hebt und mit einer Hand das andere Handgelenk festhält?",
    media: {
      type: "image",
      src: "assets/signals/unsportsmanlike_foul.svg",
      alt: "Schiedsrichter hält Handgelenk über dem Kopf fest"
    },
    antworten: [
      "Unsportliches Foul (Unsportsmanlike Foul)",
      "Disqualifizierendes Foul",
      "Uhr anhalten wegen Verletzung",
      "Halte-Foul (Holding)"
    ],
    korrekteAntwort: 0,
    erklaerung: "Das Festhalten des Handgelenks über dem Kopf signalisiert ein Unsportliches Foul (Art. 37). Es wird verhängt bei übermäßig hartem Kontakt, taktischen Fouls ohne Ballbezug oder dem Stoppen eines Fastbreaks als hinterster Verteidiger. Strafe: Freiwürfe plus Ballbesitz.",
    meta: {
      zielgruppen: ["schiedsrichter", "spieler", "trainer", "zuschauer"],
      kategorie: "handzeichen",
      artikel: "Art. 37"
    }
  },
  {
    id: "q14",
    frage: "Was signalisiert der Schiedsrichter, wenn er mit den flachen Handflächen beider Hände vor der Brust ein deutliches 'T' formt?",
    media: {
      type: "image",
      src: "assets/signals/technical_foul.svg",
      alt: "Schiedsrichter formt ein T mit beiden flachen Händen"
    },
    antworten: [
      "Technisches Foul (Verhalten/Disziplin)",
      "Auszeit für das Heimteam",
      "Doppelfoul beider Teams",
      "Korb zählt nicht"
    ],
    korrekteAntwort: 0,
    erklaerung: "Ein mit beiden Handflächen gebildetes 'T' zeigt ein Technisches Foul an (Art. 36). Im Unterschied zur Auszeit (wo nur Zeigefinger und Handfläche genutzt werden) berühren sich hier zwei offene Handflächen. Strafe: 1 Freiwurf und Ballbesitz an der Unterbrechungsstelle.",
    meta: {
      zielgruppen: ["schiedsrichter", "trainer", "kampfgericht", "spieler", "zuschauer"],
      kategorie: "handzeichen",
      artikel: "Art. 36"
    }
  },
  {
    id: "q15",
    frage: "Welches Foul signalisiert der Schiedsrichter, wenn er mit der geballten Faust in die geöffnete Handfläche der anderen Hand schlägt?",
    media: {
      type: "image",
      src: "assets/signals/charging_foul.svg",
      alt: "Schiedsrichter schlägt mit Faust in die flache Handfläche"
    },
    antworten: [
      "Stürmerfoul / Offensivfoul (Charging)",
      "Blockier-Foul des Verteidigers",
      "Unsportliches Foul",
      "Treffer mit Bonus-Freiwurf (And-One)"
    ],
    korrekteAntwort: 0,
    erklaerung: "Faust gegen flache Hand bedeutet Stürmerfoul bzw. Laden mit dem Ball (Art. 33). Der Ballbesitz wechselt zur verteidigenden Mannschaft; für ein Offensivfoul werden niemals Freiwürfe vergeben.",
    meta: {
      zielgruppen: ["schiedsrichter", "spieler", "trainer", "zuschauer"],
      kategorie: "handzeichen",
      artikel: "Art. 33"
    }
  },
  {
    id: "q16",
    frage: "Was zeigt der Schiedsrichter mit beiden nach oben ausgestreckten Daumen ('Thumbs Up') an?",
    media: {
      type: "image",
      src: "assets/signals/jump_ball.svg",
      alt: "Schiedsrichter streckt beide Daumen nach oben"
    },
    antworten: [
      "Gehaltener Ball / Wechselnder Ballbesitz (Sprungball)",
      "Treffer ist gültig und zählt",
      "Auszeit genehmigt",
      "Freiwurfschütze bereitmachen"
    ],
    korrekteAntwort: 0,
    erklaerung: "Zwei nach oben zeigende Daumen signalisieren einen gehaltenen Ball bzw. eine Sprungballsituation (Art. 12). Da es im modernen Basketball nur zu Spielbeginn einen Hochball gibt, entscheidet danach der Einwurfpfeil am Anschreibetisch über den Ballbesitz.",
    meta: {
      zielgruppen: ["schiedsrichter", "kampfgericht", "spieler", "zuschauer"],
      kategorie: "handzeichen",
      artikel: "Art. 12"
    }
  },
  {
    id: "q17",
    frage: "Was bedeutet die Schiedsrichter-Geste, bei der beide Hände mit den Handflächen nach unten abwechselnd auf und ab bewegt werden?",
    media: {
      type: "image",
      src: "assets/signals/illegal_dribble.svg",
      alt: "Schiedsrichter bewegt Hände abwechselnd auf und ab"
    },
    antworten: [
      "Unzulässiges Dribbling / Doppeldribbel",
      "Schrittfehler",
      "Spieluhr starten",
      "Aufstützen auf dem Gegenspieler"
    ],
    korrekteAntwort: 0,
    erklaerung: "Die abwechselnde Auf- und Abbewegung beider flacher Hände signalisiert ein unzulässiges Dribbling bzw. Doppeldribbel (Art. 24). Folge: Ballverlust und Einwurf für den Gegner an der Seitenlinie.",
    meta: {
      zielgruppen: ["schiedsrichter", "spieler", "zuschauer"],
      kategorie: "handzeichen",
      artikel: "Art. 24"
    }
  },
  {
    id: "q18",
    frage: "Ein Spieler begeht sein 5. persönliches Foul im Spiel. Wie muss das Kampfgericht vorgehen und wie viel Zeit hat das Team für den Spielerwechsel?",
    media: null,
    antworten: [
      "Kampfgericht zeigt die 5er-Foultafel; der Wechsel muss innerhalb von 30 Sekunden erfolgen",
      "Der Spieler darf bis zum nächsten Viertel weiterspielen",
      "Das Team hat 60 Sekunden Zeit und muss zwingend eine Auszeit nehmen",
      "Der Schiedsrichter schließt das Spiel ab; das Team spielt zu viert weiter"
    ],
    korrekteAntwort: 0,
    erklaerung: "Nach dem 5. Foul (Art. 40) zeigt das Kampfgericht die rote bzw. 5er-Tafel an. Der Spieler muss sofort auf der Bank Platz nehmen. Dem Trainer stehen maximal 30 Sekunden für die Einwechslung eines neuen Spielers zur Verfügung (Art. 19).",
    meta: {
      zielgruppen: ["kampfgericht", "trainer", "schiedsrichter"],
      kategorie: "regeln",
      artikel: "Art. 40"
    }
  },
  {
    id: "q19",
    frage: "Das Kampfgericht betätigt versehentlich das Hupensignal, während sich ein Spieler im Wurfversuch befindet und der Ball durch den Ring fällt. Zählt der Korb?",
    media: null,
    antworten: [
      "Ja, der Treffer zählt regulär",
      "Nein, die Hupe macht den Ball sofort tot; es gibt Sprungball",
      "Nein, der Wurf muss wiederholt werden",
      "Nur wenn der Schiedsrichter die Hupe vor dem Wurf gehört hat"
    ],
    korrekteAntwort: 0,
    erklaerung: "Ein versehentliches oder irrtümliches Signal des Kampfgerichts macht den Ball nicht tot, wenn sich ein Ball im Wurfversuch zum Korb befindet (Art. 10). Geht der Ball hinein, zählt der Treffer vollwertig.",
    meta: {
      zielgruppen: ["kampfgericht", "schiedsrichter", "trainer"],
      kategorie: "regeln",
      artikel: "Art. 10"
    }
  },
  {
    id: "q20",
    frage: "Ab welchem Mannschaftsfoul eines Teams in einem Spielviertel werden bei jedem weiteren persönlichen Abwehrfoul 2 Freiwürfe verhängt (Teamfoul-Bonus)?",
    media: null,
    antworten: [
      "Ab dem 5. Mannschaftsfoul (nach 4 Mannschaftsfouls)",
      "Ab dem 4. Mannschaftsfoul",
      "Ab dem 6. Mannschaftsfoul",
      "Erst ab dem 7. Mannschaftsfoul"
    ],
    korrekteAntwort: 0,
    erklaerung: "Befindet sich eine Mannschaft in der Mannschaftsfoul-Strafe (nach dem 4. Foul im Viertel, Art. 41), wird jedes nachfolgende persönliche Abwehrfoul an einem Spieler ohne Wurfaktion mit 2 Freiwürfen bestraft.",
    meta: {
      zielgruppen: ["kampfgericht", "trainer", "spieler", "schiedsrichter"],
      kategorie: "regeln",
      artikel: "Art. 41"
    }
  },
  {
    id: "q21",
    frage: "Wer darf sich nach offiziellen DBB-Regeln nicht länger als 3 aufeinanderfolgende Sekunden in der gegnerischen Zone (Restricted Area) aufhalten?",
    media: null,
    antworten: [
      "Nur Spieler des angreifenden Teams bei Ballkontrolle im Vorfeld",
      "Sowohl Angreifer als auch Verteidiger gleichermaßen",
      "Nur der Spieler mit direktem Ballbesitz",
      "Ausschließlich der Center-Spieler"
    ],
    korrekteAntwort: 0,
    erklaerung: "Die 3-Sekunden-Regel (Art. 26) gilt im DBB/FIBA-Bereich ausschließlich für Angreifer im Vorfeld bei laufender Spieluhr. Verteidiger dürfen sich im europäischen Basketball beliebig lange in der Zone aufhalten.",
    meta: {
      zielgruppen: ["spieler", "schiedsrichter", "trainer", "zuschauer"],
      kategorie: "regeln",
      artikel: "Art. 26"
    }
  },
  {
    id: "q22",
    frage: "Ein Angreifer hält den Ball im Feld und wird in unter 1 Meter Abstand aktiv verteidigt. Wie viel Zeit hat er zum Passen, Werfen oder Dribbeln?",
    media: null,
    antworten: [
      "5 Sekunden",
      "3 Sekunden",
      "8 Sekunden",
      "10 Sekunden"
    ],
    korrekteAntwort: 0,
    erklaerung: "Ein eng bewachter bzw. bedrängter Spieler muss den Ball innerhalb von 5 Sekunden passen, werfen oder mit einem Dribbling beginnen (Art. 27). Andernfalls erfolgt ein Pfiff wegen 5-Sekunden-Übertretung und Ballverlust.",
    meta: {
      zielgruppen: ["spieler", "schiedsrichter", "trainer"],
      kategorie: "regeln",
      artikel: "Art. 27"
    }
  },
  {
    id: "q23",
    frage: "Wann liegt eine regelwidrige Korbbeeinflussung (Goaltending) durch einen Verteidiger vor?",
    media: null,
    antworten: [
      "Wenn er den Ball berührt, während dieser im Sinkflug und vollständig über Ringniveau ist",
      "Sobald er den Ball oberhalb der Freiwurflinie blockt",
      "Wenn er den Ball berührt, nachdem dieser das Brett berührt hat und noch steigt",
      "Immer dann, wenn der Verteidiger höher springt als der Werfer"
    ],
    korrekteAntwort: 0,
    erklaerung: "Goaltending (Art. 31) liegt vor, wenn ein Spieler einen Korbwurf berührt, während der Ball sich im Sinkflug auf den Korb zu befindet und vollständig über Ringniveau ist. Der Korb wird gewertet, als wäre er gefallen.",
    meta: {
      zielgruppen: ["schiedsrichter", "spieler", "zuschauer"],
      kategorie: "regeln",
      artikel: "Art. 31"
    }
  },
  {
    id: "q24",
    frage: "Wie und wo muss ein Trainer eine Auszeit nach offiziellen DBB-Regeln beantragen?",
    media: null,
    antworten: [
      "Persönlich am Anschreibetisch (Kampfgericht)",
      "Durch lautes Rufen zum Schiedsrichter auf dem Feld",
      "Durch Handzeichen des Spielführers auf dem Parkett",
      "Per Knopfdruck an einer digitalen Trainer-Buzzer-Box"
    ],
    korrekteAntwort: 0,
    erklaerung: "Der Trainer (oder Co-Trainer) muss die Auszeit persönlich am Anschreibetisch beim Kampfgericht anmelden (Art. 18). Rufe aufs Feld an die Schiedsrichter sind im DBB-Bereich unzulässig und werden nicht gewertet.",
    meta: {
      zielgruppen: ["trainer", "kampfgericht", "schiedsrichter"],
      kategorie: "regeln",
      artikel: "Art. 18"
    }
  },
  {
    id: "q25",
    frage: "Ein Angreifer passt den Ball, und dieser prallt an das Bein eines Verteidigers ab. Wann liegt ein regelwidriges Fußspiel vor?",
    media: null,
    antworten: [
      "Nur wenn der Verteidiger den Ball absichtlich getreten oder aktiv mit dem Bein geblockt hat",
      "Immer, sobald der Ball den Fuß oder das Knie berührt",
      "Nur wenn der Ball danach ins Aus rollt",
      "Nur wenn der Verteidiger im Sprung war"
    ],
    korrekteAntwort: 0,
    erklaerung: "Ein Fußspiel (Art. 13) ist nur dann eine Regelverletzung, wenn der Ball absichtlich mit Fuß, Bein oder Knie geschlagen oder getreten wird. Ein rein zufälliges, unabsichtliches Anprallen ist regelkonform und das Spiel läuft weiter.",
    meta: {
      zielgruppen: ["spieler", "schiedsrichter", "zuschauer"],
      kategorie: "regeln",
      artikel: "Art. 13"
    }
  },
  {
    id: "q26",
    frage: "Wann wird ein Trainer wegen technischer Fouls (T-Fouls) automatisch disqualifiziert und muss die Halle verlassen?",
    media: null,
    antworten: [
      "Nach 2 persönlichen T-Fouls ('C') oder 3 T-Fouls insgesamt gegen seine Bank ('B')",
      "Bereits nach dem ersten technischen Foul",
      "Erst nach 5 technischen Fouls wie ein Feldspieler",
      "Nur wenn er das Spielfeld unerlaubt betritt"
    ],
    korrekteAntwort: 0,
    erklaerung: "Ein Trainer wird disqualifiziert (Art. 36), wenn er 2 technische Fouls für eigenes unsportliches Verhalten erhalten hat ('C') oder insgesamt 3 technische Fouls (Kombination aus Bankstrafen 'B' und 'C') gegen sein Team verhängt wurden.",
    meta: {
      zielgruppen: ["trainer", "kampfgericht", "schiedsrichter"],
      kategorie: "verhalten",
      artikel: "Art. 36"
    }
  },
  {
    id: "q27",
    frage: "Nachdem der Schiedsrichter dem Spieler den Ball für einen Einwurf übergeben hat: Wie viele Sekunden hat er für den Pass ins Spielfeld?",
    media: null,
    antworten: [
      "5 Sekunden",
      "8 Sekunden",
      "10 Sekunden",
      "14 Sekunden"
    ],
    korrekteAntwort: 0,
    erklaerung: "Für die Ausführung eines Einwurfs stehen dem Spieler ab Ballübergabe durch den Schiedsrichter maximal 5 Sekunden zur Verfügung (Art. 17). Dauert der Einwurf länger, wechselt der Ballbesitz zum Gegner.",
    meta: {
      zielgruppen: ["spieler", "schiedsrichter", "kampfgericht", "zuschauer"],
      kategorie: "regeln",
      artikel: "Art. 17"
    }
  },
  {
    id: "q28",
    frage: "Wie viele Spieler beider Teams dürfen sich maximal an den markierten Plätzen entlang der Freiwurfzone aufstellen?",
    media: null,
    antworten: [
      "Maximal 5 Spieler: 3 Verteidiger und 2 Angreifer",
      "Alle 10 Spieler auf dem Feld",
      "Genau 4 Spieler: 2 Verteidiger und 2 Angreifer",
      "Maximal 6 Spieler: 3 Verteidiger und 3 Angreifer"
    ],
    korrekteAntwort: 0,
    erklaerung: "An den Freiwurflinien-Plätzen dürfen maximal 5 Spieler stehen (Art. 43): Die beiden ersten Plätze gehören Pflichtverteidigern, die nächsten beiden Angreifern, und der optionale dritte Platz der Verteidigung. Alle anderen müssen hinter der 3er-Linie warten.",
    meta: {
      zielgruppen: ["spieler", "schiedsrichter", "trainer", "kampfgericht"],
      kategorie: "regeln",
      artikel: "Art. 43"
    }
  }
];
