import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyDkWyp2rSpm3KZ4pWZcNaoqW5WcWRiZXzc",
//   authDomain: "visiondesigne-ed6cd.firebaseapp.com",
//   projectId: "visiondesigne-ed6cd",
//   storageBucket: "visiondesigne-ed6cd.firebasestorage.app",
//   messagingSenderId: "303685066864",
//   appId: "1:303685066864:web:2eb69cf06b9c9615e494b5",
//   measurementId: "G-N0ZVKSBCT9"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBIRHRIZ_J9VLhEPz50JHu2lmH6AG9kBYA",
  authDomain: "chat-a086d.firebaseapp.com",
  projectId: "chat-a086d",
  storageBucket: "chat-a086d.firebasestorage.app",
  messagingSenderId: "575380251699",
  appId: "1:575380251699:web:46698d41567f6633e3af46"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);