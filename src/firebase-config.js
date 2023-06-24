// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCo8zVpbzig09fVtTZryofudMNcnZrxMxs',
  authDomain: 'auth-9dc0e.firebaseapp.com',
  projectId: 'auth-9dc0e',
  storageBucket: 'auth-9dc0e.appspot.com',
  messagingSenderId: '288982989271',
  appId: '1:288982989271:web:cbe06c71fc61a3468d7392',
  measurementId: 'G-M9NFE33305',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Authorized domains: https://stackblitz-starters-mrwpuy.stackblitz.io
// then auth working otherwise not
