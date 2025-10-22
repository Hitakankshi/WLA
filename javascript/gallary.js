// Toggle mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    if (searchInput.value.trim() !== '') {
        alert(`Searching for: ${searchInput.value}`);
        // In a real implementation, you would redirect or filter content
        // window.location.href = `/search?q=${encodeURIComponent(searchInput.value)}`;
    }
});

// Allow search on Enter key
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim() !== '') {
        alert(`Searching for: ${searchInput.value}`);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuBtn = document.getElementById('menuBtn');
    const navRight = document.getElementById('navRight');
    const searchContainer = document.getElementById('searchContainer');
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    // Mobile menu toggle
    menuBtn.addEventListener('click', function() {
        navRight.classList.toggle('active');
    });
    
    // Search functionality
    searchBtn.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
        }
    });
    
    // Mobile search bar hide/show on scroll
    let lastScrollPosition = 0;
    const mobileBreakpoint = 768;
    
    function handleScroll() {
        if (window.innerWidth > mobileBreakpoint) return;
        
        const currentScrollPosition = window.pageYOffset;
        const isScrollingDown = currentScrollPosition > lastScrollPosition;
        
        if (isScrollingDown && currentScrollPosition > 100) {
            searchContainer.classList.add('hide-on-scroll');
        } else {
            searchContainer.classList.remove('hide-on-scroll');
        }
        
        lastScrollPosition = currentScrollPosition;
    }
    
    function checkViewport() {
        if (window.innerWidth > mobileBreakpoint) {
            searchContainer.classList.remove('hide-on-scroll');
            window.removeEventListener('scroll', handleScroll);
        } else {
            window.addEventListener('scroll', handleScroll);
        }
    }
    
    // Initial setup
    checkViewport();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        checkViewport();
    });
});
// Tab functionality
function openTab(tabName, event) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // Remove active class from all buttons
    const tabButtons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    // Show the selected tab and mark its button as active
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Gallery scrolling functionality
function scrollGallery(galleryId, direction) {
    const gallery = document.getElementById(`${galleryId}-slider`);
    const scrollAmount = gallery.querySelector('.gallery-item').offsetWidth + 30;
    gallery.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Testimonial slider functionality
    const testimonialSlider = document.getElementById('testimonial-slider');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    
    if (testimonialSlider && prev && next) {
        // Calculate scroll amount based on card width
        const scrollAmount = () => {
            const card = document.querySelector('.testimonial-card');
            return card.offsetWidth + 30; // card width + margin
        };
        
        // Previous button click handler
        prev.addEventListener('click', () => {
            testimonialSlider.scrollBy({
                left: -scrollAmount(),
                behavior: 'smooth'
            });
        });
        
        // Next button click handler
        next.addEventListener('click', () => {
            testimonialSlider.scrollBy({
                left: scrollAmount(),
                behavior: 'smooth'
            });
        });
        
        // Hide arrows when at the start/end of slider
        const handleArrows = () => {
            prev.style.display = testimonialSlider.scrollLeft <= 0 ? 'none' : 'flex';
            next.style.display = testimonialSlider.scrollLeft >= testimonialSlider.scrollWidth - testimonialSlider.clientWidth - 1 ? 'none' : 'flex';
        };
        
        // Initialize arrows
        handleArrows();
        
        // Update arrows on scroll
        testimonialSlider.addEventListener('scroll', handleArrows);
        
        // Update on window resize
        window.addEventListener('resize', handleArrows);
    }
    
    // Set initial active tab if none is set
    if (!document.querySelector('.tab-content.active')) {
        const firstTab = document.querySelector('.tab-content');
        const firstBtn = document.querySelector('.tab-btn');
        if (firstTab && firstBtn) {
            firstTab.classList.add('active');
            firstBtn.classList.add('active');
        }
    }
});

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    initGalleryNavigation();
    initTestimonialSlider();
    
    // Update on window resize
    window.addEventListener('resize', function() {
        initGalleryNavigation();
        initTestimonialSlider();
    });
});
