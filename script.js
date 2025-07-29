// Terminal Loading Sequence
const terminalMessages = [
  "> Initiating comprehensive system scan...",
  "> Detecting user presence...",
  "> Establishing secure connection...",
  "",
  "> User identified: Chayanat Salang Muennaburn",
  "> Technical birth date: July 29th, 2002 (Legal age: 23)",
  "> Actual birth date: July 29th, 2003 (Real age: 22)",
  "> Age paradox detected: You get to be both ages today!",
  "",
  "> 🎉 HAPPY 22nd/23rd BIRTHDAY! 🎉",
  "> Deploying celebration protocols...",
  "> 🎊 Confetti.exe loading... ████████████ 100%",
  "> 🎈 Streamers.dll activated successfully",
  "> 🎁 Special surprise package prepared",
  "",
  "> Running deep personality analysis...",
  "> Intelligence level: Significantly above average",
  "> Curiosity: Genuinely high - wants to understand how things work",
  "> Analytical thinking: Exceptional depth",
  "> Hair status: Actually looking pretty good lately",
  "> Attractiveness level: Let's be honest - kinda hot",
  "> Humor compatibility: High - appreciates both wit and absurdity",
  "> Charm level: Naturally gifted, well aware of it",
  "",
  "> Interest profile detected:",
  "> - Basketball (skill level: probably good)",
  "> - Dave (music taste: excellent)",
  "> - Tech/Photography (knowledge: extensive, naturally curious)",
  "> - Fashion (aesthetic: well-calculated)",
  "",
  "> Emotional intelligence scan:",
  "> Confidence level: High, as it should be",
  "> Worth assessment: Immeasurable",
  "> Social value: High - the kind of person others genuinely want around",
  "",
  "> Personal reminder protocol:",
  "> The people who care about you see your value clearly.",
  "> Your curiosity and depth make conversations better.",
  "> You're the kind of person worth making websites for.",
  "",
  "> Initializing birthday tech playground...",
  "> Setting up interactive modules...",
  "> Preparing code explanations for naturally curious minds...",
  "",
  "> Welcome to your personalized birthday experience.",
  "> (Crafted with genuine appreciation and attention to detail)",
  "",
  "> System ready. Press any key to continue...",
];

// ===== MOBILE TOUCH SUPPORT AND RESPONSIVE IMPROVEMENTS =====

// Enhanced Mobile-friendly Terminal with Better Scrolling
let currentMessageIndex = 0;
let currentCharIndex = 0;
let terminalTimeout;

function typeTerminalMessage() {
  const output = document.getElementById("terminal-output");
  const terminalBody = document.querySelector(".terminal-body");
  const currentMessage = terminalMessages[currentMessageIndex];

  if (currentCharIndex < currentMessage.length) {
    output.textContent += currentMessage[currentCharIndex];
    currentCharIndex++;

    // Auto-scroll on mobile to keep content visible
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    terminalTimeout = setTimeout(typeTerminalMessage, 30 + Math.random() * 20);
  } else {
    output.textContent += "\n";
    currentMessageIndex++;
    currentCharIndex = 0;

    // Auto-scroll after each line
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    if (currentMessageIndex < terminalMessages.length) {
      terminalTimeout = setTimeout(
        typeTerminalMessage,
        100 + Math.random() * 200
      );
    } else {
      // Show "press any key" and wait for input
      setTimeout(() => {
        document.addEventListener("keydown", transitionToHub);
        document.addEventListener("click", transitionToHub);
        // Add touch support for mobile
        document.addEventListener("touchstart", transitionToHub);
      }, 1000);
    }
  }
}

function skipToNext() {
  // Clear any ongoing terminal animation
  if (terminalTimeout) {
    clearTimeout(terminalTimeout);
  }

  // Immediately transition to birthday celebration
  transitionToHub();
}

function transitionToHub() {
  document.removeEventListener("keydown", transitionToHub);
  document.removeEventListener("click", transitionToHub);
  document.removeEventListener("touchstart", transitionToHub);

  const terminal = document.getElementById("terminal");
  const celebration = document.getElementById("birthday-celebration");

  terminal.style.transition = "opacity 1s ease-out";
  terminal.style.opacity = "0";

  setTimeout(() => {
    terminal.classList.add("hidden");
    celebration.classList.remove("hidden");
    celebration.classList.add("fade-in");
    initializeBirthdayCelebration();
  }, 1000);
}

function transitionFromCelebrationToHub() {
  const celebration = document.getElementById("birthday-celebration");
  const hub = document.getElementById("main-hub");

  celebration.style.transition = "opacity 1s ease-out";
  celebration.style.opacity = "0";

  setTimeout(() => {
    celebration.classList.add("hidden");
    hub.classList.remove("hidden");
    hub.classList.add("fade-in");
    initializeModules();
  }, 1000);
}

// Spectacular Birthday Celebration
function initializeBirthdayCelebration() {
  // Create spectacular confetti
  createSpectacularConfetti();

  // Setup spectacular gift interaction
  setupGiftBox();
}

function createSpectacularConfetti() {
  const confettiContainer = document.querySelector(".confetti-container");
  const colors = [
    "#ff0080",
    "#00ffff",
    "#80ff00",
    "#ff8000",
    "#8000ff",
    "#ffff00",
  ];

  // Create initial confetti shower (reduced from 120 to 60)
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti-piece";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = 4 + Math.random() * 3 + "s";
      confetti.style.animationDelay = Math.random() * 2 + "s";
      confetti.style.width = 6 + Math.random() * 4 + "px";
      confetti.style.height = confetti.style.width;
      confetti.style.boxShadow = `0 0 8px ${
        colors[Math.floor(Math.random() * colors.length)]
      }`;

      confettiContainer.appendChild(confetti);

      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.remove();
        }
      }, 8000);
    }, i * 80);
  }

  // Continue creating confetti periodically (reduced from 20 to 10)
  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti-piece";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = 5 + Math.random() * 3 + "s";
      confetti.style.width = 5 + Math.random() * 5 + "px";
      confetti.style.height = confetti.style.width;
      confetti.style.boxShadow = `0 0 6px ${
        colors[Math.floor(Math.random() * colors.length)]
      }`;

      confettiContainer.appendChild(confetti);

      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.remove();
        }
      }, 8000);
    }
  }, 3000);
}

function createNeonConfetti() {
  const confettiContainer = document.querySelector(".confetti-container");
  const colors = [
    "#00ffff",
    "#ff0080",
    "#80ff00",
    "#ff8000",
    "#8000ff",
    "#ff4080",
    "#40ff80",
    "#8040ff",
  ];

  // Create continuous confetti fall
  for (let i = 0; i < 80; i++) {
    createNeonConfettiPiece(confettiContainer, colors, i * 100);
  }

  // Keep creating confetti
  setInterval(() => {
    for (let i = 0; i < 8; i++) {
      createNeonConfettiPiece(confettiContainer, colors, i * 80);
    }
  }, 2000);
}

function createNeonConfettiPiece(container, colors, delay = 0) {
  setTimeout(() => {
    const confetti = document.createElement("div");
    confetti.className = "neon-confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = Math.random() * 4 + 3 + "s";
    confetti.style.animationDelay = Math.random() * 2 + "s";

    // Random neon shapes
    const shapes = ["square", "circle", "triangle", "diamond"];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    if (shape === "circle") {
      confetti.style.borderRadius = "50%";
    } else if (shape === "triangle") {
      confetti.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
    } else if (shape === "diamond") {
      confetti.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
    }

    // Add neon glow
    confetti.style.boxShadow = `
      0 0 20px ${confetti.style.backgroundColor},
      0 0 40px ${confetti.style.backgroundColor},
      0 0 80px ${confetti.style.backgroundColor}
    `;

    container.appendChild(confetti);

    // Remove after animation
    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.parentNode.removeChild(confetti);
      }
    }, 8000);
  }, delay);
}

function setupGiftBox() {
  // Add click listener to the spectacular gift
  const gift = document.getElementById("spectacular-gift");
  let giftOpened = false;

  function handleGiftInteraction(e) {
    if (!giftOpened) {
      e.preventDefault(); // Prevent default touch behaviors
      giftOpened = true;
      openSpectacularGift();
    }
  }

  // Add both click and touch listeners
  gift.addEventListener("click", handleGiftInteraction);
  gift.addEventListener("touchstart", handleGiftInteraction, {
    passive: false,
  });

  // Add keyboard support
  gift.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && !giftOpened) {
      e.preventDefault();
      giftOpened = true;
      openSpectacularGift();
    }
  });

  // Make focusable
  gift.setAttribute("tabindex", "0");
}

function openSpectacularGift() {
  const gift = document.getElementById("spectacular-gift");
  const presentEmoji = gift.querySelector(".present-emoji");

  // Stage 1: Present Opening Animation
  presentEmoji.style.transition =
    "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
  presentEmoji.style.transform = "scale(1.5) rotate(360deg)";
  presentEmoji.style.filter = "drop-shadow(0 0 40px rgba(255, 215, 0, 1))";

  setTimeout(() => {
    // Stage 2: Present Explodes Into Confetti
    presentEmoji.style.transition = "all 1s ease-out";
    presentEmoji.style.transform = "scale(5) rotate(720deg)";
    presentEmoji.style.opacity = "0";
    presentEmoji.style.filter = "blur(20px)";

    // Stage 3: Create Opaque Confetti Overlay
    createOpaqueConfettiTransition();

    // Stage 4: Transition to Hub (hidden by confetti)
    setTimeout(() => {
      // Hide birthday page
      const celebration = document.querySelector(".epic-birthday-page");
      celebration.style.display = "none";

      // Show hub (but it's hidden by confetti)
      const hub = document.getElementById("main-hub");
      hub.classList.remove("hidden");
      hub.classList.add("fade-in");
      initializeModules();

      // Stage 5: Confetti Reveals the Hub
      setTimeout(() => {
        // Using simpler transition now
      }, 1000);
    }, 1500);
  }, 800);
}

function createOpaqueConfettiTransition() {
  // Start confetti first - keep birthday page visible
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.zIndex = "10001";
  overlay.style.pointerEvents = "none";
  document.body.appendChild(overlay);

  // Create confetti pieces
  const colors = [
    "#ff1493",
    "#00ffff",
    "#ff4500",
    "#32cd32",
    "#ff69b4",
    "#1e90ff",
    "#ffd700",
  ];

  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-10px";
    const size = 6 + Math.random() * 12;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = "50%";
    confetti.style.animation = `megaConfettiFall ${
      3 + Math.random() * 2
    }s linear forwards`;
    confetti.style.animationDelay = Math.random() * 0.5 + "s";
    confetti.style.zIndex = "10002";

    overlay.appendChild(confetti);
  }

  // Smooth transition after confetti starts
  setTimeout(() => {
    // Fade out birthday page
    const birthdayPage = document.querySelector(".epic-birthday-page");
    birthdayPage.style.transition = "opacity 0.8s ease-out";
    birthdayPage.style.opacity = "0";

    // Show next page after fade
    setTimeout(() => {
      birthdayPage.style.display = "none";
      document.getElementById("main-hub").classList.remove("hidden");
    }, 800);
  }, 500);

  // Remove overlay after confetti falls
  setTimeout(() => {
    if (overlay.parentNode) {
      overlay.remove();
    }
  }, 6000);
}

// Removed - using simpler transition now

function createMegaExplosion() {
  const confettiContainer = document.querySelector(".confetti-container");
  const colors = [
    "#ff0080",
    "#00ffff",
    "#80ff00",
    "#ff8000",
    "#8000ff",
    "#ffff00",
  ];

  // Create 200 confetti pieces in 5 waves (much more reasonable)
  for (let wave = 0; wave < 5; wave++) {
    setTimeout(() => {
      for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");
        confetti.className = "mega-confetti";

        // Random position around gift center
        const centerX = 50;
        const centerY = 50;
        const radius = Math.random() * 15;
        const angle = Math.random() * Math.PI * 2;

        confetti.style.position = "absolute";
        confetti.style.left = centerX + radius * Math.cos(angle) + "%";
        confetti.style.top = centerY + radius * Math.sin(angle) + "%";
        confetti.style.width = 4 + Math.random() * 6 + "px";
        confetti.style.height = confetti.style.width;
        confetti.style.background =
          colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%";
        confetti.style.zIndex = "1001";

        // Simpler explosion animation
        const velocityX = (Math.random() - 0.5) * 300;
        const velocityY = (Math.random() - 0.5) * 300;

        confetti.style.animation = `simpleExplosion 3s ease-out forwards`;
        confetti.style.setProperty("--vx", velocityX + "px");
        confetti.style.setProperty("--vy", velocityY + "px");

        // Simple glow effect
        confetti.style.boxShadow = `0 0 8px ${
          colors[Math.floor(Math.random() * colors.length)]
        }`;

        confettiContainer.appendChild(confetti);

        // Remove after animation
        setTimeout(() => {
          if (confetti.parentNode) {
            confetti.remove();
          }
        }, 4000);
      }
    }, wave * 100);
  }

  // Add trailing sparkles (reduced from 200 to 50)
  setTimeout(() => {
    createTrailingSparkles();
  }, 800);
}

function createTrailingSparkles() {
  const confettiContainer = document.querySelector(".confetti-container");
  const sparkleColors = ["#ffffff", "#ffff00", "#ff0080", "#00ffff"];

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "trailing-sparkle";
      sparkle.style.position = "absolute";
      sparkle.style.left = Math.random() * 100 + "%";
      sparkle.style.top = Math.random() * 100 + "%";
      sparkle.style.width = "3px";
      sparkle.style.height = "3px";
      sparkle.style.background =
        sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
      sparkle.style.borderRadius = "50%";
      sparkle.style.animation = "simpleSparkleTrail 2s ease-out forwards";
      sparkle.style.boxShadow = `0 0 6px ${sparkle.style.background}`;
      sparkle.style.zIndex = "1002";

      confettiContainer.appendChild(sparkle);

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.remove();
        }
      }, 2000);
    }, i * 40);
  }
}

function createScreenFlash() {
  const flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = "0";
  flash.style.left = "0";
  flash.style.width = "100%";
  flash.style.height = "100%";
  flash.style.background = "transparent"; // Removed bright flash effect
  flash.style.zIndex = "999";
  flash.style.pointerEvents = "none";
  flash.style.animation = "simpleScreenFlash 1s ease-out";

  document.body.appendChild(flash);

  setTimeout(() => {
    if (flash.parentNode) {
      flash.remove();
    }
  }, 1000);
}

function createMassiveExplosion() {
  const confettiContainer = document.querySelector(".confetti-container");
  const colors = [
    "#00ffff",
    "#ff0080",
    "#80ff00",
    "#ff8000",
    "#8000ff",
    "#ff4080",
    "#40ff80",
    "#8040ff",
    "#ffff00",
    "#ff00ff",
    "#00ff80",
    "#8080ff",
  ];

  // Create 300 explosion particles in waves
  for (let wave = 0; wave < 5; wave++) {
    setTimeout(() => {
      for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");
        confetti.className = "explosion-confetti";

        // Random size for variety
        const size = 6 + Math.random() * 20;
        confetti.style.width = size + "px";
        confetti.style.height = size + "px";

        confetti.style.left = "50%";
        confetti.style.top = "50%";
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        // Calculate explosion direction
        const angle = Math.random() * 360 * (Math.PI / 180);
        const velocity = 200 + Math.random() * 800; // Much faster explosion
        const randomX = Math.cos(angle) * velocity;
        const randomY = Math.sin(angle) * velocity;

        confetti.style.setProperty("--explosion-x", randomX + "px");
        confetti.style.setProperty("--explosion-y", randomY + "px");
        confetti.style.setProperty("--rotation", Math.random() * 1080 + "deg");
        confetti.style.animationDelay = wave * 100 + i * 10 + "ms";
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

        // Intense glow
        confetti.style.boxShadow = `
          0 0 20px ${confetti.style.backgroundColor},
          0 0 40px ${confetti.style.backgroundColor},
          0 0 60px ${confetti.style.backgroundColor}
        `;

        // Random shapes
        const shapes = ["square", "circle", "diamond", "triangle"];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        if (shape === "circle") {
          confetti.style.borderRadius = "50%";
        } else if (shape === "diamond") {
          confetti.style.clipPath =
            "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
        } else if (shape === "triangle") {
          confetti.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
        }

        confettiContainer.appendChild(confetti);

        // Remove after animation
        setTimeout(() => {
          if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
          }
        }, 6000);
      }
    }, wave * 200);
  }

  // Add screen flash effect
  createScreenFlash();
}

function createScreenFlash() {
  const flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = "0";
  flash.style.left = "0";
  flash.style.width = "100vw";
  flash.style.height = "100vh";
  flash.style.background = "transparent"; // Removed bright flash effect
  flash.style.zIndex = "9999";
  flash.style.pointerEvents = "none";
  flash.style.animation = "screenFlash 1s ease-out forwards";

  document.body.appendChild(flash);

  setTimeout(() => {
    if (flash.parentNode) {
      flash.parentNode.removeChild(flash);
    }
  }, 1000);
}

// Module Functionality
function initializeModules() {
  // Module click/touch handlers
  document.querySelectorAll(".module-card").forEach((module) => {
    // Remove existing listeners to avoid duplicates
    module.removeEventListener("click", moduleClickHandler);
    module.removeEventListener("touchstart", moduleClickHandler);

    // Add both click and touch support
    module.addEventListener("click", moduleClickHandler);
    module.addEventListener("touchstart", moduleClickHandler, {
      passive: true,
    });

    // Add keyboard support for accessibility
    module.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const moduleId = module.dataset.module;
        openModuleView(moduleId);
      }
    });

    // Make focusable for keyboard navigation
    module.setAttribute("tabindex", "0");
  });

  // Back button handlers with touch support
  document.querySelectorAll(".back-btn").forEach((btn) => {
    btn.removeEventListener("click", backButtonHandler);
    btn.removeEventListener("touchstart", backButtonHandler);

    btn.addEventListener("click", backButtonHandler);
    btn.addEventListener("touchstart", backButtonHandler, { passive: true });
  });
}

function moduleClickHandler(e) {
  // Prevent double-firing on devices that support both touch and mouse
  if (e.type === "touchstart") {
    e.preventDefault();
  }

  const moduleId = this.dataset.module;
  openModuleView(moduleId);
}

function backButtonHandler(e) {
  if (e.type === "touchstart") {
    e.preventDefault();
  }

  document.getElementById("module-views").classList.add("hidden");
  document.getElementById("main-hub").classList.remove("hidden");
}

function openModuleView(moduleId) {
  const hub = document.getElementById("main-hub");
  const moduleViews = document.getElementById("module-views");

  hub.classList.add("hidden");
  moduleViews.classList.remove("hidden");

  // Show specific module view
  document.querySelectorAll(".module-view").forEach((view) => {
    view.style.display = "none";
  });

  switch (moduleId) {
    case "code-module":
      document.getElementById("code-view").style.display = "block";
      initCodeDemo();
      break;
    case "affirmations-module":
      document.getElementById("affirmations-view").style.display = "block";
      initAffirmationsDemo();
      break;
    case "pickup-module":
      document.getElementById("pickup-view").style.display = "block";
      initPickupDemo();
      break;
    default:
      console.log("Module not found:", moduleId);
  }
}

// Daily Affirmations - Gentle reminders and encouragement
// Global shuffle function used by both modules
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initAffirmationsDemo() {
  const generateBtn = document.getElementById("generate-affirmation");
  const currentAffirmation = document.getElementById("current-affirmation");
  const reminderCountText = document.getElementById("reminder-count-text");
  const currentMoodText = document.getElementById("current-mood");

  // Load affirmations from external file
  let allAffirmations = [];
  let currentIndex = 0;
  let count = 1;

  // Load affirmations directly (CSV fetch fails when opening HTML directly)
  console.log("Loading affirmations...");

  // Embed the affirmations data directly
  const affirmationsData = `text,mood
"You carry yourself with something that turns heads.",CONFIDENT
"Your presence has weight - people notice when you walk in.",CONFIDENT
"You've got this combination of smart and attractive that works.",CONFIDENT
"Your voice hits different when you're confident about something.",CONFIDENT
"You have this magnetic energy that draws people in.",CONFIDENT
"You're the kind of attractive that grows on people and then never leaves.",CONFIDENT
"Your mind is as attractive as anything else about you.",CONFIDENT
"You have incredible strength, even when you don't feel it.",ENCOURAGING
"You are enough, exactly as you are, right now.",ENCOURAGING
"Your heart is genuine, and that matters more than you know.",ENCOURAGING
"You matter more than you realize.",ENCOURAGING
"Your mind works in ways that surprise people in good ways.",ENCOURAGING
"Your existence makes the world a little brighter.",ENCOURAGING
"You deserve patience, especially from yourself.",ENCOURAGING
"Your instincts about people are usually right.",ENCOURAGING
"Your style is distinctly you, and it works perfectly.",ENCOURAGING
"People notice when you walk into a room.",CONFIDENT
"Your laugh is contagious in the best way.",ENCOURAGING
"Your voice carries weight when you speak.",ENCOURAGING
"You are not alone, even when it feels that way.",SUPPORTIVE
"The right people will see your value.",SUPPORTIVE
"You have the capacity to build meaningful connections.",SUPPORTIVE
"Your friendship is a gift to anyone who receives it.",SUPPORTIVE
"You're the kind of person others feel safe around.",SUPPORTIVE
"Your care for others doesn't go unnoticed.",SUPPORTIVE
"You make people feel heard and understood.",SUPPORTIVE
"Someone out there is grateful you exist.",SUPPORTIVE
"You have a way of making others feel comfortable.",SUPPORTIVE
"You attract people who appreciate authenticity.",SUPPORTIVE
"Starting over takes courage, and you have it.",MOTIVATING
"Every introduction is a chance for a fresh start.",MOTIVATING
"You're brave for putting yourself out there.",MOTIVATING
"Your resilience is quietly inspiring.",MOTIVATING
"Growing pains mean you're actually growing.",MOTIVATING
"Each day is a new opportunity to surprise yourself.",MOTIVATING
"You're becoming who you're meant to be.",MOTIVATING
"Your story is still being written, and it's going to be meaningful.",MOTIVATING
"Reinventing yourself is a sign of wisdom, not weakness.",MOTIVATING
"You have everything within you to build the life you want.",MOTIVATING
"Fresh starts are gifts we give ourselves.",MOTIVATING
"You're exactly where you need to be for your next chapter.",MOTIVATING
"It's okay to feel overwhelmed sometimes.",CALMING
"Your anxiety doesn't define you or limit your potential.",CALMING
"You're learning to navigate new feelings, and that takes time.",CALMING
"Breathe. You've overcome difficult moments before.",CALMING
"This feeling is temporary, but your strength is permanent.",CALMING
"You're allowed to take things one day at a time.",CALMING
"Your pace is the right pace for you.",CALMING
"It's okay to ask for help when you need it.",CALMING
"You're handling more than most people could.",CALMING
"Your mind is learning new ways to cope, and that's growth.",CALMING
"You don't have to be strong all the time.",CALMING
"Rest is productive when you need to recharge.",CALMING
"This anxiety is temporary - your strength isn't.",CALMING
"You deserve to treat yourself with kindness.",SELF_CARE
"Taking care of yourself isn't selfish, it's necessary.",SELF_CARE
"You're allowed to prioritize your own wellbeing.",SELF_CARE
"Small acts of self-love add up to big changes.",SELF_CARE
"You deserve comfort, especially during tough times.",SELF_CARE
"Your needs matter and deserve attention.",SELF_CARE
"It's okay to say no to things that drain you.",SELF_CARE
"You're worthy of the same compassion you give others.",SELF_CARE
"Taking a break doesn't make you weak.",SELF_CARE
"Your mental health is just as important as your physical health.",SELF_CARE
"You're allowed to have boundaries, and they're healthy.",SELF_CARE
"Healing isn't linear, and that's perfectly normal.",SELF_CARE
"Your comfort zone is valid until you're ready to expand it.",SELF_CARE
"You don't owe anyone an explanation for taking care of yourself.",SELF_CARE
"Your future self will thank you for not giving up.",HOPEFUL
"This difficult chapter doesn't define your whole story.",HOPEFUL
"You have real moments still ahead of you.",HOPEFUL
"Your dreams are still valid and achievable.",HOPEFUL
"The best version of yourself is still emerging.",HOPEFUL
"Life has meaningful surprises waiting for you.",HOPEFUL
"You're going to look back on this time and be proud of your strength.",HOPEFUL
"Everything you're going through is preparing you for something better.",HOPEFUL
"You haven't lost your edge — you're just taking a breather.",AFFIRMING
"Your presence is strong enough that you don't have to perform.",AFFIRMING
"You haven't missed your moment — it hasn't even arrived yet.",AFFIRMING
"This isn't the end of anything. It's just a detour.",AFFIRMING
"You being here — existing, even on low battery — makes a difference.",AFFIRMING
"The version of you coming next is going to respect this one for not giving up.",AFFIRMING
"You're still sharp. Still capable. Still here.",AFFIRMING
"You're not soft. You're steel — even if this has tested you.",AFFIRMING
"The low moments feel longer than they last. Hold the line.",AFFIRMING
"This year could still hold something you didn't see coming.",AFFIRMING
"You don't have to believe in everything right now. Just don't quit.",AFFIRMING
"You carry yourself with something most people wish they had.",AFFIRMING
"You've got a calm presence that people notice.",AFFIRMING
"Your voice hits different — there's something grounded in it.",AFFIRMING
"You listen in a way most people don't. That sticks with people.",AFFIRMING
"You're not starting from scratch. You're starting from experience.",AFFIRMING
"Your fear of being forgotten? That proves you've got more to give.",AFFIRMING
"You're not failing — your brain's just adjusting to things it's never had to carry before.",AFFIRMING
"Feeling off doesn't mean you've lost yourself.",AFFIRMING
"You're still in control, even if it doesn't always feel like it.",AFFIRMING
"It's okay to not be okay. You've earned that grace.",AFFIRMING
"You don't need to pretend. You're allowed to be exactly how you are today.",AFFIRMING
"You don't have to prove your worth — it's already there.",AFFIRMING
"You deserve a win — and it's on the way.",AFFIRMING
"There's nothing wrong with wanting peace.",AFFIRMING
"It's okay if today isn't your favorite day. Tomorrow gets a shot too.",AFFIRMING
"You're still the guy people would bet on.",AFFIRMING
"Your awkward moments don't define you - your comeback always does.",AFFIRMING
"You've got this thing where you can make people feel seen.",AFFIRMING
"Your humor hits different because it comes from somewhere real.",AFFIRMING
"Your sense of humor has layers - it's not just funny, it's intelligent.",GENUINE
"You have this way of being thoughtful that people remember.",GENUINE
"You care about people in ways that actually matter to them.",GENUINE
"You see things in ways that make others think differently.",APPRECIATIVE
"You're the kind of person who remembers details that matter to people.",APPRECIATIVE
"Your mind works in patterns that are genuinely impressive.",APPRECIATIVE
"You have this quality of making complex things feel approachable.",GENUINE
"Your kindness isn't performative - it's just who you are.",GENUINE
"You're funnier than you think, in ways that actually land.",APPRECIATIVE
"You balance being clever and kind better than most people.",APPRECIATIVE
"Your depth shows up in conversations when people least expect it.",GENUINE
"You're not trying to impress anyone, which is exactly what's impressive.",GENUINE
"Your intelligence comes through in how you listen, not just how you speak.",APPRECIATIVE
"You have this way of being present that makes people feel heard.",GENUINE
"Your humor is the kind that makes people feel included, not excluded.",APPRECIATIVE
"You're more perceptive about people than you probably realize.",GENUINE
"Your thoughtfulness isn't an act - it's embedded in how you move through the world.",APPRECIATIVE
"Your confidence has a foundation - it's not just an act.",GENUINE
"You show up for people when it actually counts.",APPRECIATIVE
"Your conversations have substance because you bring substance to them.",APPRECIATIVE
"You're the type of person who makes others feel like they can step up.",GENUINE
"Your mind works faster than most people give you credit for.",APPRECIATIVE
"You have this ability to see opportunities where others see problems.",CONFIDENT
"You understand people better than you let on.",APPRECIATIVE
"You've built something good for yourself and that takes skill.",GENUINE
"Your standards aren't too high - they're exactly where they should be.",CONFIDENT
"This rough patch doesn't erase everything you've accomplished.",SUPPORTIVE
"You've got good taste and the means to back it up.",CONFIDENT
"Your success isn't accidental - you made the right moves.",CONFIDENT
"You're used to winning, and this setback doesn't change that.",SUPPORTIVE`;

  // Process the data immediately instead of fetching
  Promise.resolve(affirmationsData)
    .then((data) => {
      const lines = data
        .trim()
        .split("\n")
        .filter((line) => line.trim() !== "");
      const headerLine = lines.shift(); // Remove CSV header
      allAffirmations = lines.map((line) => {
        // Proper CSV parsing: find the last comma that's outside quotes
        const lastCommaIndex = line.lastIndexOf('",');
        if (lastCommaIndex === -1) {
          // Fallback for malformed lines
          return {
            text: line.replace(/"/g, "").trim(),
            mood: "ENCOURAGING",
            used: false,
          };
        }

        const text = line
          .substring(0, lastCommaIndex + 1)
          .replace(/"/g, "")
          .trim();
        const mood = line.substring(lastCommaIndex + 2).trim();

        return {
          text: text,
          mood: mood || "ENCOURAGING",
          used: false,
        };
      });

      // Shuffle the array initially
      shuffleArray(allAffirmations);

      // Initialize with first affirmation
      if (allAffirmations.length > 0) {
        currentAffirmation.textContent = `"${allAffirmations[0].text}"`;
        currentMoodText.textContent = formatMoodText(allAffirmations[0].mood);
        allAffirmations[0].used = true;
        currentIndex = 1;
        updateCounterDisplay();
      }

      // Update the description text to show actual count
      updateAffirmationsDescription();
    })
    .catch((error) => {
      console.log("Using backup affirmations...");
      // Fallback to embedded affirmations if file fails to load
      const backupAffirmations = [
        "You're stronger than you know.",
        "Your hair looks really good today.",
        "You deserve kindness, especially from yourself.",
        "You're not alone in this journey.",
        "Better days are coming your way.",
      ];
      allAffirmations = backupAffirmations.map((text) => ({
        text,
        mood: "ENCOURAGING",
        used: false,
      }));
      shuffleArray(allAffirmations);
      currentAffirmation.textContent = `"${allAffirmations[0].text}"`;
      currentMoodText.textContent = allAffirmations[0].mood;
      allAffirmations[0].used = true;
      currentIndex = 1;
      updateCounterDisplay();
      updateAffirmationsDescription();
    });

  // Description stays static - no count needed
  function updateAffirmationsDescription() {
    // User doesn't want to see counts, keep description simple and static
    const affirmationsDescription = document.querySelector(
      '[data-module="affirmations-module"] p'
    );
    if (affirmationsDescription) {
      affirmationsDescription.textContent =
        "Gentle reminders of all the good things about you";
    }
  }

  // Create About Affirmations button with better positioning
  const aboutBtn = document.createElement("button");
  aboutBtn.textContent = "About Affirmations";
  aboutBtn.className = "generate-btn";
  aboutBtn.style.marginTop = "15px";
  aboutBtn.style.backgroundColor = "#87CEEB";
  aboutBtn.style.fontSize = "0.9rem";
  aboutBtn.style.padding = "12px 24px";

  // Add button after the controls div, not floating to the side
  const controlsDiv = document.querySelector(".affirmation-controls");
  controlsDiv.appendChild(aboutBtn);

  let showAbout = false;

  function updateAboutContent() {
    const existingDisplay = document.querySelector(".affirmation-about");
    if (existingDisplay) {
      existingDisplay.remove();
    }

    if (showAbout) {
      const aboutDiv = document.createElement("div");
      aboutDiv.className = "affirmation-about";
      aboutDiv.style.backgroundColor = "rgba(135, 206, 235, 0.1)";
      aboutDiv.style.color = "#87CEEB";
      aboutDiv.style.padding = "20px";
      aboutDiv.style.marginTop = "20px";
      aboutDiv.style.borderRadius = "15px";
      aboutDiv.style.fontFamily = "'Segoe UI', sans-serif";
      aboutDiv.style.fontSize = "14px";
      aboutDiv.style.lineHeight = "1.6";
      aboutDiv.style.border = "1px solid rgba(135, 206, 235, 0.3)";
      aboutDiv.style.textAlign = "left";
      aboutDiv.style.maxWidth = "600px";
      aboutDiv.style.marginLeft = "auto";
      aboutDiv.style.marginRight = "auto";

      aboutDiv.innerHTML = `
        <h3 style="color: #87CEEB; margin-top: 0; font-size: 16px;">Why This Actually Works</h3>
        <p style="margin: 10px 0;">Your brain physically changes based on what you think about repeatedly. Neuroscientists call this "neuroplasticity" - your brain's ability to rewire itself throughout your life.</p>
        
        <p style="margin: 10px 0;">When you read positive, true statements about yourself, you're literally building new neural pathways. After weeks of repetition, your brain starts to default to these healthier thought patterns instead of negative self-talk.</p>
        
        <p style="margin: 10px 0;">These aren't just "feel good" messages. They're carefully written to counter specific negative thoughts that many people struggle with - feeling forgotten, doubting your worth, or getting stuck in comparison loops.</p>
        
        <p style="margin: 10px 0; font-style: italic; color: #9BB5CE;">The key is consistency, not perfection. Even when you don't fully believe it yet, reading something true about yourself plants seeds that grow over time.</p>
        
        <div style="margin-top: 15px; padding: 10px; background: rgba(135, 206, 235, 0.1); border-radius: 8px; font-size: 12px; max-width: 600px; margin-left: auto; margin-right: auto;">
          <strong>Approach:</strong> No repeats until you've seen them all<br>
          <strong>Focus:</strong> Genuine statements, not generic positivity<br>
          <strong>Goal:</strong> Rewire your brain toward self-compassion
        </div>
      `;

      // Insert after the entire affirmations container, not inside it
      const affirmationsView = document.getElementById("affirmations-view");
      affirmationsView.appendChild(aboutDiv);
    }
  }

  generateBtn.addEventListener("click", () => {
    if (allAffirmations.length === 0) return; // Wait for affirmations to load

    // If we've used all affirmations, reset and reshuffle
    if (currentIndex >= allAffirmations.length) {
      allAffirmations.forEach((affirmation) => (affirmation.used = false));
      shuffleArray(allAffirmations);
      currentIndex = 0;
    }

    // Get the next unused affirmation
    const selectedAffirmation = allAffirmations[currentIndex];

    // Simple fade transition without multiple animations
    currentAffirmation.style.opacity = "0.3";
    setTimeout(() => {
      currentAffirmation.textContent = `"${selectedAffirmation.text}"`;
      currentAffirmation.style.opacity = "1";
    }, 150);

    selectedAffirmation.used = true;
    currentIndex++;

    count++;
    updateCounterDisplay();
    currentMoodText.textContent = formatMoodText(selectedAffirmation.mood);
  });

  aboutBtn.addEventListener("click", () => {
    showAbout = !showAbout;
    aboutBtn.textContent = showAbout ? "Hide Details" : "About Affirmations";
    updateAboutContent();
  });

  // Function to format mood text for display
  function formatMoodText(mood) {
    const moodMap = {
      CONFIDENT: "CONFIDENT",
      ENCOURAGING: "ENCOURAGING",
      SUPPORTIVE: "SUPPORTIVE",
      MOTIVATING: "MOTIVATING",
      CALMING: "CALMING",
      SELF_CARE: "SELF CARE",
      HOPEFUL: "HOPEFUL",
      AFFIRMING: "AFFIRMING",
      GENUINE: "GENUINE",
      APPRECIATIVE: "APPRECIATIVE",
    };
    return moodMap[mood] || mood;
  }

  // Function to update counter display with proper singular/plural
  function updateCounterDisplay() {
    const reminderText =
      count === 1 ? "gentle reminder shared" : "gentle reminders shared";
    reminderCountText.textContent = `${count} ${reminderText}`;
  }

  // Load affirmations from CSV file with fallback
}

// 3D Particle Universe Preview
function initSculpturePreview() {
  const canvas = document.getElementById("sculpture-canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  let time = 0;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Create preview particles
  const previewParticles = [];
  for (let i = 0; i < 80; i++) {
    previewParticles.push({
      angle: (i / 80) * Math.PI * 2,
      radius: 15 + Math.random() * 25,
      phase: Math.random() * Math.PI * 2,
      speed: 0.02 + Math.random() * 0.03,
      size: 1 + Math.random() * 2,
      hue: Math.random() * 360,
    });
  }

  function drawUniversePreview() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(centerX, centerY);

    // Draw rotating galaxy spiral preview
    previewParticles.forEach((particle, i) => {
      // Update particle
      particle.phase += particle.speed;
      particle.angle += 0.005;

      // Galaxy spiral pattern
      const spiralRadius = particle.radius + Math.sin(particle.phase) * 8;
      const spiralAngle =
        particle.angle + (i / previewParticles.length) * Math.PI * 4;

      const x = Math.cos(spiralAngle) * spiralRadius;
      const y = Math.sin(spiralAngle) * spiralRadius;

      // Dynamic colors
      const hue = (particle.hue + time * 2) % 360;
      const intensity = (Math.sin(particle.phase) + 1) / 2;
      const brightness = 50 + intensity * 40;

      // Neon glow effect
      ctx.shadowColor = `hsl(${hue}, 90%, 70%)`;
      ctx.shadowBlur = 3 + intensity * 8;
      ctx.fillStyle = `hsl(${hue}, 85%, ${brightness}%)`;

      ctx.beginPath();
      ctx.arc(x, y, particle.size + intensity, 0, Math.PI * 2);
      ctx.fill();

      // Draw connections between nearby particles
      if (i % 8 === 0) {
        const nextParticle =
          previewParticles[(i + 1) % previewParticles.length];
        const nextX =
          Math.cos(
            nextParticle.angle +
              ((i + 1) / previewParticles.length) * Math.PI * 4
          ) *
          (nextParticle.radius + Math.sin(nextParticle.phase) * 8);
        const nextY =
          Math.sin(
            nextParticle.angle +
              ((i + 1) / previewParticles.length) * Math.PI * 4
          ) *
          (nextParticle.radius + Math.sin(nextParticle.phase) * 8);

        ctx.strokeStyle = `hsla(${hue}, 60%, 60%, 0.3)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nextX, nextY);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
    });

    ctx.restore();
    time += 1;
    requestAnimationFrame(drawUniversePreview);
  }

  drawUniversePreview();
}

// Pickup Line Generator
function initPickupDemo() {
  const generateBtn = document.getElementById("generate-pickup");
  const currentPickup = document.getElementById("current-pickup");
  const linesCount = document.getElementById("lines-count");
  // Removed smoothness level functionality

  // Load pickup lines directly (embed to avoid fetch issues)
  let allPickupLines = [];
  let currentIndex = 0;
  let count = 1;

  console.log("Loading pickup lines...");

  // Embed all pickup lines directly
  const pickupLinesData = `Are you a Dave song? 'Cause you've got me feeling some type of way.
You must be on Dave's album, 'cause I could listen to you all night.
Is your name Dave? Because I'm tryna get in your 'Psychodrama'.
You're like a Dave freestyle—unexpected, raw, and stuck in my head.
Are you the bassline? Because I feel you in my chest.
Are you a basketball? 'Cause I'm tryna dribble you all night.
Call me Steph 'cause I won't miss my shot with you.
You rebound better than my last situationship.
Are you the court? Because I want to lay you down and play all night.
Are you a dollar bill? 'Cause I want to make you mine and fold you in all the right places.
Are you a variable? Because I want to access your private members.
You must be a compiler because you make my heart race every time you process me.
Are you an algorithm? Because you've optimized my heart.
Is your name Wi-Fi? Because I'm feeling a connection.
Are you a camera? Because every time I look at you, I smile.
You must be made of copper and tellurium because you're Cu-Te.
Are you Google? Because you have everything I've been searching for.
You're like a fine wine—you just keep getting better with age.
Do you have a map? Because I just got lost in your eyes.
Are you a magician? Because whenever I look at you, everyone else disappears.
If you were a vegetable, you'd be a cute-cumber.
Are you a parking ticket? Because you've got 'fine' written all over you.
Do you believe in love at first sight, or should I walk by again?
Are you a bank loan? Because you have my interest.
Is your dad a boxer? Because you're a knockout.
Are you French? Because Eiffel for you.
Do you have a Band-Aid? Because I just scraped my knee falling for you.
Are you a time traveler? Because I see you in my future.
You must be a star because your beauty lights up the night.
Are you a dictionary? Because you add meaning to my life.
If beauty were time, you'd be an eternity.
Are you my phone charger? Because without you, I'd die.
You're so beautiful, you made me forget my pickup line.
Are you a beaver? Because daaaaam.
Do you like Star Wars? Because Yoda one for me.
Are you a 45-degree angle? Because you're acute-y.
Are you made of beryllium, gold, and titanium? Because you're Be-Au-Ti-ful.
I must be a snowflake because I've fallen for you.
Are you my appendix? Because I don't understand how you work, but this feeling in my stomach makes me want to take you out.
You're like pizza—even when you're bad, you're still pretty good.
Are you a campfire? Because you're hot and I want s'more.
Do you have a sunburn, or are you always this hot?
Are you a tower? Because Eiffel for you.
Is your name Ariel? Because we mermaid for each other.
You must be tired because you've been running through my mind all day.
Are you a cat? Because you're purr-fect.
Do you have a pencil? Because I want to erase your past and write our future.
Are you Netflix? Because I could watch you for hours.
You're so sweet, you're giving me a toothache.
Are you a loan? Because you have my interest and I'm ready to pay you back.
Are you lightning? Because you're electrifying.
You must be a broom because you just swept me off my feet.
Are you a fossil? Because I've been digging you.
Do you work at Starbucks? Because I like you a latte.
Are you an elevator? Because you lift me up.
You're like a fine wine, you get better with time.
Are you a thief? Because you stole my heart.
Do you have a mirror in your pocket? Because I can see myself in your pants.
Are you a microwave? Because you make my heart race in 30 seconds.
You must be a keyboard because you're just my type.
Are you a construction worker? Because you're building something in my pants.
Do you believe in fate? Because I think we were mint to be.
Are you a pizza? Because you're cheesy but I still want a piece.
You're hotter than the bottom of my laptop.
Are you my homework? Because I should be doing you right now.
Do you like to draw? Because I put the D in Raw.
Are you a smoke alarm? Because you're loud and annoying, but you could save my life.
You're like a dictionary—you add meaning to my life and you're thick.
Are you my phone? Because I can't stop looking at you.
Do you work at a bakery? Because you're a cutie pie.
Are you a tornado? Because you're spinning my head right round.
You must be a ninja because you snuck into my heart.
Are you a light bulb? Because you brighten up my day.
Do you have a GPS? Because I keep getting lost in your eyes.
You're like a good book—hard to put down and full of good stuff.
Are you a volcano? Because you're smoking hot.
Do you like Mexican food? Because you're nacho average person.
Are you a traffic light? Because stop, you're beautiful.
You must be a magnet because you're attracting me.
Are you a computer? Because you turn my software into hardware.
Do you have a quarter? Because I want to call my mom and tell her I met 'the one'.
You're like a fine whiskey—smooth, strong, and you get me drunk.
Are you a bank? Because you've got my interest and I want to make a deposit.
You must be a camera because every time I see you, I smile.
Are you a keyboard? Because you're just my type and I want to touch you all night.
Do you like science? Because I've got my ion you.
You're like a shooting star—rare, beautiful, and I made a wish on you.
Are you a library book? Because I'm checking you out.
Do you have a name, or can I call you mine?
You must be a time traveler because I see you in my future.
Are you a compass? Because you always point me in the right direction.
Do you like music? Because you're noteworthy.
You're like a fine painting—beautiful to look at and worth a lot.
Are you a garden? Because you're growing on me.
Do you have a sunroof? Because you light up my world.
You must be a diamond because you're precious and rare.
Are you a rainbow? Because you color my world.
Do you like coffee? Because you're brewing something in my heart.
You're like a good song—I want to put you on repeat.
Are you a telescope? Because you make everything look beautiful.
Do you have a passport? Because you're worldly and I want to travel with you.
You must be a sunrise because you make every day brighter.
Are you a puzzle? Because I want to figure you out.
Do you like adventure? Because you're taking my breath away.
You're like a good movie—entertaining and I don't want it to end.
Are you a chef? Because you're cooking up something special in my heart.
Do you have a degree? Because you're smart and beautiful.
You must be a superhero because you saved my day.
Are you a flower? Because you're blooming beautiful.
Do you like art? Because you're a masterpiece.
You're like a good joke—you make me laugh and feel good.
Are you a pilot? Because you're flying high in my heart.
Do you have a driver's license? Because you're driving me crazy.
You must be a doctor because you just cured my loneliness.
Are you a teacher? Because you're teaching me what love feels like.
Do you like dancing? Because you're making my heart dance.
You're like a good meal—satisfying and I want seconds.
Are you a sailor? Because you're navigating straight to my heart.
Do you have a green thumb? Because you're making my love grow.
You must be a scientist because you've created a reaction in my heart.
Are you a writer? Because you're writing a new chapter in my life.
Do you like sports? Because you're playing for keeps with my heart.
You're like a good vacation—relaxing and I don't want it to end.
Are you a musician? Because you're playing all the right notes.
Do you have a toolbox? Because you're fixing everything that's broken in me.
You must be a architect because you're building something beautiful in my heart.
Are you a therapist? Because you're healing my soul.
Do you like fishing? Because you've caught my heart.
You're like a good wine—you get better with every sip.
Are you a firefighter? Because you're putting out the fire in my heart and starting a new one.
Do you have a magic wand? Because you've cast a spell on me.
You must be a guardian angel because you're protecting my heart.
Are you a photographer? Because you're capturing all my attention.
Do you like hiking? Because you're taking me to new heights.
You're like a good story—captivating and I want to know how it ends.
Are you a locksmith? Because you've unlocked something in my heart.
Do you have a crystal ball? Because I see us together in the future.
You must be a treasure hunter because you've found the key to my heart.
Are you a fortune teller? Because I can see us together.
Are you my future? Because I can picture you in all of it now.`;

  // Process the data immediately
  const lines = pickupLinesData
    .trim()
    .split("\n")
    .filter((line) => line.trim() !== "");
  allPickupLines = lines.map((line) => ({
    text: line.trim(),
    used: false,
  }));

  // Shuffle the array initially
  shuffleArray(allPickupLines);

  // Initialize with first pickup line
  if (allPickupLines.length > 0) {
    currentPickup.textContent = `"${allPickupLines[0].text}"`;
    allPickupLines[0].used = true;
    currentIndex = 1;
    linesCount.textContent = count;
  }

  // Update the description text to show actual count
  updatePickupDescription();

  // Add disclaimer after description text
  addPickupDisclaimer();

  // Function to add disclaimer in the right place
  function addPickupDisclaimer() {
    const disclaimerDiv = document.createElement("div");
    disclaimerDiv.style.marginTop = "15px";
    disclaimerDiv.style.padding = "12px";
    disclaimerDiv.style.backgroundColor = "rgba(255, 107, 107, 0.1)";
    disclaimerDiv.style.border = "1px solid rgba(255, 107, 107, 0.3)";
    disclaimerDiv.style.borderRadius = "10px";
    disclaimerDiv.style.color = "#FF6B6B";
    disclaimerDiv.style.fontSize = "12px";
    disclaimerDiv.style.fontStyle = "italic";
    disclaimerDiv.style.textAlign = "center";
    disclaimerDiv.style.maxWidth = "500px";
    disclaimerDiv.style.marginLeft = "auto";
    disclaimerDiv.style.marginRight = "auto";
    disclaimerDiv.innerHTML =
      "⚠️ Disclaimer: I make no promises about the quality or effectiveness of these pickup lines. Use at your own risk! 😅";

    // Add disclaimer after the pickup explanation text
    const pickupExplanation = document.querySelector(".pickup-explanation");
    if (pickupExplanation) {
      pickupExplanation.appendChild(disclaimerDiv);
    }
  }

  // Function to update the description with dynamic count
  function updatePickupDescription() {
    const pickupDescription = document.querySelector(
      '[data-module="pickup-module"] p'
    );
    if (pickupDescription && allPickupLines.length > 0) {
      pickupDescription.textContent = `${allPickupLines.length} clever lines powered by smart algorithms`;
    }
  }

  // Using shared shuffleArray function

  // Removed smoothness levels as requested

  generateBtn.addEventListener("click", () => {
    if (allPickupLines.length === 0) return; // Wait for lines to load

    // If we've used all pickup lines, reset and reshuffle
    if (currentIndex >= allPickupLines.length) {
      allPickupLines.forEach((line) => (line.used = false));
      shuffleArray(allPickupLines);
      currentIndex = 0;
    }

    // Get the next unused pickup line
    const selectedLine = allPickupLines[currentIndex];
    console.log(
      `Showing pickup line ${currentIndex + 1}/${allPickupLines.length}: ${
        selectedLine.text
      }`
    );
    currentPickup.textContent = `"${selectedLine.text}"`;
    selectedLine.used = true;
    currentIndex++;

    count++;
    linesCount.textContent = count;
  });
}

// 3D Particle Universe Demo
function initSculptureDemo() {
  const canvas = document.getElementById("main-sculpture-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Initialize particle universe
  initializeParticleUniverse();

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  let rotation = { x: 0, y: 0 };
  let isDragging = false;
  let lastMouse = { x: 0, y: 0 };
  let scale = 1;
  let autoRotate = true;

  // Unified pointer event handling for both mouse and touch
  function getPointerPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }

  // Mouse and Touch Start
  function handlePointerStart(e) {
    e.preventDefault(); // Prevent default touch behaviors
    isDragging = true;
    const pos = getPointerPos(e);
    lastMouse.x = pos.x;
    lastMouse.y = pos.y;
    autoRotate = false; // Stop auto rotation when user interacts

    // Set attraction point for particle interaction
    const mouseX = (pos.x - canvas.width / 2) / scale;
    const mouseY = (pos.y - canvas.height / 2) / scale;
    attractionPoint = { x: mouseX, y: mouseY, z: 0 };
  }

  // Mouse and Touch Move
  function handlePointerMove(e) {
    if (!isDragging) return;
    e.preventDefault();

    const pos = getPointerPos(e);
    const mouseX = (pos.x - canvas.width / 2) / scale;
    const mouseY = (pos.y - canvas.height / 2) / scale;

    rotation.y += (pos.x - lastMouse.x) * 0.01;
    rotation.x += (pos.y - lastMouse.y) * 0.01;
    lastMouse.x = pos.x;
    lastMouse.y = pos.y;

    // Update attraction point
    attractionPoint = { x: mouseX, y: mouseY, z: 0 };
  }

  // Mouse and Touch End
  function handlePointerEnd(e) {
    e.preventDefault();
    isDragging = false;
    attractionPoint = { x: 0, y: 0, z: 0 }; // Reset attraction
  }

  // Mouse events
  canvas.addEventListener("mousedown", handlePointerStart);
  canvas.addEventListener("mousemove", handlePointerMove);
  canvas.addEventListener("mouseup", handlePointerEnd);
  canvas.addEventListener("mouseleave", handlePointerEnd);

  // Touch events
  canvas.addEventListener("touchstart", handlePointerStart, { passive: false });
  canvas.addEventListener("touchmove", handlePointerMove, { passive: false });
  canvas.addEventListener("touchend", handlePointerEnd, { passive: false });
  canvas.addEventListener("touchcancel", handlePointerEnd, { passive: false });

  // Enhanced wheel/pinch zoom support
  canvas.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      scale += e.deltaY > 0 ? -0.1 : 0.1;
      scale = Math.max(0.3, Math.min(3, scale));
    },
    { passive: false }
  );

  // Touch zoom with two fingers (pinch)
  let lastTouchDistance = 0;
  canvas.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      lastTouchDistance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
      );
    }
  });

  canvas.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
      );

      if (lastTouchDistance > 0) {
        const scaleChange = (distance - lastTouchDistance) * 0.01;
        scale += scaleChange;
        scale = Math.max(0.3, Math.min(3, scale));
      }
      lastTouchDistance = distance;
    }
  });

  // Keyboard controls (keep existing)
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "1":
        changeUniverseMode("galaxy");
        break;
      case "2":
        changeUniverseMode("dna");
        break;
      case "3":
        changeUniverseMode("neural");
        break;
      case "4":
        changeUniverseMode("constellation");
        break;
      case " ":
        e.preventDefault();
        autoRotate = !autoRotate;
        break;
      case "r":
      case "R":
        resetUniverse();
        break;
    }
  });

  function renderUniverse() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Auto rotation when not being controlled
    if (autoRotate && !isDragging) {
      rotation.y += 0.005;
      rotation.x += Math.sin(universeTime * 0.01) * 0.002;
    }

    // Update physics and particles
    updateParticlePhysics();
    universeTime += 1;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.scale(scale, scale);

    // Render particles with connections
    universeParticles.forEach((particle) => {
      // Apply 3D rotation
      const rotatedX =
        particle.x * Math.cos(rotation.y) - particle.z * Math.sin(rotation.y);
      const rotatedZ =
        particle.x * Math.sin(rotation.y) + particle.z * Math.cos(rotation.y);
      const rotatedY =
        particle.y * Math.cos(rotation.x) - rotatedZ * Math.sin(rotation.x);
      const finalZ =
        particle.y * Math.sin(rotation.x) + rotatedZ * Math.cos(rotation.x);

      // Perspective projection
      const perspective = 300 / (300 + finalZ);
      const projX = rotatedX * perspective;
      const projY = rotatedY * perspective;

      // Store projected coordinates for connection rendering
      particle.projX = projX;
      particle.projY = projY;
      particle.projZ = finalZ;
      particle.perspective = perspective;

      // Skip particles that are too far back or outside view
      if (perspective < 0.1 || Math.abs(projX) > 600 || Math.abs(projY) > 600) {
        return;
      }

      // Dynamic colors based on position and energy
      const depthFactor = (finalZ + 200) / 400;
      const hue = (particle.hue + universeTime * 0.5 + depthFactor * 60) % 360;
      const saturation = 70 + particle.intensity * 30;
      const lightness = 40 + particle.intensity * 50 + depthFactor * 20;

      // Particle size based on perspective and energy
      const baseSize = particle.size * perspective;
      const energySize = baseSize * (0.5 + particle.intensity * 1.5);

      // Neon glow effect
      const glowSize = 2 + particle.intensity * 8;
      ctx.shadowColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      ctx.shadowBlur = glowSize;

      // Draw the particle
      ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      ctx.beginPath();
      ctx.arc(projX, projY, energySize, 0, Math.PI * 2);
      ctx.fill();

      // Add bright core for high energy particles
      if (particle.intensity > 0.8) {
        ctx.shadowBlur = 0;
        ctx.fillStyle = `hsl(${hue}, 100%, 90%)`;
        ctx.beginPath();
        ctx.arc(projX, projY, energySize * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    });

    // Render connections between particles
    universeParticles.forEach((particle) => {
      if (particle.perspective < 0.1) return;

      particle.connections.forEach((connectionId) => {
        const connectedParticle = universeParticles[connectionId];
        if (!connectedParticle || connectedParticle.perspective < 0.1) return;

        const distance = Math.sqrt(
          Math.pow(particle.projX - connectedParticle.projX, 2) +
            Math.pow(particle.projY - connectedParticle.projY, 2)
        );

        if (distance < 150) {
          // Only draw close connections
          const opacity = Math.max(0, (150 - distance) / 150) * 0.6;
          const avgHue = (particle.hue + connectedParticle.hue) / 2;

          ctx.strokeStyle = `hsla(${avgHue}, 60%, 60%, ${opacity})`;
          ctx.lineWidth = 0.5 + opacity;
          ctx.beginPath();
          ctx.moveTo(particle.projX, particle.projY);
          ctx.lineTo(connectedParticle.projX, connectedParticle.projY);
          ctx.stroke();
        }
      });
    });

    // Add floating code fragments and equations
    codeFragments.forEach((code, i) => {
      const codeAngle =
        (i / codeFragments.length) * Math.PI * 2 + universeTime * 0.02;
      const codeRadius = 120 + Math.sin(universeTime * 0.05 + i) * 30;
      const cx = Math.cos(codeAngle + rotation.y * 0.5) * codeRadius;
      const cz = Math.sin(codeAngle + rotation.y * 0.5) * codeRadius;
      const cy = Math.sin(universeTime * 0.03 + i) * 40;

      const cPerspective = 250 / (250 + cz);
      const projCx = cx * cPerspective;
      const projCy = cy * cPerspective;

      if (cPerspective > 0.3) {
        const codeHue = (universeTime * 2 + i * 45) % 360;
        ctx.fillStyle = `hsla(${codeHue}, 80%, 70%, ${cPerspective * 0.8})`;
        ctx.shadowColor = `hsl(${codeHue}, 80%, 70%)`;
        ctx.shadowBlur = 5;
        ctx.font = `${Math.floor(
          12 * cPerspective
        )}px 'JetBrains Mono', monospace`;
        ctx.textAlign = "center";
        ctx.fillText(code, projCx, projCy);
        ctx.shadowBlur = 0;
      }
    });

    // Add floating math equations
    mathEquations.forEach((equation, i) => {
      const mathAngle =
        (i / mathEquations.length) * Math.PI * 2 + universeTime * 0.015;
      const mathRadius = 160 + Math.cos(universeTime * 0.04 + i) * 40;
      const mx = Math.cos(mathAngle - rotation.y * 0.3) * mathRadius;
      const mz = Math.sin(mathAngle - rotation.y * 0.3) * mathRadius;
      const my = Math.cos(universeTime * 0.04 + i) * 30;

      const mPerspective = 280 / (280 + mz);
      const projMx = mx * mPerspective;
      const projMy = my * mPerspective;

      if (mPerspective > 0.2) {
        const mathHue = (universeTime * 1.5 + i * 60 + 180) % 360;
        ctx.fillStyle = `hsla(${mathHue}, 90%, 80%, ${mPerspective * 0.7})`;
        ctx.shadowColor = `hsl(${mathHue}, 90%, 80%)`;
        ctx.shadowBlur = 4;
        ctx.font = `${Math.floor(14 * mPerspective)}px serif`;
        ctx.textAlign = "center";
        ctx.fillText(equation, projMx, projMy);
        ctx.shadowBlur = 0;
      }
    });

    ctx.restore();
    requestAnimationFrame(renderUniverse);
  }

  renderUniverse();
}

// 3D Particle Universe System
let universeParticles = [];
let universeConnections = [];
let universeMode = "galaxy"; // 'galaxy', 'dna', 'neural', 'constellation'
let particleCount = 300; // Reduced from 1500 to 300 for much better performance
let physicsEnabled = true;
let attractionPoint = { x: 0, y: 0, z: 0 };
let codeFragments = [];
let mathEquations = [];
let universeTime = 0;

// Physics constants
const GRAVITY_STRENGTH = 0.0001;
const FRICTION = 0.99;
const CONNECTION_DISTANCE = 25;

function initializeParticleUniverse() {
  generateUniverseParticles();
  generateFloatingCode();
  generateMathEquations();
  console.log(
    "3D Particle Universe initialized with",
    particleCount,
    "particles!"
  );
}

function generateUniverseParticles() {
  universeParticles = [];

  for (let i = 0; i < particleCount; i++) {
    const particle = {
      id: i,
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
      z: (Math.random() - 0.5) * 400,
      vx: 0,
      vy: 0,
      vz: 0,
      targetX: 0,
      targetY: 0,
      targetZ: 0,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.02 + Math.random() * 0.05,
      size: 1 + Math.random() * 3,
      hue: Math.random() * 360,
      intensity: Math.random(),
      connections: [],
      energy: Math.random(),
      mass: 0.5 + Math.random() * 1.5,
    };

    universeParticles.push(particle);
  }

  updateParticleFormation();
}

function updateParticleFormation() {
  const centerX = 0,
    centerY = 0,
    centerZ = 0;

  universeParticles.forEach((particle, i) => {
    switch (universeMode) {
      case "galaxy":
        // Logarithmic spiral galaxy
        const armNumber = i % 3; // 3 spiral arms
        const armOffset = (armNumber * Math.PI * 2) / 3;
        const radius = Math.sqrt(i / particleCount) * 150;
        const angle =
          (i / particleCount) * Math.PI * 8 + armOffset + universeTime * 0.01;

        particle.targetX = Math.cos(angle) * radius;
        particle.targetZ = Math.sin(angle) * radius;
        particle.targetY =
          (Math.random() - 0.5) * 30 + Math.sin(radius * 0.02) * 20;
        break;

      case "dna":
        // Double helix DNA structure
        const strand = i % 2; // Two strands
        const position = (i / particleCount) * Math.PI * 12;
        const helixRadius = 40;

        particle.targetX = Math.cos(position + strand * Math.PI) * helixRadius;
        particle.targetY = (i / particleCount - 0.5) * 300;
        particle.targetZ = Math.sin(position + strand * Math.PI) * helixRadius;

        // Base pairs connecting the strands
        if (i % 10 === 0 && strand === 0) {
          const baseY = particle.targetY;
          const connectingParticle = universeParticles.find(
            (p) => Math.abs(p.targetY - baseY) < 5 && p.id !== particle.id
          );
          if (connectingParticle) {
            particle.connections.push(connectingParticle.id);
          }
        }
        break;

      case "neural":
        // Neural network with clustered nodes
        const clusterId = Math.floor(i / (particleCount / 8)); // 8 clusters
        const clusterAngle = (clusterId / 8) * Math.PI * 2;
        const clusterRadius = 120;
        const clusterX = Math.cos(clusterAngle) * clusterRadius;
        const clusterZ = Math.sin(clusterAngle) * clusterRadius;

        particle.targetX = clusterX + (Math.random() - 0.5) * 60;
        particle.targetY = (Math.random() - 0.5) * 200;
        particle.targetZ = clusterZ + (Math.random() - 0.5) * 60;

        // Neural connections
        particle.connections = [];
        if (Math.random() < 0.3) {
          // 30% chance of connections
          const nearbyParticles = universeParticles.filter((p) => {
            const dx = p.targetX - particle.targetX;
            const dy = p.targetY - particle.targetY;
            const dz = p.targetZ - particle.targetZ;
            return (
              Math.sqrt(dx * dx + dy * dy + dz * dz) < 80 &&
              p.id !== particle.id
            );
          });

          nearbyParticles.slice(0, 3).forEach((p) => {
            particle.connections.push(p.id);
          });
        }
        break;

      case "constellation":
        // Constellation patterns with mythological shapes
        const constellationId = Math.floor(i / (particleCount / 12)); // 12 constellations
        const constAngle = (constellationId / 12) * Math.PI * 2;
        const constRadius = 100 + Math.random() * 80;

        // Create constellation patterns
        const patternAngle =
          ((i % (particleCount / 12)) / (particleCount / 12)) * Math.PI * 2;
        const patternRadius = 20 + Math.random() * 40;

        particle.targetX =
          Math.cos(constAngle) * constRadius +
          Math.cos(patternAngle) * patternRadius;
        particle.targetY = (Math.random() - 0.5) * 100;
        particle.targetZ =
          Math.sin(constAngle) * constRadius +
          Math.sin(patternAngle) * patternRadius;

        // Connect constellation stars
        if (i % 5 === 0) {
          const sameConstellation = universeParticles.filter(
            (p) =>
              Math.floor(p.id / (particleCount / 12)) === constellationId &&
              p.id !== particle.id
          );
          particle.connections = sameConstellation.slice(0, 2).map((p) => p.id);
        }
        break;
    }
  });
}

function generateFloatingCode() {
  codeFragments = [
    "Math.sin(θ)",
    "Vector3D",
    "transform()",
    "particle.update()",
    "for(let i=0; i<n; i++)",
    "calculateDistance()",
    "render3D()",
    "matrix.multiply()",
    "physics.step()",
    "cos(angle * PI)",
  ];
}

function generateMathEquations() {
  mathEquations = [
    "E = mc²",
    "∇²φ = 4πGρ",
    "F = ma",
    "∑F = 0",
    "x² + y² = r²",
    "∂u/∂t = α∇²u",
    "∫∫∫ρdV",
    "Ψ = Ae^(iθ)",
  ];
}

function updateParticlePhysics() {
  universeParticles.forEach((particle) => {
    if (physicsEnabled) {
      // Apply forces toward target position
      const dx = particle.targetX - particle.x;
      const dy = particle.targetY - particle.y;
      const dz = particle.targetZ - particle.z;

      // Spring force toward target
      const springForce = 0.002;
      particle.vx += dx * springForce;
      particle.vy += dy * springForce;
      particle.vz += dz * springForce;

      // Attraction to mouse/interaction point
      const attractDx = attractionPoint.x - particle.x;
      const attractDy = attractionPoint.y - particle.y;
      const attractDz = attractionPoint.z - particle.z;
      const attractDist = Math.sqrt(
        attractDx * attractDx + attractDy * attractDy + attractDz * attractDz
      );

      if (attractDist > 0 && attractDist < 100) {
        const attractForce =
          (GRAVITY_STRENGTH * particle.mass) / (attractDist * attractDist);
        particle.vx += (attractDx / attractDist) * attractForce;
        particle.vy += (attractDy / attractDist) * attractForce;
        particle.vz += (attractDz / attractDist) * attractForce;
      }

      // Apply friction
      particle.vx *= FRICTION;
      particle.vy *= FRICTION;
      particle.vz *= FRICTION;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;
    } else {
      // Direct movement to target when physics disabled
      particle.x += (particle.targetX - particle.x) * 0.05;
      particle.y += (particle.targetY - particle.y) * 0.05;
      particle.z += (particle.targetZ - particle.z) * 0.05;
    }

    // Update particle animation
    particle.phase += particle.phaseSpeed;
    particle.intensity = (Math.sin(particle.phase) + 1) / 2;
    particle.hue = (particle.hue + 0.5) % 360;
  });
}

function changeUniverseMode(mode) {
  universeMode = mode;
  updateParticleFormation();
  console.log(`Universe mode changed to: ${mode}`);
}

function setParticleCount(count) {
  particleCount = parseInt(count);
  document.getElementById("particle-count").textContent = count;
  generateUniverseParticles();
}

function togglePhysics() {
  physicsEnabled = !physicsEnabled;
  const btn = document.getElementById("physics-btn");
  btn.textContent = physicsEnabled ? "🌊 Physics: ON" : "🔄 Physics: OFF";
}

function resetUniverse() {
  universeTime = 0;
  attractionPoint = { x: 0, y: 0, z: 0 };
  generateUniverseParticles();
}

// Code Demo - Calculations to Pixels
function initCodeDemo() {
  const codeElement = document.getElementById("live-code");
  const outputElement = document.getElementById("code-output");

  let currentExample = 0;

  // Create Next Example button (outside the container)
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next Example";
  nextBtn.style.marginTop = "20px";
  nextBtn.style.padding = "10px 20px";
  nextBtn.style.backgroundColor = "#FF6B6B";
  nextBtn.style.color = "white";
  nextBtn.style.border = "none";
  nextBtn.style.borderRadius = "5px";
  nextBtn.style.cursor = "pointer";
  nextBtn.style.display = "block";
  nextBtn.style.margin = "20px auto";

  // Add button after the entire code view container
  const codeView = document.getElementById("code-view");
  codeView.appendChild(nextBtn);

  const examples = [
    {
      title: "The Big Picture: Code → Visual",
      code: `// 🎯 Let's start simple! How does this code...
const red = 150;
const green = 100;  
const blue = 255;
const color = \`rgb(\${red}, \${green}, \${blue})\`;

element.style.background = color;
element.style.width = '300px';
element.style.height = '150px';
element.style.borderRadius = '20px';

// ...become this purple box you see? ➡️
// 
// Think of it like giving instructions to an artist:
// "Paint me a box, make it this purple color,
//  make it this big, and round the corners"
//
// The computer follows your instructions step by step!
//
// 🔍 Click "Next" to see HOW the computer
//    understands each part of these instructions...`,
      apply: (element) => {
        element.style.background = `rgb(150, 100, 255)`;
        element.style.width = "300px";
        element.style.height = "150px";
        element.style.borderRadius = "20px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "white";
        element.style.fontSize = "18px";
        element.style.fontWeight = "bold";
        element.style.textShadow = "2px 2px 4px rgba(0,0,0,0.5)";
        element.textContent = "Purple Box!";
      },
    },
    {
      title: "Step 1: Understanding Colors",
      code: `// 🎨 How does the computer know what "purple" looks like?
//
// Imagine you have 3 light bulbs: Red, Green, and Blue
// You can make any color by dimming or brightening each bulb!

const red = 150;    // Red bulb at 150/255 brightness (59%)
const green = 100;  // Green bulb at 100/255 brightness (39%)  
const blue = 255;   // Blue bulb at 255/255 brightness (100%)

// Why 255? Because computers count from 0 to 255 (256 total)
// Think of it like a dimmer switch with 256 settings:
// • 0 = bulb completely OFF
// • 255 = bulb at MAXIMUM brightness
// • 150 = bulb at about 60% brightness

const color = \`rgb(\${red}, \${green}, \${blue})\`;
// This creates the instruction: "rgb(150, 100, 255)"

// So our purple is:
// 🔴 Red: Medium bright (59%)
// 🟢 Green: Dim (39%)  
// 🔵 Blue: Full brightness (100%)
// = Purple! (More blue + some red + little green)

element.style.background = color;`,
      apply: (element) => {
        element.style.background = `rgb(150, 100, 255)`;
        element.style.width = "350px";
        element.style.height = "200px";
        element.style.borderRadius = "15px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "white";
        element.style.fontSize = "16px";
        element.style.fontWeight = "bold";
        element.style.textShadow = "1px 1px 2px rgba(0,0,0,0.7)";
        element.style.padding = "20px";
        element.innerHTML =
          "🔴 Red: 150/255 (59%)<br>🟢 Green: 100/255 (39%)<br>🔵 Blue: 255/255 (100%)<br><br>= Purple Color!";
      },
    },
    {
      title: "Step 2: Size and Position",
      code: `// 📐 How does the computer know WHERE and HOW BIG?
//
// Your screen is like a giant piece of graph paper
// with millions of tiny squares called "pixels"

element.style.width = '300px';   // Make it 300 squares wide
element.style.height = '150px';  // Make it 150 squares tall

// Think of your screen like this:
// (0,0) ┌─────────────────────→ X direction
//       │ □ □ □ □ □ □ □ □ □ □
//       │ □ □ □ □ □ □ □ □ □ □  
//       │ □ □ ■ ■ ■ □ □ □ □ □  ← Our box starts here
//       │ □ □ ■ ■ ■ □ □ □ □ □
//       │ □ □ ■ ■ ■ □ □ □ □ □  ← And ends here
//       ↓ Y direction
//
// Each □ or ■ = 1 pixel on your screen
// The computer fills 300×150 pixels with our purple color!

// Pixels are TINY: A 1080p screen has over 2 million pixels!
// But the computer can color each one super fast

element.style.borderRadius = '20px';
// This tells the computer: "make the corners round"
// Instead of sharp corners ■ make them curved ●`,
      apply: (element) => {
        element.style.background = `rgb(150, 100, 255)`;
        element.style.width = "300px";
        element.style.height = "150px";
        element.style.borderRadius = "20px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "white";
        element.style.fontSize = "14px";
        element.style.fontWeight = "bold";
        element.style.textShadow = "1px 1px 2px rgba(0,0,0,0.7)";
        element.style.border = "2px dashed rgba(255,255,255,0.5)";
        element.innerHTML =
          "300 pixels wide<br>×<br>150 pixels tall<br><br>= 45,000 purple pixels!";
      },
    },
    {
      title: "Step 3: Binary & Computer Memory",
      code: `// 💾 How computers actually store and process these numbers
//
// Computers only understand 1s and 0s (binary)
// So how does "150" become something the computer can use?

const red = 150;  // This is what we write...

// But the computer stores it as binary:
// 150 in decimal = 10010110 in binary
// Each digit is called a "bit" (binary digit)
// 8 bits together = 1 "byte"

// MEMORY STORAGE:
// Your computer allocates memory space for this color:
// Memory Address: 0x7FFEE4B3A5C0 (example)
// Content: [10010110] [01100100] [11111111]
//          ^red=150   ^green=100 ^blue=255

// The CPU reads these bytes and understands:
// "The first byte means red intensity"
// "The second byte means green intensity" 
// "The third byte means blue intensity"

// Each byte can store values 0-255 because:
// 8 bits = 2^8 = 256 possible combinations
// From 00000000 (0) to 11111111 (255)

console.log("Binary magic happening in memory!");`,
      apply: (element) => {
        element.style.background = `linear-gradient(45deg, #1a1a1a, #2a2a2a)`;
        element.style.width = "400px";
        element.style.height = "200px";
        element.style.borderRadius = "15px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "#00ff00";
        element.style.fontSize = "14px";
        element.style.fontFamily = "monospace";
        element.style.padding = "15px";
        element.style.border = "1px solid #00ff00";
        element.innerHTML = `
          <div style="color: #ffff00; margin-bottom: 10px;">MEMORY DUMP:</div>
          <div>Address: 0x7FFEE4B3A5C0</div>
          <div style="margin: 10px 0; font-weight: bold;">
            [10010110] [01100100] [11111111]
          </div>
          <div style="color: #ff6666;">Red=150  Green=100  Blue=255</div>
          <div style="margin-top: 10px; color: #88ff88;">Binary → Color Values</div>
        `;
      },
    },
    {
      title: "Step 4: Pixel Coordinates & Screen Layout",
      code: `// 📍 How the computer knows exactly where to put each color

// COORDINATE SYSTEM:
// Your screen is like a giant grid with X,Y coordinates
// Think of it like battleship: A1, B2, C3...
// But computers use numbers: (0,0), (1,0), (2,0)...

element.style.width = '300px';   // Takes 300 pixels horizontally  
element.style.height = '150px';  // Takes 150 pixels vertically

// SCREEN COORDINATES:
// (0,0) = Top-left corner of your screen
// (100, 50) = 100 pixels right, 50 pixels down
// (1920, 1080) = Bottom-right on a 1080p screen

// PIXEL MAPPING:
// For our purple box, computer calculates:
// "Fill pixels from (100,50) to (400,200) with purple"
// That's 300×150 = 45,000 individual pixel locations!

// MEMORY FOR EACH PIXEL:
// Pixel(100,50): Store Red=150, Green=100, Blue=255  
// Pixel(101,50): Store Red=150, Green=100, Blue=255
// Pixel(102,50): Store Red=150, Green=100, Blue=255
// ...45,000 times for our purple box

// A 1920×1080 screen has 2,073,600 pixels total
// Each pixel needs its X,Y location + RGB colors tracked`,
      apply: (element) => {
        element.style.background = `linear-gradient(45deg, #2c1810, #1a0f08)`;
        element.style.width = "450px";
        element.style.height = "220px";
        element.style.borderRadius = "15px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "#ffa500";
        element.style.fontSize = "13px";
        element.style.fontFamily = "monospace";
        element.style.padding = "15px";
        element.style.border = "2px solid #ffa500";
        element.style.boxShadow = "0 0 20px rgba(255,165,0,0.3)";
        element.innerHTML = `
          <div style="color: #ff6644; margin-bottom: 8px; font-weight: bold;">📍 PIXEL COORDINATES</div>
          <div style="margin: 5px 0;">Screen: 1920×1080 = 2,073,600 pixels</div>
          <div style="margin: 5px 0;">Our box: 300×150 = 45,000 pixels</div>
          <div style="margin: 5px 0; color: #44ff88;">Position: (100,50) → (400,200)</div>
          <div style="margin: 5px 0;">Each pixel: X, Y, Red, Green, Blue</div>
          <div style="margin-top: 10px; color: #88aaff;">Computer tracks every single location!</div>
        `;
      },
    },
    {
      title: "Step 5: Voltage Control & LED Addressing",
      code: `// ⚡ How the computer controls 6.2 million tiny lights

// YOUR SCREEN'S TINY LIGHTS:
// 1920×1080 screen = 2,073,600 pixels
// Each pixel = 3 tiny LEDs (Red, Green, Blue)  
// Total: 6,220,800 individual LED lights!

// VOLTAGE CONVERSION:
const redVoltage = (150 / 255) * 3.3;  // = 1.94 volts

// ADDRESSING SYSTEM (like a postal service):
// Graphics card: "Send 1.94V to Row 50, Column 100, Red LED"
// Screen has drivers - like postal workers for each row/column

// HOW IT GETS TO THE RIGHT LED:
// 1. Graphics card calculates: 150/255 = 59% brightness 
// 2. Converts to voltage: 59% × 3.3V = 1.94 volts
// 3. Sends address: "Row 50, Column 100, Red LED"  
// 4. Row driver activates row 50 circuits
// 5. Column driver activates column 100 circuits
// 6. Voltage travels through tiny wires to exact LED
// 7. Red LED lights up at 1.94V (59% brightness)

// This happens simultaneously for all 6.2 million LEDs
// 60+ times per second for smooth video
// Each LED gets exactly the right voltage at the right time`,
      apply: (element) => {
        element.style.background = `radial-gradient(circle, #0f1419, #1a0a1f)`;
        element.style.width = "480px";
        element.style.height = "250px";
        element.style.borderRadius = "20px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "#00ffaa";
        element.style.fontSize = "13px";
        element.style.fontFamily = "monospace";
        element.style.padding = "20px";
        element.style.border = "2px solid #00ffaa";
        element.style.boxShadow = "0 0 25px rgba(0,255,170,0.4)";
        element.innerHTML = `
          <div style="color: #ff4488; margin-bottom: 8px; font-weight: bold;">⚡ LED CONTROL SYSTEM ⚡</div>
          <div style="margin: 4px 0;">6,220,800 LEDs controlled individually</div>
          <div style="margin: 4px 0; color: #ffaa44;">Row 50 + Column 100 = Exact pixel</div>
          <div style="margin: 4px 0;">150 → 1.94V → Red LED (59% bright)</div>
          <div style="margin: 4px 0;">100 → 1.29V → Green LED (39% bright)</div>
          <div style="margin: 4px 0;">255 → 3.30V → Blue LED (100% bright)</div>
          <div style="margin-top: 12px; color: #aaaaff;">= Purple light hitting your eyes!</div>
          <div style="margin-top: 8px; font-size: 11px; opacity: 0.8;">60 FPS = 373 million calculations/second</div>
        `;
      },
    },
    {
      title: "Step 6: The Complete Journey",
      code: `// 🔄 From your code to photons hitting your eyes

const color = "rgb(150, 100, 255)";
element.style.background = color;

// THE COMPLETE SEQUENCE:

// 1. PARSE & CALCULATE (Browser)
//    Browser reads: "Make this element purple"
//    Calculates which pixels: (100,50) to (400,200)

// 2. CONVERT TO BINARY (CPU)  
//    150 → 10010110, 100 → 01100100, 255 → 11111111
//    Store 45,000 pixels × 3 colors = 135,000 numbers

// 3. ADDRESS & COORDINATE (Graphics Card)
//    For each pixel: "Row 50, Column 100 needs purple"
//    Map 2.1 million screen coordinates

// 4. CONVERT TO VOLTAGE (Display Controller)
//    150/255 = 59% brightness = 1.94 volts for red LED
//    Calculate voltage for all 6.2 million LEDs

// 5. LIGHT UP PIXELS (Screen Hardware)
//    Send voltage through tiny wires to exact LEDs
//    Red+Green+Blue light combines = Purple

// 6. PHOTONS TO BRAIN (Physics + Biology)
//    Purple light travels to your eyes
//    Your brain interprets it as "purple box"

// Total time: 16 milliseconds, 60 times per second
// 373 million pixel calculations every single second!`,
      apply: (element) => {
        element.style.background = `linear-gradient(135deg, 
          rgb(150, 100, 255) 0%, 
          rgb(100, 150, 255) 25%,
          rgb(255, 100, 150) 50%,
          rgb(150, 255, 100) 75%,
          rgb(255, 150, 100) 100%)`;
        element.style.width = "520px";
        element.style.height = "280px";
        element.style.borderRadius = "20px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "white";
        element.style.fontSize = "14px";
        element.style.fontWeight = "bold";
        element.style.textShadow = "2px 2px 4px rgba(0,0,0,0.8)";
        element.style.padding = "20px";
        element.style.boxShadow = "0 0 30px rgba(150,100,255,0.6)";
        element.innerHTML = `
          <div style="font-size: 16px; margin-bottom: 10px;">The Complete Journey</div>
          <div style="margin: 5px 0;">Code → Binary → Coordinates → Voltage → Light</div>
          <div style="margin: 5px 0;">Browser → CPU → GPU → Display → Eyes</div>
          <div style="margin-top: 15px; font-size: 18px;">16ms, 60 FPS</div>
          <div style="margin-top: 10px; font-size: 12px; opacity: 0.9;">
            373 million calculations per second!
          </div>
        `;

        // Add smooth color transition animation
        let step = 0;
        const colors = [
          "rgb(150, 100, 255)", // Original purple
          "rgb(100, 150, 255)", // Blue
          "rgb(100, 255, 150)", // Green
          "rgb(255, 150, 100)", // Orange
          "rgb(255, 100, 150)", // Pink
          "rgb(150, 255, 100)", // Light green
          "rgb(150, 100, 255)", // Back to purple
        ];
        const interval = setInterval(() => {
          if (step < colors.length - 1) {
            element.style.background = `linear-gradient(135deg, ${
              colors[step]
            } 0%, ${colors[step + 1]} 100%)`;
            element.style.transition = "background 0.8s ease-in-out";
            step++;
          } else {
            clearInterval(interval);
            // Reset to original gradient
            element.style.background = `linear-gradient(135deg, 
              rgb(150, 100, 255) 0%, 
              rgb(100, 150, 255) 25%,
              rgb(255, 100, 150) 50%,
              rgb(150, 255, 100) 75%,
              rgb(255, 150, 100) 100%)`;
          }
        }, 1000);
      },
    },
  ];

  function updateExample() {
    const example = examples[currentExample];
    codeElement.textContent = example.code;

    // Reset and apply new styles
    outputElement.style = "";
    outputElement.className = "";
    example.apply(outputElement);

    // Add floating animation class
    outputElement.classList.add("floating");

    // Update button text to show current example
    nextBtn.textContent = `Next Step (${currentExample + 1}/${
      examples.length
    })`;
    if (currentExample === examples.length - 1) {
      nextBtn.textContent = `Start Over (${examples.length}/${examples.length})`;
    }
  }

  nextBtn.addEventListener("click", () => {
    currentExample = (currentExample + 1) % examples.length;
    updateExample();
  });

  // Initialize with first example
  updateExample();
}

function showComingSoon() {
  // For modules not yet implemented
  alert(
    "This module is still being built! The main demos are Calculations→Pixels, Daily Affirmations, and Pickup Line Generator."
  );
}

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", () => {
  // Initialize mobile optimizations
  optimizeForMobile();
  handleCanvasResize();
  addTouchSupport();

  // Start terminal sequence after a brief delay
  setTimeout(() => {
    typeTerminalMessage();
  }, 500);

  // Add keyboard shortcut for skip (S key or Space)
  document.addEventListener("keydown", (event) => {
    if (
      (event.key === "s" || event.key === "S" || event.key === " ") &&
      !document.getElementById("terminal").classList.contains("hidden")
    ) {
      skipToNext();
    }
  });

  // Prevent zoom on double-tap for iOS
  let lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    function (event) {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false
  );

  // Prevent zoom on pinch for iOS (except on canvas elements)
  document.addEventListener("gesturestart", function (e) {
    if (!e.target.tagName.toLowerCase() === "canvas") {
      e.preventDefault();
    }
  });
});

// Update todo status
function updateTodoStatus() {
  console.log("Terminal loading: Complete");
  console.log("Mobile optimizations: Complete");
  console.log("Touch support: Complete");
  console.log("Interactive modules: Ready for mobile");
}

// Enhanced Button Event Handlers with Touch Support
function addTouchSupport() {
  // Skip button
  const skipBtn = document.getElementById("skip-btn");
  if (skipBtn) {
    skipBtn.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        skipToNext();
      },
      { passive: false }
    );
  }

  // Generate buttons for affirmations and pickup lines
  setTimeout(() => {
    const generateAffirmationBtn = document.getElementById(
      "generate-affirmation"
    );
    const generatePickupBtn = document.getElementById("generate-pickup");

    if (generateAffirmationBtn) {
      generateAffirmationBtn.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          // The existing click handler will be triggered
        },
        { passive: false }
      );
    }

    if (generatePickupBtn) {
      generatePickupBtn.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          // The existing click handler will be triggered
        },
        { passive: false }
      );
    }
  }, 100);
}

// Enhanced Responsive Canvas Handling
function handleCanvasResize() {
  // Resize canvases when window resizes (important for mobile orientation changes)
  window.addEventListener("resize", () => {
    setTimeout(() => {
      const sculptureCanvas = document.getElementById("main-sculpture-canvas");
      if (sculptureCanvas) {
        sculptureCanvas.width = sculptureCanvas.offsetWidth;
        sculptureCanvas.height = sculptureCanvas.offsetHeight;
      }

      const basketballCanvas = document.getElementById(
        "main-basketball-canvas"
      );
      if (basketballCanvas) {
        basketballCanvas.width = basketballCanvas.offsetWidth;
        basketballCanvas.height = basketballCanvas.offsetHeight;
      }
    }, 100);
  });

  // Handle orientation change specifically
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      // Force a reflow and repaint
      const canvases = document.querySelectorAll("canvas");
      canvases.forEach((canvas) => {
        const parent = canvas.parentNode;
        if (parent) {
          canvas.style.width = "100%";
          canvas.style.height = "auto";
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
        }
      });
    }, 500);
  });
}

// Mobile Performance Optimizations
function optimizeForMobile() {
  // Detect if device is mobile
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // Reduce particle count for better performance on mobile
    if (typeof particleCount !== "undefined") {
      particleCount = Math.min(particleCount, 150); // Limit to 150 particles on mobile
    }

    // Disable some expensive animations on mobile
    document.body.classList.add("mobile-device");

    // Reduce confetti on mobile
    const originalCreateConfetti = createSpectacularConfetti;
    if (typeof createSpectacularConfetti !== "undefined") {
      createSpectacularConfetti = function () {
        // Call original but with reduced parameters
        originalCreateConfetti();

        // Clear some confetti early on mobile
        setTimeout(() => {
          const confettiPieces = document.querySelectorAll(".confetti-piece");
          confettiPieces.forEach((piece, index) => {
            if (index % 2 === 0) {
              // Remove every other piece
              piece.remove();
            }
          });
        }, 2000);
      };
    }

    // Reduce animation durations for better performance
    const style = document.createElement("style");
    style.textContent = `
      .mobile-device .confetti-piece {
        animation-duration: 4s !important;
      }
      .mobile-device .epic-streamer {
        animation-duration: 5s !important;
      }
      .mobile-device .floating {
        animation-duration: 2s !important;
      }
    `;
    document.head.appendChild(style);
  }
}
