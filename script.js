// Hamburger menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

// Close menu when clicking a link (mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('active');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add .active class to nav links on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(li => {
    li.classList.remove('active');
    if (li.getAttribute('href') === '#' + current) {
      li.classList.add('active');
    }
  });
});

// Reveal animation for cards and sections
function revealOnScroll() {
  document.querySelectorAll('.feature-card, .course-card, .about-content, .signup-box').forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight - 60) {
      el.classList.add('reveal', 'visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Signup form interactivity
const signupForm = document.getElementById('signupForm');
const signupSuccess = document.getElementById('signupSuccess');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  signupSuccess.textContent = "🎉 Thank you! You'll be notified soon.";
  signupForm.reset();
  setTimeout(() => {
    signupSuccess.textContent = "";
  }, 5000);
});