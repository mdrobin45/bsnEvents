import {
   GithubAuthProvider,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   // Auth provider
   const googleAuthProvider = new GoogleAuthProvider();
   const gitHubAuthProvider = new GithubAuthProvider();

   // Sign up with email and password
   const registerWithEmailPassword = (email, password) => {
      setIsLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // Sign in with email and password
   const loginWithEmailPassword = (email, password) => {
      setIsLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // Update profile
   const profileUpdate = (userInfo) => {
      setIsLoading(true);
      return updateProfile(auth.currentUser, userInfo);
   };

   // Reset password
   const resetPassword = (email) => {
      setIsLoading(true);
      return sendPasswordResetEmail(auth, email);
   };

   // Google signIn
   const loginWithGoogle = () => {
      setIsLoading(true);
      return signInWithPopup(auth, googleAuthProvider);
   };

   // Github SignIn
   const loginWithGitHub = () => {
      setIsLoading(true);
      return signInWithPopup(auth, gitHubAuthProvider);
   };

   // Get current user
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setIsLoading(false);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = {
      user,
      isLoading,
      profileUpdate,
      loginWithGitHub,
      loginWithGoogle,
      registerWithEmailPassword,
      loginWithEmailPassword,
      resetPassword,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthContextProvider;