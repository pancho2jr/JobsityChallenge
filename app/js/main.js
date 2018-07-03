$(document).ready(function(){

/**Home*/
/**down arrow*/
$(".buttonDown").click(function(){
  $(".footer-menu a[href = '#programs']").click();
})

/**Navigation*/
$(".mobile-menu-icon").click(function(){
  $(".hider").slideToggle();
});
$(".toggle-menu ul li").click(function(){
  $(".hider").slideToggle();
});

/**Temporary plan info*/
  var plan = {
    "basic":{
      "name":"Basic",
      "type":"Beginers Course",
      "price":"1500",
      "minutes":"240 minutes"
    },
    "premium":{
      "name":"Premium",
      "type":"Intermediate Course",
      "price":"2500",
      "minutes":"340 minutes"
    },
    "platinium":{
      "name":"Platinium",
      "type":"Advance Course",
      "price":"3500",
      "minutes":"440 minutes"
    }
  };

  /**Tabs functionality*/
  $(".tabs ul li a").click(function(e){
    e.preventDefault();
  });
  $(".tabs ul li").click(function(){
    $(".tabs ul li").removeClass("tab--active").addClass("tab--inactive");
    $(this).addClass("tab--active");
    var tipoPlan = $(this).find("a").attr("class");
    $(".planContent__2col__right h3").fadeOut().text(plan[tipoPlan].type).fadeIn();
    $(".planContent__2col__right .minutes span:last-child").fadeOut().text(plan[tipoPlan].minutes).fadeIn();
    $(".floatingTitle__text ").fadeOut().text(plan[tipoPlan].name).fadeIn();
    $(".price p span:first-child").fadeOut().text(plan[tipoPlan].price).fadeIn();
  });

  /**Sliders*/
  /**gallery siyder*/
  $('.gallery_slider').slick({
    centerMode: true,
    centerPadding: '350px',
    slidesToShow: 1,
    infinite: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });

  /**Gallery slider counter*/
  $totalGallery = ($('.gallery_slider .slick-track .slick-slide').length / 2 ) - 1;
  $('.galleryTotal').text($totalGallery);
  $('.gallery_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $galleryPosition = $('.gallery_slider').slick('slickCurrentSlide') + 1;
    $(".current").text($galleryPosition);
  });
  $('.gallery_prev').click(function(){
      $('.gallery_slider').slick('slickPrev');
  });
  $('.gallery_next').click(function(){
      $('.gallery_slider').slick('slickNext');
  });

  $('.reviews_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.partners_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:"<i class='sliderArrow-prev fas fa-angle-left'></i>",
    nextArrow:"<i class='sliderArrow-next fas fa-angle-right'></i>",
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  /**Smooth scroll**/
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    // On-page links
    if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /**FQA Inputs animation*/
  $(".form-name input").focus(function(){
   $(".form-name label").css({"top":"-10px","transition":"1s"});
  });
  $(".form-name input").focusout(function(){
  	if($(".form-name input").val() == ""){
      $(".form-name label").css({"top":"50%","transition":"1s"});
    }
  });
  $(".form-number input").focus(function(){
   $(".form-number label").css({"top":"-10px","transition":"1s"});
  });
  $(".form-number input").focusout(function(){
  	if($(".form-number input").val() == ""){
      $(".form-number label").css({"top":"50%","transition":"1s"});
    }
  });

});
