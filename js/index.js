$(document).ready(function(){
    // parallax
    // var test = $('.product__cup');
    // console.log(test);
    $('.product__cup').parallax({imageSrc: 'asas.png'});

    // slick slider
    $('.slider').slick({
        arrows: true,
        // dots: true,
        initialSlide: 1,
        slidesToShow: 3,
        speed: 800,
        autoplay: 400
    });
// $("button").click(function(){
//     var s = $("#example").scrollTop();
//     $("span").text("scrollTop = " + s)
//     });
    
  $('.autoSlider').slick({
    arrows: true,
    // dots: true,
    initialSlide: 1,
    slidesToShow: 3,
    speed: 800,
    autoplay: 400
});
// var offset = 550;
// var duration = 1500;

//     $(window).scroll(function(){
//         if($(this).scrollTop() > offset){
//             $('.to-top').fadeIn(durarion);
//         }else{
//             $('.to-top').fadeOut(duration);
//         }
//     })
//     $('.to-top').click(function(){
//         $('body').animate({scrollTop:0},duration);
//     })
});
$(document).ready(function(){
// var offset = 250;
// var duration = 500;

    $(window).scroll(function(){
        // if($(this).scrollTop() > offset){
        //     $('.to-top').fadeIn(durarion);
        // }else{
        //     $('.to-top').fadeOut(duration);
        // }
     $('.to-top').click(function(){
        $('body').animate({scrollTop:0},duration);
    })   
    })
    
});

    