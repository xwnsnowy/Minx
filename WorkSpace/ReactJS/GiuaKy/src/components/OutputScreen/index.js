import React from "react";
import "../../App.css";

const OutputScreen = ({ expression, result }) => {
  return (
    <div className="screen">
      <input type="text" readOnly value={expression} />
    </div>
  );
};

export default OutputScreen;
