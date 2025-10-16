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
  
  // Modern AI Bot Functionality
  const aiBotContainer = $('#aiBotContainer');
  const aiBot = $('#aiBot');
  const aiTooltip = $('#aiTooltip');
  const aiBotMessage = $('#aiBotMessage');
  
const pratikFacts = [
  "🚀 Pratik has 10+ years of full-stack engineering and leadership experience!",
  "🏗️ He's currently the Director of Engineering at QuinStreet, leading scalable software initiatives!",
  "🤖 Passionate about AI/ML — he’s deployed Python-based XGBoost models for predictive analytics and automation!",
  "⚙️ Expert in Java, Spring Boot, and RESTful APIs, with a strong focus on performance and scalability!",
  "🧩 Experienced in building secure systems using JWT, OAuth2, OpenID Connect, and Keycloak!",
  "💡 Integrates AI tools like OpenAI Codex, GitHub Copilot, and Vibe coding into development workflows!",
  "🚦 Implements agile methodologies — from sprint planning to retrospectives — to deliver on time and with quality!",
  "🧠 Loves exploring AI-assisted coding to make teams code smarter, faster, and more creatively!",
  "👥 Known for building and mentoring high-performing engineering teams!",
  "🌍 Managed global teams across India and the U.S. while delivering enterprise-grade solutions!",
  "📊 Designed the architecture for QuinStreet’s 360Finance product from scratch!",
  "📞 Built omnichannel communication platforms integrating Voice, SMS, WebChat, and WhatsApp!",
  "🧱 Migrated legacy C++ systems to modern Java 8 + Spring architectures!",
  "🧪 Implemented CI/CD pipelines using Jenkins, Maven, and SonarQube for faster, safer releases!",
  "🧭 Led recruitment drives for Java and QA engineers, helping scale engineering operations!",
  "💬 Writes about tech and leadership on his blog — www.adevguide.com!",
  "🧰 Portfolio showcases his projects at pratik-bhuite.github.io!",
  "🎓 Holds a degree in Electronics and Telecommunication from DYPIET!",
  "🗣️ Fluent in English, Hindi, and Marathi — a true multicultural communicator!",
  "🔥 Passionate about fostering curiosity, continuous learning, and innovation-driven culture!"
];

  
  let currentFactIndex = 0;
  let aiBotMessageTimeout;
  
  // Show initial message after page load
  setTimeout(() => {
    showPratikFact();
  }, 3000);
  
  // AI bot click handler
  aiBot.on('click', function() {
    currentFactIndex = (currentFactIndex + 1) % pratikFacts.length;
    showPratikFact();
    
    // Add bounce effect
    $(this).addClass('clicked');
    setTimeout(() => {
      $(this).removeClass('clicked');
    }, 300);
  });
  
  // Show random facts periodically
  setInterval(() => {
    if (!aiTooltip.hasClass('show')) {
      currentFactIndex = Math.floor(Math.random() * pratikFacts.length);
      showPratikFact();
    }
  }, 10000);
  
  function showPratikFact() {
    aiBotMessage.html(pratikFacts[currentFactIndex]);
    aiTooltip.addClass('show');
    
    clearTimeout(aiBotMessageTimeout);
    aiBotMessageTimeout = setTimeout(() => {
      aiTooltip.removeClass('show');
    }, 6000);
  }
  
  // Hide tooltip when clicking elsewhere
  $(document).on('click', function(e) {
    if (!aiBotContainer.is(e.target) && aiBotContainer.has(e.target).length === 0) {
      aiTooltip.removeClass('show');
    }
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
