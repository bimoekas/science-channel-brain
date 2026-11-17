# Video Code Guide (HyperFrames) — AI

Panduan agar AI menghasilkan kode video konsisten untuk channel ini (HyperFrames: HTML + CSS + GSAP, render ke MP4). Baca bersama: `01-brand/BRAND-IDENTITY.md`, `02-content-system/CONTENT-PILLARS.md`, `03-production/VIDEO-STYLE-GUIDE.md`, `03-production/ELEVENLABS-VOICE-GUIDE.md`, `content/current/script.md`.

## 1. Input & alur
- Sumber: `content/current/script.md` (struktur hook/penjelasan/payoff, timing, source notes), `content/current/voiceover.md`, durasi `video/voiceover.mp3` (jadikan audio sumber timing). Catat aset/status di `content/current/meta.md`.
- Output kode: `video/index.html` + `video/compositions/s1-*.html` (6 scene/beat) → 1 video render utuh.
- Default: 1080×1920, 9:16 (`data-resolution="portrait"`), durasi = durasi VO (format 25–60 dtk; jika VO beda, sesuaikan eksplisit). Satu ide + satu payoff.
- Visual + caption on-screen. Tanpa VO/musik/SFX di render kecuali diminta (track narasi ditambah terpisah). Jika render silent, warning `audio_file_without_element`/`film_silent` wajar.

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
- Font: bundled (Inter, Montserrat, Outfit, Poppins, Nunito, Oswald, dll.) resolve by name; font lain butuh `@font-face` ke `assets/fonts/`.
- Frame 0 tidak kosong (thumbnail kuat). Beri napas tenang 0.5–1 dtk di jeda (akhir hook, mechanism→effects, sebelum closing); baris akhir tahan ≥2 dtk.

## 4. Style NGGAK PENTING LAB (tetap, semua video)

Sumber kebenaran: `video/assets/brand/tokens.css` (token) dan `video/assets/brand/brand.js`
(utilities). Jangan menulis ulang nilai di bawah ini ke dalam scene; baca `var(--npl-*)`.
Penjelasan sistem lengkap: `01-brand/BRAND-SYSTEM.md`.

**Palet (token)**
- Inti: `--npl-black #08080a`, `--npl-coal #0f0f12`, `--npl-graphite #17171c`,
  `--npl-gray-700 #2a2a31` … `--npl-gray-300 #b4b2ad`, `--npl-gray-200 #d6d3cc`,
  `--npl-ink #f5f3ef`.
- Aksen semantik: `--npl-signal #7ed4ff` (data/atmosfer), `--npl-alert #ff5a2f`
  (bahaya/penekanan keras), `--npl-highlight #ffc94a` (reveal/payoff/kata kunci caption).
- Per pillar hanya dua token: `--npl-earth-a/b`, `--npl-human-a/b`, `--npl-scifi-a/b`.
- Ground tidak harus gelap: Human Madness memakai `--npl-gray-200` + tipe `--npl-black`.

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
- Caption: **sinkron per frasa, bukan per kata**; maksimal 2 baris, 2–7 kata per grup,
  satu grup tampil pada satu waktu, entrance 120–180ms. Plate `rgba(8,8,10,0.72)` dengan
  border kiri 3px — **tanpa radius rounded**. Jangan menduplikasi teks yang sudah tercetak
  di scene. Pakai `NPL.captions(tl, scope)`.

**Ilustrasi, peta, ikon (anti “kotak-kotak”)**
- Peta: **siluet SVG path vektor halus** (outline/pantai bezier/path dikenali), bukan ellipse/rect blok. Simplified tapi Eropa/Indonesia/Sumbawa jelas; fill terbatas, stroke tipis, detail minim. Marker dot + ring pulse.
- Diagram flat berlabel, panah/ray jelas, palet terbatas. Ikon SVG/glyph flat konsisten (hindari emoji acak). Tanpa foto orang/manusia nyata, tanpa visual uncanny/generik.
- Dilarang sebagai ikon brand: lightbulb, rocket, atom, brain.

**Motion (GSAP, deterministik)**
- Masuk: `NPL.reveal` (blur → 0, y 16–24 → 0, 0.35–0.55s `power3.out`); objek `NPL.enter`
  (`back.out(1.4)`); keluar `NPL.exit` (`power2.in`). Kamera `power2.inOut`.
- Mikro-gerak kontinu cegah frame mati. Hold tenang 0.5–1s di jeda; akhir ≥2s.
- **REALITY SKIP** (`NPL.realitySkip`) hanya untuk distorsi realitas, bukan setiap cut.
  Hierarki transisi: hard cut (utama) → match cut → organic mask → whip pan → glitch flash.
- Easing terlarang untuk dipakai bebas: bounce berlebih, `elastic` selain momen komedi tunggal.

**Signature outro (wajib, konsisten)**
- File: `video/compositions/brand/signature-outro.html`, durasi 2 dtk, di-mount sekali di root.
- Teks tetap: **`PENTING GA PENTING,`** / **`JAWABNYA SERIUS.`** — jangan diparafrase.
- Urutan: baris 1 kinetic type → baris 2 scale overshoot → symbol → rule gradien → audio
  sting (saat aset tersedia) → selesai bersih.
- Posisi: **akhir saja**. Hook pembuka tetap bersih; outro tidak boleh memakan hook.
- Ini **bagian narasi**: tagline diucapkan di VO sebagai kalimat penutup (lihat
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
- `pnpm video:dev` preview, `pnpm video:lint`, `pnpm video:check`
- `pnpm video:snapshot` cek frame, `pnpm video:render:draft` / `pnpm video:render` (→ `renders/`, silent)
- `npx hyperframes docs <topic>` referensi (`data-attributes`, `gsap`, `compositions`, `rendering`, `troubleshooting`, `examples`)

## 7. QA sebelum render final
- `video:check` 0 error. Review warning: safe zone, kontras, occlusion/overflow, `text_below_floor`, dead stretch. Snapshot momen kunci & baca hasilnya.
- Cek: frame 0 terisi, caption terbaca & aman, peta SVG bentuk jelas (bukan kotak), timing pas VO, klaim visual tidak lebih pasti dari bukti (lihat `FACT-CHECK-CHECKLIST.md`).

## 8. Rule guide (wajib, urutan kerja)
1. **Sumber & kebenaran** — Baca `content/current/script.md` (hook/penjelasan/payoff, timing, source notes), `content/current/voiceover.md`, durasi `video/voiceover.mp3` = sumber timing. Patuhi `01-brand/BRAND-IDENTITY.md`, `02-content-system/CONTENT-PILLARS.md`, `03-production/VIDEO-STYLE-GUIDE.md`, `02-content-system/FACT-CHECK-CHECKLIST.md`. Jangan ubah brand voice/fakta tanpa persetujuan.
2. **Beat map** — Pecah scene mengikuti timing VO (1 fokus/ide per beat). Tandai jeda napas 0.5–1 dtk (akhir hook, mechanism→effects, sebelum closing) dan hold baris akhir ≥2 dtk. **Frame 0 = thumbnail kuat, tidak pernah kosong.**
3. **Kunci look (tetap)** — Terapkan style **NGGAK PENTING LAB** (§4): token `--npl-*`, Inter + EB Garamond, caption per frasa, layout aman 9:16. Peta = **siluet SVG `<path>` vektor halus** (garis pantai dikenali, bukan ellipse/rect blok); ikon/diagram flat konsisten & berlabel.
4. **Kode deterministik** — Struktur & kontrak §2–§3: `index.html` + scene `<template>`, elemen ber-timing `class="clip"` + `data-start/duration`, `fromTo`, timeline paused ter-register setelah tween, id host/root/key konsisten, root `data-duration` menutup semua.
5. **Animasi bermakna** — Entrance blur+fade+slide ease-out, kamera/pan-zoom halus, mikro-gerak kontinu (anti frame mati), reveal/playful ringan; keluar lebih cepat dari masuk. 3D hanya bila perlu & deterministik (§5).
6. **QA gate** — `pnpm video:lint` & `pnpm video:check` **0 error**. `pnpm video:snapshot` momen kunci lalu baca hasilnya. Perbaiki P0/P1: safe zone, kontras, occlusion/overflow, teks <28px, dead stretch, peta/visual tak jelas, timing VO. Klaim visual tidak lebih pasti dari bukti.

## 9. Koridor generate (batas wajib & larangan)
Generator AI **harus tetap di dalam koridor**; keluar koridor = hasil ditolak/perlu revisi.

| Aspek | WAJIB (di dalam koridor) | DILARANG (keluar koridor) |
|---|---|---|
| Struktur & timing | 1 ide + 1 payoff; durasi = VO; frame 0 terisi; jeda napas 0.5–1s (akhir hook, mechanism→effects, sebelum closing); baris akhir ≥2s; teks tampil cukup lama dibaca | Frame 0 kosong/hitam/logo saja; timing meleset dari VO; beat tanpa napas; scene diam >3s tanpa gerak/`data-hold` sengaja |
| Visual & caption | Style NGGAK PENTING LAB (§4) konsisten; caption per frasa kontras di safe area (jauhi ~170px atas & ~600px bawah, sisi kanan UI); 1 fokus/beat; peta = siluet SVG `<path>` vektor halus (Eropa/Indonesia/Sumbawa jelas, fill/stroke tipis); diagram panah/ray & ikon SVG flat berlabel, palet terbatas | Peta/shape kotak-kotak (ellipse/rect kasar/generik) atau tak jelas; foto orang/manusia nyata; emoji acak; teks <28px, ramai, kontras rendah, terpotong/safe-zone; template, AI-slop, visual berantakan/uncanny |
| Motion | `fromTo` + ease sesuai peran; mikro-gerak kontinu; masuk halus, keluar lebih cepat; reveal/playful ringan; kamera/pan-zoom `power2.inOut` | Semua elemen gerak seragam (fade+slide-up sama); loop hiasan berlebihan tanpa fungsi; gerak acak; animasi `left/top/width/height` atau `letterSpacing` |
| Teknis HyperFrames | `class="clip"` + `data-start` + `data-duration`; 1 timeline paused/komposisi ter-register **setelah** tween; state awal di tween; root `data-duration` menutup semua; media/font/path sesuai §3; id host = root scene = key | `from`; tween `display/visibility/autoAlpha` pada `.clip`; CSS `transform` konflik; timeline nested paused/`tl.play()`; `requestAnimationFrame`/timer sebagai clock; `Date.now()`, `Math.random()` tanpa seed, network fetch, `repeat:-1` |
| 3D (opsional) | CSS 3D via `fromTo` (perspective/preserve-3d) **atau** Three.js/WebGL via `hf-seek` deterministik (`renderAt(t)`), `buildReady`, lib lokal; semua gerak = fungsi `t` (precompute/seed bila perlu) | `requestAnimationFrame` loop sebagai clock; animasi non-deterministik; simulasi tanpa precompute/seed; memuat lib via network fetch |
| Sains & brand | Akurat & terverifikasi; bedakan fakta/teori/hipotesis/fiksi; visual tidak lebih pasti dari bukti; aman semua umur; tone channel (penasaran, dramatis ringan, jenaka secukupnya) | Klaim visual/narasi melampaui bukti; sensasionalisasi/menakutkan/mengecoh; melenceng dari brand/pilar; konten tidak aman untuk semua umur |

## 10. Rujukan skill & guide
- **HyperFrames skill/CLI**: `/hyperframes` (kontrak & loop kerja), `/hyperframes-cli` (scaffold/check/snapshot/render/preview), `/hyperframes-registry` (blok siap pakai). Referensi: `npx hyperframes docs <topic>` — `data-attributes`, `gsap`, `compositions`, `rendering`, `examples`, `troubleshooting`. Untuk video: `references/format.md`, `motion.md`, `review.md`, `story.md`, `look.md`, `types/vertical.md`, `runtimes.md`, `types/3d.md`, `path-tracing.md`.
- **Taste/desain**: `frontend-design` (komposisi, tipografi, warna, anti generik/AI-slop), `impeccable` (bila tersedia). Tetap patuhi identitas channel (NGGAK PENTING LAB) di atas referensi umum.
