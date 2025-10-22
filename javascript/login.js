import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js';

const form = document.getElementById('login');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    if (!email || !password) return alert('Email and password are required');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to home page on success
      window.location.href = '/html/home.html';
    } catch (err) {
      alert(err.message || 'Login failed');
    }
  });
}