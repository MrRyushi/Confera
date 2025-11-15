'use client'
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "@/firebase/index";

const provider = new GoogleAuthProvider();

const Login = () => {
  function signInWithGoogle() {
    const auth = firebaseAuth;
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input name="" type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => signInWithGoogle()}>Sign in with Google</button>
    </div>
  );
};

export default Login;
