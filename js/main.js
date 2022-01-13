const swiper = new Swiper('.services-swiper', {
  //Бесконечная прокрутка
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoHeight: true,
  // slidesPerView: 1,
  // centeredSlides: true,

  // loopedSlides:3,
  // //Автопрокрутка
  // autoplay:{
  //   delay:3000,
  //   disableOnInteraction: false
  // },
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // }
});
const swiper2 = new Swiper('.prices-swiper', {
  //Бесконечная прокрутка
  loop: true,
  speed: 400,
  spaceBetween: 100,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // autoHeight: true,
  // slidesPerView: 1,
  // centeredSlides: true,

  // loopedSlides:3,
  // //Автопрокрутка
  // autoplay:{
  //   delay:5000,
  //   disableOnInteraction: false
  // },
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // }
});
const swiper3 = new Swiper('.clients-swiper', {
  //Бесконечная прокрутка
  loop: true,
  spaceBetween: 100,
  // autoHeight: true,
  slidesPerView: 5,
  // centeredSlides: true,

  // loopedSlides:1,
  //Автопрокрутка
  speed:3000,
  autoplay:{
    delay:0,
    disableOnInteraction: false
  },
});
const swiper4 = new Swiper('.hello-block-swiper', {
  //Бесконечная прокрутка
  loop: true,
  // autoHeight: true,
  // centeredSlides: true,

  // loopedSlides:1,
  //Автопрокрутка
  speed:2000,
  autoplay:{
    delay:1800,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});
document.querySelector('video').playbackRate = 0.65;