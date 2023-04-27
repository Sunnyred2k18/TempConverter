import React, { useState } from "react";
import Temperature from "./Temperature";

const ParentComponent = () => {
  const [fahrenheit, setFahrenheit] = useState(0);
  const [celsius, setCelsius] = useState(0);

  const handleFahrenheitChange = (event) => {
    const fahrenheit = event.target.value;
    const celsius = ((fahrenheit - 32) * 5) / 9;
    setFahrenheit(fahrenheit);
    setCelsius(celsius);
  };

  const handleCelsiusChange = (event) => {
    const celsius = event.target.value;
    const fahrenheit = (celsius * 9) / 5 + 32;
    setCelsius(celsius);
    setFahrenheit(fahrenheit);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-4">
          
          <form>
            <Temperature
            unit="Farenheit"
              temperature={fahrenheit}
              onTemperatureChange={handleFahrenheitChange}
            />
            <Temperature
            unit="Celsius"
              temperature={celsius}
              onTemperatureChange={handleCelsiusChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;