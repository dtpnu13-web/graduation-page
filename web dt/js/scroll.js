
	$(document).ready(function(){
		window.addEventListener("wheel", function(e){
			e.preventDefault();
		},{passive : false});
		var mHtml = $("html");
		var page = 1;
		mHtml.animate({scrollTop : 0},10);
		console.log(page);

		$("#btn").hide();
		$('.top_arrow').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			$("#btn").hide(500);
			page=1;
			
		});

		$("#p0").click(function(){
			$('html, body').animate({
				scrollTop: $("#project").offset().top
			}, 800);
			$("#btn .art_btnArea p").removeClass("selected");
			$("#btn .art_btnArea p").removeClass("selected_s");
			$(this).addClass("selected");
			page=2;
		});
		$("#p1").click(function(){
			$('html, body').animate({
				scrollTop: $("#concept").offset().top
			}, 800);
			$("#btn .art_btnArea p").removeClass("selected");
			$("#btn .art_btnArea p").removeClass("selected_s");
			$(this).addClass("selected");
			page=3;
		});
		$("#p2").click(function(){
			$('html, body').animate({
				scrollTop: $("#video").offset().top
			}, 800);
			$("#btn .art_btnArea p").removeClass("selected");
			$("#btn .art_btnArea p").removeClass("selected_s");
			$(this).addClass("selected");
			page=4;
		});
		$("#p3").click(function(){
			$('html, body').animate({
				scrollTop: $("#inter").offset().top
			}, 800);
			$("#btn .art_btnArea p").removeClass("selected");
			$("#btn .art_btnArea p").removeClass("selected_s");
			$(this).addClass("selected_s");
			page=5;
		});

		$(window).on("wheel", function(e) {
			
			if(mHtml.is(":animated")) return;
			if(e.originalEvent.deltaY > 0) {
				if(page == 6) return;
				page++;
			} else if(e.originalEvent.deltaY < 0) {
				if(page == 1) return;
				page--;
			}
			var posTop =(page-1) * $(window).height();
			mHtml.animate({scrollTop : posTop});
			if(page == 2){
				$("#btn .art_btnArea p").removeClass("selected");
				$("#btn .art_btnArea p").removeClass("selected_s");
				$("#btn .art_btnArea #p0").addClass("selected");
			}
			else if(page == 3){
				$("#btn .art_btnArea p").removeClass("selected");
				$("#btn .art_btnArea p").removeClass("selected_s");
				$("#btn .art_btnArea #p1").addClass("selected");
			}
			else if(page == 4){
				$("#btn .art_btnArea p").removeClass("selected");
				$("#btn .art_btnArea p").removeClass("selected_s");
				$("#btn .art_btnArea #p2").addClass("selected");
			}
			if(page == 5){
				$("#btn .art_btnArea p").removeClass("selected");
				$("#btn .art_btnArea #p3").addClass("selected_s");
			}
			if(page == 1){
				$("#btn").hide();			
			}
			else if(page == 2 || page == 5){
				$("#btn").show(1000);
				return false;
			}
			else if(page == 6){
				$("#btn").hide(500);
				return false;
			}

		})
		$(".infoBtn li a").click(function(){
			$(".infoBtn li a").removeClass("infoSel");
			$(this).addClass("infoSel");

		});
		$("#video .more_btn").click(function(){
			$(".more_info0").css({"right":"0"});
		});
		$("#inter .more_btn").click(function(){
			$(".more_info1").css({"right":"0"});
		});
		$(".infoBox .cloBtn").click(function(){
			$(".more_info0").css({"right":"-100%"});
			$(".more_info1").css({"right":"-100%"});
		});

	
	});

