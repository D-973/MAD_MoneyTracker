// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAfVoP-p_MHA1QfYop7Ng8nYaXMihwXkTE',
  authDomain: 'money-tracker-f8150.firebaseapp.com',
  projectId: 'money-tracker-f8150',
  storageBucket: 'money-tracker-f8150.firebasestorage.app',
  messagingSenderId: '524109441309',
  appId: '1:524109441309:web:118803d4c10753734559f4',
  databaseURL: 'https://money-tracker-f8150-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
