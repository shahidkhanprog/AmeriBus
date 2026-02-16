// ===========================
// GLOBAL VARIABLES
// ===========================
let mobileNavActive = false;

// ===========================
// DOM CONTENT LOADED
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  initScrollEffects();
  initFormHandlers();
  initAnimations();
  setMinDate();
});

// ===========================
// MOBILE MENU FUNCTIONALITY
// ===========================
function initMobileMenu() {
  const burger = document.querySelector(".burger");
  const body = document.body;

  // Create mobile navigation if it doesn't exist
  if (!document.querySelector(".mobile-nav")) {
    const mobileNav = document.createElement("div");
    mobileNav.className = "mobile-nav";
    mobileNav.innerHTML = `
      <div class="mobile-nav-close">&times;</div>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="#" class="btn-nav" style="display: inline-block; margin-top: 1rem;">Manage Booking</a></li>
      </ul>
    `;

    const overlay = document.createElement("div");
    overlay.className = "overlay";

    body.appendChild(mobileNav);
    body.appendChild(overlay);

    // Event Listeners
    const closeBtn = document.querySelector(".mobile-nav-close");

    burger?.addEventListener("click", openMobileNav);
    closeBtn?.addEventListener("click", closeMobileNav);
    overlay?.addEventListener("click", closeMobileNav);

    // Close mobile nav when clicking a link
    const mobileLinks = document.querySelectorAll(".mobile-nav a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });
  }
}

function openMobileNav() {
  const mobileNav = document.querySelector(".mobile-nav");
  const overlay = document.querySelector(".overlay");

  mobileNav?.classList.add("active");
  overlay?.classList.add("active");
  document.body.style.overflow = "hidden";
  mobileNavActive = true;
}

function closeMobileNav() {
  const mobileNav = document.querySelector(".mobile-nav");
  const overlay = document.querySelector(".overlay");

  mobileNav?.classList.remove("active");
  overlay?.classList.remove("active");
  document.body.style.overflow = "";
  mobileNavActive = false;
}

// ===========================
// SCROLL EFFECTS
// ===========================
function initScrollEffects() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // Set active navigation link
  highlightActiveNav();
}

function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

// ===========================
// FORM HANDLERS
// ===========================
function initFormHandlers() {
  // Search Form (Homepage)
  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", handleSearchSubmit);
  }

  // Contact Form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }
}

function handleSearchSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const from = e.target.querySelector('input[placeholder="Departure City"]').value;
  const to = e.target.querySelector('input[placeholder="Arrival City"]').value;
  const date = e.target.querySelector('input[type="date"]').value;

  if (!from || !to || !date) {
    showNotification("Please fill in all fields", "error");
    return;
  }

  // Show loading state
  const btn = e.target.querySelector(".btn-main");
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="loading"></span> Searching...';
  btn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.disabled = false;
    showNotification(
      `Searching buses from ${from} to ${to} on ${formatDate(date)}...`,
      "success"
    );

    // In a real application, you would redirect to results page
    // window.location.href = `results.html?from=${from}&to=${to}&date=${date}`;
  }, 1500);
}

function handleContactSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get("name") || e.target.querySelector('input[placeholder*="John"]')?.value;
  const email = formData.get("email") || e.target.querySelector('input[type="email"]')?.value;
  const inquiry = formData.get("inquiry") || e.target.querySelector("select")?.value;
  const message = formData.get("message") || e.target.querySelector("textarea")?.value;

  // Validation
  if (!name || !email || !inquiry || !message) {
    showNotification("Please fill in all fields", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showNotification("Please enter a valid email address", "error");
    return;
  }

  // Show loading state
  const btn = e.target.querySelector(".btn-submit");
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="loading"></span> Sending...';
  btn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.disabled = false;
    showNotification(
      "Thank you! Your message has been sent. We'll respond within 24 hours.",
      "success"
    );
    e.target.reset();
  }, 1500);
}

// ===========================
// UTILITY FUNCTIONS
// ===========================
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

function setMinDate() {
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split("T")[0];

  dateInputs.forEach((input) => {
    input.setAttribute("min", today);
  });
}

// ===========================
// NOTIFICATION SYSTEM
// ===========================
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotif = document.querySelector(".notification");
  if (existingNotif) {
    existingNotif.remove();
  }

  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${getNotificationIcon(type)}</span>
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;

  // Add styles dynamically
  if (!document.getElementById("notification-styles")) {
    const style = document.createElement("style");
    style.id = "notification-styles";
    style.innerHTML = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        min-width: 300px;
        max-width: 500px;
        padding: 1rem 1.5rem;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
      }
      
      @keyframes slideInRight {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
      
      .notification-content {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      
      .notification-icon {
        font-size: 1.5rem;
      }
      
      .notification-message {
        flex: 1;
        color: #333;
        line-height: 1.5;
      }
      
      .notification-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #999;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
      }
      
      .notification-close:hover {
        background: #f0f0f0;
        color: #333;
      }
      
      .notification-success {
        border-left: 4px solid #4caf50;
      }
      
      .notification-error {
        border-left: 4px solid #f44336;
      }
      
      .notification-info {
        border-left: 4px solid #2196f3;
      }
      
      @media (max-width: 768px) {
        .notification {
          left: 20px;
          right: 20px;
          min-width: auto;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Close button handler
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

function getNotificationIcon(type) {
  const icons = {
    success: "✓",
    error: "✕",
    info: "ℹ",
  };
  return icons[type] || icons.info;
}

// ===========================
// SCROLL ANIMATIONS
// ===========================
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements
  const animatedElements = document.querySelectorAll(
    ".route-card, .stat-item, .team-card, .tier-card, .amenity-item, .timeline-item"
  );

  animatedElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

// ===========================
// MANAGE BOOKING MODAL
// ===========================
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-nav") && e.target.textContent.includes("Manage")) {
    e.preventDefault();
    showManageBookingModal();
  }
});

function showManageBookingModal() {
  // Create modal
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Manage Your Booking</h3>
        <button class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <p style="margin-bottom: 1.5rem; color: #666;">Enter your booking reference and email to view or modify your reservation.</p>
        <div class="form-group">
          <label>Booking Reference</label>
          <input type="text" placeholder="e.g., AMB123456789" style="width: 100%; padding: 0.8rem; border: 2px solid #e0e0e0; border-radius: 8px;">
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="your@email.com" style="width: 100%; padding: 0.8rem; border: 2px solid #e0e0e0; border-radius: 8px;">
        </div>
        <button class="btn-main" onclick="handleManageBooking()" style="margin-top: 1rem;">Find My Booking</button>
      </div>
    </div>
  `;

  // Add modal styles
  if (!document.getElementById("modal-styles")) {
    const style = document.createElement("style");
    style.id = "modal-styles";
    style.innerHTML = `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        animation: fadeIn 0.3s ease;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .modal-content {
        background: white;
        border-radius: 15px;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
      }
      
      @keyframes slideUp {
        from {
          transform: translateY(50px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      .modal-header {
        padding: 1.5rem 2rem;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .modal-header h3 {
        color: #003580;
        margin: 0;
      }
      
      .modal-close {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #999;
        line-height: 1;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
      }
      
      .modal-close:hover {
        background: #f0f0f0;
        color: #333;
      }
      
      .modal-body {
        padding: 2rem;
      }
      
      .modal-body .form-group {
        margin-bottom: 1.5rem;
      }
      
      .modal-body label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #333;
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";

  // Close modal handlers
  const closeBtn = modal.querySelector(".modal-close");
  closeBtn.addEventListener("click", () => closeModal(modal));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
}

function closeModal(modal) {
  modal.style.animation = "fadeIn 0.3s ease reverse";
  setTimeout(() => {
    modal.remove();
    document.body.style.overflow = "";
  }, 300);
}

function handleManageBooking() {
  showNotification("Feature coming soon! You'll be able to manage your bookings here.", "info");
}

// ===========================
// NEWSLETTER SUBSCRIPTION
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const newsletterInputs = document.querySelectorAll('footer input[type="email"]');

  newsletterInputs.forEach((input) => {
    // Wrap in form if not already
    if (!input.closest("form")) {
      const form = document.createElement("form");
      form.className = "newsletter-form";
      input.parentNode.insertBefore(form, input);
      form.appendChild(input);

      const submitBtn = document.createElement("button");
      submitBtn.type = "submit";
      submitBtn.textContent = "Subscribe";
      submitBtn.style.cssText = `
        width: 100%;
        margin-top: 0.5rem;
        padding: 0.7rem;
        background: #d32f2f;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
      `;
      form.appendChild(submitBtn);

      form.addEventListener("submit", handleNewsletterSubmit);
    }
  });
});

function handleNewsletterSubmit(e) {
  e.preventDefault();

  const input = e.target.querySelector('input[type="email"]');
  const email = input.value;

  if (!isValidEmail(email)) {
    showNotification("Please enter a valid email address", "error");
    return;
  }

  const btn = e.target.querySelector("button");
  const originalText = btn.textContent;
  btn.textContent = "Subscribing...";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
    showNotification("Thank you for subscribing to our newsletter!", "success");
    input.value = "";
  }, 1000);
}

// ===========================
// ROUTE CARD INTERACTIONS
// ===========================
document.addEventListener("click", function (e) {
  const routeCard = e.target.closest(".route-card");
  if (routeCard) {
    const route = routeCard.querySelector("strong").textContent;
    showNotification(`Checking availability for ${route}...`, "info");

    // In a real app, you would navigate to booking page
    // window.location.href = `booking.html?route=${encodeURIComponent(route)}`;
  }
});

// ===========================
// KEYBOARD NAVIGATION
// ===========================
document.addEventListener("keydown", function (e) {
  // Close mobile nav with Escape key
  if (e.key === "Escape" && mobileNavActive) {
    closeMobileNav();
  }

  // Close modal with Escape key
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal-overlay");
    if (modal) {
      closeModal(modal);
    }
  }
});

// ===========================
// PERFORMANCE OPTIMIZATIONS
// ===========================
// Lazy load images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Console welcome message
console.log(
  "%cWelcome to AmeriBus! 🚌",
  "color: #003580; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cDriving America Forward Since 1998",
  "color: #d32f2f; font-size: 14px;"
);
