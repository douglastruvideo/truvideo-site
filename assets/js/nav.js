// Mobile nav toggle (loaded with defer — DOM is already parsed)
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
  });
}

// Mobile dropdown toggles
document.querySelectorAll('.nav-dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      trigger.closest('.nav-dropdown').classList.toggle('open');
    }
  });
});

// Intersection observer for fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-up');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Load Google Fonts after idle to avoid LCP repaint
(window.requestIdleCallback || function(cb){setTimeout(cb,200)})(function(){
  var h=document.head;
  var a=document.createElement('link');a.rel='stylesheet';
  a.href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=optional';
  h.appendChild(a);
  if(!document.documentElement.hasAttribute('data-no-material-symbols')){
    var b=document.createElement('link');b.rel='stylesheet';
    b.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap';
    h.appendChild(b);
  }
});
