import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString("en-US", { hour12: false });

  const [time, setTime] = useState(now);

  function getTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setTime(newTime);
  }
  setInterval(getTime, 1);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
