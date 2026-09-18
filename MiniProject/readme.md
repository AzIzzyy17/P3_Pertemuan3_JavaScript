# Nama : Ikhwan syahid Azizy
# Nim : 251511013

# Mini Project Modul 2: English4IT Landing Page Interaktif

Proyek ini merupakan pengembangan lanjutan dari antarmuka statis Modul 1 menjadi landing page interaktif menggunakan Vanilla JavaScript. Proyek ini dibangun untuk memenuhi kriteria penyelesaian Tugas Akhir (Mini Project) Modul 2 pada Mata Kuliah Proyek 3 - Proyek Pengembangan Perangkat Lunak Berbasis Web.

## 🎯 Ringkasan Proyek
* **Topik:** Klub Belajar "English for IT" (English4IT)
* **Target Pengguna:** Mahasiswa Teknik Informatika yang ingin meningkatkan kemampuan bahasa Inggris, khususnya kosakata teknis IT dan bedah dokumentasi kode.
* **Masalah yang Diselesaikan:** Menyediakan sarana informasi, pendaftaran kelas, dan tanya jawab yang interaktif, responsif, serta mudah diakses (termasuk kelengkapan aksesibilitas keyboard).

## ✨ Fitur Utama (Acceptance Criteria)
Proyek ini mengimplementasikan 7 fitur fungsional JavaScript utama:
1. **Navigasi Mobile Responsif:** Tombol hamburger menu untuk memunculkan dan menyembunyikan navigasi pada layar smartphone (mengelola state `is-open` dan `aria-expanded`).
2. **Daftar Jadwal Dinamis:** Data jadwal kelas dirender secara dinamis dari array of objects di dalam JavaScript menggunakan metode manipulasi DOM yang aman (`createElement` dan `textContent`).
3. **Filter Kategori:** Jadwal dapat disaring berdasarkan kriteria hari (Jumat, Sabtu, Minggu) menggunakan metode `.filter()`. Jika jadwal tidak ditemukan, antarmuka memunculkan status penanganan empty.
4. **FAQ Accordion:** Daftar pertanyaan yang sering diajukan dengan mekanisme buka-tutup interaktif. Membaca logika sehingga hanya maksimal satu jawaban yang terbuka dalam satu waktu.
5. **Validasi Form Klien:** Form pendaftaran kontak dilengkapi validasi (syarat minimal karakter nama dan keberadaan '@' pada email). Input yang tidak valid akan memicu atribut `aria-invalid` serta peringatan teks spesifik, ditahan dengan `event.preventDefault()`.
6. **Tema Gelap (Dark Mode):** Tombol toggle untuk mengalihkan tema antarmuka secara keseluruhan tanpa merusak tingkat kontras membaca teks.
7. **Kembali ke Atas (Back to Top):** Tombol mengambang yang hanya muncul setelah layar discroll sejauh 300px ke bawah, berfungsi mempercepat navigasi pengguna untuk kembali ke ujung atas halaman.

## 🛠️ Teknologi yang Digunakan
* **HTML5** (Semantik dan Aksesibilitas ARIA)
* **CSS3** (Flexbox, CSS Variables, Media Queries)
* **Vanilla JavaScript** (ES6+, DOM Manipulation, Event Listeners)

## 🚀 Cara Menjalankan Proyek (Local Server)


**Menggunakan Visual Studio Code:**
1. Pastikan Anda telah menginstal ekstensi **Live Server** (oleh Ritwick Dey) di VS Code.
2. Buka folder proyek ini di VS Code.
3. Buka file `index.html`.
4. Klik tombol **"Go Live"** yang berada di sudut kanan bawah jendela VS Code (Status Bar), atau klik kanan pada kode di `index.html` lalu pilih **"Open with Live Server"**.
5. Browser utama Anda akan otomatis terbuka dan menampilkan halaman pada address bar seperti `http://127.0.0.1:5500/index.html`.

## 📁 Struktur Direktori
MiniProject/
├── index.html        # Struktur semantik utama halaman
├── css/
│   └── style.css     # Tata letak, desain, mode gelap, dan transisi UI
├── js/
│   └── app.js        # Logika interaktivitas Vanilla JavaScript
└── README.md         # Dokumentasi proyek ini

## ⌨️ Panduan Pengujian Aksesibilitas
Keseluruhan fungsionalitas interaktif pada landing page ini dapat diuji tanpa menggunakan mouse. 
* Gunakan tombol **Tab** untuk berpindah fokus antar tombol, link, atau isian form.
* Gunakan **Enter** atau **Space** untuk memicu interaksi (toggle mode gelap, membuka FAQ, atau mengirim form).