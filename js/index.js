/* menu on off */
$('#menu').click(function(){
  $('#menu').fadeOut();
  $('#menu-cont').fadeIn();
})
$('#menu-close').click(function(){
  $('#menu-cont').fadeOut();
  $('#menu').fadeIn();
})

/* modal on off */
body =  document.querySelector('body');
$('.inter .btn-modal__open').click(function(){
  console.log('d')
  $('.modal-cont').fadeIn();
  body.style.overflow = 'hidden';
})
$('.modal-cont.designer-inter').click(function(){
  $('.modal-cont').fadeOut();
  body.style.overflow = 'auto';
})


/* PC 모바일 구분 */
var filter = "win16|win32|win64|mac|macintel";
if ( navigator.platform ) {
	if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
		//mobile
		$('.mobile').css('display', 'block');
	} else {
		//pc
		$('.mobile').css('display', 'none');
  }
}