import React from "react";
import { ReactDOM } from "react";
import Header from "../../Components/Header";
import SignupForm from "../../Components/SignupForm";

function Signup() {
  return (
    <div className="signup-main" >
        <Header />
        <SignupForm />
    </div>
  )
}

export default Signup;
