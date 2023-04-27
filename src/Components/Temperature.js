import React from "react";


const Temperature = ({ temperature, onTemperatureChange, unit }) => {
  return (

    <div className="form-group" >
      <label htmlFor="temperature-input">{`Temperature (${unit})`}</label>
      <div className="input-group">
        <input
          type="number"
          id="temperature-input"
          className="form-control"
          value={temperature}
          onChange={onTemperatureChange}
        />
        <div className="input-group-append">
          <span className="input-group-text">{unit}</span>
        </div>
      </div>
    </div>

  );
};

export default Temperature;
