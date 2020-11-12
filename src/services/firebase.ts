import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_AojUgMbMtrlWmbxsF97bd__eM8VcT1c',
  authDomain: 'reactzzaria-fb987.firebaseapp.com',
  databaseURL: 'https://reactzzaria-fb987.firebaseio.com',
  projectId: 'reactzzaria-fb987',
  storageBucket: 'reactzzaria-fb987.appspot.com',
  messagingSenderId: '509358972386',
  appId: '1:509358972386:web:38ca3aa92cda432bafedbb',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
