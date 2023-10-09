import React from "react";
import Login from "../components/Form";

var userIsRegistered = false;

const Register = () => {
  return (
    <div className="container">
      <Login registered={userIsRegistered} />
    </div>
  );
};

export default Register;
