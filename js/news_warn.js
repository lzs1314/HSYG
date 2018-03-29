$(function(){
//通知js
    $(".sell_word").slideDown(600);
    $(".sell_word1").slideDown(600);
    $(".word_btn").click(function(){
        $(this).parent().slideUp(600);
    });

    var $word = $(".word"),
    	$word1 = $(".word1"),
    	$count = 0,
    	$count1 = 0,
        $word_len = $word.children("p:hidden").length;
        $word_len1 = $word1.children("p").length;
    $(".word p").each(function(){
        if($(this).css("display")=="block"){
            $count++;
        }
     });
     $(".word1 p").each(function(){
        if($(this).css("display")=="block"){
            $count1++;
        }
     });
    if($count == 1){
    	$word.css("padding-top","26px");
    }else if($count == 2){
    	$word.css("padding-top","14px");
    }
    if($count1 == 1){
    	$word1.css("padding-top","26px");
    }else if($count1 == 2){
    	$word1.css("padding-top","14px");
    }
})