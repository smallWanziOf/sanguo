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
    var reg=/^[0-9a-zA-Z\u4e00-\u9fa5]{0,6}$/;
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
$(".click_login").click(function(){
    var userMessage={"userName":$("#input_user").val(),"userPwd":$("#input_pwd").val()}
    $.ajax({
        type:"POST",
        data:userMessage,
        url:"./php/login.php",
        success:function(e){
            if(e=="success"){
              $("#user_name").val(userMessage["userName"]);
              $(".form-group-login").css("display","none");
              $(".notice_panel").css("display","block");
              //$("#main_container").load(dev_location+"mainApp/selectRole.html");
              //window.location.href=dev_location+"mainApp/selectRole.html?UFO"+Math.ceil(Math.random()*520)+"_"+decToHex($("#inputName").val());
            }else{
              $(".notice_login").html("用户名或密码错误");
            }
        },
        error:function(error){
            alert("登录错误！请关闭重新连接")
        }
    })
})

/*点击显示加载页面*/
$(".notice_btn").on("click",function(){
  $(".notice_panel").css("display","none");
  $(".load_progress").css("display","block");
  reploadImg()
})

var selectRole1,
    selectRole2,
    selectRole3,
    selectRole4,
    selectRole5,
    selectRole6,
    selectRole7,
    selectRole8,
    selectRole9,
    selectRole10,
    selectRoleBg;
/*预加载所有的资源包*/
function reploadImg(){
  var progress=0;
  var intogameImg = new Image();
  intogameImg.src = "./images/selectRole/intogame.jpg";
  function drawProgress(){
    $("#inProgress").css("width",progress+"%");
    if(progress==100){
      $(".progressTip").html("<img src="+intogameImg.src+">");
      $(".progressTip img").on("click",function(){
        $("#main_container").load("html/selectRole.html");
        selectRolePage()
      })
    }
  }

  selectRole1 = new Image();
  selectRole1.src = "./images/selectRole/1.JPG";
  selectRole1.onload=function(){
    progress+=10;
    drawProgress()
  }

  selectRole2 = new Image();
  selectRole2.src = "./images/selectRole/2.JPG";
  selectRole2.onload=function(){
    progress+=10;
    drawProgress()
  }

  selectRole3 = new Image();
  selectRole3.src = "./images/selectRole/3.JPG";
  selectRole3.onload=function(){
    progress+=10;
    drawProgress()
  }
  selectRole4 = new Image();
  selectRole4.src = "./images/selectRole/4.JPG";
  selectRole4.onload=function(){
    progress+=10;
    drawProgress()
  }

  selectRole5 = new Image();
  selectRole5.src = "./images/selectRole/5.JPG";
  selectRole5.onload=function(){
    progress+=10;
    drawProgress()
  }

  selectRole6 = new Image();
  selectRole6.src = "./images/selectRole/6.JPG";
  selectRole6.onload=function(){
    progress+=10;
    drawProgress()
  }

  selectRole7 = new Image();
  selectRole7.src = "./images/selectRole/7.JPG";
  selectRole7.onload=function(){
    progress+=10;
    drawProgress()
  }

  selectRole8 = new Image();
  selectRole8.src = "./images/selectRole/8.JPG";
  selectRole8.onload=function(){
    progress+=10;
    drawProgress()
  }

  selectRoleBg = new Image();
  selectRoleBg.src = "./images/selectRole/select_bg.jpg";
  selectRoleBg.onload=function(){
    progress+=20;
    drawProgress()
  }
  
}

function selectRolePage(){
  $("body").css("background","url("+selectRoleBg.src+") no-repeat");
  $("body").css("background-size","100% 100%");
  setTimeout(function(){
    $("#swiper-container3 .swiper-wrapper").html(
    "<div class='swiper-slide' id='1'><img src='"+selectRole1.src+"' /></div>"+
    "<div class='swiper-slide' id='5'><img src='"+selectRole5.src+"' /></div>"+
    "<div class='swiper-slide' id='2'><img src='"+selectRole2.src+"' /></div>"+
    "<div class='swiper-slide' id='6'><img src='"+selectRole6.src+"' /></div>"+
    "<div class='swiper-slide' id='3'><img src='"+selectRole3.src+"' /></div>"+
    "<div class='swiper-slide' id='7'><img src='"+selectRole7.src+"' /></div>"+
    "<div class='swiper-slide' id='4'><img src='"+selectRole4.src+"' /></div>"+
    "<div class='swiper-slide' id='8'><img src='"+selectRole8.src+"' /></div>"
    );
    var mySwiper = new Swiper('.swiper-container',{
      effect : 'coverflow',
      slidesPerView: 3,
      centeredSlides: true,
    });
    $("#sure_btn").html("<div class='sure_and_into'>确认选择主角卡</div>");
    $(".sure_and_into").on("click",function(){
      var mainRole = {"mainRole":$(".swiper-slide-active")[0].id,"uName":$("#user_name").val()};
      $.ajax({
        type:"POST",
        data:mainRole,
        url:"./php/selectMainRole.php",
        success:function(e){
          if(e=="success"){
            $("#main_container").load("html/footer.html",function(){
              $(".load_progress").css("display","block");
            });
          }else{
            alert("登录错误！请关闭重新连接")
          }
        },
        error:function(error){
            alert("登录错误！请关闭重新连接")
        }
      });
    })
  },500)
}
var touch=true;
document.addEventListener("touchmove",function(e){
  if(touch){
    e.preventDefault();
    e.stopPropagation();
  }
},false);