// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.style.background = 'rgba(0,0,0,.95)';
  } else {
    header.style.background = 'rgba(0,0,0,.75)';
  }
});
