const mobileMenu = document.getElementById('mobile_menu');

mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.getElementById('desktop_menu');
  desktopMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

const more = document.getElementById('more');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
  more.classList.add('open_more');

  // check if all cards are displayed
  const allcards = document.querySelectorAll('mobile_speakers');
  if (Array.from(allcards).every((card) => card.style.display !== 'none')) {
    button.style.display = 'none'; // hide the button if all cards are shown
  }
});
