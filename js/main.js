// ============================================
// MAIN JAVASCRIPT
// Core functionality and utilities
// ============================================

(function() {
  'use strict';

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================

  /**
   * Debounce function
   * @param {Function} func - Function to debounce
   * @param {number} wait - Milliseconds to wait
   * @returns {Function}
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function
   * @param {Function} func - Function to throttle
   * @param {number} limit - Milliseconds to limit
   * @returns {Function}
   */
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================

  /**
   * Smooth scroll to anchor links
   */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ============================================
  // CURRENT YEAR
  // ============================================

  /**
   * Update copyright year
   */
  const yearElement = document.querySelector('.footer-copyright');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
  }

  // ============================================
  // FORM HANDLING
  // ============================================

  /**
   * Handle contact form submission
   */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Show success message (in real implementation, send to backend)
      alert('Thanks for your message! I\'ll get back to you soon.');
      this.reset();
    });
  }

  // ============================================
  // CONSOLE MESSAGE
  // ============================================

  console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #7c3aed;');
  console.log('%cLooking for a Shopify developer? Let\'s talk: hamish.elliot5@gmail.com', 'font-size: 14px; color: #6b7280;');

})();
