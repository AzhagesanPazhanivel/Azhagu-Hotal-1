// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxmp51J6OrqxGcqm_pkrbjN5PMb0DcDvk",
    authDomain: "azhagu-unavagam.firebaseapp.com",
    projectId: "azhagu-unavagam",
    storageBucket: "azhagu-unavagam.firebasestorage.app",
    messagingSenderId: "22877925035",
    appId: "1:22877925035:web:2fc107913da907a3cf91ee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
