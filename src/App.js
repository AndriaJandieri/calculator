import React from 'react';
import { useState } from 'react';

import * as math from "mathjs";

import './App.css';
import Button from "./Components/Button"
import DisplayInput from "./Components/DisplayInput"

const App = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  const showOnDisplay = (val) => {
    setInputText((inputText => [...inputText, val]));
  }

  const clearDisplay = () => {
    setInputText("");
    setResultText("");
  }

  const calculateResult = () => {
    const input = inputText.join("");
    const result = math.evaluate(input);
    if (String(result).length > 9) {
      setResultText(result.toFixed(6) + "...")
    }
    else {
      setResultText(result);
    }
    setInputText("");
  }

  const del = () => {
    setInputText(inputText.slice(0, -1));

  }

  const checkDot = (val) => {
    if (inputText.includes(".")) {
      if ((inputText.includes("-") || inputText.includes("+") || inputText.includes("/") || inputText.includes("*")) && (inputText.split(".") - 1) === 1) {

        setInputText((inputText => [...inputText, val]));
      }
      else {
        return;
      }
    }
    else {
      setInputText((inputText => [...inputText, val]));
    }
  }

  const sqrt = () => {
    const input = inputText.join("");
    const result = math.sqrt(input);

    if (String(result).length > 9) {
      setResultText(result.toFixed(6) + "...")
    }
    else {
      setResultText(result);
    }
    setInputText("");

  }

  const plusMinus = () => {
    const input = inputText.join("");
    const result = -1 * input;
    setInputText(result);
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div>
          <DisplayInput inputText={inputText} resultText={resultText} />
        </div>
        <div className="buttonsRow">
          <Button symbol="AC" bgColor="#a0a0a0" symbolColor="black" handleClick={clearDisplay} />
          <Button symbol="+/-" bgColor="#a0a0a0" symbolColor="black" handleClick={plusMinus} />
          <Button symbol="√" bgColor="#a0a0a0" symbolColor="black" handleClick={sqrt} />
          <Button symbol="/" bgColor="#f69906" symbolColor="black" handleClick={showOnDisplay} />
        </div>
        <div className="buttonsRow">
          <Button symbol="7" handleClick={showOnDisplay} />
          <Button symbol="8" handleClick={showOnDisplay} />
          <Button symbol="9" handleClick={showOnDisplay} />
          <Button symbol="*" bgColor="#f69906" symbolColor="black" handleClick={showOnDisplay} />
        </div>
        <div className="buttonsRow">
          <Button symbol="4" handleClick={showOnDisplay} />
          <Button symbol="5" handleClick={showOnDisplay} />
          <Button symbol="6" handleClick={showOnDisplay} />
          <Button symbol="-" bgColor="#f69906" symbolColor="black" handleClick={showOnDisplay} />
        </div>
        <div className="buttonsRow">
          <Button symbol="1" handleClick={showOnDisplay} />
          <Button symbol="2" handleClick={showOnDisplay} />
          <Button symbol="3" handleClick={showOnDisplay} />
          <Button symbol="+" bgColor="#f69906" symbolColor="black" handleClick={showOnDisplay} />
        </div>
        <div className="buttonsRow">
          <Button symbol="0" handleClick={showOnDisplay} />
          <Button symbol="." handleClick={checkDot} />
          <Button symbol="DEL" handleClick={del} />
          <Button symbol="=" bgColor="#f69906" symbolColor="black" handleClick={calculateResult} />
        </div>

      </div>
    </div>
  );
}

export default App;
