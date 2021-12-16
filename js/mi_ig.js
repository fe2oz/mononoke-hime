

$(function(){
    $("#mi_ig1").click(function(){
        $("body").css({"background":"url(img/mononoke014-5.jpg"}).css("background-size", "100% 100%");
    });

    $("#mi_ig2").click(function(){
        $("body").css({"background":"url(img/mononoke014-4.jpg"}).css("background-size", "100% 100%");
    });

    $("#mi_ig3").click(function(){
        $("body").css({"background":"url(img/mononoke033.jpg"}).css("background-size", "100% 100%");;
    });

    $("#mi_ig4").click(function(){
        $("body").css({"background":"url(img/mononoke023.jpg"}).css("background-size", "100% 100%");;
    });

    $("#mi_ig5").click(function(){
        $("body").css({"background":"url(img/mononoke044.jpg"}).css("background-size", "100% 100%");;
    });

    $('#mi_cho nav ul li').click(function(){
        $('#mi_cho nav ul li').removeClass("active");
        $(this).addClass("active");
    })
    
    
})




