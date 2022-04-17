// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4rRaPD8_5N5p5MIw3FHG545fFQ_mm1Ww',
  authDomain: 'chatapprn1604.firebaseapp.com',
  projectId: 'chatapprn1604',
  storageBucket: 'chatapprn1604.appspot.com',
  messagingSenderId: '260592429594',
  appId: '1:260592429594:web:05684aa199cb89cc36ffa3',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
