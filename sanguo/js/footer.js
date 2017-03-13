preLoadImg();
var neizhenbg;

function preLoadImg(){
	var progress=0;
	function drawProgress(){
		$("#inProgress").css("width",progress+"%");
		if(progress==100){
			$("body").css("background","url("+neizhenbg.src+") no-repeat");
  			$("body").css("background-size","100% 100%");
  			$(".load_progress").css("display","none");
  			$(".NZ_caontaine").load("html/neiZhen.html");
		}
	}
	neizhenbg=new Image();
	neizhenbg.src="./images/other/neizhenbg.jpg";
	neizhenbg.onload=function(){
		progress=100;
		drawProgress()
	}
}
$(".zhuye").on("click",function(){
    $(".NZ_caontaine").load("html/neiZhen.html");
})
$(".fuben").on("click",function(){
	$(".NZ_caontaine").load("html/fuBen.html");
});
