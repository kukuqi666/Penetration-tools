// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example for adding interactivity if needed
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on ${card.querySelector('h3').innerText}`);
    });
});
