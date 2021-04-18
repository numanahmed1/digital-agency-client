import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import GoogleLogo from "../../images/googlelogo.png";
import Header from "../Home-page/Header/Header";
import "./Login.css";
import { userInfoContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userInfoContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/dashboard" } };
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = {
          username: displayName,
          email: email,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <Header />
      <section className="login">
        <div className="container text-center">
          <button onClick={handleGoogleSignIn} className="sign-btn">
            <div className="g-logo-holder">
              <img src={GoogleLogo} alt="Google" />
            </div>
            <div className="sign-text">Sign in with Google</div>
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;
