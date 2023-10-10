import React, { useState } from "react";

const UpdateOnSubmit = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleClick(event) {
    setName(input);
    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {name}</h1>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateOnSubmit;
