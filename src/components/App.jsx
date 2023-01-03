import React, { useState } from "react";

function App() {
  let time = "TIME";
  let time2 = new Date().toLocaleTimeString();

  const [currtime, setTime] = useState(time);
  function saveTime() {
    time = new Date().toLocaleTimeString();

    setTime(time);
    setInterval(saveTime, 1000);
  }

  return (
    <div className="container">
      <h1 className="h1">{currtime}</h1>
      <h3>{time2}</h3>
      <button onClick={saveTime}>Get Time</button>
    </div>
  );
}

export default App;
