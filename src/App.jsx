import React from "react";

import Game from "./components/Game/Game";
import Header from "./components/Header/Header";
import './index.scss'; 

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div className="body-container">
      <div className="header">
        <Header />
      </div>
      <div className="game">
        <Game />
      </div>
    </div>
  );
};

export default App;
