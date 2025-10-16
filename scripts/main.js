// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    startEvent: 'load'
    // once: true  
  }); // initialize animate on scroll library
  
  // Portfolio tab functionality
  $('.portfolio-tab-btn').click(function() {
    var target = $(this).data('target');
    
    // Remove active class from all tabs and content
    $('.portfolio-tab-btn').removeClass('active');
    $('.tab-pane').removeClass('active');
    
    // Add active class to clicked tab and corresponding content
    $(this).addClass('active');
    $('#' + target).addClass('active');
  });
  
  // Back to top button functionality
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').addClass('visible');
    } else {
      $('.back-to-top').removeClass('visible');
    }
  });
  
  $('.back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
  });
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
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
