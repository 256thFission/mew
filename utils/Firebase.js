import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY_TRUE,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_TRUE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_TRUE,
};
// if a Firebase instance doesn't exist, create one

const app = initializeApp(FirebaseCredentials);
const auth = getAuth(app);
export { auth };
