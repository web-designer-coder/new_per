document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Sticky Header
    const header = document.querySelector("header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.padding = "10px 0"
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      } else {
        header.style.padding = "15px 0"
        header.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      }
    })
  
    // Form Validation
    const contactForm = document.getElementById("contactForm")
    const formSuccess = document.getElementById("formSuccess")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Reset previous error messages
        document.querySelectorAll(".error-message").forEach((error) => {
          error.style.display = "none"
        })
  
        let isValid = true
  
        // Validate Name
        const nameInput = document.getElementById("name")
        if (nameInput.value.trim() === "") {
          showError(nameInput, "Name is required")
          isValid = false
        }
  
        // Validate Email
        const emailInput = document.getElementById("email")
        if (emailInput.value.trim() === "") {
          showError(emailInput, "Email is required")
          isValid = false
        } else if (!isValidEmail(emailInput.value)) {
          showError(emailInput, "Please enter a valid email address")
          isValid = false
        }
  
        // Validate Message
        const messageInput = document.getElementById("message")
        if (messageInput.value.trim() === "") {
          showError(messageInput, "Message is required")
          isValid = false
        }
  
        // If form is valid, show success message
        if (isValid) {
          contactForm.reset()
          formSuccess.style.display = "block"
  
          // Hide success message after 5 seconds
          setTimeout(() => {
            formSuccess.style.display = "none"
          }, 5000)
        }
      })
    }
  
    // Helper function to show error message
    function showError(input, message) {
      const errorElement = input.nextElementSibling
      errorElement.textContent = message
      errorElement.style.display = "block"
    }
  
    // Helper function to validate email
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
  
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        ".project-card, .skill-category, .certification-card, .accomplishment-card",
      )
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial state for animation
    document
      .querySelectorAll(".project-card, .skill-category, .certification-card, .accomplishment-card")
      .forEach((element) => {
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      })
  
    // Run animation on load and scroll
    window.addEventListener("load", animateOnScroll)
    window.addEventListener("scroll", animateOnScroll)
  })
  document.addEventListener("DOMContentLoaded", () => {
    // Custom cursor
    const cursor = document.querySelector(".cursor-dot")
    const cursorOutline = document.querySelector(".cursor-dot-outline")
  
    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX
      const posY = e.clientY
  
      cursor.style.left = `${posX}px`
      cursor.style.top = `${posY}px`
  
      // Add a slight delay to cursor outline for effect
      setTimeout(() => {
        cursorOutline.style.left = `${posX}px`
        cursorOutline.style.top = `${posY}px`
      }, 80)
    })
  
    // Hide cursor when leaving window
    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0"
      cursorOutline.style.opacity = "0"
    })
  
    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1"
      cursorOutline.style.opacity = "1"
    })
  
    // Change cursor size on clickable elements
    const clickables = document.querySelectorAll("a, button, .project-card, .social-link, input, textarea")
  
    clickables.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)"
        cursorOutline.style.borderColor = "var(--accent)"
      })
  
      item.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)"
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)"
        cursorOutline.style.borderColor = "var(--secondary)"
      })
    })
  
    // Mobile navigation toggle
    const navToggle = document.getElementById("navToggle")
    const navMenu = document.querySelector(".nav-menu")
  
    navToggle.addEventListener("click", function () {
      this.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  
    // Sticky navbar
    const navbar = document.querySelector(".navbar")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    })
  
    // Scroll progress indicator
    const progressBar = document.getElementById("progressBar")
  
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100
  
      progressBar.style.width = scrollPercentage + "%"
    })
  
    // Typewriter effect
    const typewriterText = document.getElementById("typewriter-text")
    const phrases = ["Creative Web Developer", "Computer Engineering Student", "Full-Stack Developer", "UI/UX Enthusiast"]
  
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingSpeed = 100
  
    function typeWriter() {
      const currentPhrase = phrases[phraseIndex]
  
      if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1)
        charIndex--
        typingSpeed = 50
      } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1)
        charIndex++
        typingSpeed = 100
      }
  
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true
        typingSpeed = 1500 // Pause at end of phrase
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        typingSpeed = 500 // Pause before typing next phrase
      }
  
      setTimeout(typeWriter, typingSpeed)
    }
  
    // Start the typewriter effect
    setTimeout(typeWriter, 1000)
  
    // Particles animation for hero section
    const particlesContainer = document.getElementById("particles")
  
    function createParticles() {
      const particleCount = 25 // Reduced from 50 to 25 for better performance
  
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div")
        particle.classList.add("particle")
  
        // Random position
        const posX = Math.random() * 100
        const posY = Math.random() * 100
  
        // Random size
        const size = Math.random() * 5 + 2
  
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1
  
        // Random color
        const colors = ["#2563eb", "#7c3aed", "#ec4899", "#06b6d4"]
        const color = colors[Math.floor(Math.random() * colors.length)]
  
        // Random animation duration
        const duration = Math.random() * 20 + 10
  
        // Apply styles
        particle.style.cssText = `
          position: absolute;
          top: ${posY}%;
          left: ${posX}%;
          width: ${size}px;
          height: ${size}px;
          background-color: ${color};
          border-radius: 50%;
          opacity: ${opacity};
          animation: float ${duration}s linear infinite;
        `
  
        particlesContainer.appendChild(particle)
      }
    }
  
    // Lazy load particles after DOM is fully loaded
    window.addEventListener("load", () => {
      setTimeout(createParticles, 100) // Slight delay to prioritize critical content
    })
  
    // Animate skill progress bars on scroll
    const skillItems = document.querySelectorAll(".skill-item")
  
    function animateSkills() {
      skillItems.forEach((item) => {
        const progressBar = item.querySelector(".skill-progress")
        const progress = progressBar.getAttribute("data-progress")
  
        const itemPosition = item.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (itemPosition < screenPosition) {
          progressBar.style.width = progress + "%"
        }
      })
    }
  
    // Scroll to top button
    const scrollToTopBtn = document.getElementById("scrollToTop")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        scrollToTopBtn.classList.add("active")
      } else {
        scrollToTopBtn.classList.remove("active")
      }
  
      // Animate skills on scroll
      animateSkills()
    })
  
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Form validation
    const contactFormSecond = document.getElementById("contactForm")
  
    if (contactFormSecond) {
      contactFormSecond.setAttribute("action", "https://formspree.io/f/your-formspree-id") // Replace with your Formspree ID
      contactFormSecond.setAttribute("method", "POST")
  
      contactFormSecond.addEventListener("submit", (e) => {
        // Keep the validation logic but don't prevent form submission if valid
        let isValid = true
  
        // Reset previous errors
        document.querySelectorAll(".form-error").forEach((error) => {
          error.style.display = "none"
        })
  
        // Validate name
        const nameInput = document.getElementById("name")
        if (nameInput.value.trim() === "") {
          showError(nameInput, "Please enter your name")
          isValid = false
          e.preventDefault()
        }
  
        // Validate email
        const emailInput = document.getElementById("email")
        if (emailInput.value.trim() === "") {
          showError(emailInput, "Please enter your email")
          isValid = false
          e.preventDefault()
        } else if (!isValidEmail(emailInput.value)) {
          showError(emailInput, "Please enter a valid email address")
          isValid = false
          e.preventDefault()
        }
  
        // Validate subject
        const subjectInput = document.getElementById("subject")
        if (subjectInput.value.trim() === "") {
          showError(subjectInput, "Please enter a subject")
          isValid = false
          e.preventDefault()
        }
  
        // Validate message
        const messageInput = document.getElementById("message")
        if (messageInput.value.trim() === "") {
          showError(messageInput, "Please enter your message")
          isValid = false
          e.preventDefault()
        }
  
        // If form is valid, it will submit to Formspree
        if (isValid) {
          // Show loading state or other feedback if needed
          const submitBtn = contactFormSecond.querySelector('button[type="submit"]')
          submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>'
        }
      })
    }
  
    // Helper function to show error message
    function showError(input, message) {
      const errorElement = input.nextElementSibling.nextElementSibling
      errorElement.textContent = message
      errorElement.style.display = "block"
    }
  
    // Helper function to validate email
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
  
    // Add floating animation to CSS
    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0);
        }
        25% {
          transform: translateY(-20px) translateX(10px);
        }
        50% {
          transform: translateY(0) translateX(20px);
        }
        75% {
          transform: translateY(20px) translateX(10px);
        }
        100% {
          transform: translateY(0) translateX(0);
        }
      }
      
      .particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
      }
    `
    document.head.appendChild(style)
  
    // Animate elements on scroll
    const animateElements = document.querySelectorAll(
      ".project-card, .skill-category, .certification-card, .accomplishment-card",
    )
  
    function checkScroll() {
      animateElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.2
  
        if (elementPosition < screenPosition) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial state for animation
    animateElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    })
  
    // Check for elements in view on load and scroll
    window.addEventListener("load", checkScroll)
    window.addEventListener("scroll", checkScroll)
  
    // Initialize animations
    animateSkills()
    checkScroll()
  
    // Scroll-triggered Section Highlight in Navbar
    function highlightNavOnScroll() {
      const sections = document.querySelectorAll("section")
      const navLinks = document.querySelectorAll(".nav-link")
  
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active")
        }
      })
    }
  
    // Add scroll event for nav highlighting
    window.addEventListener("scroll", highlightNavOnScroll)
  
    // Dark Mode Toggle Functionality
    const darkModeToggle = document.getElementById("darkModeToggle")
    const body = document.body
  
    // Check for saved theme preference or use preferred color scheme
    const currentTheme =
      localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  
    // Set initial theme
    if (currentTheme === "dark") {
      body.classList.add("dark-theme")
      if (darkModeToggle) {
        darkModeToggle.checked = true
      }
    }
  
    // Toggle theme when button is clicked
    if (darkModeToggle) {
      darkModeToggle.addEventListener("change", function () {
        if (this.checked) {
          body.classList.add("dark-theme")
          localStorage.setItem("theme", "dark")
        } else {
          body.classList.remove("dark-theme")
          localStorage.setItem("theme", "light")
        }
      })
    }
  })
  