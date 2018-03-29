$(document).ready(function(){
    /*********修改登录密码************/
    var $old_lpwd = $(".old_lpwd"),
        $new_lpwd = $(".new_lpwd"),
        $new_lpwd_2 = $(".new_lpwd_2"),
        $chapwd_btn = $(".chapwd_btn"),
        pwdpreg = /^[0-9A-Za-z]{6,20}$/,//可输入6-20位字母或数字的密码正则
        old_lpwd,
        new_lpwd,
        new_lpwd2,
        new_lpwd_2;
    /***********修改手机号************/
    var $phone_btn = $(".phone_btn"),
        $new_phone = $(".new_phone"),
        $oldemail_verify = $(".oldemail_verify"),
        $oldph_verify = $(".oldph_verify"),
        $old_verify = $(".old_verify"),
        $newph_verify = $(".newph_verify"),
        $email_fsbtn = $(".email_fsbtn"), //修改邮箱
        $ophone_fsbtn = $(".ophone_fsbtn"),
        $verify_way_phone = $(".verify_way_phone"),
        $verify_way_email = $(".verify_way_email"),
        $verify_emway_phone = $(".verify_emway_phone"),
        $verify_emway_email = $(".verify_emway_email"),
        $way_phone = $("#way_phone"),
        $way_email = $("#way_email"),
        copreg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4}$/,//可输入字母或数字的验证码正则
        phpreg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,//手机号
        copreg1 = /^[0-9]{6}$/,//可输入数字的验证码正则
        phone,
        old_verify,
        oldemail_verify,//修改邮箱
        oldph_verify,  //修改邮箱
        newph_verify;
    /************修改邮箱*************/ 
    var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //邮箱验证规则
        enReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4}$/,  //可输入4位字母和数字的正则
        emailpreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //邮箱验证规则
    var $new_email = $(".new_email"),
        $add_email = $(".add_email"),
        $email_btn = $(".email_btn"),
        $newemail_verify = $(".newemail_verify"),
        new_email,
        add_email,
        newemail_verify,
        emacc,
        emcode;
    /************添加邮箱*************/ 
    var $emacc = $(".J_emacc"),
        $emcode = $(".J_emcode"),
        $emcodeBtn = $(".emcodeBtn"),
        $new_email = $(".new_email"),
        $add_email = $(".add_email"),
        $addemail_btn = $(".addemail_btn"),
        new_email,
        add_email;
    /***************修改银行卡******************/ 
    var $chatab_btn = $(".chatab_btn"),
        $chabankInput = $(".chabankInput"),
        $chabankinfoInput = $(".chabankinfoInput"),
        nReg2 = /^[0-9]{1,50}$/,  //可输入16-19位正整数的正则 
        $s2 = $("#s2"),
        chabankInput,
        chabankinfoInput;
    /*****************关联银行卡******************/
    var $addtab_btn = $(".addtab_btn"),
        $addbankInput = $(".addbankInput"),
        $addbankinfoInput = $(".addbankinfoInput"),
        $p2 = $("#p2"),
        addbankInput,
        addbankinfoInput;
    /*****************设置支付密码******************/
    var $new_ppwd = $(".new_ppwd"),
        $new_ppwd_2 = $(".new_ppwd_2"),
        $ppwd_btn = $(".ppwd_btn"),
        $old_ppwd = $(".old_ppwd"),
        old_ppwd,
        new_ppwd,
        new_ppwd2,
        new_ppwd_2,
        acc_sec_ppwd1;
        var $cha_ppwd_btn = $(".cha_ppwd_btn");
    /*****************地址变更******************/
    var $address = $(".address"),
        $consignee = $(".consignee"),
        $phone_inp = $(".phone_inp"),
        $address1 = $(".address1"),
        $consignee1 = $(".consignee1"),
        $phone_inp1 = $(".phone_inp1"),
        $siteBtn = $(".siteBtn"),
        $add_siteBtn = $(".add_siteBtn"),
        $select_lg = $(".select_lg"),
        $select_lg1 = $(".select_lg1"),
        $z3 = $("#z3"),
        address,
        consignee,
        phone_inp;
    //点击操作弹出弹窗
    $(".acc_btn").click(function(){
        if($(this).hasClass("acc_sec_lpwd")){  //修改登录密码
            //弹窗
            click_layer($(".changepwd_layer"));
            //焦点验证
            focus_blurreg($old_lpwd,old_lpwd,"请输入原登录密码","登录密码输入有误，请重新输入",pwdpreg);
            focus_blurreg($new_lpwd,new_lpwd,"请输入新登录密码","请输入正确的新登录密码",pwdpreg);
            focus_cli($new_lpwd_2);
            pwd_again($new_lpwd_2,new_lpwd_2,new_lpwd2,$new_lpwd,"登密",pwdpreg);
        }else if($(this).hasClass("acc_sec_phone")){   //修改手机号
            //弹窗
            click_layer($(".changepho_layer"));
            //焦点验证
            focus_blurreg($old_verify,old_verify,"请输入验证码","请输入正确的验证码",copreg1);
            focus_blurreg($new_phone,phone,"请输入手机号","请输入正确的手机格式",phpreg);
            focus_blurreg($newph_verify,newph_verify,"请输入验证码","请输入正确的验证码",copreg1);
            //手机邮箱切换
            $(".verify_way").click(function(){
                verify($(this),$(".phoalert_tb"));
            });
        }else if($(this).hasClass("changemail")){  //修改邮箱
            //弹窗
            click_layer($(".changeemail_layer"));
            //焦点验证
            focus_blurreg($old_verify,old_verify,"请输入验证码","请输入正确的验证码",copreg);
            focus_blurreg($new_email,new_email,"请输入邮箱","请输入正确的邮箱",emailpreg);
            focus_blurreg($newemail_verify,newemail_verify,"请输入验证码","请输入正确的验证码",copreg);
            //手机邮箱切换
            $(".verify_way").click(function(){
                verify($(this),$(".emlalert_tb"));
            });
        }else if($(this).hasClass("addemail")){  //添加邮箱
            //弹窗
            click_layer($(".addemail_layer"));
            //焦点验证
            focus_blurreg($add_email,add_email,"请输入邮箱","请输入正确的邮箱",emailpreg);
            function emcodeBtn(){
                $emcodeBtn.click(function(){
                    $(this).addClass("emcodeBtn_jin");
                    emcodeTip = $(this).parent().parent().parent().next().find(".emcodeTip");
                    emcodeTip.show();
                })
            }
            $add_email.blur(function(){ 
                add_email = checkReg($add_email,"请输入邮箱","请输入正确的邮箱",emailpreg);
                if(add_email){              //判断邮箱是否已输入正确，控制获取按钮的开关
                    $emcodeBtn.removeClass("emcodeBtn_jin");
                    emcodeBtn();
                } else{
                    $emcodeBtn.addClass("emcodeBtn_jin");
                }
            });
            focus_blurreg($emcode,emcode,"请输入验证码","请输入正确的验证码",copreg);
            //手机邮箱切换
            $(".verify_way").click(function(){
                verify($(this),$(".emlalert_tb"));
            });
        }else if($(this).hasClass("acc_sec_bank")){  //变更银行卡号
            //弹窗
            click_layer($(".change_layer"));
            //焦点验证
            $s2.change(function(){
                select($s2,"地级市","请选择所属区域");
            })
            focus_blurreg($chabankInput,chabankInput,"请输入银行卡号","请输入正确的银行卡号",nReg2);
            focus_blur($chabankinfoInput,chabankinfoInput,"请输入开户分（支）行信息");
        }else if($(this).hasClass("acc_sec_bank1")){  //关联银行卡号
            //弹窗
            click_layer($(".addbank_layer"));
            //焦点验证
            $p2.change(function(){
                select($p2,"地级市","请选择所属区域");
            })
            focus_blurreg($addbankInput,addbankInput,"请输入银行卡号","请输入正确的银行卡号",nReg2);
            focus_blur($addbankinfoInput,addbankinfoInput,"请输入开户分（支）行信息");
        }else if($(this).hasClass("acc_sec_ppwd1")){  //设置支付密码
            //弹窗
            click_layer($(".addpwd_layer"));
            //焦点验证
            focus_blurreg($new_ppwd,new_ppwd,"请输入新支付密码","请输入正确的新支付密码",pwdpreg);
            focus_cli($new_ppwd_2);
            pwd_again($new_ppwd_2,new_ppwd_2,new_ppwd2,$new_ppwd,"支付",pwdpreg);
        }else if($(this).hasClass("acc_sec_ppwd")){
            //弹窗
            click_layer($(".chapwd_layer"));
            //焦点验证
            focus_blurreg($old_ppwd,old_ppwd,"请输入原支付密码","登录密码输入有误，请重新输入",pwdpreg);
            focus_blurreg($new_ppwd,new_ppwd,"请输入新支付密码","请输入正确的新支付密码",pwdpreg);
            focus_cli($new_ppwd_2);
            pwd_again($new_ppwd_2,new_ppwd_2,new_ppwd2,$new_ppwd,"支付",pwdpreg);
        }else if($(this).hasClass("change_site")){
            //弹窗
            click_layer($(".chaaddress_layer"));
            //焦点验证
            btn_val($address);
            btn_val($consignee);
            btn_val($phone_inp);
            focus_blur($address,address,"请输入收货地址");
            focus_blur($consignee,consignee,"请输入收货人姓名");
            focus_blurreg($phone_inp,phone_inp,"请输入手机号","请输入正确的手机号",phpreg);
            $z3.change(function(){
                select($z3,"市、县级市、县","请选择所属区域");
            })
            $select_lg.change(function(){
                select($select_lg,"请选择","请选择所在（或者周边）社区");
            })
        }else if($(this).hasClass("add_site")){
            //弹窗
            click_layer($(".address_layer"));
            //焦点验证
            focus_blur($address1,address,"请输入收货地址");
            focus_blur($consignee1,consignee,"请输入收货人姓名");
            focus_blurreg($phone_inp1,phone_inp,"请输入手机号","请输入正确的手机号",phpreg);
            $z3.change(function(){
                select($z3,"市、县级市、县","请选择所属区域");
            })
            $select_lg1.change(function(){
                select($select_lg1,"请选择","请选择所在（或者周边）社区");
            })
        }
    })
    //发生验证码验证
    $email_fsbtn.click(function(){
        coun_dis($(this),emailpreg,new_email);
    });
    $ophone_fsbtn.click(function(){
       coun_dis($(this),phpreg,phone);
    });

    //修改登录密码提交验证
    $chapwd_btn.click(function(){
        old_lpwd = checkReg($old_lpwd,"请输入原登录密码","登录密码输入有误，请重新输入",pwdpreg);
        new_lpwd = checkReg($new_lpwd,"请输入新登录密码","请输入正确的新登录密码",pwdpreg); 
        new_lpwd2 = checkReg3($new_lpwd,$new_lpwd_2,"请再次输入新登录密码","两次密码输入不一致，请重新输入",pwdpreg);
        if(old_lpwd&&new_lpwd&&new_lpwd2){
            layer.closeAll();
            layer_suc("您的登录密码已经修改成功！");
        }else{
            return false;
        }
    });
    //修改手机号提交验证
    $phone_btn.click(function(){
        old_verify = checkReg($old_verify,"请输入验证码","请输入正确的验证码",copreg1);
        phone = checkReg($new_phone,"请输入手机号","请输入正确的手机号码",phpreg);
        newph_verify = checkReg($newph_verify,"请输入验证码","请输入正确的验证码",copreg1);
        if(oldph_verify&&newph_verify&&phone){
            layer.closeAll();
            layer_suc("您的手机号码已经修改成功！");
        }else{
            return false;
        }
    });
    //修改邮箱提交验证
    $email_btn.click(function(){
        old_verify = checkReg($old_verify,"请输入验证码","请输入正确的验证码",copreg);
        newemail_verify = checkReg($newemail_verify,"请输入验证码","请输入正确的验证码",copreg);
        new_email = checkReg($new_email,"请输入邮箱","请输入正确的邮箱",emailpreg);
        if(old_verify&&newemail_verify&&new_email){
            layer.closeAll();
            layer_suc("您的邮箱已经修改成功！");
        }else{
            return false;
        }
    });
    //添加邮箱
    $addemail_btn.click(function(){
        add_email = checkReg($add_email,"请输入邮箱","请输入正确的邮箱",emailpreg);
        emcode = checkReg($emcode,"请输入验证码","请输入正确的验证码",copreg);
        if(add_email&&emcode){
            layer.closeAll();
            layer_suc("您的邮箱添加成功！");
        }else{
            return false;
        }
    });

    //修改银行卡
    $chatab_btn.click(function(){
        $s2.trigger("change");
        var s2 = select($s2,"地级市","请选择所属区域");
        chabankInput = checkReg($chabankInput,"请输入银行卡号","请输入正确的银行卡号",nReg2);
        chabankinfoInput = checkOther($chabankinfoInput,"请输入开户分（支）行信息");
        if(s2&&chabankInput&&chabankinfoInput){
            layer.closeAll();
            layer_suc("您的银行卡修改成功！");
            return true;
        }else{
            return false;
        }
    }); 
    //关联银行卡
    $addtab_btn.click(function(){
        $p2.trigger("change");
        var p2 = select($p2,"地级市","请选择所属区域");
        addbankInput = checkReg($addbankInput,"请输入银行卡号","请输入正确的银行卡号",nReg2);
        addbankinfoInput = checkOther($addbankinfoInput,"请输入开户分（支）行信息");
        if(p2&&addbankInput&&addbankinfoInput){
            layer.closeAll();
            layer_suc("您的银行卡关联成功！");
            return true;
        }else{
            return false;
        }
    });
    //设置支付密码
    $ppwd_btn.click(function(){
        new_ppwd = checkReg($new_ppwd,"请输入新支付密码","请输入正确的新支付密码",pwdpreg);
        new_ppwd2 = checkReg3($new_ppwd,$new_ppwd_2,"请再次输入新支付密码","两次密码输入不一致，请重新输入",pwdpreg);
        if(new_ppwd&&new_ppwd2){
            layer.closeAll();
            layer_suc("您的支付密码设置成功！");
        }else{
            return false;
        }
    });
    //修改支付密码提交验证
    $cha_ppwd_btn.click(function(){
        old_ppwd = checkReg($old_ppwd,"请输入原支付密码","登录密码输入有误，请重新输入",pwdpreg);
        new_ppwd = checkReg($new_ppwd,"请输入新支付密码","请输入正确的新支付密码",pwdpreg); 
        new_ppwd2 = checkReg3($new_ppwd,$new_ppwd_2,"请再次输入新支付密码","两次密码输入不一致，请重新输入",pwdpreg);
        if(old_ppwd&&new_ppwd&&new_ppwd2){
            layer.closeAll();
            layer_suc("您的支付密码已经修改成功！");
        }else{
            return false;
        }
    });
    //变更收货地址
    $siteBtn.click(function(){
        $z3.trigger("change");
        $select_lg.trigger("change");
        address = checkOther($address,"请输入收货地址");
        consignee = checkOther($consignee,"请输入收货人姓名");
        phone_inp = checkReg($phone_inp,"请输入手机号","请输入正确的手机号",phpreg);
        var select_lg = select($select_lg,"请选择","请选择所在（或者周边）社区");
        var z3 = select($z3,"市、县级市、县","请选择所属区域");
        if(z3&&select_lg&&address&&consignee&&phone_inp){
            layer.closeAll();
            layer_suc("您的收货地址已经修改成功！");
        }else{
            return false;
        }
    })
    //添加收货地址
    $add_siteBtn.click(function(){
        $z3.trigger("change");
        $select_lg.trigger("change");
        address = checkOther($address1,"请输入收货地址");
        consignee = checkOther($consignee1,"请输入收货人姓名");
        phone_inp = checkReg($phone_inp1,"请输入手机号","请输入正确的手机号",phpreg);
        var select_lg1 = select($select_lg1,"请选择","请选择所在（或者周边）社区");
        var z3 = select($z3,"市、县级市、县","请选择所属区域");
        if(z3&&select_lg1&&address&&consignee&&phone_inp){
            layer.closeAll();
            layer_suc("您的收货地址已经修改成功！");
        }else{
            return false;
        }
    })
    
	//去掉最后一条的下划分割线
	var $acc_sec_dl_last = $(".account_cont").find(".acc_sec_dl:last");
	$acc_sec_dl_last.css({"border":"0px"});
	//end 去掉最后一条的下划分割线

})