document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    
    let isValid = true;

    // clear old error messages & borders
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("error-border"));

    // name validation
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
        setError(name, "Name is required");
        isValid = false;
    }

    // email validation
    const email = document.getElementById("email");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        setError(email, "Email is required");
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        setError(email, "Enter a valid email");
        isValid = false;
    }

    // password validation
    const password = document.getElementById("password");
    if (password.value.trim() === "") {
        setError(password, "Password is required");
        isValid = false;
    } else if (password.value.length < 6) {
        setError(password, "Password must be at least 6 characters");
        isValid = false;
    }

    // confirm password validation
    const confirmPassword = document.getElementById("confirmPassword");
    if (confirmPassword.value.trim() === "") {
        setError(confirmPassword, "Please confirm your password");
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        setError(confirmPassword, "Passwords do not match");
        isValid = false;
    }

    // message validation
    const message = document.getElementById("message");
    if (message.value.trim() === "") {
        setError(message, "Message cannot be empty");
        isValid = false;
    }

    // if form is valid
    if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
    }
});

function setError(input, message) {
    const errorElement = input.parentElement.querySelector(".error");
    errorElement.textContent = message;
    input.classList.add("error-border");
}

// toggle password visibility with Material Icons
function togglePassword(fieldId, iconElement) {
    const input = document.getElementById(fieldId);
    if (input.type === "password") {
        input.type = "text";
        iconElement.textContent = "visibility_off"; // closed eye
    } else {
        input.type = "password";
        iconElement.textContent = "visibility"; // open eye
    }
}
