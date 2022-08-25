import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCP4t3LtuY40VPVAmKkbeMZdRN8sstPr5w',
  authDomain: 'catch-of-the-day-83b77.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-83b77-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };
// default export
export default base;
