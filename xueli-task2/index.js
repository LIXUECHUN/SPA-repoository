$(function(){
    //get dom
    var $name = $('#name'),
        $tel = $('tel'),
        $psw = $('#psw'),
        $vfcode = $('#vfcode'),
        $getcode = $('#getcode'),
        $time = $('#time'),
        $vfcodetext = $('#vfcodetext'),
        $submit = $('#submit');
        
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

    //表单级别
    function validate(field){
        var $data = $(field),
            $msg = $(field + '-validation-msg');
            // console.log($msg);
        //validate null
        if($data.val()=== ''){
            $msg.html('不能为空!');
            $data.select();//设置焦点
            return false;
        }
        // if($msg == $('#name-validation-msg')){
        //     console("111")
        // }
        $msg.html('');
        return true;
    }
        // 手机字符

    //字符级别
})