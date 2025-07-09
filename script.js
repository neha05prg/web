""// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.setAttribute('data-theme', currentTheme);
  themeToggle.querySelector('.toggle-icon').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}
themeToggle.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  themeToggle.querySelector('.toggle-icon').textContent = isDark ? '🌙' : '☀️';
  const icon = themeToggle.querySelector('.toggle-icon');
  icon.style.transition = 'transform 0.4s ease, opacity 0.3s';
  icon.style.transform = 'scale(1.3) rotate(180deg)';
  icon.style.opacity = '0.3';
  setTimeout(() => {
    icon.style.transform = '';
    icon.style.opacity = '';
  }, 400);
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navLinks.style.transition = 'right 0.5s ease-in-out';
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Sticky Navbar Background on Scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Animated Counters
const counters = document.querySelectorAll('.counter');
const speed = 200;
const runCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = Math.ceil(target / speed);
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};
let countersStarted = false;
window.addEventListener('scroll', () => {
  const aboutSection = document.getElementById('about');
  const rect = aboutSection.getBoundingClientRect();
  if (!countersStarted && rect.top < window.innerHeight - 100) {
    runCounters();
    countersStarted = true;
  }
});

// Typed.js Hero Animation
if (window.Typed) {
  new Typed('#typed-tagline', {
    strings: [
      'Full Stack Developer',
      'React | PHP | Python',
      'Creative Thinker',
      'Frontend & Backend Builder'
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });
}

// Skills Progress Bars + Percentage
function animateSkillBars() {
  const bars = document.querySelectorAll('.progress');
  bars.forEach((bar, i) => {
    const value = parseInt(bar.getAttribute('data-progress'));
    let percent = 0;
    const span = document.createElement('span');
    span.classList.add('progress-percent');
    bar.parentElement.appendChild(span);
    const interval = setInterval(() => {
      if (percent < value) {
        percent++;
        bar.style.width = percent + '%';
        span.innerText = percent + '%';
      } else {
        clearInterval(interval);
      }
    }, 10);
  });
}
let skillsAnimated = false;
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const rect = skillsSection.getBoundingClientRect();
    if (!skillsAnimated && rect.top < window.innerHeight - 100) {
      animateSkillBars();
      skillsAnimated = true;
    }
  }
});

// Animate Skill Cards
document.querySelectorAll('.skills-category').forEach((cat, idx) => {
  cat.setAttribute('data-aos', 'fade-up');
  cat.setAttribute('data-aos-delay', 200 + idx * 120);
  cat.setAttribute('data-aos-duration', '700');
});
document.querySelectorAll('.skill-card').forEach((card, idx) => {
  card.setAttribute('data-aos', 'zoom-in');
  card.setAttribute('data-aos-delay', 300 + idx * 100);
});

// Timeline & Projects Animation
document.querySelectorAll('.timeline-item').forEach((item, idx) => {
  item.setAttribute('data-aos', 'fade-right');
  item.setAttribute('data-aos-delay', 100 + idx * 100);
});
document.querySelectorAll('.project-card').forEach((card, idx) => {
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', 150 + idx * 100);
  card.setAttribute('data-aos-duration', '800');
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.04) rotate(-1.5deg)';
    card.style.boxShadow = '0 12px 32px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

// Contact Form Focus Animation
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
  input.addEventListener('focus', () => input.classList.add('focus-animate'));
  input.addEventListener('blur', () => input.classList.remove('focus-animate'));
});

// Contact Form Submission Toast

// Toast after redirect
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
  
      // Optional: remove query param from URL
      const url = new URL(window.location);
      url.searchParams.delete('submitted');
      window.history.replaceState({}, document.title, url.pathname + url.hash);
    }
  });
  




// Dynamic Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// AOS Init
AOS.init({
  duration: 1000,
  once: true,
  offset: 80
});
