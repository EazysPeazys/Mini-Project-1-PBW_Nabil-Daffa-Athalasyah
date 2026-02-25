<h1 align="center">🌐 Nabdaff Portfolio Website</h1>

## 👤 Informasi Project

**Nama: Nabil Daffa Athalasyah**

**NIM: 2409116090**

**Kelas: C 2024**

**Mini Project Pemrograman Berbasis Web**

---

## 👨‍💻 Deskripsi Project

Website portofolio statis berbasis HTML, CSS, Bootstrap 5, dan Vue JS.  
Website ini menampilkan informasi pribadi, pengalaman, skills, sertifikat, serta pencapaian dalam tampilan modern, responsif, dan interaktif.

Project ini dibuat untuk memenuhi tugas Mini Project Mata Kuliah Pemrograman Berbasis Web.

---

# 🖥️ Tampilan Setiap Section / Fitur

---

## 🧭 1. Navbar

<img width="1889" height="187" alt="image" src="https://github.com/user-attachments/assets/daf79ba4-b40c-482f-8aba-f588dcd3026c" />

### 📌 Penjelasan
Navbar digunakan untuk navigasi antar section: Home, About, Certificates, dan Achievements.

### ⚙️ Penjelasan Code
- Menggunakan `<header class="navbar navbar-expand-lg fixed-top">`
- Menggunakan Bootstrap class:
  - `container-fluid`
  - `navbar-expand-lg`
- Navigasi menggunakan anchor link:
  ```html
  <a href="#home">Home</a>
  ```
- Efek scroll menggunakan JavaScript:
  ```javascript
  window.scrollY > 50 ? nav.classList.add("navbar-scrolled")
  ```

Navbar memiliki efek blur dan perubahan background saat discroll.

---

## 🏠 2. Home (Halaman Utama)

<img width="1883" height="905" alt="image" src="https://github.com/user-attachments/assets/46713f6c-05ad-447f-965c-eccb84b24d25" />

### 📌 Penjelasan
Section pembuka yang menampilkan:
- Nama
- Profesi
- Deskripsi singkat
- Tombol navigasi
- Foto profil

### ⚙️ Penjelasan Code

Struktur menggunakan:
```html
<section id="home" class="hero">
```

Data ditampilkan menggunakan Vue interpolation:
```html
{{ profile.name }}
{{ profile.titles }}
```

Layout menggunakan Bootstrap Grid:
```html
<div class="row align-items-center">
    <div class="col-lg-7">
    <div class="col-lg-5">
```

Styling:
- Gradient text
- Glow button
- Hover animation
- Mouse movement effect pada foto

Efek interaktif:
```javascript
document.addEventListener("mousemove", e => {
    img.style.transform = `translate(${x}px,${y}px)`
})
```

---

## 👤 3. About Me

<img width="1888" height="911" alt="image" src="https://github.com/user-attachments/assets/c2c26f5a-d6a8-4ac7-9457-932aec52e713" />

### 📌 Penjelasan
Section ini berisi:
- Deskripsi panjang
- Daftar pengalaman (Experience)
- Technical Proficiency (Progress Bar Skills)

### ⚙️ Penjelasan Code

Data pengalaman menggunakan Vue:
```html
<li v-for="exp in experiences">{{ exp }}</li>
```

Skills menggunakan:
```html
<div v-for="skill in skills">
```

Progress bar:
```html
<div class="progress-bar" 
     :style="{ width: skill.level + '%' }">
```

Bootstrap class yang digunakan:
- `progress`
- `row`
- `col-lg-6`

Progress bar diatur secara dinamis berdasarkan nilai `skill.level`.

---

## 🏆 4. Certificates

<img width="1881" height="911" alt="image" src="https://github.com/user-attachments/assets/ef9d69c0-60d0-4454-89af-d0dc99b46e67" />

### 📌 Penjelasan
Menampilkan daftar sertifikat dalam bentuk card grid layout.

### ⚙️ Penjelasan Code

Menggunakan Vue Loop:
```html
<div v-for="cert in certificates">
```

Struktur card:
```html
<div class="card card-glass">
    <img :src="cert.img">
    <h3>{{ cert.title }}</h3>
```

Layout menggunakan Bootstrap Grid:
```html
<div class="col-md-4">
```

Efek tambahan:
- Hover transform
- Glassmorphism design
- Modal popup saat gambar diklik

Modal Bootstrap:
```javascript
const myModal = new bootstrap.Modal(...)
myModal.show()
```

---

## 🥇 5. Achievements

<img width="1887" height="910" alt="image" src="https://github.com/user-attachments/assets/fcbe7001-c70b-4e89-b957-cbea5ad51f0e" />

### 📌 Penjelasan
Menampilkan daftar penghargaan dalam bentuk card layout.

### ⚙️ Penjelasan Code

Menggunakan Vue:
```html
v-for="award in awards"
```

Menampilkan:
- Judul penghargaan
- Instansi
- Tahun

Card memiliki:
- Hover effect
- Glassmorphism
- Modal preview gambar

---

## 🎨 Styling (CSS)

Beberapa fitur styling yang digunakan:

- Dark Theme Design
- Gradient Text
- Glassmorphism Card
- Smooth Scroll
- Hover Animation
- Scroll Reveal Animation
- Responsive Layout dengan Media Query

Contoh animasi reveal:
```css
.reveal {
    opacity: 0;
    transform: translateY(80px);
}
```

Intersection Observer:
```javascript
const observer = new IntersectionObserver(...)
```

---

# 🛠️ Teknologi yang Digunakan

| Teknologi | Fungsi |
|-----------|--------|
| HTML5 | Struktur dasar website |
| CSS3 | Styling, layout, animasi |
| Bootstrap 5 | Grid system, navbar, card, progress bar, modal |
| Vue JS 3 | Interpolation, data binding, loop rendering |
| JavaScript | Animasi & interaktivitas |

---

# 📱 Responsive Design

Website dirancang responsif menggunakan:

- Bootstrap Grid System
- Breakpoints (col-lg, col-md)
- Media Query pada CSS

Website dapat berjalan dengan baik pada:
- Desktop
- Tablet
- Mobile

---

# 📂 Struktur Folder

```
Mini-Project-1-PBW_Nabil-Daffa-Athalasyah/
│
├── index.html
├── style.css
├── script.js
└── assets/
    ├── logo.png
    ├── Profile.jpeg
    ├── Sertifikat_1.png
    ├── Award_1.jpg
    └── dst...
```

---

# ✅ Kesimpulan

Website Nabdaff Portfolio merupakan website portofolio statis modern yang memanfaatkan HTML, CSS, Bootstrap 5, dan Vue JS untuk menghasilkan tampilan yang responsif, interaktif, dan estetis.  

Seluruh fitur wajib telah terpenuhi:
- Navbar
- Home Section
- About Me
- Skills Progress Bar
- Certificates Grid
- Minimal 1 gambar
- Responsive Design
- Struktur HTML yang benar

---

<p align="center">
✨ Mini Project Pemrograman Berbasis Web - By Nabil Daffa Athalasyah ✨
</p>
