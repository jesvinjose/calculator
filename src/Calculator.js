import React, { useState } from "react";
import * as math from "mathjs";
// import "./Calculator.css";

const Calculator = () => {
  const [screenValue, setScreenValue] = useState("");

  const buttonClick = (value) => {
    // Implement special functionalities for square root, square, and percentage
    if (value === "sqrt(") {
      // Calculate square root
      try {
        const result = Math.sqrt(math.evaluate(screenValue));
        setScreenValue(result.toString());
      } catch (error) {
        setScreenValue("Error");
      }
    } else if (value === "**2") {
      // Calculate square
      try {
        const result = math.pow(math.evaluate(screenValue), 2);
        setScreenValue(result.toString());
      } catch (error) {
        setScreenValue("Error");
      }
    } else if (value === "%") {
      // Calculate percentage
      try {
        const result = math.evaluate(`${screenValue}/100`);
        setScreenValue(result.toString());
      } catch (error) {
        setScreenValue("Error");
      }
    } else {
      // For other buttons, append the value to the screen
      setScreenValue((prevValue) => prevValue + value);
    }
  };

  const clearScreen = () => {
    setScreenValue("");
  };

  const equalClick = () => {
    try {
      const result = math.evaluate(screenValue);
      setScreenValue(result.toString());
    } catch (error) {
      setScreenValue("Error");
    }
  };

  return (
    <div className="mainbody mb-5">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto pt-4 mt-5 p-5" style={{ borderColor: '#f00', borderWidth: '2px', borderStyle: 'solid', borderRadius:'10px'}}>
        <div className="output mb-4" style={{ borderColor: 'green', borderWidth: '2px', borderStyle: 'solid', borderRadius:'5px' }}>
          <input
            type="text"
            id="screen"
            className="w-full h-12 px-4 border rounded"
            value={screenValue}
            readOnly
          />
        </div>
        <div className="buttons grid grid-cols-4 gap-2">
          <button onClick={clearScreen} className="button bg-red-300">
            clear
          </button>
          <button
            onClick={() => buttonClick("sqrt(")}
            className="button bg-slate-300"
          >
            √
          </button>
          <button
            onClick={() => buttonClick("**2")}
            className="button bg-slate-300"
          >
            x²
          </button>
          <button
            onClick={() => buttonClick("%")}
            className="button bg-slate-300"
          >
            %
          </button>
          <button
            onClick={() => buttonClick(7)}
            className="button bg-slate-300"
          >
            7
          </button>
          <button
            onClick={() => buttonClick(8)}
            className="button bg-slate-300"
          >
            8
          </button>
          <button
            onClick={() => buttonClick(9)}
            className="button bg-slate-300"
          >
            9
          </button>
          <button
            onClick={() => buttonClick("/")}
            className="button bg-slate-300"
          >
            /
          </button>
          <button
            onClick={() => buttonClick(4)}
            className="button bg-slate-300"
          >
            4
          </button>
          <button
            onClick={() => buttonClick(5)}
            className="button bg-slate-300"
          >
            5
          </button>
          <button
            onClick={() => buttonClick(6)}
            className="button bg-slate-300"
          >
            6
          </button>
          <button
            onClick={() => buttonClick("*")}
            className="button bg-slate-300"
          >
            x
          </button>
          <button
            onClick={() => buttonClick(1)}
            className="button bg-slate-300"
          >
            1
          </button>
          <button
            onClick={() => buttonClick(2)}
            className="button bg-slate-300"
          >
            2
          </button>
          <button
            onClick={() => buttonClick(3)}
            className="button bg-slate-300"
          >
            3
          </button>
          <button
            onClick={() => buttonClick("-")}
            className="button bg-slate-300"
          >
            -
          </button>
          <button
            onClick={() => buttonClick(".")}
            className="button bg-slate-300"
          >
            .
          </button>
          <button
            onClick={() => buttonClick(0)}
            className="button bg-slate-300"
          >
            0
          </button>
          <button
            onClick={() => buttonClick("+")}
            className="button bg-slate-300"
          >
            +
          </button>
          <button onClick={equalClick} className="button bg-slate-300">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
