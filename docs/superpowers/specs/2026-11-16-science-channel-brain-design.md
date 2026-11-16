# Science Channel Brain Design

## Intent

Build a private GitHub repository as the single source of truth for a short-form science channel. AI should use it for consistent brand, scripting, fact-checking, and production guidance instead of rebuilding context each time.

## Goals

- Create an easy-to-navigate core reference set.
- Document known channel decisions without inventing missing brand details.
- Mark undecided details as `TBD` for later owner input.

## Non-goals

- Store final video files; use external storage and link them from repository records later.
- Publish to GitHub or configure repository privacy as part of this scaffold.
- Define unprovided brand identity, voice, or production details.

## Constraints

- Target platforms: TikTok, YouTube Shorts, Instagram Reels.
- Target format: 25–60 seconds, vertical 9:16, one core idea per video.
- Hook: 0–2 seconds; explanation: 6–30 seconds; payoff/ending: 30–60 seconds.
- Content pillars: Earth Glitch, Human Madness, Sci-Fi Parody.
- Scientific accuracy is foundational; distinguish fact, theory, hypothesis, speculation, and fiction.
- Humor can be absurd, while explanations stay accurate.
- Each video has one core question and one payoff.
- Do not position the channel as pure comedy or dry education.

## Approaches

1. **Core scaffold (selected):** README plus five prioritized references and a fact-check checklist. Fast to use and makes known context available without fabricating missing details.
2. **Full structure:** create every proposed folder and file now. More complete but creates empty or assumption-heavy documents.
3. **README and blank templates:** smallest initial footprint, but gives AI too little operational context.

## Structure

- `README.md`: project purpose, platforms, format, pillars, core rules, and AI reading order.
- `01-brand/BRAND-IDENTITY.md`: positioning, UVP, personality; unknowns marked `TBD`.
- `02-content-system/CONTENT-PILLARS.md`: three pillars and brief known descriptions; details marked `TBD`.
- `02-content-system/SCRIPT-TEMPLATE.md`: reusable short-form script structure reflecting known timing and one-idea rule.
- `02-content-system/FACT-CHECK-CHECKLIST.md`: checks for evidence, claim strength, and separation of fact from speculation or fiction.
- `03-production/ELEVENLABS-VOICE-GUIDE.md`: voice-generation guidance; unknown voice, pacing, and prosody details marked `TBD`.

## Builder decisions

- Use Markdown and plain directories; add no dependencies or automation.
- Include `FACT-CHECK-CHECKLIST.md` because the README directs AI to use it.
- Use `TBD` for missing content, never present guesses as approved brand rules.
