# 🌐 Universitas CIC Website

Proyek ini adalah website  **Universitas Catur Insan Cendekia (UCIC)** yang dibangun menggunakan **HTML, CSS, JavaScript, Vue.js (CDN)**, **TailwindCSS**, dan **Bootstrap**.
Website ini menampilkan berbagai informasi seperti **Beranda, Visi-Misi, Agenda, Berita, Prodi, lokasi gedung, Event, Afliasi, Fasilitas, dan Kontak**.

---

## 🚀 Fitur Utama

* **Slider Animasi** (custom JS + TailwindCSS).
* **Dynamic Berita**: Data berita disimpan di `berita.json` dan ditampilkan dengan **Vue.js**.
* **Modal Artikel**: Buka berita lengkap dalam modal.
* **Section Navigasi**:

  * Beranda
  * Visi-Misi
  * Agenda
  * Berita
  * Prodi
  * Event
  * Fasilitas
  * Kontak
* **Integrasi Bootstrap & TailwindCSS** → kombinasi desain elegan + utility-first styling.
* **Library Animasi & Carousel**:

  * [WOW.js](https://wowjs.uk/)
  * Easing
  * Waypoints
  * Owl Carousel

---

## 🛠️ Teknologi

* **Frontend**:

  * HTML5, CSS3
  * JavaScript (Vanilla)
  * [Vue.js 3 (CDN)](https://unpkg.com/vue@3/dist/vue.global.prod.js)
  * [TailwindCSS](https://tailwindcss.com/)
  * [Bootstrap 5](https://getbootstrap.com/)

* **Data**:

  * JSON (`berita.json`) untuk menyimpan daftar berita.

* **Library Tambahan**:

  ```html
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/waypoints/waypoints.min.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  ```

---

## 📂 Struktur Proyek

```bash
├── index.html          # Halaman utama
├── css/                # File CSS custom
│   |── style.css
|   └── bootstrap.min.css 
|
├── js/
│   ├── main.js         # Script utama
│   ├── vue.js          # Vue component
│   ├── prestasi.js     # Script tambahan
│   └── berita.json     # Data berita
├── lib/                # Library pihak ketiga (WOW.js, OwlCarousel, dll)
├── img/                # Gambar & asset
└── README.md           # Dokumentasi
```

---

## 📜 Contoh Data Berita (`berita.json`)

```json
[
  {
    "id": 1,
    "title": "Call For Paper 4th Internasional Conference ICCIT 2025",
    "image": "../img/berita01.jpeg",
    "excerpt": "Calling All researchers, Students, and Lecturers...",
    "content": "Detail lengkap berita ada di sini..."
  }
]
```

---

## 🖼️ Vue.js (CDN)

Contoh pemanggilan `berita.json` dengan Vue:

```js
const { createApp } = Vue;

createApp({
  data() {
    return {
      news: [],
      selectedArticle: null
    };
  },
  methods: {
    async fetchNews() {
      try {
        const res = await fetch("js/berita.json");
        this.news = await res.json();
      } catch (err) {
        console.error("Gagal load JSON:", err);
      }
    },
    openModal(article) {
      this.selectedArticle = article;
      document.body.classList.add("overflow-hidden");
    },
    closeModal() {
      this.selectedArticle = null;
      document.body.classList.remove("overflow-hidden");
    }
  },
  mounted() {
    this.fetchNews();
  }
}).mount("#app");
```

---

## ⚡ Cara Menjalankan

1. Clone repo ini

   ```bash
   git clone https://github.com/Personaldycoders/SMK_CENDEKIA_BitFest2025
   cd SMK_CENDEKIA_BitFest2025
   ```
2. Buka langsung di browser (`index.html`).
3. Pastikan file `berita.json` bisa di-load. Jika tidak, jalankan dengan server lokal:

   ```bash
   # Python
   python -m http.server 5500

   # atau Node.js
   npx serve .
   ```

---

## 👨‍💻 Kontributor

* **Auddy deska mujiono**
* **Satria saefulloh yusuf**
* **Andri Taunlany**
