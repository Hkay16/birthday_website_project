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
let autoScrollEnabled = true; // Start enabled
let lastScrollPosition = 0;

function typeTerminalMessage() {
  const output = document.getElementById("terminal-output");
  const terminalBody = document.querySelector(".terminal-body");
  const currentMessage = terminalMessages[currentMessageIndex];

  if (currentCharIndex < currentMessage.length) {
    output.textContent += currentMessage[currentCharIndex];
    currentCharIndex++;

    // Only auto-scroll if enabled AND user is at the very bottom
    if (terminalBody && autoScrollEnabled) {
      const isAtBottom =
        terminalBody.scrollTop >=
        terminalBody.scrollHeight - terminalBody.clientHeight - 5;
      if (isAtBottom) {
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    }

    terminalTimeout = setTimeout(typeTerminalMessage, 30 + Math.random() * 20);
  } else {
    output.textContent += "\n";
    currentMessageIndex++;
    currentCharIndex = 0;

    // Only auto-scroll after line completion if enabled AND at bottom
    if (terminalBody && autoScrollEnabled) {
      const isAtBottom =
        terminalBody.scrollTop >=
        terminalBody.scrollHeight - terminalBody.clientHeight - 5;
      if (isAtBottom) {
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
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
    // Enable body scrolling for the next phase
    document.body.classList.add("terminal-hidden");
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
    // Ensure body scrolling is enabled for hub
    document.body.classList.add("terminal-hidden");
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
  const gift = document.getElementById("spectacular-gift");
  let giftOpened = false;

  function handleGiftClick(e) {
    if (!giftOpened && e.type === "click" && e.pointerType !== "touch") {
      giftOpened = true;
      openSpectacularGift();
    }
  }

  // Mouse click support
  gift.addEventListener("click", handleGiftClick);

  // Proper touch handling
  let touchStartTime = 0;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchMoved = false;

  gift.addEventListener(
    "touchstart",
    (e) => {
      if (giftOpened) return;
      touchStartTime = Date.now();
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchMoved = false;
    },
    { passive: true }
  );

  gift.addEventListener(
    "touchmove",
    (e) => {
      if (!touchMoved) {
        const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
        const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
        if (deltaX > 15 || deltaY > 15) {
          touchMoved = true;
        }
      }
    },
    { passive: true }
  );

  gift.addEventListener(
    "touchend",
    (e) => {
      if (giftOpened) return;
      const touchDuration = Date.now() - touchStartTime;
      if (!touchMoved && touchDuration < 500 && e.changedTouches.length === 1) {
        e.preventDefault();
        giftOpened = true;
        openSpectacularGift();
      }
    },
    { passive: false }
  );

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
      // Enable body scrolling for the hub
      document.body.classList.add("terminal-hidden");
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
  // Module click/touch handlers with proper tap detection
  document.querySelectorAll(".module-card").forEach((module) => {
    // Remove existing listeners to avoid duplicates
    module.removeEventListener("click", moduleClickHandler);
    module.removeEventListener("touchstart", moduleClickHandler);

    // Add click support for mouse
    module.addEventListener("click", moduleClickHandler);

    // Add proper touch handling
    let touchStartTime = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;

    module.addEventListener(
      "touchstart",
      (e) => {
        touchStartTime = Date.now();
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchMoved = false;
      },
      { passive: true }
    );

    module.addEventListener(
      "touchmove",
      (e) => {
        if (!touchMoved) {
          const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
          const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
          // If moved more than 10px, it's a scroll, not a tap
          if (deltaX > 10 || deltaY > 10) {
            touchMoved = true;
          }
        }
      },
      { passive: true }
    );

    module.addEventListener(
      "touchend",
      (e) => {
        const touchDuration = Date.now() - touchStartTime;
        // Only treat as click if: quick tap (< 500ms), didn't move much, and single touch
        if (
          !touchMoved &&
          touchDuration < 500 &&
          e.changedTouches.length === 1
        ) {
          e.preventDefault();
          const moduleId = module.dataset.module;
          openModuleView(moduleId);
        }
      },
      { passive: false }
    );

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

  // Back button handlers with better touch support
  document.querySelectorAll(".back-btn").forEach((btn) => {
    btn.removeEventListener("click", backButtonHandler);
    btn.removeEventListener("touchstart", backButtonHandler);

    btn.addEventListener("click", backButtonHandler);

    // Proper touch handling for back button
    let touchStartTime = 0;
    let touchMoved = false;

    btn.addEventListener(
      "touchstart",
      (e) => {
        touchStartTime = Date.now();
        touchMoved = false;
      },
      { passive: true }
    );

    btn.addEventListener(
      "touchmove",
      (e) => {
        touchMoved = true; // Any movement disqualifies it as a tap
      },
      { passive: true }
    );

    btn.addEventListener(
      "touchend",
      (e) => {
        const touchDuration = Date.now() - touchStartTime;
        if (!touchMoved && touchDuration < 500) {
          e.preventDefault();
          document.getElementById("module-views").classList.add("hidden");
          document.getElementById("main-hub").classList.remove("hidden");
        }
      },
      { passive: false }
    );
  });
}

function moduleClickHandler(e) {
  // Only handle mouse clicks, not touch (touch is handled separately)
  if (e.type === "click" && e.pointerType !== "touch") {
    const moduleId = this.dataset.module;
    openModuleView(moduleId);
  }
}

function backButtonHandler(e) {
  // Only handle mouse clicks, not touch (touch is handled separately)
  if (e.type === "click" && e.pointerType !== "touch") {
    document.getElementById("module-views").classList.add("hidden");
    document.getElementById("main-hub").classList.remove("hidden");
  }
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
"Happy Birthday! You're another year wiser and more amazing.",BIRTHDAY
"Every year you become more yourself - and that's beautiful to watch.",BIRTHDAY
"Your birthday is a celebration of all the growth you've experienced.",BIRTHDAY
"Another year means another level of understanding life unlocked.",LEARNING
"You approach challenges with curiosity rather than fear - that's wisdom.",LEARNING
"Your mind is like a garden that keeps growing new interesting thoughts.",LEARNING
"You ask great questions, which shows you're always learning.",LEARNING
"You have this wonderful balance of confidence and humility.",PSYCHOLOGY
"Your emotional intelligence is one of your superpowers.",PSYCHOLOGY
"You're getting better at understanding yourself each year.",PSYCHOLOGY
"You listen to people in a way that makes them feel truly heard.",PSYCHOLOGY
"Your empathy is a gift to everyone around you.",PSYCHOLOGY
"You handle setbacks with grace and bounce back stronger.",PSYCHOLOGY
"Your authenticity makes people feel safe to be themselves.",FRIENDSHIP
"You're the kind of friend who remembers the little things that matter.",FRIENDSHIP
"People trust you because you're genuinely trustworthy.",FRIENDSHIP
"You have this rare quality of being both fun and reliable.",FRIENDSHIP
"Your sense of humor brightens people's days.",FRIENDSHIP
"You make ordinary moments feel special just by being there.",FRIENDSHIP
"Your curiosity about the world is contagious.",INSPIRING
"You see possibilities where others see problems.",INSPIRING
"Your enthusiasm for learning new things is infectious.",INSPIRING
"You inspire others by being brave enough to try new things.",INSPIRING
"Your growth mindset helps you turn obstacles into opportunities.",INSPIRING
"You're proof that being smart and kind aren't mutually exclusive.",INSPIRING
"You have this beautiful way of finding meaning in everyday experiences.",REFLECTION
"Your ability to reflect on experiences helps you grow continuously.",REFLECTION
"You're developing wisdom by staying curious about yourself.",REFLECTION
"You understand that vulnerability is actually a strength.",REFLECTION
"Your self-awareness is helping you become who you want to be.",REFLECTION
"You're learning that growth happens outside your comfort zone.",REFLECTION
"You celebrate others' successes genuinely - that shows character.",CHARACTER
"You stand up for what's right even when it's difficult.",CHARACTER
"Your integrity is unwavering, and people notice that.",CHARACTER
"You treat everyone with respect regardless of their status.",CHARACTER
"You're building a life based on your values, not others' expectations.",CHARACTER
"Your kindness is a conscious choice you make every day.",CHARACTER
"You're getting better at setting healthy boundaries.",GROWTH
"You're learning to balance caring for others with caring for yourself.",GROWTH
"Every mistake teaches you something valuable about life.",GROWTH
"You're becoming more comfortable with uncertainty.",GROWTH
"Your resilience is quietly inspiring to everyone who knows you.",GROWTH
"You're writing your own story with intention and purpose.",GROWTH`;

  // Parse CSV data
  const lines = affirmationsData.trim().split("\n");
  allAffirmations = lines
    .slice(1)
    .map((line) => {
      const match = line.match(/^"(.+)",(.+)$/);
      if (match) {
        return {
          text: match[1],
          mood: match[2],
          used: false,
        };
      }
    })
    .filter(Boolean);

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
}

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
    BIRTHDAY: "BIRTHDAY",
    LEARNING: "LEARNING",
    PSYCHOLOGY: "PSYCHOLOGY",
    FRIENDSHIP: "FRIENDSHIP",
    CHARACTER: "CHARACTER",
    GROWTH: "GROWTH",
    REFLECTION: "REFLECTION",
    INSPIRING: "INSPIRING",
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
Are you the paint? Because I'm ready to post up inside you.
Are you a dollar bill? 'Cause I want to make you mine and fold you in all the right places.
I must be a bad investment, 'cause I keep giving you all my interest.
You must be crypto, 'cause I don't really understand you but I'm still investing.
Are you taxes? Because I want to deduct your clothes.
Are you a bet? Because I'm willing to lose everything on you tonight.
Are you art? Because I want to nail you against my wall.
Are you a locksmith? Because I need you to bang my box open.
You must be my homework, 'cause I should be doing you...
Are you a train? Because I want to get railed by you.
Are you a vending machine? Because I want to press your buttons and grab your goods.
Are you an overdue library book? Because you've got FINE written all over you.
Are you a conspiracy theory? Because you're hard to believe but I'm obsessed.
Are you a Sunday morning? Because I want to spend you in bed.
Are you the moon? Because even when you're far, I can't stop staring.
Are you a hangover? Because I want to regret you tomorrow.
Are you gravity? Because you've got me falling and there's no escape.
Are you the ocean? Because I could drown in you and die happy.
Are you a bar tab? Because I keep adding to you and forgetting my limits.
Are you chaos? Because I like what you do to my peace.
Are you a rumor? Because I can't wait to spread you.
Are you an eclipse? Because everything stops when you show up.
Are you my flight? Because I'd risk missing you and losing everything.
You're like my will to live—barely there, but I'll chase you anyway.
Let's make bad decisions and blame it on astrology later.
Are you a red flag? Because I'm colorblind when you're this hot.
Are you my ex's friend? Because I know I shouldn't, but damn.
Are you my guilt? Because I only feel you after I finish.
Are you a cigar? Because I know you're killing me but I still want you in my mouth.
Are you sin? Because I can feel myself going to hell and smiling the whole way.
Are you a fever? Because you're making me hot and a little dizzy.
Are you summer? Because I want to sweat all over you.
Are you my blanket? Because I want to wrap myself in you and do nothing all day.
Are you a scratch I can't reach? Because you're driving me crazy in the best way.
Are you my favorite song? Because I want you stuck in my head—and stuck to my body.
Are you a lip gloss? Because I want you smeared all over my face.
Are you a mirror selfie? Because I want to see myself all over you.
Are you a slow song? Because I want to grind on you till the beat drops.
Are you dessert? Because I want to save you for last… and savor every second.
Are you sweatpants? Because I want to slide into you the second I get home.
Are you my sleep paralysis demon? Because I see you in the dark and I'm not even mad.
Are you overthinking? Because you won't get out of my head.
Are you dread? Because I wake up thinking of you.
Are you my inner voice? Because you're rude, sexy, and way too familiar.
Are you my coping mechanism? Because I use you way too much.
Are you insomnia? Because you keep me up all night… but I kinda like it.
Are you a panic attack? Because you take my breath away.
Are you a spiraling thought? Because I can't let go, even though I should.
Are you lighting? Because you make everything look better when you're around.
Are you my favorite outfit? Because you make me feel confident and slightly horny.
Are you contour? Because you're shaping my every thought.
Are you a bad haircut? Because even when you're wrong, you look good.
Are you high-res? Because I can see every damn thing I want in you.
Are you the sun? Because I can't stare too long without going blind.
Are you a double take? Because I saw you, looked away, and then lost all composure.
Are you cheekbones? Because you cut deep.
Are you lip filler? Because you're plump, expensive, and I want a taste.
Are you a reflection? Because I can't stop checking you out.
Are you a slot machine? Because I want to keep pulling till I hit the jackpot.
Are you a blackjack table? Because I know I should walk away but I'm going all in.
Are you poker? Because I want to see all your tells—and raise you a night.
Are you roulette? Because I'm betting everything on red.
Are you the house? Because no matter what, you're winning tonight.
Are you a pair of dice? Because I want to roll with you till morning.
Are you a lucky streak? Because I don't want this to end.
Are you a poker chip? Because I can't stop playing with you.
Are you the dealer? Because you're holding all the cards tonight.
Are you a flush? Because you've got me feeling hot and out of breath.
Are you portrait mode? Because you blur out the world and make me focus on you.
Are you a screenshot? Because I want to save this moment with you forever.
Are you a camera lens? Because everything gets clearer when I'm with you.
Are you flash? Because you just lit me up.
Are you a DM? Because I'm sliding into you right now.
Are you a live photo? Because I want to see you move in my hands.
Are you an iPhone update? Because you showed up unexpectedly and changed everything.
Are you a memory card? Because I want to fill you up with wild nights.
Are you a selfie? Because I want you in my front and my back camera.
Are you airplane mode? Because the second I'm with you, I don't need anyone else.
Are you avocado toast? Because you're a little extra and I still want you every morning.
Are you garlic bread? Because you've got me weak and coming back for more.
Are you hot sauce? Because you spice up everything I touch.
Are you cheese? Because I melt when you're near.
Are you a buffet? Because I want to sample every part of you.
Are you brunch? Because you're worth waking up for.
Are you cake? Because I want you even when I'm full.
Are you a snack? Because I could unwrap you any time.
Are you takeout? Because I want you at my door in 30 minutes or less.
Are you dessert first? Because I don't want to wait for a taste.
Are you a Michelin star? Because you're rare, refined, and totally out of my league.
Are you fries? Because I can't stop stealing glances—or bites.
Are you ramen? Because I want to slurp you in public with no shame.
Are you a steak? Because I'd risk it all just to get you rare and juicy.
Are you medium rare? Because you're the perfect balance of wild and refined.
You must be filet mignon, because you're high-class, tender, and way too good for me.
Are you a steakhouse special? Because I didn't plan for you, but now I can't resist.
Are you charcuterie? Because you've got all my favorite parts in one place.
Are you pho? Because you're hot, addictive, and I want to slurp you slowly.
Are you a bowl of pho? Because you've got me sweating and satisfied.
You're like pho on a rainy day—comforting, steamy, and exactly what I need in bed.
Are you sriracha in pho? Because you hit me in the throat in the best way possible.
Are you busy right now? Or can I make you blush for a minute?
I don't believe in love at first sight—but I'm willing to give you a second, third, and fourth.
You look like someone I could get into very specific trouble with.
I was going to wait until tomorrow to text you, but I couldn't risk someone else beating me to it.
Are you a safe space? Because I already feel calm around you.
If you were a moment, you'd be golden hour—effortlessly warm and beautiful.
Are you a plot twist? Because I didn't see you coming but I'm into it.
You seem like the kind of person I'd accidentally fall in love with over fries and sarcasm.
Are you my future? Because I can picture you in all of it now.
I was looking for peace and then you walked in—now I want chaos and you.
Are you the one? Because I swore I wasn't looking and here you are anyway.
Are you a good idea? Because my heart says yes and my brain is lagging behind.
You give the word 'yes' a whole new level of temptation.
You must be the answer to every 'what if' I've ever had.
Are you a Sunday afternoon? Because I want to waste hours getting lost in you.
Are you a crossover? Because you just broke my ankles and stole my heart.
Are you a technical foul? Because you're making me lose control.
Are you the playoffs? Because everything about you is intense and I live for it.
Are you a timeout? Because I need a moment to catch my breath around you.
Are you a buzzer beater? Because you showed up at the last second and changed everything.
Are you a poster dunk? Because you just put me on the highlight reel.
Are you a trade deadline? Because I'd give up everything to get you.
Are you aperture priority? Because you control how much light enters my life.
Are you golden hour? Because everything looks perfect when you're around.
Are you depth of field? Because you're in focus and everything else is blurry.
Are you manual focus? Because I want to take my time getting you just right.
Are you a long exposure? Because I want to capture every moment with you.
Are you RAW format? Because you're unfiltered and exactly what I need.
Are you a lens cap? Because you protect what's most important to me.
Are you a tripod? Because you keep me steady when everything else shakes.
Are you a polaroid? Because I want to shake you and watch you develop.
Are you ASMR? Because you give me tingles in all the right places.
Are you my Spotify Wrapped? Because you're all I listened to this year.
Are you a Netflix password? Because I want to share you but keep you exclusive.
Are you an Amazon package? Because I've been tracking you all day and can't wait for you to arrive.
Are you WiFi? Because I'm feeling a strong connection and I don't want to disconnect.
Are you a software update? Because you're improving everything about my system.
Are you dark mode? Because you're easier on my eyes and make everything better.
Are you AirPods? Because I want to put you in both ears and tune out the world.
Are you a notification? Because you make my heart buzz every time you pop up.
Are you Face ID? Because you unlock something in me nobody else can access.
Are you a blue checkmark? Because you're verified hot and everyone wants you.
Are you a close friend story? Because I want to share my secrets with you.
Are you seen at 2am? Because I read your message and couldn't sleep.
Are you typing... ? Because you keep me waiting and I love the anticipation.
Are you a voice note? Because I want to hear you moan... I mean, talk.
Are you screen time? Because I spend way too much time thinking about you.
Are you low battery? Because you make my heart race when you're almost gone.
Are you a charger? Because you give me life when I'm completely drained.
Are you 5G? Because you're the future and you're making everything faster.
Are you incognito mode? Because what happens with you stays with you.
Are you a backup? Because I need you to save me when everything crashes.
Are you kimchi? Because you're fermented perfection and I'm addicted.
Are you bubble tea? Because you're sweet, fun to suck on, and I want you in my mouth.
Are you korean BBQ? Because I want to grill you slowly and savor every bite.
Are you soju? Because you're smooth going down but you hit hard later.
Are you pasta? Because I want to fork you all night long.
Are you pizza? Because even when you're bad, you're still good, and I want a piece.
Are you ice cream? Because you're cold but you make me melt.
Are you coffee? Because you wake me up and I need you every morning.
Are you wine? Because you get better with time and make me say things I shouldn't.
Are you tequila? Because you make me forget my problems and do questionable things.
Are you champagne? Because you're bubbly, expensive, and perfect for celebrating.
Are you whiskey? Because you burn going down but I keep coming back for more.
Are you a martini? Because you're sophisticated, strong, and you get me drunk fast.
Are you my therapist? Because I want to lay down and tell you all my problems.
Are you my student loan? Because you own me and I'll be paying you back for years.
Are you my credit score? Because you go up and down but I'm always checking on you.
Are you my rent? Because you're expensive, due every month, but I can't live without you.
Are you my phone bill? Because you're a monthly commitment I actually want to make.
Are you my car payment? Because you're a luxury I can't afford but desperately need.
Are you my subscription service? Because I keep paying for you even when I forget to use you.
Are you a speeding ticket? Because you're unexpected, expensive, but worth the thrill.`;

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
  nextBtn.style.padding =
    "clamp(12px, 3vw, 16px) clamp(20px, 5vw, 30px)"; /* Bigger responsive padding */
  nextBtn.style.backgroundColor = "#FF6B6B";
  nextBtn.style.color = "white";
  nextBtn.style.border = "none";
  nextBtn.style.borderRadius = "8px"; /* Slightly more rounded */
  nextBtn.style.cursor = "pointer";
  nextBtn.style.display = "block";
  nextBtn.style.margin = "20px auto";
  nextBtn.style.fontSize =
    "clamp(14px, 3.5vw, 16px)"; /* Responsive font size */
  nextBtn.style.fontWeight = "bold"; /* Make it stand out more */
  nextBtn.style.minHeight = "48px"; /* Good touch target */
  nextBtn.style.transition = "all 0.3s ease"; /* Smooth hover */

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
        element.style.width = "80%";
        element.style.maxWidth = "300px";
        element.style.height = "clamp(120px, 20vw, 150px)";
        element.style.borderRadius = "20px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "white";
        element.style.fontSize = "clamp(14px, 3.5vw, 18px)";
        element.style.fontWeight = "bold";
        element.style.textShadow = "2px 2px 4px rgba(0,0,0,0.5)";
        element.style.margin = "0 auto";
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
        element.style.width = "85%";
        element.style.maxWidth = "350px";
        element.style.height = "clamp(160px, 25vw, 200px)";
        element.style.borderRadius = "15px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "white";
        element.style.fontSize = "clamp(13px, 3vw, 16px)";
        element.style.fontWeight = "bold";
        element.style.textShadow = "1px 1px 2px rgba(0,0,0,0.7)";
        element.style.padding = "20px";
        element.style.margin = "0 auto";
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
        element.style.width = "80%";
        element.style.maxWidth = "300px";
        element.style.height = "clamp(120px, 20vw, 150px)";
        element.style.borderRadius = "20px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "white";
        element.style.fontSize = "clamp(12px, 2.8vw, 14px)";
        element.style.fontWeight = "bold";
        element.style.textShadow = "1px 1px 2px rgba(0,0,0,0.7)";
        element.style.border = "2px dashed rgba(255,255,255,0.5)";
        element.style.margin = "0 auto";
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
        element.style.width = "85%";
        element.style.maxWidth = "400px";
        element.style.height = "clamp(160px, 25vw, 200px)";
        element.style.borderRadius = "15px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "#00ff00";
        element.style.fontSize = "clamp(11px, 2.5vw, 14px)";
        element.style.fontFamily = "monospace";
        element.style.padding = "15px";
        element.style.border = "1px solid #00ff00";
        element.style.margin = "0 auto";
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
        element.style.width = "90%"; /* Responsive width instead of 450px */
        element.style.maxWidth = "450px"; /* Maximum width for larger screens */
        element.style.height =
          "clamp(180px, 25vw, 220px)"; /* Responsive height */
        element.style.borderRadius = "15px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "#ffa500";
        element.style.fontSize =
          "clamp(11px, 2.5vw, 13px)"; /* Responsive font */
        element.style.fontFamily = "monospace";
        element.style.padding = "15px";
        element.style.border = "2px solid #ffa500";
        element.style.boxShadow = "0 0 20px rgba(255,165,0,0.3)";
        element.style.margin = "0 auto"; /* Center the element */
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
        element.style.width = "90%";
        element.style.maxWidth = "480px";
        element.style.height = "clamp(200px, 30vw, 250px)";
        element.style.borderRadius = "20px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "#00ffaa";
        element.style.fontSize = "clamp(10px, 2.2vw, 13px)";
        element.style.fontFamily = "monospace";
        element.style.padding = "20px";
        element.style.border = "2px solid #00ffaa";
        element.style.boxShadow = "0 0 25px rgba(0,255,170,0.4)";
        element.style.margin = "0 auto";
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
        element.style.width = "95%"; /* Responsive width instead of 520px */
        element.style.maxWidth = "520px"; /* Maximum width for larger screens */
        element.style.height =
          "clamp(220px, 30vw, 280px)"; /* Responsive height */
        element.style.borderRadius = "20px";
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        element.style.color = "white";
        element.style.fontSize =
          "clamp(12px, 2.8vw, 14px)"; /* Responsive font */
        element.style.fontWeight = "bold";
        element.style.textShadow = "2px 2px 4px rgba(0,0,0,0.8)";
        element.style.padding = "20px";
        element.style.boxShadow = "0 0 30px rgba(150,100,255,0.6)";
        element.style.margin = "0 auto"; /* Center the element */
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
  // Ensure body starts in correct scroll state for terminal
  document.body.classList.remove("terminal-hidden");

  // Set up simple scroll detection for terminal
  setTimeout(() => {
    const terminalBody = document.querySelector(".terminal-body");
    if (terminalBody) {
      terminalBody.addEventListener("scroll", () => {
        const scrollTop = terminalBody.scrollTop;
        const scrollHeight = terminalBody.scrollHeight;
        const clientHeight = terminalBody.clientHeight;
        const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

        // Enable auto-scroll only when user is within 5px of the bottom
        autoScrollEnabled = distanceFromBottom <= 5;
      });
    }
  }, 100);

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
  let touchEndTime = 0;
  document.addEventListener(
    "touchend",
    function (event) {
      const now = new Date().getTime();
      if (now - touchEndTime <= 300) {
        event.preventDefault();
      }
      touchEndTime = now;
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
  // Skip button with proper touch handling
  const skipBtn = document.getElementById("skip-btn");
  if (skipBtn) {
    let touchStartTime = 0;
    let touchMoved = false;

    skipBtn.addEventListener(
      "touchstart",
      (e) => {
        touchStartTime = Date.now();
        touchMoved = false;
      },
      { passive: true }
    );

    skipBtn.addEventListener(
      "touchmove",
      (e) => {
        touchMoved = true;
      },
      { passive: true }
    );

    skipBtn.addEventListener(
      "touchend",
      (e) => {
        const touchDuration = Date.now() - touchStartTime;
        if (!touchMoved && touchDuration < 500) {
          e.preventDefault();
          skipToNext();
        }
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

    [generateAffirmationBtn, generatePickupBtn].forEach((btn) => {
      if (btn) {
        let touchStartTime = 0;
        let touchMoved = false;

        btn.addEventListener(
          "touchstart",
          (e) => {
            touchStartTime = Date.now();
            touchMoved = false;
          },
          { passive: true }
        );

        btn.addEventListener(
          "touchmove",
          (e) => {
            touchMoved = true;
          },
          { passive: true }
        );

        btn.addEventListener(
          "touchend",
          (e) => {
            const touchDuration = Date.now() - touchStartTime;
            if (!touchMoved && touchDuration < 500) {
              e.preventDefault();
              // Trigger the click event
              btn.click();
            }
          },
          { passive: false }
        );
      }
    });
  }, 500);
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
