# Video Code Guide (HyperFrames) — AI

Panduan agar AI menghasilkan kode video konsisten untuk channel ini (HyperFrames: HTML + CSS + GSAP; hasil akhirnya di-preview di HyperFrames Studio). Baca bersama: `01-brand/BRAND-IDENTITY.md`, `02-content-system/CONTENT-PILLARS.md`, `03-production/VIDEO-STYLE-GUIDE.md`, `03-production/ELEVENLABS-VOICE-GUIDE.md`, `content/current/script.md`.

## 1. Input & alur
- Sumber: `content/current/script.md` (struktur hook/penjelasan/payoff, timing, source notes), `content/current/voiceover.md`, durasi `video/voiceover.mp3` (jadikan audio sumber timing). Catat aset/status di `content/current/meta.md`.
- Output kode: `video/index.html` + `video/compositions/s1-*.html` (6 scene/beat) → 1 film utuh yang bisa di-preview di HyperFrames Studio. Render MP4 **bukan** bagian alur default.
- Default: 1080×1920, 9:16 (`data-resolution="portrait"`), durasi = durasi VO (format 70–90 dtk; jika VO beda, sesuaikan eksplisit). Satu ide + satu payoff.
- Visual + caption on-screen. Tanpa VO/musik/SFX di episode kecuali diminta (track narasi ditambah terpisah).

## 2. Struktur proyek
- `index.html` (root): muat GSAP, deklarasi variabel root, mount scene, timeline root.
- `compositions/<scene>.html`: tiap scene dalam `<template>` (style + markup + script).
- `assets/` untuk media/font lokal; path `assets/...` (tanpa `/` depan), termasuk dari sub-composition.

```html
<!-- index.html (inti) -->
<html lang="id" data-resolution="portrait">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="68.6" data-width="1080" data-height="1920">
      <div id="s1-hook" class="clip" data-composition-id="s1-hook"
           data-composition-src="compositions/s1-hook.html"
           data-start="0" data-duration="9" data-track-index="1" data-width="1080" data-height="1920"></div>
      <!-- scene lain berurutan; total = durasi root -->
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      window.__timelines["main"] = gsap.timeline({ paused: true });
    </script>
  </body>
</html>
```

```html
<!-- compositions/s1-hook.html -->
<template>
  <style>#root{position:absolute; inset:0; overflow:hidden;}</style>
  <div id="root" data-composition-id="s1-hook" data-width="1080" data-height="1920">
    <div id="s1-title" class="clip" data-start="0" data-duration="9">...</div>
  </div>
  <script>
    const tl = gsap.timeline({ paused: true });
    tl.fromTo("#s1-title", {opacity:1, y:20, filter:"blur(8px)"}, {opacity:1, y:0, filter:"blur(0px)", duration:0.4, ease:"power4.out"}, 0);
    window.__timelines = window.__timelines || {};
    window.__timelines["s1-hook"] = tl;
  </script>
</template>
```

## 3. Kontrak HyperFrames (wajib)
- Setiap elemen ber-timing: `class="clip"` + `data-start` + `data-duration` (detik, lokal file). Tampil `[start, start+duration)`; jangan land end-state tepat di ujung durasi. `data-track-index` hanya lane Studio.
- 1 timeline paused per komposisi, didaftarkan **setelah** tween: `window.__timelines["<data-composition-id>"] = tl;` (id host = id root scene = key). Timeline child di dalam root jangan `paused`. Jangan `tl.play()`.
- Gunakan `fromTo` (bukan `from`) di scene. Set state awal di tween, bukan CSS.
- Jangan tween `display`/`visibility`/`autoAlpha` pada `.clip` (animasi child). Jangan tween `left/top/width/height`. Jangan CSS `transform` pada elemen yang dianimasi transform GSAP (set via `fromTo`). Hindari animasi `letterSpacing`.
- Deterministik: tanpa `Date.now()`, `Math.random()` tanpa seed, network fetch, timer, `repeat:-1`. Ukur layout sekali sebelum tween (bukan di `onUpdate`).
- Durasi root = panjang video (overrun terpotong). Naikkan root `data-duration` agar menutup clip terakhir.
- Media: `<video>` bersuara `data-has-audio="true"` (tanpa `muted`); footage/silent `muted playsinline`. `<audio>` butuh `id`, tanpa `crossorigin`. Waktu pada `<video>`, bukan wrapper.
- **Audio/SFX clip:** taruh file di `video/assets/audio/sfx/` (lisensi dicatat di `LICENSE.txt`/manifest). Tambah `<audio class="clip" id="..." src="assets/audio/sfx/..." data-start="..." data-duration="..." data-track-index="..." data-volume="..." data-fade-in="..." data-fade-out="...">` di `index.html`. Wajib: `id`, `class="clip"`, `data-start`, `data-duration`, `data-track-index`, `data-volume` (0.1–3.98). Opsional: `data-fade-in`, `data-fade-out`, `data-media-start`. SFX overlap = lane beda. VO prioritas; bed/drone ducking; hit/jumpscare singkat, hening 200–400ms sebelum hit efektif. Jangan nutup narasi.
- Font: bundled (Inter, Montserrat, Outfit, Poppins, Nunito, Oswald, dll.) resolve by name; font lain butuh `@font-face` ke `assets/fonts/`.
- Frame 0 tidak kosong (thumbnail kuat). Beri napas tenang 0.5–1 dtk di jeda (akhir hook, mechanism→effects, sebelum closing); baris akhir tahan ≥2 dtk.

## 4. Style SINI AKU CERITAIN (tetap, semua video)

Sumber kebenaran: `video/assets/brand/tokens.css` (token) dan `video/assets/brand/brand.js`
(utilities). Jangan menulis ulang nilai di bawah ini ke dalam scene; baca `var(--npl-*)`.
Penjelasan sistem lengkap: `01-brand/BRAND-SYSTEM.md`.

**Palet (token)**
- Inti: `--npl-black #08080a`, `--npl-coal #0f0f12`, `--npl-graphite #17171c`,
  `--npl-gray-700 #2a2a31` … `--npl-gray-300 #b4b2ad`, `--npl-gray-200 #d6d3cc`,
  `--npl-ink #f5f3ef`.
- Aksen semantik: `--npl-signal #7ed4ff` (data/atmosfer), `--npl-alert #ff5a2f`
  (bahaya/penekanan keras), `--npl-highlight #ffc94a` (reveal/payoff/kata kunci caption).
- Per niche aktif dua token: `--npl-komedi-a/b`, `--npl-horror-a/b`. Token legacy `--npl-earth-a/b`, `--npl-human-a/b`, `--npl-scifi-a/b` tetap untuk arsip.
- Ground/suhu visual mengikuti niche; grammar tipe/caption/motion tetap satu identitas.

**Tipografi** — `Inter` (display + body), `EB Garamond` italic (aksen, jarang)
- Hero `--npl-hero-*`: 132px / 900 / 0.90 / -0.045em (rentang 110–150px).
- Section `--npl-section-*`: 84px / 800 / 0.95 / -0.03em (72–96px).
- Highlight `--npl-highlight-*`: 64px / 800 / 1.00 (56–72px).
- Caption `--npl-caption-*`: 44px / 600 / 1.12 (42–48px).
- Label `--npl-label-*`: 28px / 600 / 1.10 / +0.04em, uppercase (24–30px).
- Tidak < 24px. `text-wrap: balance`. Bobot aman: 400/500/600/700/900.
- **Deviasi:** Instrument Serif tidak dibundel → EB Garamond dipakai. Cara tukar ada di
  komentar `tokens.css`.

**Layout & caption (9:16)**
- 1 fokus/beat, margin `--npl-margin` 90px. Safe area: `--npl-safe-top` 170px,
  `--npl-safe-bottom` 600px, plus sisi kanan UI.
- **Hierarki teks:** caption (sinkron audio notes/VO) = teks utama & **terbesar**. Teks scene lain
  hanya info/label pendukung (konteks/data/nama), lebih kecil & ringkas, ditempatkan di atas zona
  caption agar **tidak tumpang tindih**.
- **Nol duplikasi caption — gate wajib sebelum `NPL.captions`.** Untuk setiap grup di
  `captions.html`: hitung jendela absolutnya (`data-cap-start`) dan `data-cap-start + data-cap-duration`, buka
  markup scene yang hidup pada jendela itu, kumpulkan teks yang benar-benar dirender (bukan
  komentar/`alt`/kredit), lalu buang grup yang teksnya sama atau nyaris sama. Jangan
  memendekkan atau memparafrase grup supaya lolos — buang. Scene boleh mencetak frasa kunci
  baris VO dan caption diam untuk jendela itu.
  Contoh gagal: `s6-payoff` `#lead` "Yang mencekam bukan kabutnya, tapi batas yang jelas."
  vs `cap-15` kalimat identik → `cap-15` harus tidak ada.
  Lint **tidak** menangkap ini (`content_overlap` hanya mengecek kotak bertabrakan), jadi
  pemeriksaan ini manual, per grup.
- Caption: **sinkron per frasa/key note dengan audio (VO)**, bukan per kata dan tidak diam statis;
  maksimal 2 baris, 2–7 kata per grup, satu grup tampil pada satu waktu. Tipografi jelas & menonjol
  (ukuran dominan, kontras kuat, mudah dibaca), entrance fade ringan, tanpa box berat. Pakai
  `NPL.captions(tl, scope)`.

**Ilustrasi, peta, ikon (simpel, opsional)**
- Utamakan layout teks/tipografi bersih; gunakan ilustrasi/peta/SVG hanya bila perlu & relevan. Hindari visual/animasi kompleks atau berat.
- Jika dipakai: bentuk vektor sederhana & jelas (bukan blok kasar), palet terbatas, label terbaca. Tanpa foto orang/manusia nyata, tanpa visual uncanny/generik, tanpa emoji acak.
- Dilarang sebagai ikon brand: tanda tanya, lightbulb, rocket, atom, brain, mata, hantu,
  tengkorak, jam pasir, teleskop, kaca pembesar, pin lokasi.
- Symbol brand = **kutip pembuka ganda** (`logo-symbol.svg`). Spesifikasi konstruksi, ukuran,
  dan penempatan: `BRAND-SYSTEM.md` §4a. Jangan menggambar ulang symbol per komposisi —
  pakai `<img src="assets/brand/logo-symbol.svg">`.

**Motion (GSAP, deterministik)**
- Default: layout statis + fade opacity sederhana (`fromTo` opacity 0→1, ~0.3–0.6s, `power2.out`) bila perlu. Hard cut/fade utama.
- Deviasi horror (user-approved, 2026-05): boleh slow zoom-in + camera drift deterministik pada wrapper gambar (`NPL.horrorCamera`, contoh scale `1->1.08` 6s, `power1.inOut`/linear). Boleh jumpscare/klimaks terkontrol (`NPL.jumpscare`: hit singkat, flash kecil, punch scale ringan) — tanpa gore/kekerasan eksplisit-grafis, tanpa glorifikasi, tidak berlebihan.
- Tetap hindari: slide liar, parallax berat, bounce/elastic, mikro-gerak kontinu tak bermakna, partikel/SVG rumit, loop hiasan. Jangan tween transform CSS pada elemen yang dianimasi GSAP.
- Durasi & timing tetap mengikuti VO/beat map; akhir ≥2 dtk bila relevan.

**Signature outro (wajib, konsisten)**
- File: `video/compositions/brand/signature-outro.html`, durasi 2 dtk, di-mount sekali di root.
- Teks tetap: **`SINI AKU`** / **`CERITAIN.`** (narasi: **“Sini aku ceritain.”**) — jangan diparafrase.
- Urutan: baris 1 kinetic type → baris 2 scale overshoot → symbol → rule gradien → audio
  sting (saat aset tersedia) → selesai bersih.
- Posisi: **akhir saja**. Hook pembuka tetap bersih; outro tidak boleh memakan hook.
- Ini **bagian narasi**: penutup diucapkan di VO sebagai kalimat penutup (lihat
  `ELEVENLABS-VOICE-GUIDE.md`), dan tampil sebagai lockup di layar pada waktu yang sama.
- Bukan layar subscribe generik: tanpa tombol, ikon sosial, atau CTA.

**Legacy episode 1816**
- `video/compositions/s1-hook.html` … `s6-closing.html` dibangun sebelum token system ada
  dan memakai palet scene-local (`#07111F`, `#FFC857`, `#FF8A3D`, `#4CC9F0`, …). Episode ini
  **tidak ditulis ulang**; brand layer ditambahkan di atasnya. Episode baru wajib memakai
  `--npl-*`.

## 5. 3D internal (opsional)
- **Pseudo-3D (CSS 3D):** parent `perspective` + `transform-style: preserve-3d`; animasi GSAP `fromTo` (`rotationX/Y`, `z/translateZ`, `scale`) — set awal di tween, tanpa CSS `transform` konflik. Cocok layer/parallax/kartu/peta sederhana.
- **3D nyata (Three.js/WebGL `<canvas>`):** render dari waktu, deterministik.
  - Gambar di `renderAt(t)` (semua gerak = fungsi `t`); `window.addEventListener("hf-seek", e => renderAt(e.detail.time)); renderAt(0);`
  - Tanpa `requestAnimationFrame`/timer clock. Tanpa `Date.now()`/`Math.random()` tanpa seed. Simulasi/partikel precompute → lookup by `t`.
  - Setup berat: `window.__hf.buildReady = window.__hf.buildReady || {}; window.__hf.buildReady["key"]= (async()=>{ await renderer.compileAsync?.(scene,camera); renderAt(0); })();` Kerja async di seek: `e.detail.waitUntil(promise)` (panggil sinkron).
  - Lib lokal di `assets/` (tanpa network fetch). Tetap daftar timeline paused di `window.__timelines`. Starter: `npx hyperframes init <dir> --example path-traced-3d`.
  - Kualitas: lighting key+rim+environment, material (roughness/metalness), contact shadow, kamera ease, 1 hero, depth/fog, tekstur/siluet vektor.
- **Eksternal:** 3D kompleks/realistis → Blender/C4D/Spline/Unreal render footage, lalu masukkan sebagai media.

## 6. Perintah
Jalankan dari root (butuh Node 22+, FFmpeg, pnpm):
- `pnpm video:dev` preview Studio (verifikasi utama), `pnpm video:lint`, `pnpm video:check`
- `pnpm video:snapshot` cek frame PNG
- `npx hyperframes docs <topic>` referensi (`data-attributes`, `gsap`, `compositions`, `rendering`, `troubleshooting`, `examples`)
- `pnpm video:render` / `pnpm video:render:draft` **hanya bila diminta** — lambat, bukan gate kelulusan.

## 7. QA sebelum serah (preview, bukan render)
- `video:check` 0 error. Review warning: safe zone, kontras, occlusion/overflow, `text_below_floor`, dead stretch. Snapshot momen kunci & baca hasilnya. Preview di Studio untuk cek gerak & timing.
- Cek: frame 0 terisi + **hook screen ±3 dtk terbaca dan menyambung ke scene 1**, caption terbaca & aman, **tidak ada caption kembar** (per grup, dibandingkan dengan tipe scene pada jendela yang sama), visual relevan & jelas, timing pas VO. Jika ada klaim/cerita: tidak lebih pasti dari bukti, label & asal/sumber jelas (lihat `FACT-CHECK-CHECKLIST.md`). Horror: berbasis real story (bukan ngawang), tanpa glorifikasi/eksploitasi, hindari gore/kekerasan eksplisit-grafis.

## 8. Rule guide (wajib, urutan kerja)
1. **Sumber & kebenaran** — Baca `content/current/script.md` (hook/penjelasan/payoff, timing, source notes), `content/current/voiceover.md`, durasi `video/voiceover.mp3` = sumber timing. Patuhi `01-brand/BRAND-IDENTITY.md`, `02-content-system/CONTENT-PILLARS.md`, `03-production/VIDEO-STYLE-GUIDE.md`, `02-content-system/FACT-CHECK-CHECKLIST.md`. Jangan ubah brand voice; jaga akurasi & label klaim/cerita bila relevan. **Horror (wajib):** berbasis real story (kesaksian/narasumber/cerita orang, fakta sejarah, atau mitos/legenda daerah) — bukan ngawang; cantumkan asal/sumber; tanpa glorifikasi/eksploitasi, hindari visual/deskripsi gore atau kekerasan eksplisit-grafis.
2. **Beat map + hook screen** — Pecah scene mengikuti timing VO (1 fokus/ide per beat). Tandai jeda napas 0.5–1 dtk (akhir hook, mechanism→effects, sebelum closing) dan hold baris akhir ≥2 dtk. **Frame 0 = thumbnail kuat, tidak pernah kosong.**
   - **Opening bait screen wajib, ±3 dtk pertama** (0.0–3.0): frame yang berfungsi sebagai
     thumbnail bergerak, bukan label objek. Wajib ada **bait** (klaim/pertanyaan) + **jangkar
     konteks** (tanggal/tempat/angka); foto objek jadi latar, bukan isi. Tipe bait = terbesar di
     film (≥56px), frame 0 langsung terisi foto/gradien kuat. Bukan hitam, bukan logo saja, bukan
     "ini pesawat X", bukan langsung kronologi. Bait wajib dijawab video (bukan clickbait) dan
     untuk horror memakai petunjuk nyata, bukan kata "mengerikan"; mitos tidak ditulis sebagai fakta.
   - **Pemisahan:** hook screen jadi scene sendiri (`s0-hook`/`s1-hook`) dengan `data-duration` ≈ 3.0 di `index.html`; scene berikutnya mulai tepat di akhirnya, VO tidak dipotong (bila VO kata pertama jatuh setelah 3 dtk, hook memakai `data-hold`; bila VO sudah bicara di detik 0, hook tetap jalan 3 dtk penuh dan scene 1 dimulai pada 3.0).
   - **Handover:** hard cut atau fade ≤0.4 dtk dari hook ke scene 1. Hook tidak boleh menduplikasi caption maupun tipe scene 1.
   - **Override durasi:** hook boleh <3 dtk hanya bila VO memaksa (baris pertama sudah menjelaskan hook); minimal 1.5 dtk agar teks terbaca.
3. **Kunci look (tetap)** — Terapkan style **SINI AKU CERITAIN** (§4): token `--npl-*`, Inter + EB Garamond, caption per frasa sebagai teks utama/terbesar, layout aman 9:16 tanpa tumpang tindih. Teks scene hanya info pendukung kecil di atas zona caption. Peta = **siluet SVG `<path>` vektor halus** (garis pantai dikenali, bukan ellipse/rect blok); ikon/diagram flat konsisten & berlabel.
4. **Kode deterministik** — Struktur & kontrak §2–§3: `index.html` + scene `<template>`, elemen ber-timing `class="clip"` + `data-start/duration`, `fromTo`, timeline paused ter-register setelah tween, id host/root/key konsisten, root `data-duration` menutup semua.
5. **Animasi minimal** — Default statis + fade opacity sederhana; hindari slide/pan/zoom/blur/scale, kamera, mikro-gerak kontinu, partikel, dan transisi berat. 3D hanya bila benar-benar perlu & deterministik (§5). Jaga ringan.
6. **Caption sinkron VO** — Turunkan caption dari audio key notes/narasi (`content/current/script.md` + `video/voiceover.mp3`), bagi per frasa (2–7 kata, ≤2 baris), beri `data-cap-start`/`data-cap-duration` selaras jeda ucapan (tidak statis), dan panggil `NPL.captions(tl, scope)`. Buang grup yang menduplikasi tipe scene (lihat §8 butir 3 & `BRAND-SYSTEM.md` §5.4).
7. **QA gate** — `pnpm video:lint` & `pnpm video:check` **0 error**. `pnpm video:snapshot` momen kunci lalu baca hasilnya. Cek gerak & timing di Studio (`pnpm video:dev`). Render MP4 tidak diminta kecuali user minta eksplisit. Perbaiki P0/P1: safe zone, kontras, occlusion/overflow, teks <28px, dead stretch, peta/visual tak jelas, timing/caption vs VO. Klaim visual tidak lebih pasti dari bukti.

## 9. Rujukan skill & guide
- **HyperFrames skill/CLI**: `/hyperframes` (kontrak & loop kerja), `/hyperframes-cli` (scaffold/check/snapshot/render/preview), `/hyperframes-registry` (blok siap pakai). Referensi: `npx hyperframes docs <topic>` — `data-attributes`, `gsap`, `compositions`, `rendering`, `examples`, `troubleshooting`. Untuk video: `references/format.md`, `motion.md`, `review.md`, `story.md`, `look.md`, `types/vertical.md`, `runtimes.md`, `types/3d.md`, `path-tracing.md`.
- **Taste/desain**: `frontend-design` (komposisi, tipografi, warna, anti generik/AI-slop), `impeccable` (bila tersedia). Tetap patuhi identitas channel (SINI AKU CERITAIN) di atas referensi umum.
