// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation (Basic)
document.querySelector('form').addEventListener('submit', function(e) {
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    if (!emailField.value.includes('@') || messageField.value.trim() === '') {
        e.preventDefault(); // Prevent form submission
        alert('Please enter a valid email and message.');
    }
});

// Toggle Project Details (Optional Lightbox Effect)
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', function() {
        const description = this.querySelector('p');
        description.classList.toggle('active');
        
        if (description.classList.contains('active')) {
            description.style.maxHeight = description.scrollHeight + 'px';
        } else {
            description.style.maxHeight = '0px';
        }
    });
});

// Dynamic Year in Footer
document.querySelector('footer p').textContent = `© ${new Date().getFullYear()} Avinash Gaur. All rights reserved.`;
