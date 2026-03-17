// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background effect on scroll
const nav = document.querySelector('.nav-blur');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.9)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Add staggered delay to create Apple-like cascade effect
            const children = entry.target.querySelectorAll('.project-card, .edu-card, .skill-category, .contact-item, .key-point');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('fade-in');
                }, index * 100); // 100ms staggered delay
            });
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in animation to sections
document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(section);
    
    // Set initial state for all cards and elements that will be animated
    const animatedElements = section.querySelectorAll('.project-card, .edu-card, .skill-category, .contact-item, .key-point');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    });
});

// Add fade-in class
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        /* Hover effect for cards */
        .edu-card:hover, .project-card:hover, .skill-category:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        
        /* Smooth transition for all animations */
        * {
            transition: all 0.3s ease;
        }
    </style>
`);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Loading animation with Apple-like clean design
document.addEventListener('DOMContentLoaded', () => {
    const loadingAnimation = document.createElement('div');
    loadingAnimation.className = 'loading-animation';
    loadingAnimation.innerHTML = `
        <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" stroke="#0071e3" stroke-width="3" stroke-linecap="round">
                <animate attributeName="stroke-dasharray" from="0 150" to="130 150" dur="1.2s" repeatCount="indefinite"/>
                <animate attributeName="stroke-dashoffset" from="0" to="-130" dur="1.2s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
    document.body.appendChild(loadingAnimation);

    // Hide loading animation after content loads with Apple-like smooth transition
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingAnimation.style.opacity = '0';
            setTimeout(() => loadingAnimation.remove(), 500);
        }, 300);
    });
});

// Custom cursor effect with Apple-like smoothness
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Mouse hover detection for scaling effect
    const target = e.target;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
        target.closest('.project-card') || target.closest('.edu-card') || 
        target.closest('.skill-category') || target.closest('.key-point')) {
        cursor.classList.add('expanded');
    } else {
        cursor.classList.remove('expanded');
    }
});

// Apple-like smooth cursor animation using requestAnimationFrame
function animateCursor() {
    const speed = 0.1;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Add custom cursor style
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .custom-cursor {
            width: 20px;
            height: 20px;
            background: rgba(0, 113, 227, 0.2);
            border: 1.5px solid rgba(0, 113, 227, 0.5);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s, background 0.3s;
        }
        
        .custom-cursor.expanded {
            width: 35px;
            height: 35px;
            background: rgba(0, 113, 227, 0.1);
        }
    </style>
`);

// Parallax scroll effect in Apple style
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / windowHeight) * 100;
    
    // Progress indicator
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
    
    // Parallax for sections
    document.querySelectorAll('section').forEach(section => {
        const speed = 0.05;
        const yPos = -(scrolled * speed);
        section.style.backgroundPositionY = yPos + 'px';
    });
});

// Apple-style smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Show active state on navigation
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Smooth scroll with easing
            const startPosition = window.pageYOffset;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const distance = targetPosition - startPosition;
            
            let startTime = null;
            const duration = 1000; // 1 second
            
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const scrollY = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, scrollY);
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
            
            // Apple-like easing function
            function easeInOutCubic(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }
            
            requestAnimationFrame(animation);
        }
    });
});

// 3D hover effect for cards with Apple's subtle touch
document.querySelectorAll('.project-card, .edu-card, .skill-category, .key-point').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // More subtle Apple-like rotation
        const angleX = (y - centerY) / 30;
        const angleY = (centerX - x) / 30;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.01, 1.01, 1.01)`;
        
        // Dynamic shadow
        const shadowX = (x - centerX) / 15;
        const shadowY = (y - centerY) / 15;
        card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.1)`;
    });
    
    card.addEventListener('mouseleave', () => {
        // Smooth transition back
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.boxShadow = '0 10px 30px -15px var(--shadow-color)';
        
        // Reset transition after leaving
        setTimeout(() => {
            card.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        }, 500);
    });
});

// Apple-style magnetic effect for buttons
document.querySelectorAll('.cta-primary, .cta-secondary, .cta-resume, .github-link').forEach(button => {
    button.addEventListener('mousemove', e => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Subtle movement like Apple buttons
        const moveX = x * 0.1;
        const moveY = y * 0.1;
        
        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
        
        // Add subtle glow effect
        button.style.boxShadow = `0 5px 15px rgba(0, 113, 227, 0.2)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        button.style.transform = 'translate(0, 0)';
        button.style.boxShadow = 'none';
    });
});

// Add Apple-style scroll progress indicator
if (!document.querySelector('.scroll-progress')) {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: var(--gradient-1);
        z-index: 1001;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);
}

// Profile image 3D effect with Apple-like smoothness
const profileImage = document.querySelector('.profile-image-wrapper');
if (profileImage) {
    profileImage.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = profileImage.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        // Subtle rotation like Apple's product displays
        profileImage.style.transform = `
            rotateY(${x * 10}deg)
            rotateX(${-y * 10}deg)
            translateZ(10px)
        `;
    });
    
    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        profileImage.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
    });
}

// Key points hover effect
document.querySelectorAll('.key-point').forEach(point => {
    point.addEventListener('mousemove', (e) => {
        const rect = point.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 15;
        const angleY = (centerX - x) / 15;
        
        point.style.transform = `
            perspective(1000px)
            rotateX(${angleX}deg)
            rotateY(${angleY}deg)
            translateZ(10px)
            scale3d(1.02, 1.02, 1.02)
        `;
    });
    
    point.addEventListener('mouseleave', () => {
        point.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale3d(1, 1, 1)';
    });
});

// Add smooth reveal animation for about description
const aboutDescription = document.querySelector('.about-description');
if (aboutDescription) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    aboutDescription.style.opacity = '0';
    aboutDescription.style.transform = 'translateY(20px)';
    aboutDescription.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    aboutObserver.observe(aboutDescription);
}