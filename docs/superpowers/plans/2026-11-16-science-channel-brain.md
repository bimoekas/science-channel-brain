# Science Channel Brain Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a core Markdown reference set for consistent AI-assisted production of the Science Channel Brain's short-form science content.

**Architecture:** Use a root README as the entry point and five focused Markdown references grouped by brand, content system, and production. Record known decisions from the spec; mark every unprovided detail `TBD`.

**Tech Stack:** Markdown, Git directory structure; no dependencies.

**Spec:** `docs/superpowers/specs/2026-11-16-science-channel-brain-design.md`

## Global Constraints

- Target platforms: TikTok, YouTube Shorts, Instagram Reels.
- Target format: 25–60 seconds, vertical 9:16, one core idea per video.
- Hook: 0–2 seconds; explanation: 6–30 seconds; payoff/ending: 30–60 seconds.
- Content pillars: Earth Glitch, Human Madness, Sci-Fi Parody.
- Scientific accuracy is foundational; distinguish fact, theory, hypothesis, speculation, and fiction.
- Humor can be absurd, while explanations stay accurate.
- Each video has one core question and one payoff.
- Do not position the channel as pure comedy or dry education.
- Mark unprovided brand and production decisions `TBD`; do not invent approved rules.
- Do not store final video files or publish/configure GitHub in this plan.

## Review Focus

- Missing channel decisions must remain clearly `TBD`, not appear as approved facts; inspect every starter file for unsupported specifics.
- README pointers must resolve to existing files; verify each linked path.
- Script timing ranges overlap and do not fully cover 25–60 seconds; preserve supplied timing and mark unallocated timing `TBD`, rather than silently changing ranges.
- Scientific claims must distinguish evidence strength and fact/theory/hypothesis/speculation/fiction; verify checklist contains an explicit check for these labels.
- Voice specifics are not supplied; verify the voice guide marks voice, pace, and prosody `TBD`.

---

### Task 1: Create the README entry point

**Files:**
- Create: `README.md`

**Interfaces:**
- Consumes: `docs/superpowers/specs/2026-11-16-science-channel-brain-design.md`
- Produces: repository map and AI reading order linking the five reference files.

- [ ] **Step 1: Write `README.md`**

Include purpose, platforms, format, pillars, core rules, AI reading order, and a short repository map. Link only the five planned references and label each link by its role.

- [ ] **Step 2: Check README against the spec**

Verify all supplied platform, duration, orientation, pillar, timing, and scientific accuracy details match the spec verbatim in meaning. Confirm all five referenced paths are listed for creation in Tasks 2–5.

**Completion:** README contains the entry-point context and has no unsupported brand decisions.

### Task 2: Add brand and pillar references

**Files:**
- Create: `01-brand/BRAND-IDENTITY.md`
- Create: `02-content-system/CONTENT-PILLARS.md`

**Interfaces:**
- Consumes: spec constraints and README conventions from Task 1.
- Produces: brand identity and content pillar reference files.

- [ ] **Step 1: Write `01-brand/BRAND-IDENTITY.md`**

Record channel positioning as a short-form science channel for TikTok, YouTube Shorts, and Instagram Reels. Mark exact audience, positioning, UVP, and personality `TBD`.

- [ ] **Step 2: Write `02-content-system/CONTENT-PILLARS.md`**

List Earth Glitch, Human Madness, and Sci-Fi Parody. Mark pillar definitions, topic boundaries, and examples `TBD`.

- [ ] **Step 3: Check these files for invented decisions**

Confirm that exact audience, UVP, personality, and pillar meanings are not filled with guesses.

**Completion:** Both files capture supplied facts and mark every unprovided brand detail `TBD`.

### Task 3: Add script and fact-check references

**Files:**
- Create: `02-content-system/SCRIPT-TEMPLATE.md`
- Create: `02-content-system/FACT-CHECK-CHECKLIST.md`

**Interfaces:**
- Consumes: spec constraints and README conventions from Task 1.
- Produces: reusable script outline and checklist for claims.

- [ ] **Step 1: Write `02-content-system/SCRIPT-TEMPLATE.md`**

Provide fields for core question, hook (0–2 seconds), explanation (6–30 seconds), payoff/ending (30–60 seconds), and source notes. Keep unspecified beat allocations and exact word counts `TBD`; preserve the overall 25–60-second target and one-idea rule.

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

Mark selected voice, language/accent, stability/style settings, pace, intonation, pronunciation rules, and prohibited delivery traits `TBD`. State that generated narration must preserve scientific meaning and fit the 25–60-second format.

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
