# Science Channel Brain Design

## Intent

Build a repository as the single source of truth for the **SINI AKU CERITAIN** short-form channel. AI should use it for consistent brand, scripting, fact-checking, and production guidance.

## Goals

- Maintain an easy-to-navigate core reference set.
- Document channel decisions clearly (brand, niche, format, aturan).
- Mark undecided/unverified details as `TBD`.

## Non-goals

- Store final video files; use external storage and link them from repository records.
- Update `content/archive/` atau aset/produksi legacy `video/` sebagai bagian dari penyesuaian branding/docs (kecuali diminta terpisah).

## Constraints

- Target platforms: TikTok, YouTube Shorts, Instagram Reels.
- Target format: 70–90 detik, vertikal 9:16, satu ide inti, satu pertanyaan inti, satu payoff.
- Audiens: 18+ (dewasa).
- Hook: 0–2 detik; penjelasan: 3–50 detik; payoff/ending: 50–90 detik.
- Konsep/penutup: *Sini aku ceritain.* — bercerita padat dan penuh isi. Penutup fixed (narasi/lockup): "Sini aku ceritain." / `SINI AKU` `CERITAIN.`
- Content niche: **Komedi** (relatable harian) dan **Horror** (misteri, berbasis real story — kesaksian/narasumber/cerita orang, fakta sejarah, atau mitos/legenda daerah; bukan ngawang).
- Akurasi penting: jaga makna/cerita tetap utuh; bedakan fakta terverifikasi, teori, hipotesis, spekulasi, kesaksian/cerita beredar, mitos/legenda, dan fiksi. Horror wajib cantumkan basis/asal/sumber dan label klaim jelas.
- Komedi boleh absurd-relatable. Horror tegang/atmosferik, tanpa glorifikasi/eksploitasi, hindari gore/kekerasan eksplisit-grafis; hormati korban/keluarga/masyarakat/kepercayaan.
- Jangan memosisikan channel sebagai komedi murni atau edukasi kering tanpa konteks cerita.

## Approaches

1. **Core scaffold (selected):** README plus focused references (brand, content system, production). Mudah dipakai dan memberi konteks operasional.
2. **Full structure:** buat semua folder/file sekaligus. Lebih lengkap tapi rawan dokumen kosong/asumsi.
3. **README and blank templates:** jejak awal kecil, tapi konteks operasional minim.

## Structure

- `README.md`: tujuan, platform, format, niche, aturan inti, urutan baca AI.
- `01-brand/BRAND-IDENTITY.md`: identitas, konsep, positioning, niche, tone, logo.
- `01-brand/BRAND-SYSTEM.md`: sistem visual/motion/audio/outro.
- `02-content-system/CONTENT-PILLARS.md`: niche dan aturan inti.
- `02-content-system/IDEA-BANK.md`: ide pilot.
- `02-content-system/SCRIPT-TEMPLATE.md`: struktur naskah (hook/penjelasan/payoff/penutup, source & timing notes).
- `02-content-system/FACT-CHECK-CHECKLIST.md`: cek klaim/sumber/label/etika.
- `03-production/ELEVENLABS-VOICE-GUIDE.md`: panduan VO (voice fixed, penutup fixed, pacing/delivery).
- `03-production/VIDEO-STYLE-GUIDE.md` & `03-production/VIDEO-CODE-GUIDE.md`: gaya dan implementasi video.

## Builder decisions

- Gunakan Markdown dan plain directories; tanpa dependency/automation wajib.
- Gunakan `TBD` untuk hal yang belum diputuskan/diverifikasi; jangan mengarang aturan yang disetujui.
