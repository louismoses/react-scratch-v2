import React, { useState } from "react";
import Button from "../components/Button";

const Count = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <Button type="submit" text="-" subtract={decrease} />
      <Button type="submit" text="+" add={increase} />
    </div>
  );
};

export default Count;
