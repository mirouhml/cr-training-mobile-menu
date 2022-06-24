const menuButton = document.getElementById('hamburger');

menuButton.addEventListener('click', () => {
  document.querySelector('.mobile-nav').style.display = 'block';
  menuButton.style.display = 'none';
});

const closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', () => {
  document.querySelector('.mobile-nav').style.display = 'none';
  menuButton.style.display = 'block';
});

const navLinksAll = document.querySelectorAll('.mobile-nav-link');

navLinksAll.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-nav').style.display = 'none';
    menuButton.style.display = 'block';
  });
});
