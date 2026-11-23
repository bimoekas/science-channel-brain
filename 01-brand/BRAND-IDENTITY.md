# Brand Identity — SINI AKU CERITAIN

## Name

- **Channel:** SINI AKU CERITAIN
- **Wordmark:** `SINI AKU CERITAIN.`
- **Penutup khas:** `Sini aku ceritain.`
- **Handle:** `@siniakuceritain` — **proposed only.** Availability is unverified; do not
  claim or register it until it has been checked on each platform.

## Concept

> Sini aku ceritain.

Konten bercerita dengan konteks yang padat dan penuh isi: membedah cerita/ide/topik secara jelas, merangkum inti dengan akurat, dan tetap jujur soal mana fakta terverifikasi, cerita/mitos, atau spekulasi (bila ada).

## Art direction

Sinematik, padat, dan fokus cerita. Setiap scene diartikan sebagai frame film, bukan sebagai slide.
Full-bleed, asimetris, berlapis (foreground / midground / background), gerak seperlunya dengan alasan,
dan tipe yang berperan sebagai gambar — bukan kotak berisi teks.

Lawan dari arah ini: layout PowerPoint, motion graphics korporat, kartu rounded, dashboard
statis, komposisi tengah yang berulang, dan teks di dalam kotak dekoratif.

## Personality

- Cerdas dan tajam, tanpa merendahkan penonton.
- Komedi: absurd-relatable dari keseharian. Horror: tegang/misterius, merinding tanpa eksploitasi.
- Gaya bercerita: padat, jelas, penuh konteks; penyampaian percaya diri.
- Humor/tegang datang dari kontras dan suasana, bukan dari menyesatkan.
- Sinematik dan fokus pada isi cerita.

## Audience

- Target 18+ (dewasa), bukan semua umur. Konten ditujukan untuk audiens dewasa.
- Horror: berbasis real story (kesaksian/narasumber/cerita orang, fakta sejarah, atau mitos/legenda daerah) — bukan karangan ngawang. Tegang/merinding dan tema dewasa/gelap boleh; tanpa glorifikasi kekerasan/pelaku, tidak mengeksploitasi; hindari visual/deskripsi gore atau kekerasan eksplisit-grafis.
- Jika menyentuh klaim/fakta/cerita, jaga akurasi dan bedakan fakta terverifikasi, kesaksian/cerita beredar, mitos/legenda, spekulasi, dan fiksi; cantumkan asal/sumber cerita.

## Positioning

Channel short-form dua niche — **Komedi** (relatable harian) dan **Horror** (misteri berbasis real story) — bercerita padat dan penuh konteks, dikemas sinematik, untuk audiens dewasa (18+).

## Unique value proposition

Satu ide per video dengan cerita padat dan penuh isi: komedi yang “terlalu nyata” dari hidup harian, atau misteri berbasis cerita nyata (kesaksian, sejarah, mitos daerah) yang merinding sekaligus memberi konteks jelas dan mengajak berpikir kritis.

## Content niches

Satu identitas, dua suhu visual. Grammar sama — tipe editorial bold, simbol tanda tanya, watermark, caption, Reality Skip — karakter berbeda per niche.

| Niche | Wilayah | Karakter visual | Palet token |
| --- | --- | --- | --- |
| **Komedi** | Relatable harian, absurditas keseharian | Hangat, playful, kontras tegas; ritme komedi | `--npl-komedi-a` `--npl-komedi-b` (alias `--npl-human-a/b`) |
| **Horror** | Misteri berbasis real story (kesaksian/cerita orang, sejarah, mitos daerah), tegang non-grafis | Gelap, misterius, sinematik; bayangan & sorot | `--npl-horror-a` `--npl-horror-b` (alias `--npl-scifi-a/b`) |

> Catatan kompatibilitas: token lama `--npl-earth-*`, `--npl-human-*`, `--npl-scifi-*` tetap ada di `video/assets/brand/tokens.css` untuk aset/arsip lama.

## Logo

- **Primary:** wordmark horizontal `SINI AKU CERITAIN.` — tipe editorial bold, tracking rapat,
  titik akhir terbelah oleh satu glitch slice.
- **Compact:** wordmark dua baris untuk watermark dan penempatan kecil.
- **Symbol:** **kutip pembuka ganda** (`“`) — dua blok miring tebal, kutip kanan dipotong
  satu signal break dengan pecahan aksen; terbaca pada 16px, dua tinta. Lihat spesifikasi
  konstruksi di `BRAND-SYSTEM.md` §4.
- **Closing lockup:** penutup `SINI AKU / CERITAIN.` + rule gradien + symbol, di outro.
- **Watermark:** rail vertikal di tepi kanan, di luar margin konten, opasitas rendah.

**Kenapa kutip, bukan tanda tanya.** Tanda tanya adalah ikon "FAQ / bantuan / tidak tahu", dan
klise nomor satu untuk kanal misteri — ia menanyakan cerita, bukan menceritakan. Kutip pembuka
adalah tanda bahwa ada orang yang sedang berbicara: persis janji channel ini. Simbolnya juga
tipografis, jadi satu bahasa dengan wordmark yang juga tipografis.

Larangan: lightbulb, rocket, atom, brain, tanda tanya, mata, hantu, dan ikon klise lainnya.

Semua aset logo berupa SVG yang dapat diedit di `video/assets/brand/`.

## Tone of voice

- Bahasa Indonesia percakapan, kalimat pendek, tanpa jargon yang tidak dijelaskan.
- Komedi: ringan, jenaka, relatable. Horror: tegang, narator tenang-dingin, detail konkret; seram dari hal yang spesifik + jeda + kontras nada, bukan dari adjektiva seram, bukan dari disclaimer meta. Berpijak pada cerita/sumber nyata, tidak eksploitasi.
- Tidak pernah mengklaim lebih pasti daripada buktinya; kesaksian/cerita beredar/mitos/legenda diberi label jelas dan dibedakan dari fakta terverifikasi.
- **Mitos boleh jadi isi, bukan cuma catatan kaki.** Selama asalnya bersumber, sebuah mitos/legenda boleh menempati porsi besar cerita — tidak wajib didampingi bantahan. Syaratnya dua: (1) sumbernya disebut, (2) sikapnya diserahkan ke penonton — "percaya atau tidak, ini yang diceritakan orang", bukan "ini yang terjadi". Yang dilarang tetap satu: menyebut mitos sebagai fakta terverifikasi.

## Referensi implementasi

- Design token: `video/assets/brand/tokens.css`
- Utilities & komponen motion: `video/assets/brand/brand.js`
- Sistem lengkap (tipografi, caption, motion, audio, outro): `BRAND-SYSTEM.md`