# Implementierungsplan: MVP FIBA Basketball Regel-Quiz (Aktualisiert)

Erstellung des interaktiven, mobilen MVPs für das FIBA Basketball Regel-Quiz mit Vanilla HTML, modernem CSS und JavaScript.

---

## 💡 Relevante Entscheidungen & Feedback-Umsetzung

### 1. Feedback-Overlay (Panel über den Antworten)
Statt nur die Buttons einzufärben, blendet sich nach der Beantwortung ein **Feedback-Panel direkt über dem Antwortbereich** ein:
- **Header:** Großes Badge „Richtig! 🎉“ (Grün) oder „Falsch! ❌“ (Rot).
- **Inhalt:** Ausführliche, verständliche Regelerklärung aus den Metadaten der Frage (z. B. *"Dieses Zeichen bedeutet Rückspiel. Hat die angreifende Mannschaft..."*).
- **Aktion:** Prominenter, daumenfreundlicher **„Weiter“**-Button, der zur nächsten Frage oder zur Auswertung führt.
- **Vorteil:** Verhindert versehentliches Weitertippen auf dem Smartphone, lenkt den Fokus voll auf den Lerneffekt und wirkt visuell aufgeräumt.

### 2. Zukunftsfähiger, flexibler Media-Renderer
Da Handzeichen und Spielszenen teils statisch (Skizze/Foto) und teils in Bewegung (GIF, Clip, YouTube) am besten wirken, bauen wir das Datenmodell und die Render-Funktion von Tag 1 an modular:

```javascript
// Unterstützte Medientypen in questions.js:
media: {
  type: "image",     // .svg, .png, .jpg, .webp
  src: "assets/signals/travelling.svg",
  alt: "Schrittfehler Handzeichen"
}

// Später nahtlos möglich:
media: {
  type: "gif",       // Animierte Handbewegung
  src: "assets/signals/backcourt.gif"
}

media: {
  type: "video",     // Kurzer MP4/WebM Loop (lautlos, auto-loop wie ein GIF)
  src: "assets/clips/charging_foul.mp4"
}

media: {
  type: "youtube",   // Eingebettetes YouTube-Video (Start/End-Sekunde definierbar)
  videoId: "dQw4w9WgXcQ",
  start: 12,
  end: 18
}

media: null          // Fallback: Eleganter Basketball-Grafik-Platzhalter
```

Eine zentrale Funktion `renderMedia(media)` erzeugt automatisch das passende HTML-Element (`<img>`, `<video autoplay loop muted playsinline>`, `<iframe>` oder Platzhalter).

---

## 🛠️ Dateien & Komponenten im MVP

### 1. Struktur & Layout
#### [NEW] [index.html](file:///e:/Projects/ref_test/index.html)
- Shell mit Viewport, Stylesheet & Scripts.
- **Drei Screens:**
  1. `#screen-role`: Titel, Untertitel, 5 Rollen-Karten (Schiedsrichter, Kampfgericht, Spieler, Trainer, Zuschauer).
  2. `#screen-quiz`: 
     - Top-Bar: Fortschrittsanzeige ("Frage 2 von 5") + Fortschrittsbalken.
     - Media-Container: Dynamischer Renderbereich für Grafiken/Videos.
     - Frage-Text.
     - Antwort-Container mit 4 Buttons.
     - **Feedback-Overlay** (absolut über dem Antwortbereich positioniert mit weicher Slide-Up-Animation).
  3. `#screen-result`: Score-Anzeige, Motivations-Spruch, "Nochmal"- & "Teilen"-Buttons.

### 2. Styling & Mobile-UX
#### [NEW] [style.css](file:///e:/Projects/ref_test/style.css)
- Mobile-First Styling mit Basketball-Akzenten (Orange `#f97316`, Dunkelgrau/Navy, Weiß).
- Großzügige Touch-Flächen für Einhandbedienung.
- CSS-Overlay-Animation für das Feedback-Panel (sanftes Einblenden von unten).
- Responsive Video/Media-Container (16:9 bzw. 4:3 Aspect-Ratio für saubere Einbettung).

### 3. Fragenpool mit ausführlichen Erklärungen
#### [NEW] [questions.js](file:///e:/Projects/ref_test/questions.js)
- Erste Auswahl an 8–10 praxisnahen Fragen mit Erklärtexten für jede Rolle:
  1. *Handzeichen Schrittfehler* (Rollen: Alle)
  2. *Handzeichen Rückspiel* (Rollen: Schiedsrichter, Spieler, Zuschauer)
  3. *Handzeichen Stoppen der Uhr für Foul* (Rollen: Alle)
  4. *Kampfgericht: 24s-Uhr bei Ringberührung ohne Ballbesitz* (Rollen: Schiedsrichter, Kampfgericht, Trainer)
  5. *Kampfgericht: Wann darf eine Auszeit gewährt werden?* (Rollen: Kampfgericht, Trainer, Schiedsrichter)
  6. *Spieler: Doppeldribbel Definition* (Rollen: Spieler, Schiedsrichter, Zuschauer)
  7. *Trainer: Wer darf auf der Mannschaftsbank stehen?* (Rollen: Trainer, Schiedsrichter)
  8. *Zuschauer: Warum gibt es nach manchen Fouls Freiwürfe und nach anderen Einwurf?* (Rollen: Zuschauer)

### 4. Anwendungslogik & Sharing
#### [NEW] [app.js](file:///e:/Projects/ref_test/app.js)
- **`renderMedia(media)`**: Polymorpher Media-Renderer (SVG, PNG, GIF, Video, YouTube, Platzhalter).
- **Mulberry32 PRNG:** Determinierter Zufall über `?seed=...&role=...` in der URL (ermöglicht Freunden exakt dieselben Fragen).
- **Quiz-Controller:** Steuert State, Fortschritt, Antwortprüfung und Einblenden des Overlays.
- **Wordle-Style Share:**
  - Emojis (`🟩`, `🟥`) für WhatsApp/Social Media.
  - Link mit Seed und ausgewählter Rolle.

### 5. Assets
#### [NEW] [assets/signals/travelling.svg](file:///e:/Projects/ref_test/assets/signals/travelling.svg)
#### [NEW] [assets/signals/backcourt.svg](file:///e:/Projects/ref_test/assets/signals/backcourt.svg)
#### [NEW] [assets/signals/stop_clock_foul.svg](file:///e:/Projects/ref_test/assets/signals/stop_clock_foul.svg)

---

## 🧪 Verifikationsplan

1. **Overlay-Test:** Klick auf richtige/falsche Antwort $\rightarrow$ Prüfen, ob das Panel über den Antworten erscheint, der Text gut lesbar ist und der "Weiter"-Button zur nächsten Frage schaltet.
2. **Media-Flexibilität:** Testen von statischem SVG, Bild und Platzhalter im Media-Container.
3. **Rollen-Filterung:** Auswählen jeder der 5 Rollen und Überprüfen, ob passende Fragen gezogen werden.
4. **Seed-URL & Challenge:** Kopieren des Share-Links, Öffnen in neuem Tab $\rightarrow$ dieselben Fragen erscheinen.
5. **Mobile Ansicht:** Testen auf schmalen Viewports (375px–430px).
