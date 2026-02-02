// ============================================
// SCROLL REVEAL
// Intersection Observer for scroll animations
// ============================================

(function() {
  'use strict';

  // ============================================
  // CONFIGURATION
  // ============================================

  const config = {
    threshold: 0.2,        // Trigger when 20% visible
    rootMargin: '0px 0px -50px 0px', // Offset from bottom
    revealClass: 'is-visible',
    selector: '.reveal'
  };

  // ============================================
  // INTERSECTION OBSERVER
  // ============================================

  /**
   * Check if IntersectionObserver is supported
   */
  if (!('IntersectionObserver' in window)) {
    // Fallback: Show all elements immediately
    document.querySelectorAll(config.selector).forEach(el => {
      el.classList.add(config.revealClass);
    });
    return;
  }

  /**
   * Create observer
   */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class
        entry.target.classList.add(config.revealClass);
        
        // Stop observing this element (animate once)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: config.threshold,
    rootMargin: config.rootMargin
  });

  // ============================================
  // INITIALIZE
  // ============================================

  /**
   * Observe all reveal elements
   */
  function initReveal() {
    const elements = document.querySelectorAll(config.selector);
    
    elements.forEach(el => {
      // Skip if already visible
      if (el.classList.contains(config.revealClass)) return;
      
      observer.observe(el);
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }

  // Re-initialize after dynamic content loads (if needed)
  window.revealInit = initReveal;

  // ============================================
  // STAGGER UTILITY
  // ============================================

  /**
   * Add stagger delay to child elements
   * Usage: Add data-stagger attribute to parent
   */
  function initStagger() {
    const containers = document.querySelectorAll('[data-stagger]');
    
    containers.forEach(container => {
      const children = container.querySelectorAll('.reveal');
      const baseDelay = parseInt(container.dataset.stagger) || 100;
      
      children.forEach((child, index) => {
        child.style.transitionDelay = `${index * baseDelay}ms`;
      });
    });
  }

  // Run stagger initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStagger);
  } else {
    initStagger();
  }

  // ============================================
  // PARALLAX (OPTIONAL - STRETCH FEATURE)
  // ============================================

  /**
   * Simple parallax effect
   * Add data-parallax attribute to elements
   */
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    
    function updateParallax() {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.5;
        const yPos = scrolled * speed;
        el.style.transform = `translateY(${yPos}px)`;
      });
      
      ticking = false;
    }
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

})();
