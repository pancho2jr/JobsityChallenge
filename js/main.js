$(document).ready(function(){

  $('.gallery_slider').slick({
    centerMode: true,
    centerPadding: '350px',
    slidesToShow: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
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

  /**Gallery counter*/
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
});
