
	$(document).ready(function(){
		/* ps_main 이미지 변경 기능 */
		$("#des_cont .radio").click(function(){
			$("#des_cont p span").removeClass("selected");
			$(this).addClass("selected");
			var chk = $(this).attr("id");

			// 체크용 console.log(chk);
			$("#des_cont .imgArea img").attr("src","img/"+chk+".jpg");
		});


		/* ps_int 버튼 클릭시 해당 스크롤 이동 */

		/* sliding Window */
		var clk1 = 0;
		$(".slideArea .right").click(function(){
			if(clk1==0){
				$(".slideArea ul").css({"transform":"translatex(68px)"});
				$(".slideArea .left").show();
				$(".slideArea .right").show();
				clk1=1;
			}
			else if(clk1==1){
				$(".slideArea ul").css({"transform":"translatex(-225px)"});
				$(".slideArea .right").hide();
				clk1=2;
			}
		});
		$(" .left").click(function(){
			if(clk1==2){
				$(".slideArea ul").css({"transform":"translatex(68px)"});
				$(".slideArea .right").show();
				clk1=1;
			}
			else if(clk1==1){
				$(".slideArea ul").css({"transform":"translatex(237px)"});
				$(".slideArea .left").hide();
				clk1=0;
			}
		});
	});

