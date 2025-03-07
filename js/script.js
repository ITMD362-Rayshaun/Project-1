// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (name && email && password) {
            message.textContent = "Thank you for signing up, " + name + "!";
            message.style.color = "green";
            form.reset();
        } else {
            message.textContent = "Please fill out all fields.";
            message.style.color = "red";
        }
    });
});
