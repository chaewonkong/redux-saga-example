import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useScore from "./hooks/useScore";

const App = () => {
  const { score, onScoreDown, onScoreUp } = useScore();
  return (
    <div className="App">
      <h1>Score: {score}</h1>
      <button onClick={onScoreUp}>Score Up</button>
      <button onClick={onScoreDown}>Score Down</button>
    </div>
  );
};

export default App;
