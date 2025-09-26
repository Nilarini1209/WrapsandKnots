function toggleAccordion(button) {
  const item = button.closest(".accordion-item");
  const isActive = item.classList.contains("active");

  // Close all
  document.querySelectorAll(".accordion-item").forEach(el => el.classList.remove("active"));

  // Open current if not already
  if (!isActive) {
    item.classList.add("active");
  }

  updateConnectorLine();
}

function updateConnectorLine() {
  const activeItem = document.querySelector('.accordion-item.active');
  const line = document.getElementById('faqLine');
  const section = document.querySelector('.faq-section');

  if (activeItem && line && section) {
    const itemRect = activeItem.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();

    const offset = itemRect.top - sectionRect.top + itemRect.height / 2;
    line.style.top = offset + "px";
  } else if (line) {
    line.style.top = "160px"; // default
  }
}



  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  const productsBtn = document.getElementById('products-btn');
  const dropdown = productsBtn.parentElement;

  // Toggle navbar
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Toggle dropdown on mobile
  productsBtn.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent page jump
      dropdown.classList.toggle('open');
    }
  });



document.addEventListener("DOMContentLoaded", function () {
    const lazyBackgrounds = document.querySelectorAll('[data-bg]');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const bg = el.getAttribute('data-bg');
                el.style.background = `url('${bg}') no-repeat center center / cover`;
                el.removeAttribute('data-bg');
                obs.unobserve(el);
            }
        });
    }, { rootMargin: '100px' });

    lazyBackgrounds.forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");

  lazyImages.forEach(img => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          obs.unobserve(entry.target);
        }
      });
    });

    observer.observe(img);
  });
});


// =============================================================

document.getElementById("sendmail.php").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("https://wrapsandknots.com/contactform/sendmail.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(result => {
            if (result.trim() === "success") {
                showPopup("Thank you for reaching out! We have received your message and will get back to you soon.");
                document.getElementById("contactForm").reset();
            } else {
                alert("There was an error sending your message. Try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong. Please try again later.");
        });
});

function showPopup(message) {
    // Remove existing popup if present
    const existingPopup = document.getElementById("custom-popup");
    if (existingPopup) existingPopup.remove();

    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "custom-popup";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";

    // Create popup box
    const popupBox = document.createElement("div");
    popupBox.style.background = "#fff";
    popupBox.style.padding = "20px 30px";
    popupBox.style.borderRadius = "10px";
    popupBox.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
    popupBox.style.textAlign = "center";
    popupBox.style.maxWidth = "400px";
    popupBox.style.width = "90%";

    // Create message
    const msg = document.createElement("p");
    msg.textContent = message;
    msg.style.marginBottom = "20px";

    // Create button
    const btn = document.createElement("button");
    btn.textContent = "OK";
    btn.style.padding = "10px 20px";
    btn.style.border = "none";
    btn.style.background = "#222";
    btn.style.color = "#fff";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";

    btn.onclick = function () {
        overlay.remove();
    };

    // Assemble popup
    popupBox.appendChild(msg);
    popupBox.appendChild(btn);
    overlay.appendChild(popupBox);
    document.body.appendChild(overlay);
}
