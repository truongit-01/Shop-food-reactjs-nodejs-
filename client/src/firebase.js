// Import from FireBase

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCgWcsYC4Kd44KyuWvwrwWZ8w6oWi4WKY0',
  authDomain: 'shop-clothes-blockchain.firebaseapp.com',
  projectId: 'shop-clothes-blockchain',
  storageBucket: 'shop-clothes-blockchain.appspot.com',
  messagingSenderId: '835215172308',
  appId: '1:835215172308:web:39724c251df9cbcf0b5141',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
