# Science Channel Brain Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a core Markdown reference set for consistent AI-assisted production of the SINI AKU CERITAIN short-form content.

**Architecture:** Use a root README as the entry point and focused Markdown references grouped by brand, content system, and production. Record known decisions from the spec; mark unprovided/unverified details `TBD`.

**Tech Stack:** Markdown, Git directory structure; no dependencies.

**Spec:** `docs/_archive/2026-11-16-foundation-plan/specs/2026-11-16-science-channel-brain-design.md`

## Global Constraints

- Target platforms: TikTok, YouTube Shorts, Instagram Reels.
- Target format: 70–90 detik, vertikal 9:16, satu ide inti, satu pertanyaan inti, satu payoff.
- Audiens: 18+ (dewasa).
- Hook: 0–2 detik; penjelasan: 3–50 detik; payoff/ending: 50–90 detik.
- Konsep/penutup: *Sini aku ceritain.* — narasi/lockup "Sini aku ceritain." / `SINI AKU` `CERITAIN.`
- Content niche: **Komedi** (relatable harian) dan **Horror** (misteri, berbasis real story — kesaksian/narasumber/cerita orang, fakta sejarah, atau mitos/legenda daerah; bukan ngawang).
- Akurasi/kejujuran konteks penting: bedakan fakta terverifikasi, teori, hipotesis, spekulasi, kesaksian/cerita beredar, mitos/legenda, dan fiksi. Horror wajib cantumkan basis/asal/sumber dan label klaim jelas.
- Komedi boleh absurd-relatable. Horror tegang/atmosferik, tanpa glorifikasi/eksploitasi, hindari gore/kekerasan eksplisit-grafis; hormati korban/keluarga/masyarakat/kepercayaan.
- Mark unprovided/unverified decisions `TBD`; do not invent approved rules.
- Do not store final video files. Jangan update `content/archive/` atau aset/produksi legacy `video/` kecuali diminta terpisah.

## Review Focus

- Missing/unverified decisions must remain clearly `TBD`, not appear as approved facts.
- README pointers must resolve to existing files; verify each linked path.
- Script timing must align to 70–90 detik target (hook 0–2, penjelasan 3–50, payoff/ending 50–90) and mark unallocated/uncertain timing `TBD`.
- Claims/cerita must distinguish evidence/label strength (fakta terverifikasi, teori, hipotesis, spekulasi, kesaksian/cerita beredar, mitos/legenda, fiksi); verify checklist contains explicit checks.
- Voice specifics: keep voice identity/settings as documented; mark uncertain delivery/measurement details `TBD` where applicable.

---

### Task 1: Create the README entry point

**Files:**
- Create: `README.md`

**Interfaces:**
- Consumes: `docs/_archive/2026-11-16-foundation-plan/specs/2026-11-16-science-channel-brain-design.md`
- Produces: repository map and AI reading order linking the five reference files.

- [ ] **Step 1: Write `README.md`**

Include purpose, platforms, format, pillars, core rules, AI reading order, and a short repository map. Link only the five planned references and label each link by its role.

- [ ] **Step 2: Check README against the spec**

Verify platform, duration, orientation, niche, audiens, timing, penutup, dan aturan konteks/akurasi match the spec in meaning. Confirm referenced paths exist.

**Completion:** README contains the entry-point context and has no unsupported brand decisions.

### Task 2: Add brand and pillar references

**Files:**
- Create: `01-brand/BRAND-IDENTITY.md`
- Create: `02-content-system/CONTENT-PILLARS.md`

**Interfaces:**
- Consumes: spec constraints and README conventions from Task 1.
- Produces: brand identity and content niche reference files.

- [ ] **Step 1: Write `01-brand/BRAND-IDENTITY.md`**

Record channel positioning as a short-form science channel for TikTok, YouTube Shorts, and Instagram Reels. Mark exact audience, positioning, UVP, and personality `TBD`.

- [ ] **Step 2: Write `02-content-system/CONTENT-PILLARS.md`**

List niche **Komedi** (relatable harian) dan **Horror** (misteri, berbasis real story). Mark definitions, boundaries, and examples `TBD` where unprovided.

- [ ] **Step 3: Check these files for invented decisions**

Confirm that unverified audience/UVP/personality/niche details are not filled with guesses.

**Completion:** Both files capture supplied facts and mark every unprovided brand detail `TBD`.

### Task 3: Add script and fact-check references

**Files:**
- Create: `02-content-system/SCRIPT-TEMPLATE.md`
- Create: `02-content-system/FACT-CHECK-CHECKLIST.md`

**Interfaces:**
- Consumes: spec constraints and README conventions from Task 1.
- Produces: reusable script outline and checklist for claims.

- [ ] **Step 1: Write `02-content-system/SCRIPT-TEMPLATE.md`**

Provide fields for core question, hook (0–2 detik), explanation (3–50 detik), payoff/ending (50–90 detik), penutup (fixed "Sini aku ceritain."), and source notes. Keep unspecified beat allocations and exact word counts `TBD`; preserve the overall 70–90-detik target and one-idea rule.

- [ ] **Step 2: Write `02-content-system/FACT-CHECK-CHECKLIST.md`**

Add checks to identify each factual claim, record a reliable source, confirm claim strength matches evidence, distinguish fact/theory/hypothesis/speculation/fiction, and ensure humor does not make the explanation inaccurate. Leave source hierarchy or citation format `TBD`.

- [ ] **Step 3: Check timing and claim labels**

Confirm script timing matches the supplied ranges and the checklist explicitly tests every required claim category.

**Completion:** Both documents are usable templates without unsupported timing or research rules.

### Task 4: Add the ElevenLabs voice guide

**Files:**
- Create: `03-production/ELEVENLABS-VOICE-GUIDE.md`

**Interfaces:**
- Consumes: spec constraints and README conventions from Task 1.
- Produces: voice-generation reference.

- [ ] **Step 1: Write the voice guide**

Document selected voice/model (as specified), language/accent, settings, pace, intonation, pronunciation rules, prohibited delivery traits, and fixed penutup. State narration must preserve meaning/accuracy and fit the 70–90-detik format; mark uncertain details `TBD`.

- [ ] **Step 2: Check for invented audio settings**

Confirm no voice identity, numerical setting, or prosody instruction is stated as approved without user-provided evidence.

**Completion:** The file gives AI a reliable boundary and names all missing voice decisions.

### Task 5: Verify the reference set

**Files:**
- Verify: `README.md`
- Verify: `01-brand/BRAND-IDENTITY.md`
- Verify: `02-content-system/CONTENT-PILLARS.md`
- Verify: `02-content-system/SCRIPT-TEMPLATE.md`
- Verify: `02-content-system/FACT-CHECK-CHECKLIST.md`
- Verify: `03-production/ELEVENLABS-VOICE-GUIDE.md`

- [ ] **Step 1: Check files and links**

Run: `find . -maxdepth 3 -type f -print | sort`
Expected: README, five references, and this spec/plan are present; README links resolve.

- [ ] **Step 2: Check consistency and placeholders**

Review all six user-facing Markdown files against the global constraints. Confirm every unspecified decision is marked `TBD` and there are no contradictory platform, timing, pillar, or accuracy rules.

**Completion:** All six files exist, README links resolve, and content passes the stated consistency checks.
