import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../config/firebaseConfig";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Login Failed", error);
    return null;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error("Logout Failed", error);
    return false;
  }
};
