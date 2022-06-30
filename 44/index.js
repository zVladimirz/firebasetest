// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAaPSfZqEzW_-JS8hqfGfy1HiWo_2p76Qs",

  authDomain: "themoviedb-3b21b.firebaseapp.com",

  projectId: "themoviedb-3b21b",

  storageBucket: "themoviedb-3b21b.appspot.com",

  messagingSenderId: "575471346212",

  appId: "1:575471346212:web:810054c9b546e4da41aeb1"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

async function  registration(email, password) {
  try {
      const data = await auth().createUserWithEmailAndPassword(email, password)
      console.log(data.user.uid)
  } catch (error) {
      console.log(error.message)
      throw error
  }
}

registration('we@dw.com','111111')






