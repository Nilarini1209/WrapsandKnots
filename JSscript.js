const categories = document.querySelectorAll('.category');
const productGrid = document.querySelector('.product-grid');

const categoryData = {
  above600: {
    class: "highlight-wedding",
    color: "#f4eada",
    products: ["flower61.webp", "flower62.webp", "flower63.webp", "flower11.webp", "flower12.webp", "flower13.webp"]
  },
  above1500: {
    class: "highlight-corporate",
    color: "#f4eada",
    products: ["flower151.webp", "flower152.webp", "flower153.webp", "flower154.webp", "flower155.webp", "flower156.webp"]
  },
  above2000: {
    class: "highlight-forhim",
    color: "#f4eada",
      products: ["flower21.webp", "flower22.webp", "flower23.webp", "flower24.webp", "flower25.webp", "flower26.webp"]
  },
  above2500: {
    class: "highlight-forher",
    color: "#f4eada",
      products: ["flower251.webp", "flower252.webp", "flower253.webp", "flower254.webp", "flower255.webp", "flower256.webp"]
  },
  arrangements: {
    class: "highlight-forder",
    color: "#f4eada",
      products: ["arr1.webp", "arr2.webp", "arr3.webp", "arr4.webp", "arr5.webp", "arr6.webp"]
  }
  
};

function renderProducts(images) {
    productGrid.innerHTML = "";
    const phoneNumber = '919940100709';

    images.forEach((img) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'product-wrapper';

        const card = document.createElement('div');
        card.className = 'product-card';
        // Add data-src here instead of src
        card.innerHTML = `<img data-src="${img}" alt="Product">`;

        const button = document.createElement('a');
        button.href = `https://wa.me/${phoneNumber}`;
        button.target = "_blank";
        button.innerHTML = `<button class="buy-button">ENQUIRE</button>`;

        wrapper.appendChild(card);
        wrapper.appendChild(button);
        productGrid.appendChild(wrapper);
    });

    observeLazyImages(); 
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

// Mobile menu toggle


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