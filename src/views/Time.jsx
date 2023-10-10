import React, { useState } from "react";
import Button from "../components/Button";

const Time = () => {
  setInterval(getTime, 1000);

  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  }
  function handleMouseOver() {
    console.log("mouse over");
  }
  return (
    <div className="container">
      {currentTime}
      <Button type="submit" text="Get Time" newTime={getTime} />
      <Button type="submit" text="Mouse Over" onMouseOver={handleMouseOver} />
    </div>
  );
};

export default Time;
