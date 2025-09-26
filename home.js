
  const testimonials = [
     {
      name: "Ashok",
      message: "Everything was perfect from the start to finish. The hamper I ordered was packed beautifully and delivered on time.",
      image: "client6.webp"
    },
    {
      name: "Priya",
      message: "Absolutely stunning floral arrangements! The team at Wraps and Knots captured exactly what I envisioned and made our event truly special.",
      image: "client1.webp"
    },
    {
      name: "Nagesh",
      message: "The best gift hampers in town! High quality, elegant packaging, and timely delivery. Highly recommend Wraps and Knots!",
      image: "client2.webp"
    },
    {
      name: "Radhika",
      message: "Loved their attention to detail! Every bouquet looked handcrafted with care. You made my day extra special!",
      image: "client3.webp"
    },
    {
      name: "Reshma",
      message: "Their wedding decor services are top-notch! They transformed our venue into a magical space. Thank you so much!",
      image: "client4.webp"
    },
    {
      name: "Roshini",
      message: "Beautiful floral arrangements and super professional team. My family was so impressed with the decorations!",
      image: "client5.webp"
    },
   
    {
      name: "Pragathi",
      message: "Everything was perfect from the start to finish. The hamper I ordered was packed beautifully and delivered on time.",
      image: "client7.webp"
    }
  ];

  let currentTestimonial = 0;

// Find elements safely
const testimonialBox = document.querySelector(".testimonial-box");

if (testimonialBox) {
  const imageEl = testimonialBox.querySelector(".testimonial-image img");
  const nameEl = testimonialBox.querySelector("h4");
  const messageEl = testimonialBox.querySelector("p");

  function showTestimonial(index) {
    const t = testimonials[index];
    if (nameEl) nameEl.textContent = t.name;
    if (messageEl) messageEl.textContent = t.message;
    if (imageEl) imageEl.src = t.image;
  }

  // Initial load
  showTestimonial(currentTestimonial);

  // Auto-rotate every 4 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 4000);
}

  const images = [
    "hero1.webp",
    "hero2.webp",
    "hero3.webp",
    "hero4.webp",
    "hero5.webp",
    "hero6.webp"
  ];

  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;
  let showingImg1 = true;

  function updateDots(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function showNextImage(index) {
    const nextImg = showingImg1 ? img2 : img1;
    const currentImg = showingImg1 ? img1 : img2;

    // prepare next image
    nextImg.src = images[index];
    nextImg.classList.remove("exit-left");
    nextImg.classList.add("show");

    // animate current image out
    currentImg.classList.remove("show");
    currentImg.classList.add("exit-left");

    showingImg1 = !showingImg1;
    updateDots(index);
  }

  // Auto-slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showNextImage(currentIndex);
  }, 4000);

  // Manual dot click
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"));
      currentIndex = index;
      showNextImage(currentIndex);
    });
  });

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

  // Dropdown menu toggle on mobile
  const dropdownLinks = document.querySelectorAll('.dropdown > .dropbtn');

  dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default "#" navigation
            e.preventDefault();

            const dropdownContent = this.nextElementSibling;

            // Close other open dropdowns
            document.querySelectorAll('.dropdown-content').forEach(content => {
                if (content !== dropdownContent) {
                    content.style.display = 'none';
                }
            });

            // Toggle current dropdown
            if (dropdownContent) {
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
        });
  });

    // Close dropdown if click outside
    document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-content").forEach(content => {
            content.style.display = "none";
        });
    }
  });








