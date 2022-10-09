
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
		$("#inter .slideArea .right").click(function(){
			if(clk1==0){
				$("#inter .slideArea ul").css({"transform":"translatex(-120px)"});
				$("#inter .slideArea .left").show();
				$("#inter .slideArea .right").show();
				clk1=1;
			}
			else if(clk1==1){
				$("#inter .slideArea ul").css({"transform":"translatex(-413px)"});
				$("#inter .slideArea .right").hide();
				clk1=2;
			}
		});
		$("#inter .slidearea .left").click(function(){
			if(clk1==2){
				$("#inter .slideArea ul").css({"transform":"translatex(-120px)"});
				$("#inter .slideArea .right").show();
				clk1=1;
			}
			else if(clk1==1){
				$("#inter .slideArea ul").css({"transform":"translatex(237px)"});
				$("#inter .slideArea .left").hide();
				clk1=0;
			}
		});

		$(".more_info1 .slideArea .right").click(function(){
			if(clk1==0){
				$(".more_info1 .slideArea ul").css({"transform":"translatex(-303px)"});
				$(".more_info1 .slideArea .left").show();
				$(".more_info1 .slideArea .right").show();
				clk1=1;
			}
			else if(clk1==1){
				$(".more_info1 .slideArea ul").css({"transform":"translatex(-606px)"});
				clk1=2;
			}
			else if(clk1==2){
				$(".more_info1 .slideArea ul").css({"transform":"translatex(-761px)"});
				$(".more_info1 .slideArea .right").hide();
				clk1=3;
			}
		});
		$(".more_info1 .slideArea .left").click(function(){
			if(clk1==3){
				$(".more_info1 .slideArea ul").css({"transform":"translatex(-606px)"});
				$(".more_info1 .slideArea .right").show();
				clk1=2;
			}
			else if(clk1==2){
				$(".more_info1 .slideArea ul").css({"transform":"translatex(-303px)"});
				clk1=1;
			}
			else if(clk1==1){
				$(".more_info1 .slideArea ul").css({"transform":"translatex(0)"});
				$(".more_info1 .slideArea .left").hide();
				clk1=0;
			}
		});
	});

