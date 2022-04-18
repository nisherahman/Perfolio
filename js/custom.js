$(document).ready(function(){

  // scroll position
  $(window).on('scroll',function(){
    var scrolling = $(this).scrollTop();

    // back to top appearance 
    if(scrolling > 100){
      $('.back-to-top').fadeIn();
    }else{
      $('.back-to-top').fadeOut();  
    }
    // navbar class 
    if(scrolling > 150){
      $('nav').addClass('nav-fix');
    }else{
      $('nav').removeClass('nav-fix');
    }

  });

  // back to top action 
  $('.back-to-top').on('click',function(){
    $('html,body').animate({
    scrollTop: '0px',
  },2000);

  });

      //testimonial slider
      $('.test-slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow:2,
        responsive:[
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows:false,
              }
          },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows:false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows:false,
                }
            },
    
          ],
    });

    //banner type js
    var typed = new Typed('.element', {
        strings: 
        [
            'Graphic Designer',
            'Web Designer',
            'Web Developer'
        ],
        smartBackspace: true,
        loop:true,
        typeSpeed:200,
        backSpeed:150,
        backDelay: 400,
        showCursor:false,
        });
    
    //about image tilt
    $('.about-image').tilt();

    //service slick slider
    $('.service-slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow:3,
    });

    //portfolio filter
    var mixer = mixitup('.gallery-main');

    //portfolio popup
    $('.venobox').venobox({
        spinner:'bounce',
    });

    //wow js
    new WOW().init();

    // countdown 
    $('.counter').counterUp({
      delay: 10,
      time: 1500,
    });

});