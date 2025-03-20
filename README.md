# 🌐 UserAgent-Switcher 
**UserAgent-Switcher** adalah ekstensi Chrome yang dirancang untuk memudahkan pengguna dalam mengganti User-Agent browser mereka. Dengan alat ini, Anda dapat dengan cepat dan efisien menyesuaikan identitas browser Anda agar terlihat seperti berasal dari berbagai perangkat, sistem operasi, atau versi browser yang berbeda.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-yellowgreen)

> **Catatan**: Ekstensi ini hanya untuk keperluan pengembangan. Beberapa situs mungkin tetap mendeteksi browser asli melalui metode lain.

## ✨ Fitur
- 📱 **iPhone Safari**: Meniru Safari di iPhone untuk melihat tampilan situs di perangkat Apple.
- 🤖 **Android Chrome**: Mengganti User-Agent menjadi versi Chrome di Android untuk akses konten yang dioptimalkan.
- ✏️ **Input dan Simpan**: Masukkan dan simpan User-Agent kustom sesuai kebutuhan Anda.
- 🖥️ **Default (Chrome)**: Menggunakan User-Agent standar Chrome untuk browsing umum.
- 💾 **Simpan Preferensi**: Menyimpan pengaturan User-Agent untuk sesi berikutnya, sehingga Anda tidak perlu mengatur ulang.

## 📦 Instalasi
1. **Pasang di Chrome**:
   - Buka Chrome dan masuk ke `chrome://extensions/`.
   - Aktifkan **Developer Mode** (toggle di pojok kanan atas).
   - Klik **Load Unpacked** dan pilih folder yang sudah diekstrak.
2. **Unduh Kode**:
   - Klik [Releases](https://github.com/RozhakXD/UserAgent-Switcher/releases) dan unduh file `.zip` terbaru.
   - Ekstrak folder ke lokasi yang diinginkan.

## 🚀 Cara Menggunakan
1. **Buka Ekstensi**:
   - Klik ikon ekstensi di toolbar Chrome untuk membuka UserAgent-Switcher.
2. **Pilih User-Agent**:
   - Klik dropdown "Pilih User-Agent" dan pilih opsi yang tersedia (Desktop, iPhone, Android).
3. **Custom User-Agent**:
   - Pilih opsi **Custom...**.
   - Masukkan User-Agent yang diinginkan di kolom input.
   - Klik **Simpan** untuk mengaktifkan User-Agent kustom.
4. **Notifikasi**:
   - Pesan konfirmasi akan muncul selama 5 detik setelah perubahan berhasil diterapkan.

## 🛠️ Teknologi
- **Frontend**: HTML5, CSS3, JavaScript
- **Chrome API**: `chrome.storage.local`, `chrome.runtime.sendMessage`
- **Ikon**: [Material Icons](https://fonts.googleapis.com/icon?family=Material+Icons)

## 📜 Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).
