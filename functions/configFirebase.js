const admin = require('firebase-admin');

//const serviceAccount = require('./path/to/serviceAccountKey.json');
const firebaseConfig = {
    apiKey: "AIzaSyDaEmX6MCjrqLTYkDem8uZ7MlMseRsS_bs",
    authDomain: "project-by-serempre.firebaseapp.com",
    projectId: "project-by-serempre",
    storageBucket: "project-by-serempre.appspot.com",
    messagingSenderId: "635075589658",
    appId: "1:635075589658:web:173dce2286da05a44ec3a3",
    measurementId: "G-E3X2KJRLW8"
  };

admin.initializeApp(firebaseConfig);

module.exports = admin;

