import { auth, database } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js';
import { ref, get } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js';

const userProfile = document.getElementById('userProfile');
const userNameEl = document.getElementById('userName');
const userEmailEl = document.getElementById('userEmail');
const loginBtn = document.querySelector('.login-btn');

// helper to set login link back to normal
function setLoginLink() {
  if (!loginBtn) return;
  loginBtn.textContent = 'Login';
  loginBtn.href = '/html/login.html';
  loginBtn.onclick = null;
  loginBtn.style.display = '';
}

// helper to turn login link into logout control
function setLogoutControl() {
  if (!loginBtn) return;
  loginBtn.textContent = 'Logout';
  loginBtn.href = '#';
  loginBtn.style.display = '';
  loginBtn.onclick = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      // after sign out, refresh to update UI
      window.location.reload();
    } catch (err) {
      console.error('Sign out failed', err);
      alert('Sign out failed');
    }
  };
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // fetch profile from Realtime Database
    try {
      const snap = await get(ref(database, 'users/' + user.uid));
      const profile = snap.exists() ? snap.val() : null;
      const name = profile && profile.name ? profile.name : (user.displayName || 'User');
      const email = user.email || (profile && profile.email) || '';
      if (userProfile) userProfile.style.display = 'block';
      if (userNameEl) userNameEl.textContent = name;
      if (userEmailEl) userEmailEl.textContent = email;
  // replace login link with a logout control when user is logged in
  setLogoutControl();
    } catch (err) {
      console.error('Failed to load user profile', err);
    }
  } else {
    if (userProfile) userProfile.style.display = 'none';
  // show login link when no user
  setLoginLink();
  }
});
