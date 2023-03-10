var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 20,
  freeMode: true,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
