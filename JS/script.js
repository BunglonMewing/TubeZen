// Toggle menu pada layar kecil
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav    = document.getElementById('nav-links');

  burger?.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
});
