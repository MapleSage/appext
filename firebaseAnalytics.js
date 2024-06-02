// firebaseAnalytics.js
import { getAnalytics } from 'firebase/analytics';
import app from './firebaseConfig'; // Ensure this path is correct

export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    getAnalytics(app); // Use the imported app instance
  }
};
