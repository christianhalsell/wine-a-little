import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndSignUpPage = () => (

  <div className="sign-in-and-sign-up">
    <div className="sign-in-and-sign-up-center">
      <SignIn />
    </div>
  </div>
);

export default SignInAndSignUpPage;