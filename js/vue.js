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