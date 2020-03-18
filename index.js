$(function(){
    //get dom
    var $name = $('#name'),
        $tel = $('#tel'),
        $psw = $('#psw'),
        $vfcode = $('#vfcode'),
        $getcode = $('#getcode'),
        $time = $('#time'),
        $vfcodetext = $('#vfcodetext'),
        $submit = $('#submit');
        
    // 字符验证
    $name.focusout(function(){
        if(!validate('#name')) return;
    })
    $psw.focusout(function(){
        if(!validate('#psw')) return;
    })
    $tel.focusout(function(){
        if(!validate('#tel')) return;
    })
    $vfcode.focusout(function(){
        if(!validate('#vfcode')) return;
    })

    //验证码推迟
    $getcode.click(function(){
        $vfcodetext.css('display','block')
        var time=5;
        var timer = setInterval(function(){
            if(time == 0){
                $vfcodetext.html('请求超时，请稍后重试');
                clearInterval(timer);
            }
            time--;
            $time.html(time);
        },1000)
        $getcode.attr('disabled',true); 
    });

    //表单提交
    $submit.click(function(){
        if(!validate('#name') || !validate('#tel') ||!validate('#psw')||!validate('#vfcode'))return;
    });

    //表单级别验证
    function validate(field){
        var $data = $(field),
            $msg = $(field + '-validation-msg');
        //validate null
        if($data.val()=== ''){
            $msg.html('不能为空!');
            $data.select();//设置焦点
            return false;
        }
        if(field == '#name'){
            if(/[^\u4E00-\u9FA5\w]/.test($data.val())){
                $msg.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
                return false;
            }else if(!(/\D/.test($data.val()))){
                $msg.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
                return false;
            }
        }
        else if(field == '#tel'){
            if(!(/^1[34578]\d{9}$/.test($data.val()))){
                $msg.html('手机号码格式不正确');
                return false;
            }
        }else if(field == '#psw'){
            if(!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($data.val()))){
                $msg.html('密码长度为8-14个字符,数字,字母,字符至少包含两种,不能包含中文和空格');
                return false;
            }
        }
        $msg.html('');
        return true;
    }
})