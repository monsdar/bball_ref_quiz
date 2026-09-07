# FIBA Basketball Regel-Quiz (Breitensport) 🏀

Eine mobile-optimierte, statische Web-App für GitHub Pages, die Spielern, Trainern, Kampfgericht, Schiedsrichtern und Zuschauern im Amateur- und Breitensport hilft, Basketball- und Schiedsrichterregeln spielerisch zu lernen und zu testen.

---

## 🎯 Konzept & Nutzerfluss (User Journey)

Die App verzichtet bewusst auf komplizierte Prüfungsmodi und konzentriert sich auf ein schnelles, motivierendes Quiz-Erlebnis:

```
[Startseite] 
   └── Rollenabfrage: "Wer bist du?"
         │
         ▼
[Quiz-Durchlauf]
   └── 10 Fragen (MVP: 5 Fragen) abgestimmt auf die Rolle
   └── Bild / Illustration + 4 Multiple-Choice-Optionen
         │
         ▼
[Ergebnis-Screen]
   └── Score: "Super! Du hast 9 von 10 Fragen korrekt beantwortet!"
   └── 🔄 "Nochmal"-Button (führt zurück zum Start für eine neue Runde)
   └── 📤 "Teilen"-Button (Wordle-Style Share-Text inkl. Challenge-Link)
```

---

## 👥 Rollenbasierte Fragen (Zielgruppen)

Vor dem Start wählt der Nutzer seine Rolle. Die Fragen werden zufällig aus dem Pool passend zur gewählten Rolle gezogen:

| Rolle | Schwerpunkt & Beispielthemen |
| :--- | :--- |
| **Schiedsrichter** | Schöpft aus dem **gesamten Fragenpool**: Handzeichen, knifflige Regelfragen, Spielleitung, Sonderfälle. |
| **Kampfgericht** | Fokus auf das Geschehen am Anschreibetisch: Zahlen-Handzeichen, 24-Sekunden-Uhr (Reset-Bedingungen), Auszeiten, Wechselphasen. |
| **Spieler** | Relevante In-Game-Regeln: Doppeldribbel, Schrittfehler, Rückspiel, Zylinderprinzip, persönliche Fouls. |
| **Trainer** | Taktische & organisatorische Regeln: Wechselzeitpunkte, Timeouts, Verhalten der Mannschaftsbank, technische Fouls. |
| **Zuschauer** | Grundlagen & Spielverständnis: Grundregeln interaktiv und verständlich erklärt (z. B. "Warum pfeift der Schiedsrichter jetzt?"). |

> **Fokus Breitensport:** Der Schwerpunkt liegt auf dem Spielbetrieb im Amateurbereich (z. B. Kreis-/Bezirks-/Landesligen). Profi-Themen wie Instant Replay System (IRS) oder Medienauszeiten spielen keine Rolle.

---

## 📦 Datenmodell einer Frage

Die Fragen werden modular strukturiert (z. B. als JSON), sodass sie leicht erweiterbar und filterbar sind:

```json
{
  "id": "q001",
  "frage": "Was bedeutet dieses Handzeichen?",
  "bild": "assets/signals/travelling.svg", 
  "antworten": [
    "Schrittfehler",
    "Doppeldribbel",
    "Rückspiel",
    "Ball im Aus"
  ],
  "korrekteAntwort": 0,
  "erklaerung": "Das Rollen der Fäuste umeinander signalisiert einen Schrittfehler (Art. 25).",
  "meta": {
    "zielgruppen": ["schiedsrichter", "spieler", "zuschauer"],
    "kategorie": "handzeichen",
    "altersklassen": ["allgemein", "u14", "u16", "senioren"],
    "schwierigkeit": "einfach"
  }
}
```

### Metadaten & Filteroptionen
- **`zielgruppen`:** Für welche Rollen ist die Frage freigeschaltet (Mehrfachauswahl).
- **`altersklassen`:** Vorbereitung für spätere Regelfilter (z. B. DBB Mini-Regeln für U10/U12 mit vereinfachten Schrittregeln oder niedrigerer Korbhöhe, Damen/Herren).
- **`bild`:** Pfad zu einer Illustration / Grafik, einem Platzhalter oder perspektivisch kurzen Video-Szenen.

---

## 🏆 Ergebnis & Teilen-Funktion

- **Score-Anzeige:** Klare, motivierende Auswertung (z. B. `9 / 10 richtig`).
- **Wordle-Style Share:**
  - Erzeugt einen formatierten Text für WhatsApp, Signal oder Social Media:
    ```
    🏀 Basketball Ref-Quiz (Rolle: Spieler)
    🟩🟩🟩🟥🟩🟩🟩🟩🟩🟩 (9/10)
    Kannst du meinen Score schlagen?
    👉 https://<user>.github.io/ref_test/?seed=a8f2c
    ```
- **Challenge-Modus via URL-Seed:**
  - Über einen Query-Parameter (z. B. `?seed=...`) kann der Zufallsgenerator denselben Satz an Fragen für Freunde laden, damit ein fairer Vergleich möglich ist.

---

## 📱 Design & User Experience

- **Mobile-First:** Optimiert für Touch-Bedienung auf dem Smartphone (große Klickflächen für Daumen-Bedienung).
- **Leichtgewichtig & Schnell:** Minimale Ladezeiten, funktioniert auch bei mäßigem Hallen-WLAN.
- **Kein Login / Barrierefrei:** Sofort spielbar ohne Registrierung.

---

## 🎯 MVP-Ziel (Version 0.1)

1. Rollen-Auswahl ("Wer bist du?").
2. Genau **5 Fragen** passend zur ausgewählten Rolle (mit Platzhalter- oder Signal-Bildern).
3. Auswertungs-Screen mit Score.
4. "Nochmal"-Button (Neustart) und "Teilen"-Button (mit Zwischenablage-Kopie).
