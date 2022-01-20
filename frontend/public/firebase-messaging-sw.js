// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBDWv_4whZuA-xMoYQ5982TQKGXuItFKXk",
    authDomain: "online-judge-frontend.firebaseapp.com",
    projectId: "online-judge-frontend",
    storageBucket: "online-judge-frontend.appspot.com",
    messagingSenderId: "1099500055356",
    appId: "1:1099500055356:web:3490c0f30ddd8a6787cc39"
};


// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
