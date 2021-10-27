import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.js";
import CustomButton from "../custom-button/custom-button.js";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/actions.js";

import "./sign-in.scss";

function SignIn({ emailSignInStart, googleSignInStart }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
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
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>{" "}
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
