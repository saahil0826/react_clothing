import React from 'react';

import SignIn from '../../components/sign-in/sign-in.js';
import SignUp from '../../components/sign-up/sign-up.js';


import './sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
