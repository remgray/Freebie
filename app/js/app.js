document.addEventListener("DOMContentLoaded", function() {

  const slider = document.querySelector('.swiper-container');
  var mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
