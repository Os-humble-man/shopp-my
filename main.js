const mobileMenuButton = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// window.addEventListener("DOMContentLoaded",()=>{
//   const carousel = document.querySelector('.slider-container');
//   let scroll = 1;

//   function scrollCarousel (){
//     scroll += 1;
//     carousel.style.transform = `translateX(-${scroll * 100}%)`;

//   }

//   setInterval(() => {
//     scrollCarousel();
//   }, 5000);
// })