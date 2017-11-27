//preloader init code
jQuery(window).load(function(){
  $('#loading').delay(350).fadeOut('slow');
  $('body').delay(350).css({'overflow':'visible'});
});

$(document).ready(function(){
  //prevent page jump
  var target = window.location.hash,
      target = target.replace('#', '');

  // delete hash so the page won't scroll to it
  window.location.hash = "";

  // now whenever you are ready do whatever you want
  // (in this case I use jQuery to scroll to the tag after the page has loaded)
  $(window).on('load', function() {
      if (target) {
          $('html, body').animate({
              scrollTop: $("#" + target).offset().top
          }, 700, 'swing', function () {});
      }
  }); //prevent page jump end

  //smooth scroll
  $("a.nav-link").on('click', function(event) {
   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });

    //box shadow to navbar effect
     $(window).on('scroll', function() {
          if ($(this).scrollTop() > 5) {
              $('.site-header').addClass('navbarAdded');
          } else {
              $('.site-header').removeClass('navbarAdded');
          }
      });

    //carousel interval rate
    $('.carousel').carousel({
      interval: 4000
    });

    // tabs code (after carousel section)
    $('a#aboutUs').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

    $('a#mission').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });
    $('a#mandatory').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

    // packages slick init
    $('.package-quote').slick({
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 2,
      arrows: false,
      fade: true,
      asNavFor: '.package-list'
    });

    $('.package-list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.package-quote',
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0'
    });
//isotope code **************************************************************
//$(window).resize(function(){
//     $(".masonry").masonry("reload");
//   });
//
    var $container = $('.fleet-grid');
    // Portfolio Grid
    $(function() {                        //solution added 1
     $('img').on('load', function() {     //solution added 2
               //Initialise Isotope
           $container.isotope({
               itemSelector: '.fleet-item',
               layoutMode: 'fitRows',      //added 3
               animationOptions: {
                   duration: 750,
                   easing: 'linear',
                   queue: false
               }
           });
           // bind filter button click
           $('.fleet-filter').on('click', '.categories', function () {
               var filterValue = $(this).attr('data-filter');
               $container.isotope({ filter: filterValue });
           });
           // change active class on categories
           $('.categories-filter').each(function (i, buttonGroup) {
               var $buttonGroup = $(buttonGroup);
               $buttonGroup.on('click', '.categories', function () {
                   $buttonGroup.find('.active').removeClass('active');
                   $(this).addClass('active');
               });
           });
        }); //img on load 1
    }); //funtion

    //magnific popup
    $('.gallery-popup').magnificPopup({
               delegate: '.gallery-popup-link',
               type: 'image',
               tLoading: 'Loading image #%curr%...',
               mainClass: 'mfp-img-mobile',
               gallery: {
                   enabled: true,
                   navigateByImgClick: true,
                   preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
               },
               image: {
                   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                   titleSrc: function (item) {
                       return item.el.attr('title');
                   }
               }
           });

    // wow init
    new WOW().init();

    //counter
    $('.count').counterUp({
     delay: 20,
     time: 3000
    });

    // testimon owl carousel code
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        smartSpeed: 700,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: false
            },
            992: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            }
        }
    });

  // partners section owl carousel
  $('.partners-carousel').owlCarousel({
      autoplay: true,
      autoplaySpeed: 2000,
      autoplayHoverPause: true,
      responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        },
      pagination: false,  // hide pagination buttons
      navigation: false,  // hide next and prev buttons
      navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });

  // contact.html slick header code
    $('.contactSlick').slick({
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      centerMode: true,
  });

}); //end document ready
