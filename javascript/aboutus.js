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