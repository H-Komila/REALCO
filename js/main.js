const bars = document.querySelector('.bars');
const menu = document.querySelector('.header__list');
const overlay = document.createElement('div');

overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

overlay.addEventListener('click', () => {
  bars.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('menu-open');
});
