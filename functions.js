const menu_button = document.getElementById('hamburger');

menu_button.addEventListener('click', () => {
  document.querySelector('.mobile-nav').style.display = 'block';
  menu_button.style.display = 'none';
  console.log('here');
});

const close_button = document.getElementById('close-button');

close_button.addEventListener('click', () => {
  document.querySelector('.mobile-nav').style.display = 'none';
  menu_button.style.display = 'block';
});
