
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("dots");
  let current = 0;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      current = index;
      updateSlides();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove(
      "active",
      "left-1", "left-2", "left-3",
      "right-1", "right-2", "right-3"
    );

    if (index === current) {
      slide.classList.add("active");
    } else if (index === (current - 1 + slides.length) % slides.length) {
      slide.classList.add("left-1");
    } else if (index === (current - 2 + slides.length) % slides.length) {
      slide.classList.add("left-2");
    } else if (index === (current - 3 + slides.length) % slides.length) {
      slide.classList.add("left-3");
    } else if (index === (current + 1) % slides.length) {
      slide.classList.add("right-1");
    } else if (index === (current + 2) % slides.length) {
      slide.classList.add("right-2");
    } else if (index === (current + 3) % slides.length) {
      slide.classList.add("right-3");
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === current);
  });
}


  function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
  }

  setInterval(nextSlide, 3000);
  updateSlides();


document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[data-src]");

    const loadImage = (img) => {
        img.src = img.getAttribute("data-src");
        img.removeAttribute("data-src");
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                entry.target.style.opacity = 1;
                obs.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "100px"
    });

    lazyImages.forEach(img => observer.observe(img));
});
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger?.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
const dropdownLinks = document.querySelectorAll('.dropdown > a');

dropdownLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // Prevent default link behavior
    e.preventDefault();

    const dropdownContent = this.nextElementSibling;

    // Toggle only if .dropdown-content exists
    if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
      // Optional: Close all others
      document.querySelectorAll('.dropdown-content').forEach(content => {
        if (content !== dropdownContent) content.style.display = 'none';
      });

      // Toggle this one
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    }
  });
});






