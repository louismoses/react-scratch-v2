import React from "react";
import { useState } from "react";

const Form2 = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleOnchange(e) {
    const { name, value } = e.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      }
      if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={fullName.fName}
          onChange={handleOnchange}
          name="fName"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={fullName.lName}
          onChange={handleOnchange}
          name="lName"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form2;
