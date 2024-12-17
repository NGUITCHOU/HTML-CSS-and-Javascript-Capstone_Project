const mobileMenu = document.getElementById('mobile_menu');

mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.getElementById('desktop_menu');
  desktopMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

const more = document.getElementById("more");
const button = document.querySelector(".speaker_hover");

button.addEventListener("click", () => {
    more
})
function open_more(){
    more.classList.add("open_more");
}