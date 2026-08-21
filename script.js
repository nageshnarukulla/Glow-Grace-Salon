// ===============================
// GLOW & GRACE SALON - FINAL JS
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.background = "rgba(8,8,8,0.97)";
    header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";
  } else {
    header.style.background = "rgba(8,8,8,.92)";
    header.style.boxShadow = "none";
  }
});

// Reveal Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(
  ".service-card,.gallery-card,.branch-card,.review,.why-image,.why-content"
).forEach(el => observer.observe(el));

// Booking Form
const form = document.querySelector(".booking-form");

if (form) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const service = form.querySelector("select").value;

    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message =
      `Hello Glow & Grace Salon.%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Service: ${service}`;

    window.open(
      `https://wa.me/919876543210?text=${message}`,
      "_blank"
    );

    form.reset();

  });

}
