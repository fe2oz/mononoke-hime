


$(function(){
    $("#icon_menu").click(function(){
        $(".large").slideToggle();
    })
})


$(window).resize(function(){
    if(window.innerWidth>=1000){
        $(".large").show();
    }
})