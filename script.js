let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']')
                .classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/**---------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Show sending status
            formStatus.textContent = 'Sending...';
            formStatus.style.color = '#00ffee';
            
            // Send email using EmailJS
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.style.color = '#00ffee';
                    
                    // Clear the form
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formStatus.textContent = '';
                    }, 5000);
                }, function(error) {
                    console.log('FAILED...', error);
                    formStatus.textContent = 'Failed to send message. Please try again.';
                    formStatus.style.color = 'red';
                });
        });
    }
    
    // Rest of your existing JavaScript code...
});
