import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/button";
import Label from "./components/Label/label";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Label message='For more info'></Label>
        <Button label="Click me please!"></Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
