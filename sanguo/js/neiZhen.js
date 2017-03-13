loadUserMessage();
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

