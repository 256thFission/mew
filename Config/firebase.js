import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,

  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,

  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,

  storageBucket: process.env.NEXT_PUNLIC_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: '363489158645',

  appId: '1:363489158645:web:bc97a62bac3da52a08ecbc',

  measurementId: 'G-E03EL0YGPH',

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
