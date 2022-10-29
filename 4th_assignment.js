$(document).ready(function(){


    $("body").css("color","white");
    $("body").css("text-align","center");
    $("body").css("margin","0");
    $("body").css("padding","0");
    $("body").css("overflow-x","hidden");

    
    $(".header").height("80px");
    $(".header").css("background-color","rgb(59, 177, 232)");
    $(".header").css("margin","1%");

    $(".mid-box").css("display","flex");
    $(".mid-box").css("margin","1%");



    $(".box-1").width("40%");
    $(".box-1").height("470px");
    $(".box-1").css("background-color"," rgb(65, 179, 103)");



    $(".box-2").width("59%");

    $(".main-content").css("display","inline-block");
    $(".extra-content").css("display","inline-block");

    $(".main-content").width("100%");
    $(".main-content").height("300px");
    $(".main-content").css("background-color","rgb(220, 229, 36)");
    $(".main-content").css("margin","1%");
    $(".main-content").css("margin-top","0");


    $(".extra-content").width("100%");
    $(".extra-content").height("150px");
    $(".extra-content").css("background-color","rgb(83, 85, 77)");
    $(".extra-content").css("margin","1%");
    

    
    $(".footer").height("80px");
    $(".footer").css("background-color","rgb(180, 188, 24)");
    $(".footer").css("margin","1%");
    $(".footer").css("margin-top","0");


    $(".header").on("click",function(){
        $(this).css("background-color","green");
    });

    $(".box-1 h1").click(function(){
        $(".box-1 h1").text("Leftbar");
    });

    
    $(".extra-content").click(function(){
        $(".main-content").fadeOut();
    });

    // function togglePopup(){
    //     $(".popup").toggle();
    // }

    $(".popup").hide();

    $(".footer").click(function(){
        $(".popup").show();
    });

    $(".btn").click(function(){
        $(".popup").hide();
    });

});