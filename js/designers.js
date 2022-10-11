document.addEventListener("DOMContentLoaded", function() {
  // slidesPerView : 보여질 슬라이드 갯수
  // slidesPerGroup : 슬라이드 넘길 때 이동 갯수
  // breakpoints : 반응형 설정
  // observer : display: none이 되는 컴포넌트 안에서 Swiper를 사용하는 경우에 필요. ex) 탭
  // observeParents : display: none이 되는 컴포넌트 안에서 Swiper를 사용하는 경우에 필요. ex) 탭
      var mySwiper = new Swiper('.inter_sc', {
          slidesPerView: 3,
          slidesPerGroup: 1,
          observer: true,
          observeParents: true,
          spaceBetween: 24,
          navigation: {
              nextEl: '.sw-btn-next',
              prevEl: '.sw-btn-prev',
          },
          breakpoints: {
              1280: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
              },
              720: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
              }
          }
      });
  });