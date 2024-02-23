import "../blocks/toggleSwitch.css";
import React, { useContext, useState, useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div>
      <label className="toggle__switch-label">
        <input
          className="toggle__switch-checkbox"
          type="checkbox"
          onChange={handleToggleSwitchChange}
        />
        <span
          className={
            currentTemperatureUnit === "C"
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        ></span>
        <p
          className={`switch__temp-F ${
            currentTemperatureUnit === "F" && "switch__active"
          }`}
        >
          F
        </p>
        <p
          className={`switch__temp-C ${
            currentTemperatureUnit === "C" && "switch__active"
          }`}
        >
          C
        </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;
