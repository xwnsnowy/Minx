import React, { useState } from "react";
import "./App.css";
import OutputScreen from "./components/OutputScreen";
import OperatorButtons from "./components/OperatorButtons";

const App = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [displayExpression, setDisplayExpression] = useState("");

  return (
    <div className="wrapper">
      <OutputScreen expression={displayExpression} />
      <OperatorButtons
        expression={expression}
        result={result}
        setExpression={setExpression}
        setResult={setResult}
        setDisplayExpression={setDisplayExpression}
      />
    </div>
  );
};

export default App;
