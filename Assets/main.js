// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const links = document.querySelector('nav.links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const visible = links.style.display === 'flex';
    links.style.display = visible ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.gap = '8px';
    links.style.padding = '10px 0';
  });
}


// Highlight active nav link by filename
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => {
  const href = a.getAttribute('href');
  if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) {
    a.classList.add('active');
  }
});

// Simple year footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
