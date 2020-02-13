import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCd09s9Ku6LvnQbo_D8N86w5WP4_FF8BOM",
    authDomain: "viktorskrum-2f17e.firebaseapp.com",
    databaseURL: "https://viktorskrum-2f17e.firebaseio.com",
    projectId: "viktorskrum-2f17e",
    storageBucket: "viktorskrum-2f17e.appspot.com",
    messagingSenderId: "918206257713",
  };

  class Firebase {
      constructor() {
          app.initializeApp(config);

          this.auth = app.auth();
          this.db = app.database();
      }

      // *** Auth API ***
      doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

      doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
      
      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

      // *** User API ***

      user = uid => this.db.ref(`users/${uid}`);
      users = () => this.db.ref('users');
  }

  export default Firebase;