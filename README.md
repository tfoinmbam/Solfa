# Solfa

A responsive, browser-based sheet music to solfa studio built with React and Vite.

## Develop

Use Node.js 22 or newer. From the existing `/workspace/Solfa` checkout:

```sh
npm ci --cache /tmp/solfa-npm
npm run dev -- --port 3000
```

```sh
npm test
npm run build
```

## Features

- Import uncompressed MusicXML (`.musicxml`, `.xml`); extracts the first part's melodic pitches, excluding rests and chord tones.
- Experimental local image recognition for high-contrast, straight, printed treble-clef melodies. It detects staff lines and filled noteheads. It does not reliably recognize accidentals, clefs, rhythm, rests, chords, or handwriting. Always review image transcriptions with **Edit notes**. PDF and compressed `.mxl` files are not supported.
- Movable-do and fixed-do conversion with tonic selection and chromatic syllables.
- Editable pitches, score rendering, adjustable equal-note-duration audio playback, text export, and browser-local transcription history.
- No backend or credentials required. Uploaded files stay in the browser. Fonts may load from Google Fonts.

The rendered score and playback illustrate pitch sequences rather than preserving the original rhythm. MusicXML import currently accepts up to 256 pitches, octaves 2–6, with single sharps and flats.

## Validation

Pitch and conversion tests: `npm test`. Production compilation: `npm run build`.
