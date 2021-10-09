const $ = (param) => document.querySelector(param);

const mySwiper = $(".mySwiper");
const swiperPartner = $(".swiper-parnet");

const mySwiperFunc = () => {
  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination",
      renderBullet: function (index, className) {
        return '<div class="' + className + '">' + "</div>";
      }
    }
  });
  return swiper;
};

mySwiperFunc();

const swiperPartnerFunc = () => {
  const swiper = new Swiper(swiperPartner, {
    pagination: {
      el: ".swiper-pagination",
      renderBullet: function (index, className) {
        return (
          '<div class="' +
          className +
          " " +
          "pagination-partner" +
          '">' +
          "</div>"
        );
      }
    }
  });
  return swiper;
};

swiperPartnerFunc();
