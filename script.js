document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
    }

    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', toggleMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', toggleMenu);
    }

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust for fixed header
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Carousel Logic
    const track = document.getElementById('testimonial-track');
    if (track) {
        let slides = Array.from(track.children);
        let dots = Array.from(document.querySelectorAll('.carousel-indicator'));
        let currentIndex = 0;
        let slideInterval;
        let startX = 0;
        let isDragging = false;

        const updateSlidePosition = () => {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

            // Update dots
            dots.forEach(d => d.classList.remove('current-slide'));
            if (dots[currentIndex]) {
                dots[currentIndex].classList.add('current-slide');
            }
        };

        const moveToSlide = (index) => {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            currentIndex = index;
            updateSlidePosition();
        };

        const startAutoPlay = () => {
            stopAutoPlay(); // Clear any existing
            slideInterval = setInterval(() => {
                moveToSlide(currentIndex + 1);
            }, 3000); // 3 seconds
        };

        const stopAutoPlay = () => {
            clearInterval(slideInterval);
        };

        // Resize Listener
        window.addEventListener('resize', () => {
            updateSlidePosition();
        });

        // Loop / Navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopAutoPlay();
                moveToSlide(index);
                startAutoPlay(); // Restart after interaction
            });
        });

        // Touch / Swipe Support
        track.addEventListener('touchstart', (e) => {
            stopAutoPlay();
            startX = e.touches[0].clientX;
            isDragging = true;
        }, { passive: true });

        track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            // Optional: Real-time drag effect could go here
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) { // Threshold
                if (diff > 0) {
                    moveToSlide(currentIndex + 1); // Swipe Left -> Next
                } else {
                    moveToSlide(currentIndex - 1); // Swipe Right -> Prev
                }
            }

            isDragging = false;
            startAutoPlay();
        });

        // Init
        setTimeout(updateSlidePosition, 100); // Initial adjustment
        startAutoPlay();
    }
    // Vehicle Tabs Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const mainVehicleImg = document.getElementById('vehicle-banner-img');

    // Image map for vehicles using the uploaded banner images
    const vehicleImages = {
        'carro': 'modelo/slid-1-carro-1536x369.png',
        'motos': 'modelo/Slid-2-moto-1536x369.png',
        'utilitarios': 'modelo/Slid-3-Vam-1536x369.png',
        'caminhoes': 'modelo/Sld-4-Caminhao-1536x369.png'
    };

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            // Update Image with fade effect
            const vehicleType = btn.getAttribute('data-vehicle');
            if (vehicleImages[vehicleType]) {
                mainVehicleImg.style.opacity = '0';
                setTimeout(() => {
                    mainVehicleImg.src = vehicleImages[vehicleType];
                    mainVehicleImg.style.opacity = '1';
                }, 300);
            }
        });
    });

    // Simple Form Validation / Submission Mock
    // Hero Form WhatsApp Redirect
    const heroForm = document.querySelector('.hero-form');
    if (heroForm) {
        heroForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(heroForm);
            const data = Object.fromEntries(formData.entries());

            // Webhook URL
            const webhookUrl = "https://n8nwh.automatusolutions.net/webhook/apvs-google-calif";

            // Send data to webhook
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => console.log('Webhook success:', response))
                .catch(error => console.error('Webhook error:', error));

            // Redirect to WhatsApp with the requested message (Preserving existing flow)
            const whatsappUrl = "https://api.whatsapp.com/send?phone=553171462918&text=Ol%C3%A1,%20preciso%20de%20uma%20cota%C3%A7%C3%A3o%20para%20o%20meu%20ve%C3%ADculo,%20vim%20pelo%20site";
            window.open(whatsappUrl, '_blank');
        });
    }

    // Old quote form logic removed/replaced
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        // Keep this just in case there's another form, but the hero one is main now
        quoteForm.addEventListener('submit', function (e) { e.preventDefault(); });
    }

    // Phone Mask (Simple implementation)
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }

    // Cookie Popup Logic
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (cookiePopup) {
        // Show after 2 seconds if not accepted
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => {
                cookiePopup.classList.add('show');
            }, 2000);
        }

        if (acceptCookiesBtn) {
            acceptCookiesBtn.addEventListener('click', () => {
                cookiePopup.classList.remove('show');
                localStorage.setItem('cookiesAccepted', 'true');
            });
        }
    }
});

// FAQ Accordion Logic
const faqBtns = document.querySelectorAll('.faq-btn');

faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toggle the active class on the button
        btn.classList.toggle('active');

        // Find the next sibling (the content div)
        const content = btn.nextElementSibling;

        // Toggle the active class on the content
        if (content) {
            content.classList.toggle('active');
        }
    });
});

// Phone Validation for Hero Form (11 digits max, numeric only)
function enforceNumericOnly(inputElement) {
    let value = inputElement.value.replace(/[^0-9]/g, "");
    const maxLength = 11;
    if (value.length > maxLength) {
        value = value.slice(0, maxLength);
    }
    inputElement.value = value;
}

function showPhoneError(inputElement, message) {
    let errorDiv = inputElement.parentNode.querySelector(".phone-length-error");
    if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.className = "phone-length-error";
        errorDiv.style.color = "red";
        errorDiv.style.fontSize = "12px";
        errorDiv.style.marginTop = "5px";
        inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
    }
    errorDiv.textContent = message;
    inputElement.style.borderColor = "red";
}

function clearPhoneError(inputElement) {
    let errorDiv = inputElement.parentNode.querySelector(".phone-length-error");
    if (errorDiv) {
        errorDiv.textContent = "";
    }
    inputElement.style.borderColor = "";
}

function setupHeroPhoneValidation() {
    const phoneInput = document.getElementById("hero-phone-input");

    if (phoneInput) {
        phoneInput.setAttribute("inputmode", "numeric");
        phoneInput.removeAttribute("pattern");

        phoneInput.addEventListener("input", function () {
            enforceNumericOnly(this);
            const phoneNumber = this.value.replace(/[^0-9]/g, "");
            if (phoneNumber.length > 0 && phoneNumber.length < 8) {
                showPhoneError(this, "O telefone deve ter pelo menos 8 dígitos.");
            } else {
                clearPhoneError(this);
            }
        });

        const formElement = phoneInput.closest("form");

        if (formElement) {
            formElement.addEventListener("submit", function (event) {
                const phoneNumber = phoneInput.value.replace(/[^0-9]/g, "");
                if (phoneNumber.length < 8) {
                    event.preventDefault();
                    event.stopPropagation();
                    showPhoneError(phoneInput, "O telefone deve ter pelo menos 8 dígitos.");
                    console.warn(`Envio bloqueado: Telefone ${phoneNumber} tem menos de 8 dígitos.`);
                } else {
                    clearPhoneError(phoneInput);
                }
            }, true); // Use capture to run before other submit handlers
            console.log("Validação de telefone aplicada ao formulário hero.");
        }
    }
}

// Run after DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupHeroPhoneValidation);
} else {
    setupHeroPhoneValidation();
}
