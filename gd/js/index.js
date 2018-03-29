//
// $(function(){
//
//     var $olLi = $('.lunbo2 li');
//     var $ulLi = $('.banner_top_right ul li');
//     var oneWidth = $ulLi.width();
//     var iNow = 0;
//     var timer = null;
// var t=0;
//
//     $ulLi.slice(1).each(function(){
//         $(this).css('left',oneWidth);
//     });
//     t=setInterval(timer,3000)
//
//     $olLi.mouseover(function(){
//         clearTimeout(timer);
//         timer = setTimeout($.proxy(function(){
//             $(this).attr('class','lunbo2_color').siblings().attr('class','');
//             var index = $(this).index();
//
//             if( iNow < index ){
//                 $ulLi.eq( $(this).index() ).css('left',oneWidth);
//                 $ulLi.eq(iNow).animate({ left : -oneWidth },400);
//             }
//             else if( iNow > index ){
//                 $ulLi.eq( $(this).index() ).css('left',-oneWidth);
//                 $ulLi.eq(iNow).animate({ left : oneWidth },400);
//             }
//             $ulLi.eq( $(this).index() ).animate({ left : 0 },400);
//
//             iNow = index;
//         },this),400);
//     });
//
//
//
//
// });




$(function(){
//	设置轮播部分的高度
    var imgW=0;
    var imgH=0;
    var listH=0;
    var timer=null;
    var num=0;
    var num1=0;
    setBannerHeight();
    $(window).resize(function(){
        setBannerHeight();
    })
    function setBannerHeight(){
        imgW=$('.banner_top_right ul').find('img').width();
        imgH=$('.banner_top_right ul').find('img').height();
        $('.banner_top_right').height(imgH);
        $('.banner_top_right ul').css({position:'absolute',left:0,top:0})
    }

    //轮播图点击切换
    $('.lunbo2').find('li').click(function(){
        $(this).attr('class','lunbo2_color').siblings().attr('class','');
        $('.banner_top_right ul').stop().animate({left:-$(this).index()*imgW},400);
        num1=num=$(this).index();
    });
//	自动轮播部分
    timer=setInterval(change,1500)
    //鼠标移入的暂停效果
    $('.banner_top_right').hover(function(){
        clearInterval(timer)
    },function(){
        timer=setInterval(change,2000)
    })

    //轮播自动变化的函数
    function  change(){
        if(num==$('.banner_top_right ul').find('li').length-1){
            $('.banner_top_right ul').find('li').eq(0).css({position:'relative',left:3*imgW})
            num=0;
        }else{
            num++;
        }
        num1++;
        $('.lunbo2').find('li').eq(num).attr('class','lunbo2_color').siblings().attr('class','');
        $('.banner_top_right ul').stop().animate({left:-num1*imgW},400,function(){
            if(num==0){
                $('.banner_top_right ul').find('li').eq(0).css('position','');
                $('.banner_top_right ul').css('left',0);
                num1=0;
            }
        })
    }

})

