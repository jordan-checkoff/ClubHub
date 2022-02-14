import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAknvvFpK2BRedsCWHBMuPxyBFpnJideTU",
  authDomain: "clubhub-90936.firebaseapp.com",
  databaseURL: "https://clubhub-90936-default-rtdb.firebaseio.com",
  projectId: "clubhub-90936",
  storageBucket: "clubhub-90936.appspot.com",
  messagingSenderId: "973208955155",
  appId: "1:973208955155:web:c43cece38a551289a912e6",
  measurementId: "G-V7YR9PYPQX"
};

const app = initializeApp(firebaseConfig);

export { app };