import { initializeApp, getApps, getApp } from 'firebase/app';
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

  messagingSenderId: '462689197080',

  appId: '1:462689197080:web:d349e2754ecf5ad552376d',

};

let App;
if (!getApps().length) { App = initializeApp(firebaseConfig); } else { App = getApp(); }
// export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
