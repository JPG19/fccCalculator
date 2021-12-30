import React from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = React.useState("0");
  const [tracking, setTracking] = React.useState("");

  const setDisplay = (number) => {
    if (result === 0) {
      setTracking(`${number}`);
      setResult(number);
    } else if (
      tracking.slice(-1) === "/" ||
      tracking.slice(-1) === "*" ||
      tracking.slice(-1) === "+" ||
      tracking.slice(-1) === "-"
    ) {
      setResult(number);
      setTracking(`${tracking} ${number}`);
    } else {
      if (tracking === "") {
        //start from scratch
        setTracking(`${number}`);
        setResult(number);
      } else {
        setResult(`${result}${number}`);
        setTracking(` ${tracking}${number}`);
      }
    }
  };

  const setExpression = (expression) => {
    //check if a calculation already occured
    const myArray = tracking.split(" ");
    if (myArray[myArray.length - 2] === "=") {
      let newTrack = `${myArray[myArray.length - 1]} ${expression}`;
      setTracking(newTrack);
    } else if (
      tracking.slice(-1) === "/" ||
      tracking.slice(-1) === "*" ||
      tracking.slice(-1) === "+" ||
      tracking.slice(-1) === "-"
    ) {
      let newTracking = tracking.slice(0, -1);
      if (
        newTracking.slice(-3) === " / " ||
        newTracking.slice(-3) === " * " ||
        newTracking.slice(-3) === " + " ||
        newTracking.slice(-3) === " - "
      ) {
        // remove once again
        newTracking = tracking.slice(0, -3);
      }
      setTracking(`${newTracking} ${expression}`);
    } else {
      setTracking(`${tracking} ${expression}`);
    }
    setResult(expression);
  };

  const calculate = (element) => {
    switch (element.className) {
      case "divide":
        setExpression("/");
        break;
      case "multiply":
        setExpression("*");
        break;
      case "add":
        setExpression("+");
        break;
      case "subtract":
        setTracking(`${tracking} -`);
        setResult("-");
        break;
      case "decimal":
        if (tracking.includes(".")) {
          const myArray = tracking.split(" ");
          const currentNumber = myArray[myArray.length - 1];
          if (!currentNumber.includes(".")) {
            setResult(`${result}.`);
            setTracking(`${tracking}.`);
          }
        } else {
          setResult(`${result}.`);
          setTracking(`${tracking}.`);
        }
        break;
      case "nine":
        setDisplay(9);
        break;
      case "eight":
        setDisplay(8);
        break;
      case "seven":
        setDisplay(7);
        break;
      case "six":
        setDisplay(6);
        break;
      case "five":
        setDisplay(5);
        break;
      case "four":
        setDisplay(4);
        break;
      case "three":
        setDisplay(3);
        break;
      case "two":
        setDisplay(2);
        break;
      case "one":
        setDisplay(1);
        break;
      case "zero":
        setDisplay(0);
        break;
      case "equal":
        if (result === 0) {
          setResult(0);
        } else {
          setResult(eval(tracking));
        }
        setTracking(`${tracking} = ${eval(tracking)}`);
        break;
      default:
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="container">
          <div className="calculation">{tracking}</div>
          <div className="display" id="display">
            {result}
          </div>

          <div className="buttons">
            <button
              className="clear"
              id="clear"
              onClick={() => {
                setResult(0);
                setTracking("");
              }}
            >
              AC
            </button>
            <button
              className="divide"
              id="divide"
              onClick={(e) => calculate(e.target)}
            >
              /
            </button>
            <button
              className="multiply"
              id="multiply"
              onClick={(e) => calculate(e.target)}
            >
              X
            </button>

            <button
              className="seven"
              id="seven"
              onClick={(e) => calculate(e.target)}
            >
              7
            </button>
            <button
              className="eight"
              id="eight"
              onClick={(e) => calculate(e.target)}
            >
              8
            </button>
            <button
              className="nine"
              id="nine"
              onClick={(e) => calculate(e.target)}
            >
              9
            </button>

            <button
              className="four"
              id="four"
              onClick={(e) => calculate(e.target)}
            >
              4
            </button>
            <button
              className="five"
              id="five"
              onClick={(e) => calculate(e.target)}
            >
              5
            </button>
            <button
              className="six"
              id="six"
              onClick={(e) => calculate(e.target)}
            >
              6
            </button>

            <button
              className="one"
              id="one"
              onClick={(e) => calculate(e.target)}
            >
              1
            </button>
            <button
              className="two"
              id="two"
              onClick={(e) => calculate(e.target)}
            >
              2
            </button>
            <button
              className="three"
              id="three"
              onClick={(e) => calculate(e.target)}
            >
              3
            </button>

            <button
              className="add"
              id="add"
              onClick={(e) => calculate(e.target)}
            >
              +
            </button>

            <button
              className="subtract"
              id="subtract"
              onClick={(e) => calculate(e.target)}
            >
              -
            </button>

            <button
              className="equal"
              id="equals"
              onClick={(e) => calculate(e.target)}
            >
              =
            </button>

            <button
              className="zero"
              id="zero"
              onClick={(e) => calculate(e.target)}
            >
              0
            </button>
            <button
              className="decimal"
              id="decimal"
              onClick={(e) => calculate(e.target)}
            >
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

App.displayName = "App";

export default App;