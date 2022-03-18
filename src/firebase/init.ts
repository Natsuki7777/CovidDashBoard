import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCqUk3a8x1XDzKfR4kPe_ffTGv8um-SVC4',
  authDomain: 'react-covid19-6c453.firebaseapp.com',
  projectId: 'react-covid19-6c453',
  storageBucket: 'react-covid19-6c453.appspot.com',
  messagingSenderId: '770774205331',
  appId: '1:770774205331:web:5a327539efec47a0cf9e66',
  measurementId: 'G-7D35KXGQ86',
};

const app: FirebaseApp = initializeApp(firebaseConfig);

// FireStore
export const db: Firestore = getFirestore();
