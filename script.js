// ===================================
// SMOOTH SCROLL & NAVIGATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for internal navigation links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                // Scroll directly to the section top so previous sections do not peek through
                const targetPosition = targetId === '#home' ? 0 : targetSection.offsetTop;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (typeof navMenu !== 'undefined' && navMenu) {
                    navMenu.classList.remove('active');
                }
                if (typeof navToggle !== 'undefined' && navToggle) {
                    navToggle.classList.remove('active');
                }
            }
        });
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Active link highlighting on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// ===================================
// MOBILE NAVIGATION TOGGLE
// ===================================

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// THEME TOGGLE (Dark/Light Mode)
// ===================================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark' mode
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', function() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===================================
// SKILLS FILTER
// ===================================

const filterBtns = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        skillCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hide');
                // Trigger animation
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.5s ease';
                }, 100);
            } else {
                const category = card.getAttribute('data-category');
                if (category === filterValue) {
                    card.classList.remove('hide');
                    setTimeout(() => {
                        card.style.animation = 'fadeInUp 0.5s ease';
                    }, 100);
                } else {
                    card.classList.add('hide');
                }
            }
        });
    });
});

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

function reveal() {
    const reveals = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .cert-card, .stat-card, .highlight-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('reveal');
            // Add a small delay for staggered animation
            setTimeout(() => {
                element.classList.add('active');
            }, 100);
        }
    });
}

window.addEventListener('scroll', reveal);
// Call once on load
reveal();

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    // For now, we'll simulate a successful submission
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate server delay
    setTimeout(() => {
        // Show success message
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
        
        // Note: In a real implementation, you would use a service like:
        // - EmailJS (https://www.emailjs.com/)
        // - Formspree (https://formspree.io/)
        // - Netlify Forms (if hosting on Netlify)
        // - Or your own backend API
        
    }, 2000);
});

// ===================================
// TYPING EFFECT FOR HERO TITLE
// ===================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Optional: Uncomment to enable typing effect on page load
// window.addEventListener('load', function() {
//     const heroTitle = document.querySelector('.hero-title');
//     const titleText = heroTitle.textContent;
//     typeWriter(heroTitle, titleText, 80);
// });

// ===================================
// PARALLAX EFFECT FOR HERO SECTION
// ===================================

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrolled < 800) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===================================
// ANIMATE SKILL BARS ON SCROLL
// ===================================

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (barPosition < windowHeight - 100) {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}

// Call on scroll
let skillBarsAnimated = false;
window.addEventListener('scroll', function() {
    if (!skillBarsAnimated) {
        const skillsSection = document.getElementById('skills');
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (skillsPosition < windowHeight - 200) {
            animateSkillBars();
            skillBarsAnimated = true;
        }
    }
});

// ===================================
// STATS COUNTER ANIMATION
// ===================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target < 100 ? '%' : '+');
        }
    }
    
    updateCounter();
}

let statsAnimated = false;
window.addEventListener('scroll', function() {
    if (!statsAnimated) {
        const statsCards = document.querySelectorAll('.stat-card h3');
        const aboutSection = document.getElementById('about');
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (aboutPosition < windowHeight - 200) {
            statsCards.forEach(card => {
                const text = card.textContent;
                const number = parseInt(text);
                if (!isNaN(number)) {
                    card.textContent = '0' + (text.includes('%') ? '%' : '+');
                    animateCounter(card, number, 2000);
                }
            });
            statsAnimated = true;
        }
    }
});

// ===================================
// COPY EMAIL TO CLIPBOARD
// ===================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show tooltip or notification
        const notification = document.createElement('div');
        notification.textContent = 'Email copied to clipboard!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--gradient-primary);
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            animation: fadeInUp 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    });
}

// Add click event to email links
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('dblclick', function(e) {
        e.preventDefault();
        const email = this.href.replace('mailto:', '');
        copyToClipboard(email);
    });
});

// ===================================
// LAZY LOADING IMAGES
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ===================================
// PREVENT FORM RESUBMISSION
// ===================================

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c👋 Hello There!', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%cInterested in the code? Check out the source on GitHub!', 'color: #636e72; font-size: 14px;');
console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'color: #667eea; font-size: 12px;');

// ===================================
// PERFORMANCE MONITORING
// ===================================

window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`%c⚡ Page loaded in ${loadTime}ms`, 'color: #2ed573; font-size: 12px;');
});

// ===================================
// ADD EASTER EGG (OPTIONAL FUN)
// ===================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiPattern)) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        console.log('%c🎉 Easter Egg Activated! 🎉', 'color: #ff6b6b; font-size: 20px; font-weight: bold;');
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }
});

// ===================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ===================================

// Add focus styles for keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// ===================================
// PREVENT RIGHT CLICK (OPTIONAL)
// ===================================

// Uncomment if you want to prevent right-click on images
// document.addEventListener('contextmenu', function(e) {
//     if (e.target.tagName === 'IMG') {
//         e.preventDefault();
//     }
// });

// ===================================
// CUSTOM CURSOR (OPTIONAL)
// ===================================

// Uncomment to add a custom cursor effect
// const cursor = document.createElement('div');
// cursor.className = 'custom-cursor';
// document.body.appendChild(cursor);

// document.addEventListener('mousemove', function(e) {
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
// });

// ===================================
// IMAGE LIGHTBOX MODAL
// ===================================

const imageModal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.querySelector('.image-modal-backdrop');
const maximizeBtns = document.querySelectorAll('.project-maximize-btn');

function openImageModal(imgSrc, captionText) {
    if (!imageModal || !modalImg) return;
    modalImg.src = imgSrc;
    modalCaption.textContent = captionText || '';
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    if (!imageModal) return;
    imageModal.classList.remove('active');
    document.body.style.overflow = '';
}

maximizeBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const imgSrc = this.getAttribute('data-img');
        const title = this.getAttribute('data-title');
        openImageModal(imgSrc, title);
    });
});

if (modalClose) {
    modalClose.addEventListener('click', closeImageModal);
}

if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeImageModal);
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
        closeImageModal();
    }
});

