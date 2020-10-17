document.addEventListener("DOMContentLoaded", function () {

  const slider = document.querySelector('.swiper-container');
  var mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      751: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1420: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu__list');
  menu.style.display = "none";
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    if (menu.style.display === "none") {
      menu.style.display = "block";
      menu.style.height = "auto";
      menu.style.overflow = "auto";
    } else {
      menu.style.display = "none";
    }

  })

});
