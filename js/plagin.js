$(window).scroll(function(){
    let myScrolling = $(window).scrollTop();
    if (myScrolling > 300)
    {
        $("#up").fadeIn(500);
    }else{
        $("#up").fadeOut(500);
    }
})

$("#up").click( () => {
    $("html,body").animate({scrollTop:'0'},2000);
})

