// Log a message to the console to confirm the script is loaded
console.log('Portfolio website loaded.');

// Add any interactive JavaScript functionality here
// Example: Smooth scrolling for navigation links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
