// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBFkNhLPXlsodqO5pNX6r5899cqe7Gzsm0",
  authDomain: "meals-3dea0.firebaseapp.com",
  databaseURL: "https://meals-3dea0-default-rtdb.firebaseio.com",
  projectId: "meals-3dea0",
  storageBucket: "meals-3dea0.appspot.com",
  messagingSenderId: "461451173919",
  appId: "1:461451173919:web:13611325d63ab41854f52a",
  measurementId: "G-C8XMJM1JN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
