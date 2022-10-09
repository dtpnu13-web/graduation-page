
	$(document).ready(function(){
		window.addEventListener("wheel", function(e){
			e.preventDefault();
		},{passive : false});
		var mHtml = $("html");
		var page = 1;
		mHtml.animate({scrollTop : 0},10);
		console.log(page);

		$("#btn").hide();
		$(window).on("wheel", function(e) {
			

			if(mHtml.is(":animated")) return;
			if(e.originalEvent.deltaY > 0) {
				if(page == 2) return;
				page++;
			} else if(e.originalEvent.deltaY < 0) {
				if(page == 1) return;
				page--;
			}
			var posTop =(page-1) * $(window).height();
			mHtml.animate({scrollTop : posTop});

		})
		$("#p0").click(function(){
			$(".art_btnArea p").removeClass("selected");
			$(this).parent().addClass("selected");
		});
		$("#p1").click(function(){
			$(".art_btnArea p").removeClass("selected");
			$(this).parent().addClass("selected");
		});
		$("#p2").click(function(){
			$(".art_btnArea p").removeClass("selected");
			$(this).parent().addClass("selected");
		});

		
		
	});

