import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { scoreDown, scoreUp } from "./actions/actions";
import { connect } from "react-redux";

interface IProps {
  score: number;
}

const App: React.FC<IProps> = props => {
  return (
    <div className="App">
      <h1>Score: {props.score}</h1>
      <button>Score Up</button>
    </div>
  );
};

const mapStateToProps = (state: any) => state.score;
const mapDispatchToProps = () => ({ scoreUp, scoreDown });

export default connect(mapStateToProps, mapDispatchToProps)(App);
