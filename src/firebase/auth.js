import { auth } from "./firebase";

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doUpdateProfileWithDisplayName = displayName =>
  auth.currentUser.updateProfile({ displayName: displayName });

// Sign out. No need to supplement any argument to it. Because the auth object already knows about
// any authenticated user associated with it.
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Used id
export const getCurrentUserId = () => auth.currentUser.uid;

//User Info
export const getCurrentUser = () => auth.currentUser.displayName;

export const isEmailConfirmed = () => auth.currentUser.emailVerified;

export const sendVerificationMail = () => auth.sendPasswordResetEmail();

// Password Change. Again, auth knows whether its authenticated through a user. See currentUser.
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);
