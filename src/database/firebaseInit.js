import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBUtZFTuzEhTCkwV2L6C9vKa5GR0bo6PwA",
  authDomain: "rockbuild-39b38.firebaseapp.com",
  databaseURL: "https://rockbuild-39b38-default-rtdb.firebaseio.com",
  projectId: "rockbuild-39b38",
  storageBucket: "rockbuild-39b38.appspot.com",
  messagingSenderId: "815117212521",
  appId: "1:815117212521:web:c8b31cec5d0b0d03183bf8",
  measurementId: "G-CS53DHK0S9"
};

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);