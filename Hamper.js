const categories = document.querySelectorAll('.category');
const productGrid = document.querySelector('.product-grid');

const categoryData = {
  wedding: {
    class: "highlight-wedding",
    color: "#f4eada",
    products: ["flower1.webp", "flower2.webp", "flower3.webp", "flower4.webp", "flower5.webp", "flower6.webp"]
  },
  corporate: {
    class: "highlight-corporate",
    color: "#f4eada",
    products: ["corp1.webp", "corp2.webp", "corp3.webp", "corp4.webp", "corp5.webp", "corp6.webp"]
  },
  forhim: {
    class: "highlight-forhim",
    color: "#f4eada",
    products: ["him1.webp", "him2.webp", "him3.webp", "him4.webp", "him5.webp", "him6.webp"]
  },
  forher: {
    class: "highlight-forher",
    color: "#f4eada",
    products: ["her1.webp", "her2.webp", "her3.webp", "her4.webp", "her5.webp", "her6.webp"]
  }
};

function renderProducts(images) {
  productGrid.innerHTML = "";
  const phoneNumber = '919940100709'; // ✅ Use international format without "+"

  images.forEach((img) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'product-wrapper';

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `<img src="${img}" alt="Product">`;

    const customMessage = encodeURIComponent(`Hi! I loved this hampers. Is it customizable? What’s included and the price?: ${img}`);
    const button = document.createElement('a');
    button.href = `https://wa.me/${phoneNumber}?text=${customMessage}`;
    button.target = "_blank";
    button.innerHTML = `<button class="buy-button">BUY NOW</button>`;

    wrapper.appendChild(card);
    wrapper.appendChild(button);
    productGrid.appendChild(wrapper);
  });
}

// Category listeners
categories.forEach(cat => {
  const key = cat.dataset.category;

  cat.addEventListener('mouseenter', () => {
    categories.forEach(c => c.classList.remove('active-category'));
    cat.classList.add('active-category');
    productGrid.className = 'product-grid';
    productGrid.classList.add(categoryData[key].class);
    productGrid.style.backgroundColor = categoryData[key].color;
  });

  cat.addEventListener('mouseleave', () => {
    cat.classList.remove('active-category');
    productGrid.className = 'product-grid';
    productGrid.style.backgroundColor = "#f4eada";
  });

  cat.addEventListener('click', () => {
    if (categoryData[key]) {
      renderProducts(categoryData[key].products);
    }
  });
});
// Lazy load logic
function observeLazyImages() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });

  lazyImages.forEach(img => observer.observe(img));
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger?.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
const dropdownLinks = document.querySelectorAll('.dropdown > a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
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
