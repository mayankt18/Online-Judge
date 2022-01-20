import {initializeApp} from "firebase/app";
import {getMessaging, getToken, onMessage, isSupported} from "firebase/messaging";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDWv_4whZuA-xMoYQ5982TQKGXuItFKXk",
    authDomain: "online-judge-frontend.firebaseapp.com",
    projectId: "online-judge-frontend",
    storageBucket: "online-judge-frontend.appspot.com",
    messagingSenderId: "1099500055356",
    appId: "1:1099500055356:web:3490c0f30ddd8a6787cc39"
};

const app = initializeApp(firebaseConfig);

const messaging = isSupported() ? getMessaging() : null;

// const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = "BNO9p39lIEkqFHn7JVE0FK59ru6s46a0EEP1mtf6M2DKC1vtBgyZ1Inw8hRaOqfbSEEndk5I9X1nUdtM7N__oGk";

export const get_token = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await getToken(messaging,{ vapidKey: publicKey })
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    alert(error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging,(payload) => {
        resolve(payload);
    });
});




















// import firebase from 'firebase/app'
// import 'firebase/messaging'

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBDWv_4whZuA-xMoYQ5982TQKGXuItFKXk",
//     authDomain: "online-judge-frontend.firebaseapp.com",
//     projectId: "online-judge-frontend",
//     storageBucket: "online-judge-frontend.appspot.com",
//     messagingSenderId: "1099500055356",
//     appId: "1:1099500055356:web:3490c0f30ddd8a6787cc39"
// };

// // const app = initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }else {
//   firebase.app(); // if already initialized, use that one
// }

// // const messaging = firebase.messaging.isSupported() ? firebase.messaging : null;

// // const { REACT_APP_VAPID_KEY } = process.env;
// const publicKey = "BNO9p39lIEkqFHn7JVE0FK59ru6s46a0EEP1mtf6M2DKC1vtBgyZ1Inw8hRaOqfbSEEndk5I9X1nUdtM7N__oGk";

// export const get_token = async (setTokenFound) => {
//   let currentToken = "";

//   try {
//     currentToken = await firebase.messaging.getToken({ vapidKey: publicKey })
//     if (currentToken) {
//       setTokenFound(true);
//     } else {
//       setTokenFound(false);
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   return currentToken;
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     firebase.messaging.onMessage((payload) => {
//         resolve(payload);
//     });
// });
