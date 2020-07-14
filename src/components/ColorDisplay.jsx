import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Color.css";

const ColorDisplay = (props) => {
  const [currentColor, setcurrentColor] = useState("no colors yet");

  return (
    <div className="row">
      <div className="col-4">
        <div className="card bg-light mb-3">
          <div className="card-header">Here are your colors</div>
          <div class="card-body">
            <p>{props.thecolor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorDisplay;
