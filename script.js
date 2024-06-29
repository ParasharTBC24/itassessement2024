document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        if (name === "") {
            alert("Name is required.");
            isValid = false;
        }
        
        if (email === "") {
            alert("Email is required.");
            isValid = false;
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }
        
        if (message === "") {
            alert("Message is required.");
            isValid = false;
        }
        
        if (isValid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
    
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
