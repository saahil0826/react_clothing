import React, { useState } from "react";

import FormInput from "../form-input/form-input.js";
import CustomButton from "../custom-button/custom-button.js";
import { signInWithGoogle } from "../../firebase/firebase.utils.js";

import "./sign-in.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>{" "}
      </form>
    </div>
  );
}
