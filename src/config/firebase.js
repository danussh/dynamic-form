import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
// import "firebase/storage";

// Your web app's Firebase configuration
// expired 
// const firebaseConfig = {
//   apiKey: "AIzaSyDXEdJiP6e3AphIbYckzuC_qkuJLEPEMBE",
//   authDomain: "form-777cc.firebaseapp.com",
//   projectId: "form-777cc",
//   storageBucket: "form-777cc.appspot.com",
//   messagingSenderId: "143790821276",
//   appId: "1:143790821276:web:c22bb698d1898e83db0259",
//   measurementId: "G-9JNRVKM39H"
// };
//created from gempatrthiban google id  id
const firebaseConfig = {
  apiKey: "AIzaSyDlLz6w3rLYJ_n211nRIVCK_tlV2U1GA0A",
  authDomain: "handform-c62a3.firebaseapp.com",
  databaseURL: "https://handform-c62a3-default-rtdb.firebaseio.com",
  projectId: "handform-c62a3",
  storageBucket: "handform-c62a3.appspot.com",
  messagingSenderId: "867248517559",
  appId: "1:867248517559:web:7eed23797fda6d2ae8f832",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ACTION--------------------------------------------------------------

// sign in
export const signInToDatabase = (email, password) =>
  new Promise((resolve, reject) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error))
  );

// sign up
export const signUpToDatabase = (email, password) =>
  new Promise((resolve, reject) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error))
  );

// post
export const postDataToDatabase = (path, data) =>
  new Promise((resolve, reject) =>
    firebase
      .database()
      .ref(path)
      .push(data)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  );

// set
export const setDataToDatabase = (path, data) =>
  new Promise((resolve, reject) =>
    firebase
      .database()
      .ref(path)
      .set(data)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  );

// get
export const getDataFromDatabase = (path) =>
  new Promise((resolve, reject) =>
    firebase
      .database()
      .ref(path)
      .on("value", (snapshot) =>
        snapshot.val()
          ? resolve(snapshot.val())
          : reject("data not found or database error")
      )
  );

// delete
export const deleteDataDatabase = (path) =>
  new Promise((resolve, reject) =>
    firebase
      .database()
      .ref(path)
      .remove()
      .then(() => resolve(true))
      .catch((e) => reject(e))
  );
