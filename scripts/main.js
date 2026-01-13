// Modern JavaScript for portfolio website

document.addEventListener('DOMContentLoaded', function() {
  // Portfolio tab functionality
  const tabButtons = document.querySelectorAll('.portfolio-tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-target');

      // Remove active class from all tabs and content
      document.querySelectorAll('.portfolio-tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // Back to top button functionality
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Modern AI Bot Functionality
  const aiBotContainer = document.getElementById('aiBotContainer');
  const aiBot = document.getElementById('aiBot');
  const aiTooltip = document.getElementById('aiTooltip');
  const aiBotMessage = document.getElementById('aiBotMessage');

  const pratikFacts = [
    "🚀 Pratik has 10+ years of full-stack engineering and leadership experience!",
    "🏗️ He's currently the Director of Engineering at QuinStreet, leading scalable software initiatives!",
    "🤖 Passionate about AI/ML — he's deployed Python-based XGBoost models for predictive analytics and automation!",
    "⚙️ Expert in Java, Spring Boot, and RESTful APIs, with a strong focus on performance and scalability!",
    "🧩 Experienced in building secure systems using JWT, OAuth2, OpenID Connect, and Keycloak!",
    "💡 Integrates AI tools like OpenAI Codex, GitHub Copilot, and Vibe coding into development workflows!",
    "🚦 Implements agile methodologies — from sprint planning to retrospectives — to deliver on time and with quality!",
    "🧠 Loves exploring AI-assisted coding to make teams code smarter, faster, and more creatively!",
    "👥 Known for building and mentoring high-performing engineering teams!",
    "🌍 Managed global teams across India and the U.S. while delivering enterprise-grade solutions!",
    "📊 Designed the architecture for QuinStreet's 360Finance product from scratch!",
    "📞 Built omnichannel communication platforms integrating Voice, SMS, WebChat, and WhatsApp!",
    "🧱 Migrated legacy C++ systems to modern Java 8 + Spring architectures!",
    "🧪 Implemented CI/CD pipelines using Jenkins, Maven, and SonarQube for faster, safer releases!",
    "🧭 Led recruitment drives for Java and QA engineers, helping scale engineering operations!",
    "🗣️ Writes about tech and leadership on his blog — www.adevguide.com!",
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
  if (aiBot) {
    aiBot.addEventListener('click', function() {
      currentFactIndex = (currentFactIndex + 1) % pratikFacts.length;
      showPratikFact();

      // Add bounce effect
      this.classList.add('clicked');
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);
    });
  }

  // Show random facts periodically
  setInterval(() => {
    if (!aiTooltip || !aiTooltip.classList.contains('show')) {
      currentFactIndex = Math.floor(Math.random() * pratikFacts.length);
      showPratikFact();
    }
  }, 10000);

  function showPratikFact() {
    if (aiBotMessage) {
      aiBotMessage.innerHTML = pratikFacts[currentFactIndex];
    }
    if (aiTooltip) {
      aiTooltip.classList.add('show');
    }

    clearTimeout(aiBotMessageTimeout);
    aiBotMessageTimeout = setTimeout(() => {
      if (aiTooltip) {
        aiTooltip.classList.remove('show');
      }
    }, 6000);
  }

  // Hide tooltip when clicking elsewhere
  document.addEventListener('click', function(e) {
    if (aiBotContainer && !aiBotContainer.contains(e.target)) {
      if (aiTooltip) {
        aiTooltip.classList.remove('show');
      }
    }
  });

  // Smooth scroll for links with hashes
  const smoothScrollLinks = document.querySelectorAll('a.smooth-scroll');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = document.querySelector(this.hash);
        if (!target) {
          target = document.querySelector(`[name=${this.hash.slice(1)}]`);
        }
        // Does a scroll target exist?
        if (target) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Initialize AOS with custom settings
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }

  // Navbar background change on scroll
  const modernNav = document.querySelector('.modern-nav');
  if (modernNav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        modernNav.classList.remove('navbar-transparent');
        modernNav.classList.add('scrolled');
      } else {
        modernNav.classList.add('navbar-transparent');
        modernNav.classList.remove('scrolled');
      }
    });
  }

  // Form submission feedback
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function() {
      const submitBtn = this.querySelector('.form-submit');
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
      }
    });
  }

  // Smooth skill bar animations
  const skillProgresses = document.querySelectorAll('.skill-progress');
  if (skillProgresses.length > 0) {
    window.addEventListener('scroll', function() {
      skillProgresses.forEach(function(el) {
        const elementTop = el.offsetTop;
        const elementBottom = elementTop + el.offsetHeight;
        const viewportTop = window.scrollY;
        const viewportBottom = viewportTop + window.innerHeight;

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          el.classList.add('animate');
        }
      });
    });
  }

  // Interactive portfolio cards
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const img = this.querySelector('.portfolio-image img');
      const overlay = this.querySelector('.portfolio-overlay');
      if (img) img.style.transform = 'scale(1.1)';
      if (overlay) overlay.style.opacity = '0.9';
    });
    card.addEventListener('mouseleave', function() {
      const img = this.querySelector('.portfolio-image img');
      const overlay = this.querySelector('.portfolio-overlay');
      if (img) img.style.transform = 'scale(1)';
      if (overlay) overlay.style.opacity = '0';
    });
  });

  // Add interactive hover effects to skill categories
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach(category => {
    category.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    category.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Interactive experience cards
  const experienceCards = document.querySelectorAll('.experience-card');
  experienceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 20px 25px -5px var(--shadow-color), 0 10px 10px -5px var(--shadow-color)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 10px 15px -3px var(--shadow-color), 0 4px 6px -2px var(--shadow-color)';
    });
  });

  // Parallax effect for hero section
  const heroBackground = document.querySelector('.hero-background');
  if (heroBackground) {
    window.addEventListener('scroll', function() {
      const scrolled = window.scrollY;
      const speed = 0.5;
      heroBackground.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }

  // Typewriter effect for hero subtitle
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';

    setTimeout(function() {
      let i = 0;
      const typeWriter = setInterval(function() {
        heroSubtitle.textContent = originalText.substring(0, i + 1);
        i++;
        if (i >= originalText.length) {
          clearInterval(typeWriter);
        }
      }, 100);
    }, 1000);
  }
});
