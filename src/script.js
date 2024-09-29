const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
});
