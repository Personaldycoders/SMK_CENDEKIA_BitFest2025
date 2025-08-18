const prestasi = [
  {
    name: "Noni Apriliani",
    gelar: "S1 - Teknik Informatika",
    raihan: "Peraih IPK Terbaik dari jurusan Teknik Informatika Angkatan 2017 dengan Raihan IPK 4,00",
    image: "/img/prestasi01.png",
    alt: "Portrait Nopi"
  },
  {
    name: "Kristianto",
    gelar: "S1 - Teknik Informatika",
    raihan: "Raihan IPK Terbaik dari jurusan Teknik Informatika Angkatan 2016 dengan IPK 4,00.",
    image: "/img/prestasi02.png",
    alt: "Kristianto"
  },
  {
    name: "Nopi Fitrianingsih",
    gelar: "S1 - Sistem Informasi Komputerisasi Akutansi",
    raihan: "Raihan IPK Terbaik dari jurusan Sistem Informasi Komputer Akutansi Angkatan 2016 dengan IPK 3,95",
    image: "/img/prestasi03.png",
    alt: ""
  }
];

let currentIndex = 0;
let slideInterval;
const intervalTime = 5000;

const prestasiName = document.getElementById("prestasiName");
const prestasiGelar = document.getElementById("prestasiGelar");
const prestasiRaihan = document.getElementById("prestasiRaihan");
const prestasiImage = document.getElementById("prestasiImage");
const prestasiCard = document.getElementById("prestasiCard");
const dots = [document.getElementById("dot1"), document.getElementById("dot2"), document.getElementById("dot3")];

function updatePrestasi(index, direction = 'next') {
  prestasiCard.classList.add('slide-out');
  
  setTimeout(() => {
    const p = prestasi[index];
    prestasiName.textContent = p.name;
    prestasiGelar.textContent = p.gelar;
    prestasiRaihan.textContent = p.raihan;
    prestasiImage.src = p.image;
    prestasiImage.alt = p.alt;
    
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    
    prestasiCard.classList.remove('slide-out');
    prestasiCard.classList.add('slide-in');
    
    setTimeout(() => {
      prestasiCard.classList.remove('slide-in');
    }, 500);
  }, 500);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % prestasi.length;
  updatePrestasi(currentIndex, 'next');
  resetInterval();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + prestasi.length) % prestasi.length;
  updatePrestasi(currentIndex, 'prev');
  resetInterval();
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
}

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if (index !== currentIndex) {
      currentIndex = index;
      updatePrestasi(currentIndex);
      resetInterval();
    }
  });
});

updatePrestasi(currentIndex);
slideInterval = setInterval(nextSlide, intervalTime);