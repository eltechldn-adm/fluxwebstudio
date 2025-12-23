/**
 * FLUX WEB STUDIO - MAIN JAVASCRIPT
 * Minimal, accessible, progressive enhancement
 */

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

(function initMobileNav() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (!mobileMenuToggle || !mainNav) return;
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Update aria-expanded for accessibility
        const isExpanded = mainNav.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close menu when clicking nav links
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            mobileMenuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    });
})();

// ============================================
// CONTACT FORM VALIDATION
// ============================================

(function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    // Form validation rules
    const validators = {
        name: {
            test: (value) => value.trim().length >= 2,
            message: 'Please enter your name (at least 2 characters)'
        },
        email: {
            test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Please enter a valid email address'
        },
        subject: {
            test: (value) => value.trim().length >= 2,
            message: 'Please enter a subject (at least 2 characters)'
        },
        message: {
            test: (value) => value.trim().length >= 10,
            message: 'Please tell us more (at least 10 characters)'
        }
    };
    
    // Show error message
    function showError(fieldName, message) {
        const errorElement = document.getElementById(fieldName + 'Error');
        const formGroup = errorElement?.closest('.form-group');
        
        if (errorElement) {
            errorElement.textContent = message;
        }
        
        if (formGroup) {
            formGroup.classList.add('error');
        }
    }
    
    // Clear error message
    function clearError(fieldName) {
        const errorElement = document.getElementById(fieldName + 'Error');
        const formGroup = errorElement?.closest('.form-group');
        
        if (errorElement) {
            errorElement.textContent = '';
        }
        
        if (formGroup) {
            formGroup.classList.remove('error');
        }
    }
    
    // Validate single field
    function validateField(fieldName, value) {
        const validator = validators[fieldName];
        
        if (!validator) return true;
        
        if (validator.test(value)) {
            clearError(fieldName);
            return true;
        } else {
            showError(fieldName, validator.message);
            return false;
        }
    }
    
    // Real-time validation for text inputs
    ['name', 'email', 'subject', 'message'].forEach(fieldName => {
        const field = document.getElementById(fieldName);
        
        if (field) {
            field.addEventListener('blur', function() {
                validateField(fieldName, this.value);
            });
            
            field.addEventListener('input', function() {
                // Clear error on input if field was previously invalid
                const errorElement = document.getElementById(fieldName + 'Error');
                if (errorElement && errorElement.textContent) {
                    validateField(fieldName, this.value);
                }
            });
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(event) {
        // Check if honeypot field has been filled (spam protection)
        const honeypot = document.getElementById('website');
        if (honeypot && honeypot.value.trim() !== '') {
            // Silently ignore spam submission
            event.preventDefault();
            return;
        }
        
        // Clear all previous errors
        Object.keys(validators).forEach(fieldName => clearError(fieldName));
        
        // Validate all fields
        let isValid = true;
        
        // Validate all required fields
        ['name', 'email', 'subject', 'message'].forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field && !validateField(fieldName, field.value)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            event.preventDefault();
            // Scroll to first error
            const firstError = form.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // If validation passes, allow form to submit to Formspree
        // Show pending status
        const statusDiv = document.getElementById('formStatus');
        if (statusDiv) {
            statusDiv.className = 'form-status-message form-status-pending';
            statusDiv.textContent = 'Sending your message...';
        }
        
        // Disable submit button to prevent multiple submissions
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }
    });
    
    // Handle Formspree response (if using Formspree)
    // Note: Formspree will redirect or show a message based on its configuration
    // For enhanced UX, you can add a hidden iframe to handle responses
})();

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

(function initSmoothScroll() {
    // Select all anchor links with hash
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
})();

// ============================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ============================================

(function enhanceKeyboardNav() {
    // Add visible focus outline for keyboard navigation
    // Remove it for mouse users
    
    let isUsingKeyboard = false;
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            isUsingKeyboard = true;
            document.body.classList.add('using-keyboard');
        }
    });
    
    document.addEventListener('mousedown', function() {
        isUsingKeyboard = false;
        document.body.classList.remove('using-keyboard');
    });
})();

// ============================================
// CONSOLE MESSAGE (EASTER EGG)
// ============================================

console.log(
    '%cFlux Web Studio',
    'font-size: 24px; font-weight: bold; color: #2D5F3F;'
);
console.log(
    '%cLooking at the code? We like that! 🚀',
    'font-size: 14px; color: #5A5A5A;'
);
console.log(
    '%cInterested in working with us? hello@fluxwebstudio.com',
    'font-size: 12px; color: #7A7A7A;'
);

// ============================================
// TEMPLATE FILTERING
// ============================================

(function initTemplateFiltering() {
    const filterChips = document.querySelectorAll('.filter-chip');
    const templateCards = document.querySelectorAll('.template-card');
    
    if (!filterChips.length || !templateCards.length) return;
    
    // Filter templates based on category
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const filterValue = this.dataset.filter;
            
            // Update active state on filter chips
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide template cards
            templateCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = '';
                    card.classList.remove('hidden');
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }
            });
        });
    });
})();
