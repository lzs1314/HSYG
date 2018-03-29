$(document).ready(function() {
    var $provBtn_add_tb2 = $(".provBtn_add_tb2"),
    $cfbtn = $(".cfbtn"),
    $add_btn = $(".add_btn"),
    $add_confirm = $(".add_confirm"),
    $add_cancel = $(".add_cancel"),
    $btnn = $(".btnn"),
    $skr_text = $(".skr_text"),
    $skzh_text = $(".skzh_text"),
    $money_text = $(".money_text"),
    $tan_bz = $(".tan_bz"),
    $dj_date = $(".dj_date"),
    $sh_text = $(".sh_text"),
    $start = $("#start"),
    $end = $("#end"),
    $derive_btn = $(".derive_btn"),
    $name = $(".vessel_name").children("input"),
    $order_txt = $(".order_txt"),
    $intext = /[zz][0-9]{11}/,//单据编号
    $dates = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, //日期格式
    $sname = /^[\u4e00-\u9fa5a-zA-Z]{1,10}$/,//字母汉字
    $num = /[0-9]{1,19}/,//数字
    $mon = /(^[1-9]([0-9]{0,8})?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)|(^[0-9]\.[0-9]([1-9])?$)|(^[0-9]\.[1-9]?$){1,10}/,//金钱格式
    dj_date,
    money_text,
    tan_bz;

    $start.focus(function() {
        focusInput($(this));
    });
    $end.focus(function() {
        focusInput($(this));
    });
    $dj_date.focus(function() {
        focusInput($(this));
    });
    $money_text.focus(function() {
        focusInput($(this));
    });
    $tan_bz.focus(function() {
        focusInput($(this));
    });
    $order_txt.focus(function() {
        OnFocus($(this));
    });

    $start.blur(function() {
        OnBlur($(this));
    });
    $end.blur(function() {
        OnBlur($(this));
    });
    $dj_date.blur(function() {
        dj_date = checkReg($dj_date, "请录入单据日期", "请录入正确的单据日期", $dates);
    });
    $money_text.blur(function() {
        money_text = checkReg($money_text, "请录入金额", "请录入正确的金额", $mon);
    });
    $tan_bz.blur(function() {
        OnBlur($(this));
    });
    $order_txt.blur(function() { //快递单号
        Checkorder();
    });

    //录入密码验证
    function Checkorder() {
        if ($order_txt.val() == "") {
            $order_txt.addClass("b_red").removeClass("b_blue");
            $(".recp").show().html("请录入密码");
            return false;
        } else {
            $order_txt.removeClass("b_blue").removeClass("b_red");
            $(".recp").hide();
            return true;
        }
    }
    //end 录入密码验证
    //录入单号验证
    $name.focus(function() {
        OnFocus($name);
        if ($(this).val() == "请录入单据编号") {
            $(this).val("");
        }
    });
    $name.blur(function() {
        if ($(this).val() == "") {
            OnBlur($(this));
            $(this).val("请录入单据编号");
            $(this).css({
                color: "#909090"
            });
        } else if (!$intext.test($(this).val())) {
            $(this).removeClass("aI_blue").addClass("aI_red");
        } else {
            OnBlur($(this));
            $(this).css({
                color: "#434343"
            });
        }
    });
    $name.keyup(function() {
        $(this).css({
            color: "#434343"
        });
    });
    //end 录入单号验证
    //订单状态（仿select）
    var $tit = $(".gd_com_sel").children("p");
    $tit.click(function() {
        var $ss = $tit.index(this);
        $(this).toggleClass("gd_sel_p1");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function() {
            $tit.eq($ss).html($(this).html()).removeClass("gd_sel_p1");
            $(this).parent().hide();
        });
    });
    $(document).bind("click",
    function(e) {
        var target = $(e.target);
        if (target.closest(".gd_com_sel").length == 0) {
            $tit.removeClass("gd_sel_p1");
            $(".gd_com_ul").hide();
        }
    });
    $(".dobtn").click(function() {
        $(this).parent().parent().remove();
    });
    //录入密码弹窗
    var $reject_reason = $(".reject_reason");
    layer.open({
        type: 1,
        title: false,
        closeBtn: 1,
        skin: 'layerBtn1',
        area: ['380px', '135px'],
        btn: ['确 定'],
        content: $reject_reason,
        yes: function(index) {
            if (Checkorder()) {
                layer.close(index);
            }
        }
    })
    //封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj, con1, con2, preg) {
        var $val = obj.val();
        var $wr = obj.parent().next();
        $val = Trim($val, "g");
        if ($val == "") {
            WrongColor($wr, obj);
            $wr.html(con1);
            return false;
        } else {
            if (!preg.test($val)) {
                WrongColor($wr, obj);
                $wr.html(con2);
                return false;
            } else {
                RightColor($wr, obj);
                $wr.html("&nbsp;");
                return true;
            }
        }
    }

    //商户下拉

    //收款用户选择
    pbselect_lg3Ch();
    var $pbselect_lg3 = $(".pbselect_lg3");
    function pbselect_lg3Ch() {
        var $pbselect_lg3 = $(".pbselect_lg3");
        if ($pbselect_lg3.val() == "商户") {
            $(".sh").show();
            $(".sq").hide();
            $skr_text.val("李易峰");
            $skzh_text.val("1213456789828");
            $skr_text.attr("disabled", true);
            $skzh_text.attr("disabled", true);
        } else if ($pbselect_lg3.val() == "社区主") {
            $skr_text.val("李易峰");
            $skzh_text.val("1213456789828");
            $skr_text.attr("disabled", true);
            $skzh_text.attr("disabled", true);
            $(".sq").show();
            $(".sh").hide();
        }
    }

    $pbselect_lg3.click(function() {
        pbselect_lg3Ch();
    });

    //end 收款用户选择
    //用户名验证
    $sh_text.focus(function() {
        focusInput($(this));
    });
    $sh_text.blur(function() {
        $(this).val("");
        $sh_ul.hide();
        // CheckSh();
    });
    $sh_text.change(function() {
        $(this).val("");
        $sh_ul.hide();
        // CheckSh();
    });
    function CheckSh() {
        var $pbselect_lg3val = $sh_text.val();
        var $nextp3 = $(".sh_td").next();
        if ($pbselect_lg3val == "") {
            WrongColor($nextp3, $sh_text);
            $nextp3.html("请录入商户名");
            return false;
        } else {
            RightColor($nextp3, $sh_text);
            $nextp3.html("&nbsp;");
            return true;
        }
    }
    //end 用户名验证
    $provBtn_add_tb2.on("click", ".sh_td",function(e) {
        var $sh_inp = $(this).children("input"),
            $sh_ul = $(this).children("ul"),
            $sh_li = $sh_ul.children("li");
        if ($sh_inp.val() != "") {
            $sh_inp.trigger("keyup");
        }
        $sh_inp.keyup(function() {
            $sh_ul.show();
            $sh_ul.css({
                "position": "absolute",
                "top": "212px",
                "left": "205px"
            });
        });
        $sh_inp.blur(function() {
            $sh_ul.hide();
            CheckSh();
        });
        $sh_li.hover(function() {
            $(this).addClass("select_on").siblings("li").removeClass("select_on");
            $sh_inp.off("blur");
        },
        function() {
            $(this).removeClass("select_on");
        });
        $sh_li.click(function(e) {
            $sh_inp.val($(this).html());
            $(this).parent().hide();
            CheckSh();
            e.stopPropagation();
        });
        e.stopPropagation();
        $(document).click(function() {
            CheckSh();
            $sh_ul.hide();
        });
    });
    // end 商户下拉
    //选择社区 
    var $p3 = $("#p3");
    $p3.blur(function() {
        CheckstreetInfo();
    });
    $p3.change(function() {
        CheckstreetInfo();
    });
    function CheckstreetInfo() {
        var $streetInfoval3 = $p3.val();
        var $nextp = $(".regsel").next();
        if ($p3.val() == "" || $p3.val() == "市、县级市、县") {
            WrongColor($nextp, $p3);
            $nextp.html("请选择社区");
            return false;
        } else {

            RightColor($nextp, $p3);
            $nextp.html("&nbsp;");
            return true;
        }
    }
    //end 选择社区
    //新建弹窗
    $add_btn.click(function() {
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: '606px',
            content: $(".provBtn_add_tb2")
        });
        $today  =  new Date(),
           $day  =  $today.getDate(),
           $month  =  $today.getMonth()  +  1,
           $year  =  $today.getFullYear(),
        $month < 10 ? $month = "0" + $month: $month;
        $day < 10 ? $day = "0" + $day: $day;
        date  =  $year  +  "-"  + $month  +  "-"  +  $day; $(".dj_date").val(date);
    });
    //编辑弹窗
    $cfbtn.click(function() {
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: '606px',
            content: $(".provBtn_add_tb2")
        });
        $dj_date.val($(this).parent().prev().prev().prev().prev().prev().prev().prev().html());
        $skr_text.val($(this).parent().prev().prev().prev().prev().prev().html());
        $skzh_text.val($(this).parent().prev().prev().prev().prev().html());
        $money_text.val($(this).parent().prev().prev().prev().html());
        $tan_bz.val($(this).parent().prev().prev().children().html());

    });

    //点击保存并提交
    $add_confirm.click(function() {
        if ($(".pbselect_lg3").val() == "社区主") {
            dj_date = checkReg($dj_date, "请录入单据日期", "请录入正确的单据日期", $dates);
            money_text = checkReg($money_text, "请录入金额", "请录入正确的金额", $mon);
            skr_text = checkReg($skr_text, "请录入收款人", "请录入正确的收款人", $sname);
            skzh_text = checkReg($skzh_text, "请录入账号", "请录入正确的收款账号", $num);
            if (dj_date && money_text && CheckstreetInfo()) {
                layer.closeAll();
            }
        } else if ($(".pbselect_lg3").val() == "商户") {
            dj_date = checkReg($dj_date, "请录入单据日期", "请录入正确的单据日期", $dates);
            money_text = checkReg($money_text, "请录入金额", "请录入正确的金额", $mon);
            skr_text = checkReg($skr_text, "请录入收款人", "请录入正确的收款人", $sname);
            skzh_text = checkReg($skzh_text, "请录入账号", "请录入正确的收款账号", $num);
            CheckSh();
            $skr_text.val("李易峰");
            $skzh_text.val("1213456789828");
            if (dj_date && money_text && CheckSh()) {
                layer.closeAll();
                return true;
            }
        }

    });
    $add_cancel.click(function() {
        layer.closeAll();
    })
    $("body").on("click", "#laydate_clear", function () {
        start.min = '1900-01-01 00:00:00';
        end.min = '1900-01-01 00:00:00';
    })
    //时间设置
    laydate.skin('danlan');
    var start = {
        elem: '#start',
        format: 'YYYY-MM-DD',
        //日期格式
        min: '1900-01-01 00:00:00',
        //最小日期
        max: '2099-12-31 23:59:59',
        //最大日期
        start: laydate.now(),
        //开始日期
        istime: false,
        istoday: false,
        choose: function(datas) {
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
        }
    };
    var end = {
        elem: '#end',
        format: 'YYYY-MM-DD',
        //日期格式
        min: '1900-01-01 00:00:00',
        //最小日期
        max: '2099-12-31 23:59:59',
        //最大日期
        start: laydate.now(),
        //开始日期
        istime: false,
        istoday: false,
        choose: function(datas) {
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };
    var end1 = {
        elem: '#end1',
        format: 'YYYY-MM-DD',
        //日期格式
        min: '1900-01-01 00:00:00',
        //最小日期
        max: laydate.now(),
        //最大日期
        start: laydate.now(),
        //开始日期
        istime: false,
        istoday: false,
        choose: function(datas) {
            start.max = datas; //结束日选好后，重置开始日的最大日期
            dj_date = checkReg($dj_date, "请录入单据日期", "请录入真确的单据日期", $dates);
            $("#laydate_clear").click(function() {
                var $wr = $dj_date.next();
                WrongColor($wrong, $dj_date);
                $wr.html("请录入单据日期");
            })
        }
    };
    laydate(start);
    laydate(end);
    laydate(end1);
	
	$("body").on("click", "#laydate_clear", function () {
        start.min = '1900-01-01 00:00:00';
        end.min = '1900-01-01 00:00:00';
    })

    //end 时间设置
    //综合样式判定
    function RightColor(obj, objn) {
        obj.addClass("note_right").removeClass("note_wrong");
        objn.removeClass("b_blue").removeClass("b_red");
    }
    function WrongColor(obj, objn) {
        obj.addClass("note_wrong").removeClass("note_right");
        objn.addClass("b_red").removeClass("b_blue");
    }
    function OnFocus(obj) {
        obj.addClass("b_blue").removeClass("b_red");
    }
    //去除空格  
    function Trim(str, is_global) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g, "");
        if (is_global.toLowerCase() == "g") {
            result = result.replace(/\s/g, "");
        }
        return result;
    }

    function focusInput($input) {
        OnFocus($input);
    }
    function OnFocus(obj) {
        obj.addClass("b_blue").removeClass("b_red");
    }
    function OnBlur(obj) {
        obj.removeClass("b_blue").removeClass("b_red");
    }

})