import { useState, useEffect } from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

import "./App.css";

export const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [count, setCount] = useState(0);

  // Toggle bulb
  const toggleBulb = () => {
    setIsOn(!isOn);

    // Increase count only when turning ON
    if (!isOn) {
      setCount(count + 1);
    }
  };

  // Reset everything
  const resetBulb = () => {
    setIsOn(false);
    setCount(0);
  };

  // Auto turn OFF after 5 seconds
  useEffect(() => {
    if (isOn) {
      const timer = setTimeout(() => {
        setIsOn(false);
      }, 5000);

      // Cleanup
      return () => clearTimeout(timer);
    }
  }, [isOn]);

  return (
    <div className={`app ${isOn ? "light" : "dark"}`}>
      <div className={`bulb ${isOn ? "on" : "off"}`}></div>

      <h2>
        {isOn ? (
          <>
            Bulb is ON <FaLightbulb />
          </>
        ) : (
          <>
            Bulb is OFF <FaRegLightbulb />
          </>
        )}
      </h2>

      {/* Toggle button */}
      <button onClick={toggleBulb} disabled={isOn}>
        Turn ON
      </button>

      <button onClick={toggleBulb} disabled={!isOn}>
        Turn OFF
      </button>

      <p>Turned ON count: {count}</p>

      {/* Reset */}
      <button onClick={resetBulb}>Reset</button>
    </div>
  );
};
export default App;
