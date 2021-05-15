import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2bJMnSO207YBn0CklK6h0MtUreHMPcXI",
  authDomain: "fir-f5b2c.firebaseapp.com",
  projectId: "fir-f5b2c",
  storageBucket: "fir-f5b2c.appspot.com",
  messagingSenderId: "569904349507",
  appId: "1:569904349507:web:d0213883a7a2cf1456eff6",
});

const auth = firebase.auth();

export { auth };
