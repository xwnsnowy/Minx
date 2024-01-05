import Button from "../Button";
import "../../App.css";

const OperatorButtons = ({
  expression,
  result,
  setExpression,
  setResult,
  setDisplayExpression,
}) => {
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const operators = expression.match(/[+*/-]/g);
        const operands = expression.split(/[+*/-]/).map(Number);

        let newResult = operands[0];

        for (let i = 0; i < operators.length; i++) {
          switch (operators[i]) {
            case "+":
              newResult += operands[i + 1];
              break;
            case "-":
              newResult -= operands[i + 1];
              break;
            case "*":
              newResult *= operands[i + 1];
              break;
            case "/":
              newResult /= operands[i + 1];
              break;
            default:
              break;
          }
        }

        setResult(newResult);
        setExpression(
          (prevExpression) => `${prevExpression} ${value} ${newResult}`
        );
        setDisplayExpression(
          (prevDisplay) => `${prevDisplay} ${value} ${newResult}`
        );
      } catch (error) {
        setResult("Error");
        setDisplayExpression("");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
      setDisplayExpression("");
    } else {
      const hasResult = expression.includes("=");

      if (hasResult) {
        setExpression((prevExpression) => `${result} ${value}`);
        setResult("");
        setDisplayExpression((prevDisplay) => `${result} ${value}`);
      } else {
        setExpression((prevExpression) => `${prevExpression} ${value}`);
        setDisplayExpression((prevDisplay) => `${prevDisplay} ${value}`);
      }
    }
  };

  const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "C"];

  return (
    <>
      <div className="operator-buttons">
        <div className="number-buttons">
          <Button
            label="+"
            handleClick={() => handleButtonClick("+")}
            className="btn cal"
          />
          <Button
            label="-"
            handleClick={() => handleButtonClick("-")}
            className="btn cal"
          />
          <Button
            label="*"
            handleClick={() => handleButtonClick("*")}
            className="btn cal"
          />
        </div>
        <div className="equals-button">
          <Button
            label="/"
            handleClick={() => handleButtonClick("/")}
            className="btn cal"
          />
        </div>
      </div>
      <div className="button-calculate">
        <div className="number-buttons">
          {numberButtons.map((value) => (
            <Button
              key={value}
              label={value}
              className="btn hover-number"
              handleClick={() => handleButtonClick(value)}
            />
          ))}
        </div>
        <div className="equals-button">
          <Button
            label="="
            handleClick={() => handleButtonClick("=")}
            className="btn equals"
          />
        </div>
      </div>
    </>
  );
};

export default OperatorButtons;
