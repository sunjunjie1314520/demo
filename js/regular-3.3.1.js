
//-----------------------------------------------------------------------------------------------
username("#username"); //调用
function username(input_ID){ //姓名
$(input_ID).blur(function(){
	checkStr();
	})
$(input_ID).focus(function(){
	$(this).parents("li").addClass('acti').find('.prompt').show().text('');
	})
function checkStr(){
var username= $(input_ID).val();
	 reg = /^[\u4E00-\u9FA5]{2,4}$/;
	 
	   if(username==""){
            $(input_ID).parents("li").addClass('acti').find('.prompt').show().text('姓名不能为空');
        }else{
			if(!reg.test(username)){
            	$(input_ID).parents("li").addClass('acti').find(".prompt").show().text("姓名2到4位中文名");
				}
	  }
	}
}

//-----------------------------------------------------------------------------------------------
emptyture("#empty");
function emptyture(input_ID){	//不为空判断
	$(input_ID).blur(function(){
		empty();
	})
	$(input_ID).focus(function(){
		$(this).parents("li").addClass('acti').find('.prompt').show().text('');
	})
function empty(){
    	var phone = $(input_ID).val();
        if(phone==""){
			var title=$(input_ID).parents("li").addClass('acti').find('.prompt').attr("data");
            $(input_ID).parents("li").addClass('acti').find('.prompt').show().text(title+'不能为空');
        }
        return false;
      
    }
 }

//-----------------------------------------------------------------------------------------------
qq("#qqreg"); //调用
function qq(input_ID){ //QQ号正则
$(input_ID).blur(function(){
	checkqq();
	})
$(input_ID).focus(function(){
	$(this).parents("li").addClass('acti').find('.prompt').show().text('');
	})
function checkqq(){
    var phone = document.getElementById('qqreg').value;
    if(!(/^\d{5,10}$/.test(phone))){ 
        if(phone==""){
            $(input_ID).parents("li").addClass('acti').find('.prompt').show().text('QQ号不能为空');
        }else{
            $(input_ID).parents("li").addClass('acti').find(".prompt").show().text("QQ号5-10位数字");
        }
        return false;
        } 
    }
}
//-----------------------------------------------------------------------------------------------
Tel_number("#phone"); //调用
function Tel_number(input_ID){ //手机号
$(input_ID).blur(function(){
	checkPhone();
	})
$(input_ID).focus(function(){
	$(this).parents("li").addClass('acti').find('.prompt').show().text('');
	})
function checkPhone(){
    var phone = document.getElementById('phone').value;
    if(!(/^1[34578]\d{9}$/.test(phone))){ 
        if(phone==""){
            $(input_ID).parents("li").addClass('acti').find('.prompt').show().text('手机号不能为空');
        }else{
            $(input_ID).parents("li").addClass('acti').find(".prompt").show().text("手机号格式错误");
        }
        return false;
        } 
    }
}

//-----------------------------------------------------------------------------------------------

checkmail("#email"); //调用
function checkmail(input_ID){	//邮箱正则
	$(input_ID).blur(function(){
		Mailregular();
		})
	$(input_ID).focus(function(){
		$(this).parents("li").addClass('acti').find('.prompt').show().text('');
		})
	function Mailregular() {
		var mail= $(input_ID).val();
		var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (filter.test(mail)) return true;
		else {
		if(mail==""){
		    $(input_ID).parents("li").addClass('acti').find('.prompt').show().text('邮箱不能为空');
		}else{
		    $(input_ID).parents("li").addClass('acti').find(".prompt").show().text("邮箱格式不对");
		}

		return false;
		}
	}
}
//-----------------------------------------------------------------------------------------------	

   function phoneCode(){//验证码6位数字
		var code_value = document.getElementById('phoneCode').value;
		if(!(/^\d{6}$/.test(code_value))){ 
		if(code_value==""){
			$("#phoneCode").parents("li").addClass('acti').find('.prompt').show().text('验证码不能为空');
		}else{
			$("#phoneCode").parents("li").addClass('acti').find(".prompt").show().text("请输入6位数字");
		}
		return false;
		} 
    }
//-----------------------------------------------------------------------------------------------

function pass(obj){//密码6位-10位 a-z A-Z 0-9
    var phone =$(obj).val();
    if(!(/^[a-zA-Z0-9]{6,12}$/.test(phone))){ 
        if(phone==""){
            $(obj).parents("li").addClass('acti').find('.prompt').show().text('密码不能为空');
        }else{
            $(obj).parents("li").addClass('acti').find(".prompt").show().text("密码不能少于6位-10位");
        }
        return false;
        } 
   }


