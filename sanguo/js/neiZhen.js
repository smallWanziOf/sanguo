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
  			loadUserMessage();
		}
	}
	neizhenbg=new Image();
	neizhenbg.src="./images/other/neizhenbg.jpg";
	neizhenbg.onload=function(){
		progress=100;
		drawProgress()
	}
}

function loadUserMessage(){
	var uName={"uName":$("#user_name").val()}
    $.ajax({
        type:"POST",
        data:uName,
        url:"./php/loadUserMessage.php",
        success:function(e){
        	if(e!="error"){
        		var data = JSON.parse(e);
        		$(".NZ-header-logo").html("<img src='./images/selectRole/"+data.main_role+".JPG' /><div>"+data.user_name+"</div>");
        		$(".NZ-header-tili").html("<div>"+data.user_power+"/100</div>")
        		$(".NZ-header-yuanbao").html("<div>"+data.user_gmoney+"</div>")
        		$(".NZ-header-jinbi").html("<div>"+data.user_money+"</div>")
        		$(".NZ-header-vip").html("<div>"+data.user_v+"</div>")
        		$(".NZ-header-zhanli").html("<div>"+data.user_combat+"</div>")
        	}else{
        		alert("登录错误！请关闭重新连接")
        	}
        },
        error:function(error){
            alert("登录错误！请关闭重新连接")
        }
    });
}
clickImg();
function clickImg(){
	$(".fuben").on("click",function(){
		$(".NZ_caontaine").load("html/fuBen.html")
	})
}