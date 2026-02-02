// ============================================
// NAVIGATION
// Mobile menu, scroll hide/show, accessibility
// ============================================

(function() {
  'use strict';

  // ============================================
  // DOM ELEMENTS
  // ============================================

  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria-expanded
      this.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle menu visibility
      if (!isExpanded) {
        navMenu.style.opacity = '1';
        navMenu.style.visibility = 'visible';
        document.body.style.overflow = 'hidden'; // Prevent scroll
      } else {
        navMenu.style.opacity = '0';
        navMenu.style.visibility = 'hidden';
        document.body.style.overflow = ''; // Restore scroll
      }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.style.opacity = '0';
        navMenu.style.visibility = 'hidden';
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && navToggle.getAttribute('aria-expanded') === 'true') {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.style.opacity = '0';
        navMenu.style.visibility = 'hidden';
        document.body.style.overflow = '';
      }
    });
  }

  // ============================================
  // SCROLL HIDE/SHOW NAVIGATION
  // ============================================

  let lastScroll = 0;
  const scrollThreshold = 50;

  function handleNavScroll() {
    const currentScroll = window.pageYOffset;
    
    // Don't hide if at top
    if (currentScroll <= 0) {
      nav.classList.remove('is-hidden');
      return;
    }
    
    // Don't hide if mobile menu is open
    if (navToggle && navToggle.getAttribute('aria-expanded') === 'true') {
      return;
    }

    // Check scroll direction and threshold
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
      // Scrolling down
      nav.classList.add('is-hidden');
    } else {
      // Scrolling up
      nav.classList.remove('is-hidden');
    }

    lastScroll = currentScroll;
  }

  // Throttle scroll handler for performance
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleNavScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // ============================================
  // ACTIVE LINK HIGHLIGHTING
  // ============================================

  /**
   * Highlight current page in navigation
   */
  function setActiveLink() {
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      
      // Check if this is the current page
      if (currentPath === linkPath || 
          (linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  }

  // Run on page load
  setActiveLink();

  // ============================================
  // KEYBOARD NAVIGATION
  // ============================================

  /**
   * Trap focus in mobile menu when open
   */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      navToggle.click();
      navToggle.focus();
    }
  });

})();
