// ===== BTP Medical Vault Landing Page Script =====

document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const introOverlay = document.getElementById('intro-overlay');
    const mascotIntro = document.getElementById('mascot-intro');
    const speechBubble = document.getElementById('speech-bubble');
    const startBtn = document.getElementById('start-btn');
    const mainContent = document.getElementById('main-content');
    const mascotGuide = document.getElementById('mascot-guide');
    const guideTooltip = document.getElementById('guide-tooltip');
    const navbar = document.querySelector('.navbar');

    // Mascot Guide Messages
    const guideMessages = [
        "Cuộn xuống để khám phá thêm! 👇",
        "Tính năng bảo mật tuyệt vời đang chờ bạn! 🔐",
        "Hãy xem các công cụ AI của chúng tôi! 🤖",
        "Bạn đang làm tốt lắm! 🦕",
        "Gần đến cuối rồi! 🎉"
    ];
    let currentMessageIndex = 0;

    // Start Button Click Handler
    startBtn.addEventListener('click', function () {
        // Add fly up animation to mascot
        mascotIntro.classList.add('fly-up');

        // Fade out speech bubble and button
        speechBubble.style.opacity = '0';
        speechBubble.style.transform = 'translateY(20px)';
        startBtn.style.opacity = '0';
        startBtn.style.transform = 'translateY(20px)';

        // After mascot flies up, fade out overlay and show main content
        setTimeout(() => {
            introOverlay.classList.add('fade-out');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('show');

            // Enable scrolling
            document.body.style.overflow = 'auto';

            // Show mascot guide with entrance animation
            setTimeout(() => {
                mascotGuide.style.animation = 'bounceIn 0.6s ease-out';
            }, 500);
        }, 800);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update mascot guide message based on scroll position
        updateGuideMessage();
    });

    // Update guide tooltip message based on scroll position
    function updateGuideMessage() {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

        if (scrollPercent < 20) {
            currentMessageIndex = 0;
        } else if (scrollPercent < 40) {
            currentMessageIndex = 1;
        } else if (scrollPercent < 60) {
            currentMessageIndex = 2;
        } else if (scrollPercent < 80) {
            currentMessageIndex = 3;
        } else {
            currentMessageIndex = 4;
        }

        if (guideTooltip) {
            guideTooltip.textContent = guideMessages[currentMessageIndex];
        }
    }

    // Mascot guide click - scroll to next section
    mascotGuide.addEventListener('click', function () {
        const sections = document.querySelectorAll('section');
        const currentScroll = window.scrollY;

        for (let section of sections) {
            const sectionTop = section.offsetTop - 100;
            if (sectionTop > currentScroll + 10) {
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
                break;
            }
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Handle staggered animations for child elements
                const children = entry.target.querySelectorAll('[data-aos]');
                children.forEach((child, index) => {
                    const delay = child.getAttribute('data-delay') || index * 100;
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, delay);
                });
            }
        });
    }, observerOptions);

    // Observe sections and feature cards
    document.querySelectorAll('section, .feature-card, .compliance-card, .role-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        @keyframes bounceIn {
            0% {
                opacity: 0;
                transform: scale(0.3) translateY(100px);
            }
            50% {
                transform: scale(1.05);
            }
            70% {
                transform: scale(0.9);
            }
            100% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Tool item hover effects
    document.querySelectorAll('.tool-item').forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(10px)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
        });
    });

    // Security ring hover effect
    const securityRings = document.querySelector('.security-rings');
    if (securityRings) {
        securityRings.addEventListener('mouseenter', function () {
            this.querySelectorAll('.ring').forEach((ring, index) => {
                ring.style.transform = `scale(${1 + (5 - index) * 0.02})`;
                ring.style.borderColor = 'rgba(14, 165, 233, 0.6)';
            });
        });

        securityRings.addEventListener('mouseleave', function () {
            this.querySelectorAll('.ring').forEach(ring => {
                ring.style.transform = '';
                ring.style.borderColor = '';
            });
        });
    }

    // Parallax effect for hero shapes
    window.addEventListener('mousemove', function (e) {
        const shapes = document.querySelectorAll('.shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 10;
            const moveX = (x - 0.5) * speed;
            const moveY = (y - 0.5) * speed;
            shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Typing effect for speech bubble (optional enhancement)
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        function update() {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }

        update();
    }

    // Add hover class to medical cards
    document.querySelectorAll('.medical-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            document.querySelectorAll('.medical-card').forEach(c => {
                if (c !== this) {
                    c.style.opacity = '0.5';
                }
            });
        });

        card.addEventListener('mouseleave', function () {
            document.querySelectorAll('.medical-card').forEach(c => {
                c.style.opacity = '1';
            });
        });
    });

    // Feature card tilt effect
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // CTA button ripple effect
    document.querySelectorAll('.cta-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Initialize - disable scrolling until user clicks start
    document.body.style.overflow = 'hidden';

    console.log('🦕 BTP Medical Vault Landing Page Initialized!');
});
