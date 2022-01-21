import {initializeApp} from "firebase/app";
import {getMessaging, getToken, onMessage, isSupported} from "firebase/messaging";
import 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = require("./firebaseConfig");

const app = initializeApp(firebaseConfig);

var messaging;

if (typeof window !== "undefined") {
  messaging = isSupported() ? getMessaging() : null;
} else {
  messaging = null;
}

const publicKey = process.env.NEXT_PUBLIC_REACT_APP_VAPID_KEY;

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
