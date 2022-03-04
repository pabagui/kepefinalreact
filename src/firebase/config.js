// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//cambiar toda la config por .env dentro del gitignore
const firebaseConfig = {
  apiKey: "AIzaSyAstXdtqKqGa-aXs8uf4das_mKg1hqDN_A",
  authDomain: "kepeproyectofinalreact.firebaseapp.com",
  projectId: "kepeproyectofinalreact",
  storageBucket: "kepeproyectofinalreact.appspot.com",
  messagingSenderId: "263668458861",
  appId: "1:263668458861:web:4fff598ee0eff8afd32664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}