$(document).ready(function(){
    $(".sel_phone").click(function(e){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, 
            area: ['400px', '150px'],
            shift: 2,
            content: $(".alert_noted")
        });   
    });
})