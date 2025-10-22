import { auth, database } from './firebase-config.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js';
import { ref, set } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js';

const form = document.getElementById('register');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Email and password are required');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // creation timestamp
      const createdAt = Date.now();
      // Store additional profile data in Realtime Database under /users/{uid}
      await set(ref(database, 'users/' + user.uid), {
        name,
        phone,
        email,
        createdAt
      });

      // Show a friendly popup/message with creation time
      const msgDiv = document.getElementById('resisterMessage');
      const createdAtStr = new Date(createdAt).toLocaleString();
      const successText = `Account created successfully at ${createdAtStr}`;
      if (msgDiv) {
        msgDiv.textContent = successText;
        msgDiv.style.display = 'block';
        msgDiv.classList.remove('error');
        msgDiv.classList.add('success');
      } else {
        // fallback popup
        alert(successText);
      }

      // Redirect to home page after a short delay so user can see the message
      setTimeout(() => { window.location.href = '/html/home.html'; }, 2500);
    } catch (err) {
      console.error('Registration error', err);
      const msgDiv = document.getElementById('resisterMessage');
      const code = err && err.code ? err.code : '';
      // Friendly messages for common Firebase auth errors
      let friendly = err && err.message ? err.message : 'Registration failed';
      if (code === 'auth/email-already-in-use') {
        friendly = 'This email is already in use. Please login or use a different email.';
      } else if (code === 'auth/weak-password') {
        friendly = 'Password is too weak. Choose a stronger password (min 6 characters).';
      } else if (code === 'auth/invalid-email') {
        friendly = 'Please enter a valid email address.';
      }

      if (msgDiv) {
        msgDiv.textContent = friendly;
        msgDiv.style.display = 'block';
        msgDiv.classList.remove('success');
        msgDiv.classList.add('error');
        // auto-hide after 7 seconds
        setTimeout(() => { msgDiv.style.display = 'none'; }, 7000);
      } else {
        alert(friendly);
      }
    }
  });
}