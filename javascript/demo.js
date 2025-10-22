// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Register form handling
    const registerForm = document.getElementById('register');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const user = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                nationality: document.getElementById('nationality').value
            };

            // Store user data in localStorage
            localStorage.setItem('userData', JSON.stringify(user));
            
            alert('Registration successful! Please login.');
            window.location.href = 'login.html';
        });
    }

    // Login form handling
    const loginForm = document.getElementById('login');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            const storedUser = JSON.parse(localStorage.getItem('userData'));
            
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                alert('Login successful!');
                // Here you would typically redirect to a dashboard or home page
                // window.location.href = 'dashboard.html';
            } else {
                alert('Invalid email or password');
            }
        });
    }
});