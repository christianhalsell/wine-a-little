import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (

  <div className="sign-in-and-sign-up">
    <div className="sign-in-and-sign-up-center">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignUpPage;