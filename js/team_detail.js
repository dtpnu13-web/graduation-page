/* modal on off */
body =  document.querySelector('body');
$('#team-film .btn-modal__open').click(function(){
  // $('.film-modal').show();
  $('.film-modal').animate({"margin-right": '+=80vw'});
  body.style.overflow = 'hidden';
})
$('.film-modal .btn-modal__close').click(function(){
  $('.film-modal').animate({"margin-right": '-=80vw'});
  body.style.overflow = 'auto';
})


body =  document.querySelector('body');
$('#team-inter .btn-modal__open').click(function(){
  // $('.film-modal').show();
  $('.inter-modal').animate({"margin-right": '+=80vw'});
  body.style.overflow = 'hidden';
})
$('.inter-modal .btn-modal__close').click(function(){
  $('.inter-modal').animate({"margin-right": '-=80vw'});
  body.style.overflow = 'auto';
})