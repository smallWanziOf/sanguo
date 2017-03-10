/*点击注册*/
$(".click_regist").on("click",function(){
	$(".form-group-regist").css("display","block");
	$(".form-group-login").css("display","none");
})
/*注册点击返回*/
$(".click_regist_return").on("click",function(){
	$(".form-group-regist").css("display","none");
	$(".form-group-login").css("display","block");
})
/*验证注册信息*/
//regist
//注册账号
$("#input_user_regist").on("change",function(){
    var reg=/^[0-9a-zA-Z\u4e00-\u9fa5]{0,8}$/;
    if(!reg.test($(this).val())){
        $(this).val('');
        $(".notice_message").html("账号格式错误");
    }else{
    	$(".notice_message").html("");
    }
})
//注册密码
$("#input_pwd_regist").on("change",function(){
    var reg=/^[0-9a-zA-Z]{6,16}$/;
    if(!reg.test($(this).val())){
        $(this).val('');
        $(".notice_message").html("密码格式错误");
    }else{
    	$(".notice_message").html("");
    }
})
//验证密码
$("#input_pwd_regist_repeat").on("change",function(){
	var repeatPwd=$.trim($(this).val());
	var newPwd=$.trim($("#input_pwd_regist").val());
    if(repeatPwd!=newPwd){
        $(this).val('');
        $(".notice_message").html("两次输入的密码不一致");
    }else{
    	$(".notice_message").html("");
    }
})
//确定注册
$(".click_login_sure").on("click",function(){
	debugger;
	if($(".notice_message").html()!="") return
    var acount=$.trim($("#input_user_regist").val());
    var pwd=$.trim($("#input_pwd_regist").val());
        if(acount!=''&&pwd!=''){
          var userMessage={"userName":acount,"userPwd":pwd};
          $.ajax({
            type:"POST",
            data:userMessage,
            url:"./php/regist.php",
            success:function(e){
              if(e=="hasExist"){
                $(".notice_message").html("用户名已被注册")
              }else if(e=="success"){
                $(".notice_message").html("注册成功！")
                $("#input_user").val(acount);
                $("#input_pwd").val(pwd);
                $("#input_user_regist").val('');
                $("#input_pwd_regist").val('');
                $("#input_pwd_regist_repeat").val('');
                setTimeout(function(){
                	$(".click_regist_return").click();
                }, 1000);
              }else{
                $(".notice_message").html("注册失败！请重新注册")
              }
            },
            error:function(){
              alert("注册失败！请重新登录")
            }
          })
        }else{
          alert("注册格式有误！请重新填写")
        } 
})

/*点击登录*/
//login
$("#bg_login").click(function(){
    var userMessage={"userName":$("#inputName").val(),"userPwd":$("#inputPassword").val()}
    $.ajax({
        type:"POST",
        data:userMessage,
        url:"login.php",
        success:function(e){
            if(e=="success"){
              $("#user_name").val(userMessage["userName"]);
              $("#login_tip").html("<h3>登录成功！页面正在跳转中...</h3>");
              $("#main_Container").load(dev_location+"mainApp/selectRole.html");
              //window.location.href=dev_location+"mainApp/selectRole.html?UFO"+Math.ceil(Math.random()*520)+"_"+decToHex($("#inputName").val());
            }else{
              $("#login_tip").html("<div class='alert alert-danger' role='alert'>用户名或密码错误！</div>");
            }
        },
        error:function(error){
            alert("登录错误！请关闭重新连接")
        }
    })
})