import React from "react";

const Button = (props) => {
  const handleClick = () => {
    if (props.add) {
      props.add();
    }
    if (props.subtract) {
      props.subtract();
    }
    if (props.newTime) {
      props.newTime();
    }
  };
  return (
    <button type={props.type} onClick={handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
