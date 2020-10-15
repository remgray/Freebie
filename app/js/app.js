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
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
  })

});
