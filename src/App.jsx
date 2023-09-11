import React, { useState } from "react";

import Figure from "./components/Sketch";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [correctLetters, setCorrectLetters] = useState([]);
  //const [wrongLetters, setWrongLetters] = useState([])

  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route
              path="/play"
              element={
                  <Figure />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
