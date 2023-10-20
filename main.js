const mobileMenuButton = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const btnaction = document.querySelector('.btn-action');
const svgs = btnaction.getElementsByTagName('svg');

mobileMenuButton.addEventListener('click', () => {
  for (let i = 0; i < svgs.length; i++) {
    svgs[i].classList.toggle('hidden');
  }

  mobileMenu.classList.toggle('hidden');

});
