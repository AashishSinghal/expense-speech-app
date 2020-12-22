import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__expense__app">
        <img src={`${process.env.PUBLIC_URL}expense.svg`} alt="Telegram Logo" />
        <h1>Telegram</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
