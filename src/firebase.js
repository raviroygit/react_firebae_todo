import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAkuBublA5LSZ2uiC-qw_z1imBW8UbMpSU",
  authDomain: "hihellohr-dc6cc.firebaseapp.com",
  projectId: "hihellohr-dc6cc",
  storageBucket: "hihellohr-dc6cc.appspot.com",
  messagingSenderId: "938283074417",
  appId: "1:938283074417:web:ea5dfebffbd0f305c8ecd0",
  measurementId: "G-M3QSVL2P7P"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);