import React, { useState } from 'react';

import Figure from "./components/Sketch"
import Header from './components/Header';
import Word from './components/Word';
import Select from './components/Select';

import { BrowserRouter as Router, 
         Route, 
         Routes } from 'react-router-dom';

const App = () => {
    const [correctLetters, setCorrectLetters] = useState([])
    //const [wrongLetters, setWrongLetters] = useState([])
    
    return (
        <Router>
            <div>
            <Header />
                <div>
                    
                    <Routes>
                        <Route path="/" element={<><Select /></>}>
                        </Route>
                        <Route path="/play" element={<><Figure /></>}>
                        </Route>
                    </Routes>
                </div>
                <Word correctLetters={correctLetters}/>
            </div>
        </Router>
    )
};

export default App;