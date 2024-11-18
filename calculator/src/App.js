import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [chain, setChain] = useState('0')
  const [thereIsAResult, setThereIsAResult] = useState(false)

  const handleClick = (event) => {
    let newChain = '';
    const value = event.target.innerHTML;

    if (thereIsAResult) {
      if (!(['+', '-', '*', '/'].includes(value))) {
        newChain = value === '.' ? '0.' : value;
        setChain(newChain);
      } else {
        newChain = chain + value;
        setChain(newChain);
      }
      setThereIsAResult(false);
      return;
    }

    if (chain === '0' && value !== '.') {
      setChain(value);
    } else {
      const lastChar = chain.slice(-1);
      if (['+', '*', '/'].includes(lastChar) && ['+', '*', '/'].includes(value)) {
        setChain(chain.slice(0, -1) + value);
      } else if (lastChar === '-' && ['+', '*', '/'].includes(value)) {
        setChain(chain.slice(0, -2) + value);
      } else {
        const lastNumber = chain.split(/[\+\-\*\/]/).pop();
        if (value === '.' && lastNumber.includes('.')) {
          return;
        }
        setChain(chain + value);
      }
    }
  };

  const handleClear = () => {
    setChain('0')
  }

  const handleEqual = () => {
    // evaluate the chain
    setThereIsAResult(true)
    try {
      setChain(eval(chain).toString());
    } catch (error) {
      setChain('Error');
    }
  }

  return (
    <div className="App">
      <div id="calculator">
        <h1 id="display">{chain}</h1>
        <button id="clear" onClick={handleClear} style={{backgroundColor: 'red'}}>AC</button>
 
        <div id="align">
          <div id="numpad">
            <button id="one" onClick={handleClick}>1</button>
            <button id="two" onClick={handleClick}>2</button>
            <button id="three" onClick={handleClick}>3</button>
            <button id="four" onClick={handleClick}>4</button>
            <button id="five" onClick={handleClick}>5</button>
            <button id="six" onClick={handleClick}>6</button>
            <button id="seven" onClick={handleClick}>7</button>
            <button id="eight" onClick={handleClick}>8</button>
            <button id="nine" onClick={handleClick}>9</button>
            <button id="zero" onClick={handleClick}>0</button>
            <button id="decimal" onClick={handleClick} style={{fontSize : 50}}>.</button>
          </div>

          <div id="operations">
            <button id="add" onClick={handleClick}>+</button>
            <button id="subtract" onClick={handleClick}>-</button>
            <button id="multiply" onClick={handleClick}>*</button>
            <button id="divide" onClick={handleClick}>/</button>
            <button id="equals" onClick={handleEqual}>=</button>
          </div>
        </div>
      </div>

      <p
        style={{
          position: "absolute",
          left: "50%",
          bottom: "10px",
          transform: "translateX(-50%)",
        }}
      >
        Made with ❤️ by Romain PINSOLLE
      </p>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  );
}

export default App;
