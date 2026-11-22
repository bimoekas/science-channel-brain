# Voiceover — Sukhoi Superjet 100 di Gunung Salak (sukhoi-superjet-100-gunung-salak-2012)

Rujukan: `03-production/ELEVENLABS-VOICE-GUIDE.md` (voice fixed: Gadis - Cheerful Indonesian, `aMSt68OGf4xUZAnLpTU8`; model Eleven v4; Stability 40–50%, Similarity 75–85%; no SSML). **Horror ringkas, runut faktual (ala storyteller misteri tenang-dingin):** narator tenang, dingin, terkontrol — kronologi → temuan/keterangan → mitos dipisah. Seram dari detail nyata & kontras fakta, bukan kata-kata seram ngambang.

## Teks narasi (siap generate, ElevenLabs v4)

Target durasi audio: **70–90 detik** (TBD — ukur dari audio final). Detail angka/jam/ketinggian/faktor spesifik: ikuti & verifikasi laporan KNKT/NTSC; jangan mengarang.

[measured, cold] Sembilan Mei dua ribu dua belas. Sebuah pesawat Sukhoi Superjet seratus lepas landas dari Bandara Halim Perdanakusuma, Jakarta. [brief pause] Itu penerbangan demonstrasi.

[low, tense] Di udara, kru meminta izin menurunkan ketinggian. Permintaan itu direspons. [slow pause] Tak lama setelah itu… kontak dengan pesawat hilang—di wilayah Gunung Salak, Jawa Barat.

[brief pause]

[measured, calm] Pencarian dimulai. Puing pesawat ditemukan di lereng Gunung Salak. [soft, respectful, quiet] Seluruh orang di dalam pesawat tidak selamat.

[slow pause]

[measured, cold] Investigasi resmi dilakukan oleh Komite Nasional Keselamatan Transportasi. Penyelidik menelusuri data dan rekaman penerbangan: rute, permintaan turun, posisi pesawat di kawasan pegunungan, serta data dan peringatan di kokpit. [low, tense] Faktor-faktor dan kesimpulan kecelakaan dirinci dalam laporan investigasi resmi.

[slow pause]

[low, hushed] Di sisi lain, jauh sebelum peristiwa itu, Gunung Salak dikenal luas lewat cerita-cerita “angker” yang beredar di masyarakat. [measured, cold] Itu ranah mitos dan kepercayaan—bukan penjelasan terverifikasi atas kecelakaan ini.

[brief pause]

[ominous, soft] Yang mencekam bukan kabutnya. [measured] Tapi batas yang jelas: mana yang tercatat sebagai bukti… dan mana yang hidup sebagai cerita.

[long pause]

[low, hushed, eerie] Sini aku ceritain.

## Catatan emosi & delivery (audio notes)

- **Gaya:** horror misteri real story, ringkas, **runut faktual** (ala storyteller tenang-dingin). Seram dari detail nyata & kontras fakta, bukan adjektiva/atmosfer ngambang.
- **Nada:** tenang, dingin, terkontrol, intim — bukan histeris/jumpscare. Kejelasan informasi utama.
- **Pace/ritme:** pelan & terkontrol; jeda menggantung di elipsis & `[slow pause]`/`[brief pause]`/`[long pause]`; beri bobot pada fakta kunci (tanggal, Halim, minta turun, kontak hilang, puing di lereng, tak ada selamat, investigasi KNKT, medan/mitos vs bukti).
- **Warna suara:** rendah, measured di fakta/temuan; tegang rendah di momen kritis; lembut-hormat pada duka (`Seluruh orang di dalam pesawat tidak selamat`); hushed untuk misah mitos & penutup.
- **Tag rujukan (uji hasil):** `[measured, cold]`, `[low, tense]`, `[measured, calm]`, `[soft, respectful, quiet]`, `[low, hushed]`, `[ominous, soft]`, `[measured]`, `[low, hushed, eerie]`.
- **Penutup fixed:** `[low, hushed, eerie] Sini aku ceritain.` — jangan diparafrase; jeda sebelum masuk.

## Catatan pelafalan & normalisasi

- "9 Mei 2012" → "Sembilan Mei dua ribu dua belas".
- "Sukhoi Superjet 100" → "Sukhoi Superjet seratus" (jelas).
- "Bandara Halim Perdanakusuma" → ucap jelas; "Halim Perdanakusuma, Jakarta".
- "Komite Nasional Keselamatan Transportasi" → ucap jelas (jangan pakai singkatan "KNKT" di VO, kecuali sengaja; teks pakai nama lengkap).
- "Gunung Salak, Jawa Barat" — konsisten.

## Catatan produksi & kepatuhan

- **Target durasi:** 70–90 detik (TBD — ukur dari audio final); selaraskan timing/caption & `data-start` signature outro dengan hasil ukur.
- **Akurasi (wajib):** kronologi/temuan harus sesuai sumber resmi. Rincian spesifik (jumlah orang, jam, ketinggian, isi komunikasi, faktor/penyebab & temuan teknis persis) **wajib diverifikasi & mengikuti laporan akhir KNKT/NTSC** (ntsc.go.id) — jangan mengarang/menyimpulkan. Jika belum terverifikasi, pertahankan pernyataan umum yang aman & jujur.
- **Pemisahan tegas:** fakta/kronologi/temuan investigasi [terverifikasi, bersumber] vs cerita “angker” Salak [mitos/kepercayaan/cerita beredar, tidak dibuktikan]; jangan sajikan mitos sebagai penjelasan terverifikasi.
- **Etika 18+:** hormati korban & keluarga; tanpa glorifikasi; hindari detail/gambar gore, korban, atau kehancuran/kekerasan eksplisit-grafis.
- **Output:** file audio final simpan di luar repo; tautkan di `meta.md`. VO perlu di-generate ulang & durasi diukur.
