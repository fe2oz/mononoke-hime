

var windowWidth = window.matchMedia('screen and (min-width:1000px)');
        if(windowWidth.matches){
            $(function(){
                $('#up').click(function(){
                    $('#cvc_list li:last').prependTo('#cvc_list');
                    $('#cvc_list li').css('marginTop', -0);
                    $('#cvc_list li').stop().animate({marginTop:0}, 500);
                })
            
                $('#down').click(function(){
            
                    $("#cvc_list li:first").appendTo("#cvc_list");
                    $("#cvc_list li").css("marginTop", -0);
                    $("#cvc_list li").stop().animate({marginBottom:0}, 500);
                })
            });
        }else{
            $(function(){
                $('#up').click(function(){
                    $('#cvc_list li:last').prependTo('#cvc_list');
                    $('#cvc_list li').css('marginLeft', -0);
                    $('#cvc_list li').stop().animate({marginLeft:0}, 500);
                })
            
                $('#down').click(function(){
            
                    $("#cvc_list li:first").appendTo("#cvc_list");
                    $("#cvc_list li").css("marginRight", -0);
                    $("#cvc_list li").stop().animate({marginRight:0}, 500);
                })
            });
        }