import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./comps/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button name="클릭" value="click">
          "안녕하세요"
        </Button>
      </header>
    </div>
  );
}

export default App;
