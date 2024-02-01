import React from "react";
import "./button.css";
import { useRef } from "react";

function Button(prop) {

  return (
    <>
      <div className="banner-button">
        <button className="text-button">{prop.buttonText}</button>
        <button className="arrowButton">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
      </div>
    </>
  );
}

export default Button;
