# Sistem Pemilihan Ketua MPK SMK Negeri 1 Cianjur

Aplikasi voting berbasis React untuk pemilihan Ketua MPK dengan integrasi Supabase sebagai database.

## Fitur Utama

### ✅ Fitur yang Telah Diimplementasikan

1. **Form Identitas Pemilih**
   - Input nama lengkap
   - Pilihan role (Guru, Ketua Ekstrakurikuler, Anggota MPK, Anggota OSIS, Perwakilan Kelas)
   - Dropdown dinamis untuk ekstrakuler dan kelas/jabatan
   - Validasi form lengkap

2. **Halaman Voting**
   - Tampilan grid kandidat yang responsif
   - Kartu kandidat dengan foto, nomor, dan nama
   - Indikator visual untuk kandidat yang dipilih
   - Modal Visi & Misi dengan tombol close yang berfungsi dengan baik
   - Form alasan memilih yang muncul setelah kandidat dipilih

3. **Sistem Voting yang Aman**
   - Loading state dengan spinner saat submit
   - Button disabled selama proses pengiriman untuk mencegah duplikasi
   - Penyimpanan data ke Supabase database
   - One-time voting menggunakan localStorage
   - Redirect otomatis setelah voting berhasil

4. **Halaman Terima Kasih**
   - Tampilan ucapan terima kasih
   - Informasi kandidat yang dipilih dengan foto
   - Slogan kandidat yang dipilih ditampilkan secara dinamis
   - User tidak dapat melakukan voting ulang
   - Redirect otomatis ke halaman ini jika sudah pernah voting

5. **Database Supabase**
   - Tabel `votes` dengan kolom lengkap
   - Row Level Security (RLS) diaktifkan
   - Policy untuk insert (publik) dan select (authenticated)
   - Index untuk optimasi query

## Perbaikan yang Dilakukan

### 🐛 Bug Fixes

1. **Modal Close Button**: Tombol close (×) pada modal Visi & Misi sekarang terlihat dan berfungsi dengan baik
2. **Duplicate Submission**: Tombol submit sekarang disabled dengan loading state untuk mencegah klik ganda
3. **Multiple Voting**: User hanya bisa vote sekali, menggunakan localStorage untuk tracking

### 🎨 Peningkatan UI/UX

1. **Modern Design**
   - Gradient backgrounds dengan backdrop blur
   - Smooth animations dan transitions
   - Card hover effects
   - Responsive grid layout
   - Mobile-first approach

2. **Visual Feedback**
   - Loading spinner saat submit
   - Selected state dengan checkmark
   - Success icon di halaman terima kasih
   - Animated slogan container

3. **Color Palette** (Tetap Maroon & Gold)
   - Primary: #5a1e1e (Maroon Tua)
   - Secondary: #ffdd66 (Gold)
   - Accent: #ffe48f (Cream Gold)
   - Background: Linear gradient maroon

## Struktur Aplikasi

```
src/
├── components/
│   ├── IdentityForm.jsx      # Form input identitas pemilih
│   ├── VotingSection.jsx     # Halaman pemilihan kandidat
│   ├── CandidateCard.jsx     # Kartu kandidat individual
│   ├── VisiMisiModal.jsx     # Modal untuk menampilkan visi misi
│   └── ThankYouPage.jsx      # Halaman terima kasih
├── styles/
│   ├── index.css             # Global styles
│   ├── IdentityForm.css      # Styles untuk form identitas
│   ├── VotingSection.css     # Styles untuk voting section
│   ├── CandidateCard.css     # Styles untuk candidate card
│   ├── VisiMisiModal.css     # Styles untuk modal
│   └── ThankYouPage.css      # Styles untuk thank you page
├── utils/
│   ├── supabase.js           # Supabase client configuration
│   └── candidates.js         # Data kandidat
├── App.jsx                   # Main app dengan routing
└── main.jsx                  # Entry point
```

## Teknologi yang Digunakan

- **React 18** - UI library
- **React Router DOM** - Routing
- **Vite** - Build tool & dev server
- **Supabase** - Database & backend
- **CSS3** - Styling dengan CSS Variables dan Animations

## Cara Menjalankan

1. Install dependencies:
   ```bash
   npm install
   ```

2. Pastikan file `.env` sudah dikonfigurasi dengan benar:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

3. Jalankan development server (otomatis):
   Development server akan berjalan otomatis di port 3000

4. Build untuk production:
   ```bash
   npm run build
   ```

## Database Schema

### Tabel: votes

| Kolom         | Tipe        | Deskripsi                              |
|---------------|-------------|----------------------------------------|
| id            | uuid        | Primary key, auto-generated            |
| nama          | text        | Nama lengkap pemilih                   |
| role          | text        | Role/kategori pemilih                  |
| ekstrakuler   | text        | Nama ekskul (jika role = ekskul)       |
| jabatan_kelas | text        | Kelas & jabatan (jika role = perwakilan_kelas) |
| kandidat      | integer     | Nomor kandidat yang dipilih (1-5)      |
| alasan        | text        | Alasan memilih kandidat                |
| created_at    | timestamptz | Timestamp vote dibuat                  |

## Kandidat

1. **Sabrina Nathasya Ruswandi** - Nomor 1
2. **Rashqa Andrean Fitrah Sulaeman** - Nomor 2
3. **Zenisti Naydelin** - Nomor 3
4. **Syafira Putri Oksamany** - Nomor 4
5. **Nurlaila** - Nomor 5

## Catatan Penting

- Website menggunakan localStorage untuk mencegah voting ulang
- Semua konten dalam Bahasa Indonesia
- Design mobile-first dan fully responsive
- One-time voting enforcement (user tidak bisa vote lebih dari sekali)
- Data disimpan secara permanen di Supabase
