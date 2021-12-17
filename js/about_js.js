


$(function(){
    $("#san_cho nav ul li:nth-of-type(1)").click(function(){
        $("#san_cha").attr("src", "img/mononoke007.jpg")
    })

    $("#san_cho nav ul li:nth-of-type(2)").click(function(){
        $("#san_cha").attr("src", "img/mononoke031.jpg")
    })

    $("#san_cho nav ul li:nth-of-type(3)").click(function(){
        $("#san_cha").attr("src", "img/mononoke035.jpg")
    })

    $("#san_cho nav ul li:nth-of-type(4)").click(function(){
        $("#san_cha").attr("src", "img/mononoke039.jpg")
    })

    $("#san_cho nav ul li:nth-of-type(5)").click(function(){
        $("#san_cha").attr("src", "img/97618ad4b9fc0f845071c8e4b5cfb9ff.jpg")
    })


    $("#ashitaka_cho nav ul li:nth-of-type(1)").click(function(){
        $("#ash_cha").attr("src", "img/mononoke030.jpg")
    })

    $("#ashitaka_cho nav ul li:nth-of-type(2)").click(function(){
        $("#ash_cha").attr("src", "img/mononoke048.jpg")
    })

    $("#ashitaka_cho nav ul li:nth-of-type(3)").click(function(){
        $("#ash_cha").attr("src", "img/mononoke019.jpg")
    })

    $("#ashitaka_cho nav ul li:nth-of-type(4)").click(function(){
        $("#ash_cha").attr("src", "img/mononoke021.jpg")
    })

    $("#ashitaka_cho nav ul li:nth-of-type(5)").click(function(){
        $("#ash_cha").attr("src", "img/mononoke003.jpg")
    })

    // ==============================

    $("#up1").click(function(){
        $("#ashitaka").fadeIn();
        $("#san").fadeOut();
    })

    $("#down1").click(function(){
        $("#ashitaka").fadeIn();
        $("#san").fadeOut();
    })

    $("#up2").click(function(){
        $("#ashitaka").fadeOut();
        $("#san").fadeIn();
    })

    $("#down2").click(function(){
        $("#san").fadeIn();
        $("#ashitaka").fadeOut();
    })


    // ==============================


    
    
})