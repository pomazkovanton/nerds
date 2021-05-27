// Слайдер (Swiper)

const slider = document.querySelector(".swiper-container");

let mySwiper = new Swiper(slider, {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// Модальное окно

const btnOpenModal = document.querySelector(".footer__contacts-btn");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".modal__btn-close");

btnOpenModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal_show");
});

btnCloseModal.addEventListener("click", function () {
  modal.classList.remove("modal_show");
});

