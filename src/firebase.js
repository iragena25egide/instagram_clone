// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage}  from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCIY3rS-LdXjmJVb_Fz-URVi0AISBYlLNo",
  authDomain: "post-6c3c3.firebaseapp.com",
  projectId: "post-6c3c3",
  storageBucket: "post-6c3c3.appspot.com",
  messagingSenderId: "213931404468",
  appId: "1:213931404468:web:349f16e919a24dbabb7be1",
  measurementId: "G-J3NLT3MM3X"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage=getStorage(app);