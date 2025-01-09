// Get all navigation links and sections
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

// Function to highlight the active link
function highlightActiveLink() {
    let currentSection = '';

    // Loop through sections to find the one in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the section is in view
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove the 'active' class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add the 'active' class to the link corresponding to the current section
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', highlightActiveLink);

// Add event listener for click
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Remove the 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add the 'active' class to the clicked link
        this.classList.add('active');

        // Smooth scroll to the target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the active link on page load
highlightActiveLink();

// Initialize Typed.js
let typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Python Developer"], 
    loop: true,
    typeSpeed: 100,
    backSpeed: 80, 
    backDelay: 2000, 
});
// Add event listener to each skill item
document.querySelectorAll('.skills-list li').forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});