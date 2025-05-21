
// page 1: login.html
document.getElementById('loginButton').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace these with your actual credentials
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'index.html';
    } else {
        alert('Incorrect username or password.');
    }
});

