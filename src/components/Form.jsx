import React from "react";
import Input from "./Input";
import Button from "./Button";

const Login = (props) => {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.registered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <Button type="submit" text={props.registered ? "Login" : "Register"} />
    </form>
  );
};

export default Login;
