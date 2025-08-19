(function ($) {
    "use strict";


    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 10);
    };
    spinner();



    new WOW().init();



    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
  
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



})(jQuery);

window.addEventListener('resize', function() {
    const menu = document.querySelector('.info-menu');
    const width = window.innerWidth;
    
    if (width > 1024) {
        menu.style.bottom = '-220px';
    } else if (width > 768) {
    
        const progress = (width - 768) / (1024 - 768);
        menu.style.bottom = `-${40 + (180 * progress)}px`;
    } else {
        menu.style.position = 'static';
    }
});



const articleModal = document.getElementById("articleModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");


document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const title = button.getAttribute("data-title");
    const image = button.getAttribute("data-image");
    const content = button.getAttribute("data-content");

    modalTitle.textContent = title;
    modalImage.src = image;
    modalContent.textContent = content;

    articleModal.classList.remove("hidden");
  });
});


function closeArticleModal() {
  articleModal.classList.add("hidden");
}
document.addEventListener('DOMContentLoaded', function() {
  const scrollContent = document.querySelector('.scroll-content');
  const items = Array.from(scrollContent.children);
  
 
  items.forEach(item => {
    const clone = item.cloneNode(true);
    scrollContent.appendChild(clone);
  });
  
  
  scrollContent.style.animation = 'none';
  void scrollContent.offsetWidth; // Trigger reflow
  scrollContent.style.animation = 'scrollUp 25s linear infinite';
});
 const accordionButtons = document.querySelectorAll('.accordion-btn');
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        // Close all
        accordionButtons.forEach(btn => {
          btn.setAttribute('aria-expanded', 'false');
          btn.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
          const content = btn.nextElementSibling;
          if(content) {
            content.classList.remove('open');
          }
        });
        if (!expanded) {
          button.setAttribute('aria-expanded', 'true');
          button.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
          const content = button.nextElementSibling;
          if(content) {
            content.classList.add('open');
          }
        }
      });
    });



    const navbar = document.getElementById("navbar");
  const cicText = document.getElementById("cicText");
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = document.querySelectorAll('.menu-link');
  const desktopMenu = document.getElementById("desktopMenu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("fixed", "top-0", "shadow-md", "scrolled");
      cicText.classList.remove("opacity-0");
      mobileMenu.classList.remove("top-24");
      mobileMenu.classList.add("top-12");
    } else {
      navbar.classList.remove("fixed", "top-0", "shadow-md", "scrolled");
      cicText.classList.add("opacity-0");
      mobileMenu.classList.remove("top-12");
      mobileMenu.classList.add("top-24");
    }
  });

  mobileMenuButton.addEventListener("click", () => {
    toggleMobileMenu();
  });

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
    
    mobileMenuButton.innerHTML = mobileMenu.classList.contains("hidden") ? `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>` : `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>`;
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add("hidden");
      mobileMenuButton.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>`;
    });
  });
   let currentSlide = 0;
  const slides = document.querySelectorAll('#slider .slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === index) ? '1' : '0';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 8000); 
  showSlide(currentSlide);

 document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('i');
      const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';

      document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content) {
          c.style.maxHeight = null;
          c.classList.add("opacity-0");
        }
      });
      
     
      document.querySelectorAll('.accordion-btn i').forEach(i => {
        if (i !== icon) {
          i.classList.remove('rotate-180');
        }
      });

   
      if (isExpanded) {
        content.style.maxHeight = null;
        content.classList.add("opacity-0");
        icon.classList.remove('rotate-180');
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.remove("opacity-0");
        icon.classList.add('rotate-180');
      }
    });
  });