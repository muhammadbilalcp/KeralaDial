import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  onSnapshot, 
  updateDoc 
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User
} from "firebase/auth";
import { BusinessListing, UserReview } from "../types";

// User's provided Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA62h3TQCMZb6PhnLCp_PJyPSi4a-PBnvQ",
  authDomain: "ziloclips.firebaseapp.com",
  projectId: "ziloclips",
  storageBucket: "ziloclips.firebasestorage.app",
  messagingSenderId: "68775909344",
  appId: "1:68775909344:web:b791b759242dcfc387fd85",
  measurementId: "G-MGTN022JNY"
};

// Initialize Firebase App
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Analytics safely in browser
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    try {
      const supported = await isSupported();
      if (supported) {
        return getAnalytics(app);
      }
    } catch {
      // ignore analytics initialization errors
    }
  }
  return null;
};

// Initialize analytics immediately in background
initAnalytics();

// ==================== AUTHENTICATION HELPERS ====================

/**
 * Sign in with email and password
 */
export async function loginWithEmail(email: string, pass: string): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const cred = await signInWithEmailAndPassword(auth, email.trim(), pass);
    return { success: true, user: cred.user };
  } catch (err: any) {
    console.error("Firebase Auth sign in error:", err);
    let message = "Failed to sign in.";
    if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
      message = "Invalid email or password.";
    } else if (err.code === "auth/invalid-email") {
      message = "Please enter a valid email address.";
    } else if (err.message) {
      message = err.message;
    }
    return { success: false, error: message };
  }
}

/**
 * Sign up with email, password and optional display name
 */
export async function registerWithEmail(email: string, pass: string, displayName?: string): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email.trim(), pass);
    if (displayName && displayName.trim()) {
      await updateProfile(cred.user, {
        displayName: displayName.trim()
      });
    }
    return { success: true, user: cred.user };
  } catch (err: any) {
    console.error("Firebase Auth sign up error:", err);
    let message = "Failed to create account.";
    if (err.code === "auth/email-already-in-use") {
      message = "This email is already registered. Please sign in instead.";
    } else if (err.code === "auth/weak-password") {
      message = "Password must be at least 6 characters.";
    } else if (err.code === "auth/invalid-email") {
      message = "Please enter a valid email address.";
    } else if (err.message) {
      message = err.message;
    }
    return { success: false, error: message };
  }
}

/**
 * Sign in with Google Popup
 */
export async function loginWithGoogle(): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (err: any) {
    console.error("Google sign in error:", err);
    if (err.code === "auth/popup-closed-by-user") {
      return { success: false, error: "Sign in window closed." };
    }
    return { success: false, error: err.message || "Google sign in failed" };
  }
}

/**
 * Quick guest / anonymous sign in (instant access)
 */
export async function loginAsGuest(): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const cred = await signInAnonymously(auth);
    return { success: true, user: cred.user };
  } catch (err: any) {
    console.error("Guest sign in error:", err);
    return { success: false, error: err.message || "Guest sign in failed" };
  }
}

/**
 * Sign out from Firebase
 */
export async function logoutUser(): Promise<{ success: boolean; error?: string }> {
  try {
    await signOut(auth);
    return { success: true };
  } catch (err: any) {
    console.error("Sign out error:", err);
    return { success: false, error: err.message || "Failed to sign out" };
  }
}

/**
 * Subscribe to Auth state changes
 */
export function subscribeToAuth(callback: (user: User | null) => void): () => void {
  return onAuthStateChanged(auth, callback);
}

// ==================== FIRESTORE HELPERS ====================

const BUSINESSES_COLLECTION = "businesses";

/**
 * Helper to strip undefined values so Firestore does not throw unsupported field value errors
 */
function sanitizeForFirestore(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        result[key] = value.filter((v) => v !== undefined);
      } else if (value !== null && typeof value === 'object' && !(value instanceof Date)) {
        result[key] = sanitizeForFirestore(value);
      } else {
        result[key] = value;
      }
    }
  }
  return result;
}

/**
 * Save or register a new business directly to Firebase Firestore
 */
export async function saveBusinessToFirestore(business: BusinessListing): Promise<{ success: boolean; id: string; error?: string }> {
  try {
    const docRef = doc(db, BUSINESSES_COLLECTION, business.id);
    const cleanedData = sanitizeForFirestore({
      ...business,
      updatedAt: new Date().toISOString()
    });
    await setDoc(docRef, cleanedData, { merge: true });
    return { success: true, id: business.id };
  } catch (error: any) {
    console.error("Error saving business to Firestore:", error);
    return { success: false, id: business.id, error: error?.message || "Failed to save to database" };
  }
}

/**
 * Add a review and update rating for a business in Firebase Firestore
 */
export async function addReviewToFirestore(
  businessId: string, 
  review: UserReview, 
  currentReviews: UserReview[]
): Promise<{ success: boolean; newRating: number; error?: string }> {
  try {
    const updatedReviews = [review, ...currentReviews.filter(r => r.id !== review.id)];
    const totalRating = updatedReviews.reduce((sum, r) => sum + r.rating, 0);
    const newAverage = Number((totalRating / Math.max(1, updatedReviews.length)).toFixed(1));

    const docRef = doc(db, BUSINESSES_COLLECTION, businessId);
    const cleanedData = sanitizeForFirestore({
      reviews: updatedReviews,
      rating: newAverage,
      updatedAt: new Date().toISOString()
    });
    // setDoc with merge: true ensures it works even if doc is created freshly or offline
    await setDoc(docRef, cleanedData, { merge: true });

    return { success: true, newRating: newAverage };
  } catch (error: any) {
    console.error("Error updating review in Firestore:", error);
    return { success: false, newRating: 5.0, error: error?.message || "Failed to save review" };
  }
}

/**
 * Real-time listener for registered businesses from Firebase Firestore
 */
export function subscribeToBusinessesFromFirestore(
  onUpdate: (businesses: BusinessListing[]) => void,
  onError?: (err: any) => void
): () => void {
  try {
    const businessesCol = collection(db, BUSINESSES_COLLECTION);
    const unsubscribe = onSnapshot(
      businessesCol,
      (snapshot) => {
        const list: BusinessListing[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data() as BusinessListing;
          if (data && data.name) {
            list.push({
              ...data,
              id: docSnap.id
            });
          }
        });
        onUpdate(list);
      },
      (error) => {
        console.warn("Firestore snapshot listener error (will fallback to local cache):", error);
        if (onError) onError(error);
      }
    );
    return unsubscribe;
  } catch (error) {
    console.warn("Failed to subscribe to Firestore:", error);
    if (onError) onError(error);
    return () => {};
  }
}
