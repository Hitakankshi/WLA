// Firebase app configuration and exports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPu1pO3OmwpClBspO6JSO2kqy90fKJiv4",
  authDomain: "test-1-55bca.firebaseapp.com",
  projectId: "test-1-55bca",
  storageBucket: "test-1-55bca.firebasestorage.app",
  messagingSenderId: "196562131881",
  appId: "1:196562131881:web:0b424822c842687dd982b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
