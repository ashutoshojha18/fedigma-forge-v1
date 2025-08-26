// Fedigma-Forge Info Enhanced Website JavaScript - FIXED VERSION
// Duo Color Website (Mustard Yellow & Black) with AI Assistant

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initHeroSlider();
    initStatisticsAnimation();
    initServicesTabs();
    initPersonalitiesSlider();
    initTestimonialsSlider();
    initBlogsSection();
    initScrollAnimations();
    initFormValidation();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initAIAssistant();
    initSocialMediaIntegration();
    initAdvancedInteractions();
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".illustration-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 500); // 0.5s delay between each card
  });
});

// Navigation Functions - FIXED
function initNavigation() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Mobile navigation toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navToggle.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', updateActiveNavLink);
}

// Enhanced Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(28,28,28,0.95) 100%)';
            header.style.backdropFilter = 'blur(15px)';
            header.style.boxShadow = '0 8px 32px rgba(218, 165, 32, 0.2)';
        } else {
            header.style.background = 'linear-gradient(135deg, #000000 0%, #1C1C1C 100%)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 4px 20px rgba(218, 165, 32, 0.1)';
        }
    });
}

// Active navigation link highlighting - FIXED
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
    
    let current = '';
    const scrollPosition = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    // If at the top of the page, highlight home
    if (scrollPosition < 200) {
        current = 'home';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Enhanced Hero Slider - FIXED
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    let slideInterval;
    let isTransitioning = false;

    function showSlide(index, direction = 'next') {
        if (isTransitioning) return;
        isTransitioning = true;

        // Remove active class from all slides and dots
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';
            } else if (i === index) {
                slide.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
            }
        });
        
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show new slide
        setTimeout(() => {
            slides.forEach(slide => {
                slide.style.transform = 'translateX(100%)';
            });
            
            if (slides[index]) {
                slides[index].classList.add('active');
                slides[index].style.transform = 'translateX(0)';
            }
            if (dots[index]) {
                dots[index].classList.add('active');
            }
            
            setTimeout(() => {
                isTransitioning = false;
            }, 100);
        }, 50);
    }

    function nextSlide() {
        const newSlide = (currentSlide + 1) % slides.length;
        showSlide(newSlide, 'next');
        currentSlide = newSlide;
    }

    function prevSlide() {
        const newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(newSlide, 'prev');
        currentSlide = newSlide;
    }

    function goToSlide(index) {
        if (index !== currentSlide) {
            const direction = index > currentSlide ? 'next' : 'prev';
            showSlide(index, direction);
            currentSlide = index;
        }
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 6000);
    }

    function stopSlideshow() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }

    // Event listeners - FIXED
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            stopSlideshow();
            nextSlide();
            setTimeout(startSlideshow, 1000);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            stopSlideshow();
            prevSlide();
            setTimeout(startSlideshow, 1000);
        });
    }

    // Dots event listeners - FIXED
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            stopSlideshow();
            goToSlide(index);
            setTimeout(startSlideshow, 1000);
        });
    });

    // Pause on hover
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', stopSlideshow);
        heroSlider.addEventListener('mouseleave', startSlideshow);
    }

    // Initialize first slide
    showSlide(0);
    
    // Start slideshow
    setTimeout(startSlideshow, 2000);
}

// Enhanced Statistics Animation
function initStatisticsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    let hasAnimated = false;

    function animateStats() {
        if (hasAnimated) return;

        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = target / 120;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 25);
        });

        hasAnimated = true;
    }

    // Intersection Observer for stats animation
    const statsSection = document.querySelector('.stats-slider');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }
}

// Enhanced Services Tabs - FIXED
function initServicesTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    console.log('Initializing service tabs...', tabButtons.length, tabContents.length);

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            
            console.log('Tab clicked:', targetTab);

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.display = 'block';
                console.log('Content shown for:', targetTab);
                
                // Trigger animation for new content
                setTimeout(() => {
                    const newPackageCards = targetContent.querySelectorAll('.package-card');
                    newPackageCards.forEach((card, cardIndex) => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(30px)';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, cardIndex * 100);
                    });
                }, 50);
            } else {
                console.error('Target content not found:', targetTab);
            }
        });
    });

    // Package selection handlers
    const packageButtons = document.querySelectorAll('.package-card .btn');
    packageButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = this.getAttribute('data-service') || 'Selected Service';
            const packageTitle = this.closest('.package-card').querySelector('h4')?.textContent || 'Service Package';
            handleServiceInquiry(serviceName, packageTitle);
        });
    });

    // Initialize first tab
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
}

// Enhanced Personalities Slider
function initPersonalitiesSlider() {
    const track = document.querySelector('.personalities-track');
    const prevBtn = document.querySelector('.personalities-slider .prev-btn');
    const nextBtn = document.querySelector('.personalities-slider .next-btn');
    
    if (!track) return;
    
    let currentIndex = 0;
    const cards = track.querySelectorAll('.personality-card');
    const totalCards = cards.length;
    let autoSlideInterval;

    function updateSlider() {
        const translateX = -currentIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;
    }

    function nextPersonality() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
    }

    function prevPersonality() {
        currentIndex = currentIndex === 0 ? totalCards - 1 : currentIndex - 1;
        updateSlider();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextPersonality, 5000);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            stopAutoSlide();
            nextPersonality();
            setTimeout(startAutoSlide, 1000);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            stopAutoSlide();
            prevPersonality();
            setTimeout(startAutoSlide, 1000);
        });
    }

    // Pause auto-slide on hover
    const personalitiesSlider = document.querySelector('.personalities-slider');
    if (personalitiesSlider) {
        personalitiesSlider.addEventListener('mouseenter', stopAutoSlide);
        personalitiesSlider.addEventListener('mouseleave', startAutoSlide);
    }

    // Initialize
    updateSlider();
    setTimeout(startAutoSlide, 3000);
}

// Enhanced Testimonials Slider
function initTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const prevBtn = document.querySelector('.testimonials-slider .prev-btn');
    const nextBtn = document.querySelector('.testimonials-slider .next-btn');
    
    if (!track) return;
    
    let currentIndex = 0;
    const cards = track.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    let autoSlideInterval;

    function updateSlider() {
        const translateX = -currentIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
    }

    function prevTestimonial() {
        currentIndex = currentIndex === 0 ? totalCards - 1 : currentIndex - 1;
        updateSlider();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextTestimonial, 6000);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            stopAutoSlide();
            nextTestimonial();
            setTimeout(startAutoSlide, 1000);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            stopAutoSlide();
            prevTestimonial();
            setTimeout(startAutoSlide, 1000);
        });
    }

    // Pause auto-slide on hover
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
        testimonialsSlider.addEventListener('mouseenter', stopAutoSlide);
        testimonialsSlider.addEventListener('mouseleave', startAutoSlide);
    }

    // Initialize
    updateSlider();
    setTimeout(startAutoSlide, 4000);
}

// Enhanced Blogs Section - FIXED
function initBlogsSection() {
    const blogCards = document.querySelectorAll('.blog-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('blogSearch');
    const searchBtn = document.querySelector('.search-btn');
    let allBlogCards = Array.from(blogCards);

    // Blog filtering - FIXED
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Clear search input when filtering
            if (searchInput) {
                searchInput.value = '';
            }

            // Filter blog cards
            filterBlogCards(category);
        });
    });

    // Blog search functionality - FIXED
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            // Reset filter buttons when searching
            if (searchTerm) {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector('.filter-btn[data-category="all"]')?.classList.add('active');
            }
            searchBlogCards(searchTerm);
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
            searchBlogCards(searchTerm);
        });
    }

    // Blog card click handlers
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = this.getAttribute('data-post');
            openBlogPost(postId);
        });
    });

    function filterBlogCards(category) {
        allBlogCards.forEach((card, index) => {
            const cardCategory = card.getAttribute('data-category');
            const shouldShow = category === 'all' || cardCategory === category;
            
            if (shouldShow) {
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    function searchBlogCards(searchTerm) {
        allBlogCards.forEach((card, index) => {
            if (!searchTerm) {
                // Show all cards if no search term
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                return;
            }

            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const content = card.querySelector('p')?.textContent.toLowerCase() || '';
            const category = card.querySelector('.blog-category')?.textContent.toLowerCase() || '';
            
            const shouldShow = title.includes(searchTerm) || content.includes(searchTerm) || category.includes(searchTerm);
            
            if (shouldShow) {
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    function openBlogPost(postId) {
        // Blog post content data
        const blogPosts = {
            'web-development-trends-2025': {
                title: '10 Web Development Trends to Watch in 2025',
                content: `
                    <p>The web development landscape continues to evolve rapidly. Here are the top 10 trends shaping the future:</p>
                    <h3>1. AI-Powered Development Tools</h3>
                    <p>Artificial Intelligence is revolutionizing how we write code, with tools like GitHub Copilot and ChatGPT enhancing developer productivity.</p>
                    <h3>2. Progressive Web Apps (PWAs)</h3>
                    <p>PWAs continue to bridge the gap between web and mobile applications, offering native-like experiences.</p>
                    <h3>3. WebAssembly (WASM)</h3>
                    <p>Near-native performance in web browsers is becoming a reality with WebAssembly.</p>
                    <h3>4. Serverless Architecture</h3>
                    <p>Cloud functions and serverless computing are changing how we deploy and scale web applications.</p>
                `
            },
            'digital-marketing-small-business': {
                title: 'Digital Marketing Strategies for Small Businesses',
                content: `
                    <p>Small businesses can compete effectively with proper digital marketing strategies:</p>
                    <h3>1. Local SEO Optimization</h3>
                    <p>Focus on local search results to attract nearby customers and improve visibility in your area.</p>
                    <h3>2. Social Media Engagement</h3>
                    <p>Build authentic relationships with your audience through consistent, valuable content.</p>
                    <h3>3. Content Marketing</h3>
                    <p>Create valuable content that addresses customer pain points and establishes your expertise.</p>
                    <h3>4. Email Marketing</h3>
                    <p>Build and nurture email lists for direct communication with your audience.</p>
                `
            }
        };

        const post = blogPosts[postId];
        if (post) {
            showBlogModal(post.title, post.content);
        } else {
            showNotification('📰 Full blog post coming soon! Stay tuned for our latest insights and expert tips.', 'info');
        }
    }

    function showBlogModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'blog-modal';
        modal.innerHTML = `
            <div class="blog-modal-content">
                <div class="blog-modal-header">
                    <h2>${title}</h2>
                    <button class="blog-modal-close">&times;</button>
                </div>
                <div class="blog-modal-body">
                    ${content}
                    <div class="blog-social-share">
                        <h4>Share this article:</h4>
                        <div class="share-buttons">
                            <button class="share-btn facebook" onclick="shareOnFacebook('${title}')">📘 Facebook</button>
                            <button class="share-btn twitter" onclick="shareOnTwitter('${title}')">🐦 Twitter</button>
                            <button class="share-btn linkedin" onclick="shareOnLinkedIn('${title}')">💼 LinkedIn</button>
                            <button class="share-btn whatsapp" onclick="shareOnWhatsApp('${title}')">💬 WhatsApp</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add modal styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            padding: 2rem;
        `;

        const modalContent = modal.querySelector('.blog-modal-content');
        modalContent.style.cssText = `
            background: linear-gradient(135deg, #1C1C1C 0%, #2C2C2C 100%);
            border: 2px solid #DAA520;
            border-radius: 20px;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            color: white;
            padding: 0;
        `;

        const modalHeader = modal.querySelector('.blog-modal-header');
        modalHeader.style.cssText = `
            background: #DAA520;
            color: #000;
            padding: 1.5rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 18px 18px 0 0;
        `;

        const modalBody = modal.querySelector('.blog-modal-body');
        modalBody.style.cssText = `
            padding: 2rem;
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        const closeBtn = modal.querySelector('.blog-modal-close');
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}

// AI Assistant Implementation - FIXED
function initAIAssistant() {
    const aiToggle = document.getElementById('aiToggle');
    const aiChat = document.getElementById('aiChat');
    const aiMinimize = document.getElementById('aiMinimize');
    const aiInput = document.getElementById('aiInput');
    const aiSend = document.getElementById('aiSend');
    const aiMessages = document.getElementById('aiMessages');
    const quickBtns = document.querySelectorAll('.quick-btn');

    let isAIOpen = false;

    console.log('Initializing AI Assistant...', {
        aiToggle: !!aiToggle,
        aiChat: !!aiChat,
        aiMinimize: !!aiMinimize,
        aiInput: !!aiInput,
        aiSend: !!aiSend,
        aiMessages: !!aiMessages,
        quickBtns: quickBtns.length
    });

    // AI Assistant knowledge base
    const aiKnowledge = {
        services: {
            'web-development': {
                name: 'Web Development',
                packages: ['Static Website (₹6,999)', 'Dynamic Website (₹14,999)', 'E-commerce (₹29,999)', 'Custom Applications (Custom Quote)'],
                timeline: '2-12 weeks',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WordPress', 'Laravel']
            },
            'app-development': {
                name: 'Mobile App Development',
                packages: ['Android Apps (₹25,000+)', 'iOS Apps (₹30,000+)', 'Cross-Platform (₹35,000+)', 'Maintenance (₹5,000/month)'],
                timeline: '3-5 months',
                technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin']
            },
            'digital-marketing': {
                name: 'Digital Marketing',
                packages: ['Basic SEO (₹15,499/month)', 'Standard SEO (₹23,499/month)', 'Professional SEO (₹33,499/month)', 'Google Ads (₹10,000 + ad spend)'],
                timeline: '2-6 months for results',
                technologies: ['SEO', 'Google Ads', 'Social Media Marketing', 'Analytics']
            },
            'online-presence': {
                name: 'Online Presence Management',
                packages: ['Social Media Management (₹8,000/month)', 'Content Strategy (₹12,000/month)', 'Reputation Management (₹15,000/month)', 'Brand Identity (₹20,000+)'],
                timeline: 'Ongoing',
                technologies: ['Content Creation', 'Social Media', 'Brand Development']
            },
            'school-management': {
                name: 'School Management System',
                packages: ['Basic System (₹50,000)', 'Advanced System (₹1,00,000)', 'Enterprise Solution (₹2,00,000+)', 'Maintenance (₹5,000/month)'],
                timeline: '2-6 months',
                technologies: ['Student Management', 'Fee Collection', 'Parent Portal', 'Mobile App']
            }
        },
        company: {
            experience: '7+ years',
            established: '2017',
            projects: '150+',
            clients: '100+',
            phone: '+917984504286',
            email: 'info@fnfed.com',
            location: 'New Delhi, India'
        }
    };

    // Toggle AI chat - FIXED
    if (aiToggle) {
        aiToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('AI Toggle clicked');
            isAIOpen = !isAIOpen;
            if (isAIOpen) {
                aiChat.classList.add('active');
                aiChat.style.display = 'flex';
                console.log('AI Chat opened');
            } else {
                aiChat.classList.remove('active');
                setTimeout(() => {
                    aiChat.style.display = 'none';
                }, 300);
                console.log('AI Chat closed');
            }
        });
    }

    // Minimize AI chat - FIXED
    if (aiMinimize) {
        aiMinimize.addEventListener('click', function(e) {
            e.preventDefault();
            isAIOpen = false;
            aiChat.classList.remove('active');
            setTimeout(() => {
                aiChat.style.display = 'none';
            }, 300);
            console.log('AI Chat minimized');
        });
    }

    // Quick action buttons - FIXED
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.getAttribute('data-action');
            console.log('Quick action clicked:', action);
            handleQuickAction(action);
        });
    });

    // Send message - FIXED
    if (aiSend) {
        aiSend.addEventListener('click', function(e) {
            e.preventDefault();
            sendAIMessage();
        });
    }

    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendAIMessage();
            }
        });
    }

    function sendAIMessage() {
        if (!aiInput) return;
        
        const message = aiInput.value.trim();
        if (!message) return;

        console.log('Sending AI message:', message);
        addMessage(message, 'user');
        aiInput.value = '';

        // Show typing indicator
        addTypingIndicator();

        // Process message and generate response
        setTimeout(() => {
            removeTypingIndicator();
            const response = generateAIResponse(message);
            addMessage(response, 'bot');
        }, 1500);
    }

    function addMessage(content, sender) {
        if (!aiMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ai-message--${sender}`;
        
        const avatar = sender === 'bot' ? '🤖' : '👤';
        messageDiv.innerHTML = `
            <div class="ai-message-avatar">${avatar}</div>
            <div class="ai-message-content">
                ${typeof content === 'string' ? `<p>${content}</p>` : content}
            </div>
        `;

        aiMessages.appendChild(messageDiv);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function addTypingIndicator() {
        if (!aiMessages) return;
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message ai-message--bot typing-indicator';
        typingDiv.innerHTML = `
            <div class="ai-message-avatar">🤖</div>
            <div class="ai-message-content">
                <p>Alex is typing...</p>
            </div>
        `;
        
        aiMessages.appendChild(typingDiv);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Greeting responses
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return "Hello! 👋 I'm Alex, your AI assistant from Fedigma-Forge Info. I'm here to help you with our services, pricing, and technical questions. What would you like to know?";
        }

        // Pricing inquiries
        if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
            return generatePricingResponse(lowerMessage);
        }

        // Service inquiries
        if (lowerMessage.includes('service') || lowerMessage.includes('development') || lowerMessage.includes('marketing')) {
            return generateServiceResponse(lowerMessage);
        }

        // Technology comparisons
        if (lowerMessage.includes('vs') || lowerMessage.includes('compare') || lowerMessage.includes('difference')) {
            return generateComparisonResponse(lowerMessage);
        }

        // Contact information
        if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
            return `You can reach us at:<br>
                    📞 Phone: <strong>+917984504286</strong><br>
                    ✉️ Email: <strong>info@fnfed.com</strong><br>
                    📍 Location: New Delhi, India<br>
                    🌐 Website: <a href="https://www.fnfed.com" target="_blank">www.fnfed.com</a><br><br>
                    We're available 24/7 for your queries!`;
        }

        // Timeline questions
        if (lowerMessage.includes('timeline') || lowerMessage.includes('time') || lowerMessage.includes('duration')) {
            return generateTimelineResponse(lowerMessage);
        }

        // ROI and business insights
        if (lowerMessage.includes('roi') || lowerMessage.includes('return') || lowerMessage.includes('investment')) {
            return `Great question about ROI! 📊 Here's what our clients typically see:<br><br>
                    • <strong>Web Development:</strong> 200-400% ROI within first year<br>
                    • <strong>SEO Services:</strong> 300-500% ROI within 6-12 months<br>
                    • <strong>Mobile Apps:</strong> 150-300% ROI depending on user engagement<br>
                    • <strong>School Management Systems:</strong> 400-600% efficiency improvement<br><br>
                    Would you like specific ROI calculations for your business? 💰`;
        }

        // Default helpful response
        return `I'd be happy to help you with that! 😊 I specialize in:<br><br>
                • <strong>Service recommendations</strong> and detailed pricing<br>
                • <strong>Technology comparisons</strong> (React vs Angular, Flutter vs React Native)<br>
                • <strong>ROI calculations</strong> and business insights<br>
                • <strong>Project timelines</strong> and requirements analysis<br><br>
                Could you be more specific about what you'd like to know? I'm here to help! 🚀`;
    }

    function generatePricingResponse(message) {
        if (message.includes('web')) {
            return `Our web development packages: 🌐<br><br>
                    💡 <strong>Static Website:</strong> ₹6,999 (2-3 weeks)<br>
                    🚀 <strong>Dynamic Website:</strong> ₹14,999 (4-6 weeks) - <span style="color: #DAA520;">Most Popular!</span><br>
                    🛒 <strong>E-commerce:</strong> ₹29,999 (6-8 weeks)<br>
                    ⚙️ <strong>Custom Applications:</strong> Custom Quote (8-12 weeks)<br><br>
                    All packages include hosting setup, domain, and basic SEO! Which type interests you? 🤔`;
        }
        
        if (message.includes('app') || message.includes('mobile')) {
            return `Our mobile app development pricing: 📱<br><br>
                    📱 <strong>Android Apps:</strong> Starting ₹25,000 (3-4 months)<br>
                    📱 <strong>iOS Apps:</strong> Starting ₹30,000 (3-4 months)<br>
                    ⚡ <strong>Cross-Platform:</strong> Starting ₹35,000 (4-5 months) - <span style="color: #DAA520;">Best Value!</span><br>
                    🔧 <strong>Maintenance:</strong> ₹5,000/month<br><br>
                    Cross-platform apps work on both Android and iOS with a single codebase! 💪`;
        }
        
        return `Here's our complete pricing overview: 💰<br><br>
                💻 <strong>Web Development:</strong> ₹6,999 - ₹29,999<br>
                📱 <strong>Mobile Apps:</strong> ₹25,000 - ₹35,000+<br>
                📈 <strong>Digital Marketing:</strong> ₹15,499 - ₹33,499/month<br>
                🌟 <strong>Online Presence:</strong> ₹8,000 - ₹20,000/month<br>
                🏫 <strong>School Management:</strong> ₹50,000 - ₹2,00,000+<br><br>
                Which service interests you most? I can provide detailed breakdowns! 📊`;
    }

    function generateServiceResponse(message) {
        if (message.includes('web')) {
            const service = aiKnowledge.services['web-development'];
            return `<strong>${service.name}</strong> 🌐<br><br>
                    <strong>Technologies:</strong> ${service.technologies.join(', ')}<br>
                    <strong>Timeline:</strong> ${service.timeline}<br>
                    <strong>Packages:</strong><br>
                    ${service.packages.map(pkg => `• ${pkg}`).join('<br>')}<br><br>
                    We create responsive, SEO-optimized websites with modern technologies! ✨`;
        }
        
        return `We offer 5 comprehensive services: 🛠️<br><br>
                🌐 <strong>Web Development</strong> - Custom websites & applications<br>
                📱 <strong>Mobile Apps</strong> - Native & cross-platform development<br>
                📈 <strong>Digital Marketing</strong> - SEO, Google Ads, social media<br>
                🌟 <strong>Online Presence</strong> - Brand management & content<br>
                🏫 <strong>School Management</strong> - Complete educational solutions<br><br>
                Which service would you like to explore in detail? 🤔`;
    }

    function generateComparisonResponse(message) {
        if (message.includes('flutter') && message.includes('react native')) {
            return `<strong>Flutter vs React Native:</strong> ⚔️<br><br>
                    <strong>Flutter:</strong><br>
                    ✅ Better performance & smooth animations<br>
                    ✅ Single codebase, consistent UI<br>
                    ✅ Google backing & growing ecosystem<br>
                    ❌ Larger app size<br><br>
                    <strong>React Native:</strong><br>
                    ✅ Mature ecosystem & large community<br>
                    ✅ JavaScript familiarity<br>
                    ✅ Facebook/Meta support<br>
                    ❌ Some platform-specific code needed<br><br>
                    <span style="color: #DAA520;">We recommend Flutter for new projects!</span> 🚀`;
        }
        
        if (message.includes('native') && message.includes('cross-platform')) {
            return `<strong>Native vs Cross-Platform Apps:</strong> 🤔<br><br>
                    <strong>Native Apps:</strong><br>
                    ✅ Best performance & user experience<br>
                    ✅ Full access to platform features<br>
                    ❌ Higher cost (need 2 separate apps)<br>
                    ❌ Longer development time<br><br>
                    <strong>Cross-Platform:</strong><br>
                    ✅ Cost-effective solution<br>
                    ✅ Faster development & deployment<br>
                    ✅ Single codebase maintenance<br>
                    ❌ Minor performance trade-offs<br><br>
                    <span style="color: #DAA520;">For most businesses, cross-platform is the smart choice!</span> 💡`;
        }
        
        return `I can help compare various technologies: 🔍<br><br>
                • Flutter vs React Native<br>
                • Native vs Cross-Platform development<br>
                • React vs Angular vs Vue.js<br>
                • WordPress vs Custom development<br>
                • iOS vs Android development<br><br>
                What technologies would you like me to compare for your project? 🤓`;
    }

    function generateTimelineResponse(message) {
        return `Here are our typical project timelines: ⏰<br><br>
                ⚡ <strong>Static Website:</strong> 2-3 weeks<br>
                🚀 <strong>Dynamic Website:</strong> 4-6 weeks<br>
                🛒 <strong>E-commerce Site:</strong> 6-8 weeks<br>
                📱 <strong>Mobile Apps:</strong> 3-5 months<br>
                📈 <strong>SEO Results:</strong> 3-6 months<br>
                🏫 <strong>School Management:</strong> 2-6 months<br><br>
                Timelines depend on project complexity and your specific requirements. What type of project are you planning? 🎯`;
    }

    function handleQuickAction(action) {
        // Open AI chat if not already open
        if (!isAIOpen) {
            aiToggle.click();
        }

        setTimeout(() => {
            switch (action) {
                case 'pricing':
                    addMessage("I'd like to know about your pricing for different services.", 'user');
                    setTimeout(() => {
                        addMessage(generatePricingResponse('general pricing'), 'bot');
                    }, 1000);
                    break;
                case 'services':
                    addMessage("What services do you offer?", 'user');
                    setTimeout(() => {
                        addMessage(generateServiceResponse('services'), 'bot');
                    }, 1000);
                    break;
                case 'contact':
                    addMessage("How can I contact your team?", 'user');
                    setTimeout(() => {
                        addMessage(generateAIResponse('contact'), 'bot');
                    }, 1000);
                    break;
                case 'portfolio':
                    addMessage("Can you tell me about your portfolio and past projects?", 'user');
                    setTimeout(() => {
                        addMessage(`We've successfully completed <strong>150+ projects</strong> across various industries: 🏆<br><br>
                                  🏢 <strong>Business Websites:</strong> 80+ projects<br>
                                  🛒 <strong>E-commerce Stores:</strong> 35+ projects<br>
                                  📱 <strong>Mobile Applications:</strong> 25+ apps<br>
                                  🏫 <strong>School Management Systems:</strong> 15+ institutions<br><br>
                                  <strong>Notable clients include:</strong><br>
                                  • Garg Trading Company (Delhi) - Dynamic Website<br>
                                  • Bright Future School (Mumbai) - School Management<br>
                                  • TechStart Solutions (Bangalore) - Mobile App<br><br>
                                  <strong>Our achievements:</strong> 7+ years experience, 100+ happy clients, 95% satisfaction rate! 🌟<br><br>
                                  Would you like to discuss your specific project requirements? 🚀`, 'bot');
                    }, 1000);
                    break;
            }
        }, 500);
    }

    // Initialize AI assistant
    console.log('AI Assistant initialized successfully');
}

// Social Media Integration
function initSocialMediaIntegration() {
    // Add global sharing functions
    window.shareOnFacebook = function(title) {
        const url = window.location.href;
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    window.shareOnTwitter = function(title) {
        const url = window.location.href;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=fedigmaforge`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    window.shareOnLinkedIn = function(title) {
        const url = window.location.href;
        const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    window.shareOnWhatsApp = function(title) {
        const url = window.location.href;
        const shareText = `${title} - Check this out: ${url}`;
        const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(shareUrl, '_blank');
    };

    // Social media hover effects
    const socialLinks = document.querySelectorAll('.social-link, .social-btn');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Advanced Interactions
function initAdvancedInteractions() {
    // Enhanced button interactions
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Tech tag interactions
    document.querySelectorAll('.tech-tag, .tech-pill').forEach(tag => {
        tag.addEventListener('click', function() {
            const tech = this.textContent;
            showNotification(`💡 ${tech} is one of our core technologies! Want to know more about projects using ${tech}?`, 'info');
        });
    });

    // Package card enhanced interactions
    document.querySelectorAll('.package-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Service inquiry handler - FIXED
function handleServiceInquiry(serviceName, packageTitle) {
    const inquiryText = `I'm interested in ${packageTitle} for ${serviceName}. Could you provide more details about the features, timeline, and next steps?`;
    
    // Open AI assistant with pre-filled inquiry
    const aiToggle = document.getElementById('aiToggle');
    const aiInput = document.getElementById('aiInput');
    
    if (aiToggle && aiInput) {
        // Open AI assistant if not already open
        if (!aiToggle.closest('.ai-assistant').querySelector('#aiChat').classList.contains('active')) {
            aiToggle.click();
        }
        
        // Wait for AI to open then fill input
        setTimeout(() => {
            aiInput.value = inquiryText;
            aiInput.focus();
        }, 800);
    }
    
    showNotification(`🎉 Great choice! Our AI assistant Alex is ready to help you with ${packageTitle}. Check the chat window for more details.`, 'success');
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.package-card, .personality-card, .testimonial-card, .blog-card, .process-step, .tech-category, .stat-item'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
        observer.observe(element);
    });
}

// Enhanced Form Validation
function initFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        let isValid = true;
        let errors = [];
        
        // Reset previous error styles
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.style.borderColor = 'rgba(218, 165, 32, 0.3)';
        });
        
        // Validate name
        if (!data.name || data.name.trim().length < 2) {
            document.getElementById('name').style.borderColor = '#DAA520';
            errors.push('Name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            document.getElementById('email').style.borderColor = '#DAA520';
            errors.push('Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone (if provided)
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
        if (data.phone && data.phone.trim() && !phoneRegex.test(data.phone)) {
            document.getElementById('phone').style.borderColor = '#DAA520';
            errors.push('Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate message
        if (!data.message || data.message.trim().length < 10) {
            document.getElementById('message').style.borderColor = '#DAA520';
            errors.push('Message must be at least 10 characters');
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            showNotification(
                `🎉 Thank you ${data.name}! Your message has been received. We'll contact you within 24 hours at ${data.email}${data.phone ? ' or ' + data.phone : ''}.`, 
                'success'
            );
            form.reset();
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 2500);
            
        } else {
            showNotification(
                '❌ Please correct the following errors:<br>• ' + errors.join('<br>• '), 
                'error'
            );
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#DAA520';
            this.style.boxShadow = '0 0 0 4px rgba(218, 165, 32, 0.2)';
        });
        
        input.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(218, 165, 32)') {
                validateField(this);
            }
        });
    });
}

// Field validation helper
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    switch(field.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = value && emailRegex.test(value);
            break;
        case 'tel':
            const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
            isValid = !value || phoneRegex.test(value); // Optional field
            break;
        case 'text':
            isValid = value.length >= 2;
            break;
        default:
            if (field.tagName.toLowerCase() === 'textarea') {
                isValid = value.length >= 10;
            } else {
                isValid = value.length > 0;
            }
    }
    
    field.style.borderColor = isValid ? 'rgba(218, 165, 32, 0.3)' : '#DAA520';
    return isValid;
}

// Enhanced Notification system
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    // Icon based on type
    let icon = '';
    switch(type) {
        case 'success':
            icon = '✅';
            break;
        case 'error':
            icon = '❌';
            break;
        case 'info':
            icon = '💡';
            break;
        default:
            icon = '📢';
    }
    
    notification.innerHTML = `
        <div class="notification__content">
            <div class="notification__icon">${icon}</div>
            <div class="notification__message">${message}</div>
            <button class="notification__close">&times;</button>
        </div>
    `;
    
    // Set colors based on type
    let bgColor, textColor, borderColor;
    switch(type) {
        case 'success':
            bgColor = '#DAA520';
            textColor = '#000000';
            borderColor = '#000000';
            break;
        case 'error':
            bgColor = '#000000';
            textColor = '#DAA520';
            borderColor = '#DAA520';
            break;
        case 'info':
            bgColor = '#1C1C1C';
            textColor = '#DAA520';
            borderColor = '#DAA520';
            break;
        default:
            bgColor = '#DAA520';
            textColor = '#000000';
            borderColor = '#000000';
    }
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        background: ${bgColor};
        color: ${textColor};
        padding: 1.5rem 2rem;
        border-radius: 20px;
        border: 2px solid ${borderColor};
        box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        z-index: 10001;
        transform: translateX(450px);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        max-width: 450px;
        font-weight: 500;
        backdrop-filter: blur(10px);
    `;
    
    // Style the content
    const content = notification.querySelector('.notification__content');
    content.style.cssText = `
        display: flex;
        align-items: flex-start;
        gap: 1rem;
    `;
    
    // Style the icon
    const iconEl = notification.querySelector('.notification__icon');
    iconEl.style.cssText = `
        font-size: 1.5rem;
        flex-shrink: 0;
        margin-top: 0.1rem;
    `;
    
    // Style the message
    const messageEl = notification.querySelector('.notification__message');
    messageEl.style.cssText = `
        flex: 1;
        line-height: 1.5;
    `;
    
    // Style the close button
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 1.8rem;
        cursor: pointer;
        padding: 0;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
        flex-shrink: 0;
        font-weight: bold;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button event
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(450px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    });
    
    // Hover effects
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = type === 'error' ? '#DAA520' : '#000000';
        closeBtn.style.color = type === 'error' ? '#000000' : '#DAA520';
        closeBtn.style.transform = 'scale(1.1)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'none';
        closeBtn.style.color = 'inherit';
        closeBtn.style.transform = 'scale(1)';
    });
    
    // Auto close
    const autoCloseTime = type === 'error' ? 8000 : 6000;
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(450px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 400);
        }
    }, autoCloseTime);
}

// Smooth Scrolling - FIXED
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Handle empty hash or just #
            if (targetId === '#' || targetId === '') {
                e.preventDefault();
                window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
                });
                return;
            }
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: Math.max(0, targetPosition),
                    behavior: 'smooth'
                });
                
                // Add visual feedback
                setTimeout(() => {
                    targetSection.style.transform = 'scale(1.01)';
                    setTimeout(() => {
                        targetSection.style.transform = 'scale(1)';
                    }, 300);
                }, 800);
            }
        });
    });
}

// Enhanced button click effects
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
        const button = e.target.classList.contains('btn') ? e.target : e.target.closest('.btn');
        
        // Create enhanced ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 70%, transparent 100%);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleEffect 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: none;
            z-index: 1;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 800);
    }
});

// Add enhanced CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .nav__menu.active {
        display: flex !important;
        animation: slideDown 0.3s ease-out;
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav__link.active {
        color: #DAA520 !important;
    }
    
    .nav__link.active::after {
        width: 100% !important;
    }
    
    /* Enhanced scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: #1C1C1C;
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #DAA520, #F4D03F);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #F4D03F, #FFD700);
    }
    
    /* AI Chat specific styles */
    .ai-chat {
        display: none;
    }
    
    .ai-chat.active {
        display: flex !important;
    }
`;

document.head.appendChild(style);

// Page loading effect - FIXED
window.addEventListener('load', function() {
    // Show welcome notification after everything loads
    setTimeout(() => {
        showNotification('🚀 Welcome to Fedigma-Forge Info! Ready to transform your digital future? Try our AI assistant Alex!', 'success');
    }, 1500);
});

// Performance monitoring and console messages - FIXED
window.addEventListener('load', function() {
    console.log('%c🟡 Fedigma-Forge Info Enhanced Website Loaded Successfully!', 'color: #DAA520; font-weight: bold; font-size: 16px;');
    console.log('%c🖤 Duo-color theme (Mustard Yellow & Black) activated', 'color: #DAA520; font-weight: bold;');
    console.log('%c📱 All sliders and interactive components initialized', 'color: #DAA520;');
    console.log('%c🤖 AI Assistant "Alex" is ready to help', 'color: #DAA520;');
    console.log('%c🌐 Social media integration activated', 'color: #DAA520;');
    console.log('%c✨ Advanced interactions and animations enabled', 'color: #DAA520;');
    console.log('%c🛠️ All critical bugs have been FIXED!', 'color: #00ff00; font-weight: bold;');
    
    if (window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`%c⚡ Page loaded in ${loadTime}ms`, 'color: #DAA520;');
        
        if (loadTime > 3000) {
            console.warn('⚠️ Page load time is slower than optimal. Consider optimizing resources.');
        }
    }
});

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    // ESC key to close AI assistant and modals
    if (e.key === 'Escape') {
        const aiChat = document.getElementById('aiChat');
        if (aiChat && aiChat.classList.contains('active')) {
            aiChat.classList.remove('active');
            setTimeout(() => {
                aiChat.style.display = 'none';
            }, 300);
        }
        
        // Close any open modals
        const modals = document.querySelectorAll('.blog-modal, .notification');
        modals.forEach(modal => modal.remove());
    }
});

// Final initialization message
setTimeout(() => {
    console.log('%c🎉 All systems ready! Fedigma-Forge Info website is fully operational and FIXED!', 'color: #DAA520; font-weight: bold; font-size: 14px;');
    console.log('%c📞 Contact: +917984504286 | ✉️ Email: info@fnfed.com', 'color: #DAA520;');
    console.log('%c🌟 Experience: 7+ Years | 🏆 150+ Projects | 😊 100+ Happy Clients', 'color: #DAA520;');
    console.log('%c🤖 Try the AI Assistant "Alex" in the bottom-right corner!', 'color: #00ff00; font-weight: bold;');
}, 2000);