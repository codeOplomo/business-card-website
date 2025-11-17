// Simple script for business card interactivity
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.contact-btn');
    const details = {
        email: document.getElementById('email-detail'),
        phone: document.getElementById('phone-detail'),
        website: document.getElementById('website-detail'),
        linkedin: document.getElementById('linkedin-detail')
    };
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const type = btn.getAttribute('data-type');
            // Hide all details first
            Object.values(details).forEach(d => d.style.display = 'none');
            // Show the selected detail as a box
            if (details[type]) {
                details[type].style.display = 'block';
            }
        });
    });

    // Existing card click alert
    const card = document.querySelector('.card');
    card.addEventListener('click', function(event) {
        // Prevent alert if clicking on buttons
        if (!event.target.classList.contains('contact-btn')) {
            // alert('Thanks for visiting my business card!');
        }
    });
});