// Слайдер (Swiper)

const slider = document.querySelector(".swiper-container");

let mySwiper = new Swiper(slider, {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

