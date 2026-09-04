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

const BUSINESSES_COLLECTION = "businesses";

/**
 * Save or register a new business directly to Firebase Firestore
 */
export async function saveBusinessToFirestore(business: BusinessListing): Promise<{ success: boolean; id: string; error?: string }> {
  try {
    const docRef = doc(db, BUSINESSES_COLLECTION, business.id);
    await setDoc(docRef, {
      ...business,
      updatedAt: new Date().toISOString()
    }, { merge: true });
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
    const updatedReviews = [review, ...currentReviews];
    const totalRating = updatedReviews.reduce((sum, r) => sum + r.rating, 0);
    const newAverage = Number((totalRating / updatedReviews.length).toFixed(1));

    const docRef = doc(db, BUSINESSES_COLLECTION, businessId);
    await updateDoc(docRef, {
      reviews: updatedReviews,
      rating: newAverage,
      updatedAt: new Date().toISOString()
    });

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
