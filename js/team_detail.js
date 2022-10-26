/* modal on off */
body =  document.querySelector('body');
$('#team-film .btn-modal__open').click(function(){
  // $('.film-modal').show();
  $('.film-modal').animate({"margin-right": '+=80vw'});
  body.style.overflow = 'hidden';
  $('.modal-back').fadeIn();
})
$('.film-modal .btn-modal__close').click(function(){
  $('.film-modal').animate({"margin-right": '-=80vw'});
  body.style.overflow = 'auto';
  $('.modal-back').fadeOut();
})


body =  document.querySelector('body');
$('#team-inter .btn-modal__open').click(function(){
  $('.inter-modal').animate({"margin-right": '+=80vw'});
  body.style.overflow = 'hidden';
  $('.modal-back').fadeIn();
})
$('.inter-modal .btn-modal__close').click(function(){
  $('.inter-modal').animate({"margin-right": '-=80vw'});
  body.style.overflow = 'auto';
  $('.modal-back').fadeOut();
})


/* scroll */

const sections = document.querySelectorAll(".section");
window.addEventListener("scroll",()=>{
  //현재 영역의 id값
  //id of the current section
  let current=""

  sections.forEach(section=>{
      //각 section의 top 위치(절대적 위치)
      // The top of each section (absolute)
      const sectionTop = window.scrollY + section.getBoundingClientRect().top;

      //누적된 스크롤이 section의 top위치에 도달했거나 section의 안에 위치할 경우
      //When the accumulated scroll reaches the top of the section or is located inside the section
      if(window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
          console.log(window.scrollY)
          if (current == 'page-top') {
            $('.side-bar .inner').css('position', 'unset');
            if (window.scrollY > 196) {
              $('.side-bar .inner').css('margin-top', `${550 - window.scrollY}px`);
            } else {
              $('.side-bar .inner').css('margin-top', `700px`);
            }
          } else {
            $('.side-bar .inner').css('position', 'fixed');
            $('.side-bar .inner').css('margin-top', '0');
          }
      }
  })
})

$('.side-bar .inner > a:nth-child(5)').click(function(){
  $('.side-bar .inner').css('margin-top', `700px`);
})