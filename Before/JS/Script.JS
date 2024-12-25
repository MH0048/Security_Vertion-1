// Modal
function Modal_function() {
    // Get form elements
    let name = document.getElementById('name-2').value;
    let email = document.getElementById('email-2').value;
    let password = document.getElementById('password-2').value;
    // Check if all fields are filled
    if (name === "" || email === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }
    // Check if email contains "@" and "."
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address");
        return false;
    }
    // If all checks pass
    return true;
}


// Contact-us
function Contact_function() {
    // Get form elements
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let message = document.getElementById('text')
    // Check if all fields are filled
    if (name === "" || email === "" || password === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    // Check if email contains "@" and "."
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address");
        return false;
    }
    // If all checks pass
    return true;
}




