import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const environmentConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const legacyConfig = {
  apiKey: 'AIzaSyCFCqWa2gWsTz6ONIRYURVziF2IEPqSa4g',
  authDomain: 'plant-centar.firebaseapp.com',
  projectId: 'plant-centar',
  storageBucket: 'plant-centar.appspot.com',
  messagingSenderId: '539973415559',
  appId: '1:539973415559:web:fa1b7a989a66e93a4d7e22',
};

const hasEnvironmentConfig = Object.values(environmentConfig).every(Boolean);
const app = initializeApp(hasEnvironmentConfig ? environmentConfig : legacyConfig);

if (import.meta.env.DEV && !hasEnvironmentConfig) {
  console.info('Plant Centar uses its legacy Firebase fallback. Add .env.local to read shared shop news.');
}

export const db = getFirestore(app);
