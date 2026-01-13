// AI Assistant Variants with Random Selection
document.addEventListener('DOMContentLoaded', function() {
  // Random AI Assistant Selection
  const aiVariants = ['aiVariant1', 'aiVariant2', 'aiVariant3', 'aiVariant4'];
  const randomVariant = aiVariants[Math.floor(Math.random() * aiVariants.length)];

  // Show randomly selected variant
  const selectedVariant = document.getElementById(randomVariant);
  if (selectedVariant) {
    selectedVariant.classList.add('ai-variant-active');
  }

  // AI Assistant Facts
  const pratikFacts = [
    "🚀 Pratik has 10+ years of full-stack development experience!",
    "☕ He's a Java expert who loves Spring Boot and microservices!",
    "⚛️ React.js wizard who creates amazing user interfaces!",
    "☁️ Cloud enthusiast working with AWS, Azure, and GCP!",
    "🔧 DevOps ninja with Docker, Kubernetes, and CI/CD expertise!",
    "💾 Database guru skilled in MySQL, PostgreSQL, and MongoDB!",
    "🔒 Security-conscious developer implementing best practices!",
    "🎯 Problem solver who loves tackling complex challenges!",
    "📱 Mobile development experience with React Native!",
    "🤖 AI/ML enthusiast exploring modern technologies!",
    "📊 Big data experience with Apache Kafka and Elasticsearch!",
    "🌐 RESTful API architect and GraphQL implementer!",
    "⚡ Performance optimization specialist for scalable systems!",
    "👥 Team leader who mentors junior developers!",
    "🎓 Continuous learner staying updated with latest tech trends!"
  ];

  // Initialize the selected variant
  let currentFactIndex = 0;
  let aiMessageTimeout;

  // Get the active variant elements
  const activeBot = selectedVariant ? selectedVariant.querySelector('[id^="aiBot"]') : null;
  const activeTooltip = selectedVariant ? selectedVariant.querySelector('[id^="aiTooltip"]') : null;
  const activeMessage = selectedVariant ? selectedVariant.querySelector('[id^="aiBotMessage"]') : null;

  // Show initial message after page load
  setTimeout(() => {
    showPratikFact();
  }, 3000);

  // AI bot click handler for active variant
  if (activeBot) {
    activeBot.addEventListener('click', function() {
      currentFactIndex = (currentFactIndex + 1) % pratikFacts.length;
      showPratikFact();

      // Add interaction effect based on variant
      this.classList.add('clicked');
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);
    });
  }

  // Show random facts periodically
  setInterval(() => {
    if (!activeTooltip || !activeTooltip.classList.contains('show')) {
      currentFactIndex = Math.floor(Math.random() * pratikFacts.length);
      showPratikFact();
    }
  }, 10000);

  function showPratikFact() {
    if (activeMessage) {
      activeMessage.innerHTML = pratikFacts[currentFactIndex];
    }
    if (activeTooltip) {
      activeTooltip.classList.add('show');
    }

    clearTimeout(aiMessageTimeout);
    aiMessageTimeout = setTimeout(() => {
      if (activeTooltip) {
        activeTooltip.classList.remove('show');
      }
    }, 6000);
  }

  // Hide tooltip when clicking elsewhere
  document.addEventListener('click', function(e) {
    if (selectedVariant && !selectedVariant.contains(e.target)) {
      if (activeTooltip) {
        activeTooltip.classList.remove('show');
      }
    }
  });

  // Debug: Log which variant was selected
  console.log('AI Assistant Variant Selected:', randomVariant);
});