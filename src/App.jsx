import React, { useState } from 'react';

import Figure from "./components/Sketch"
import Header from './components/Header';
import Word from './components/Word';

const App = () => {
    const [correctLetters, setCorrectLetters] = useState([])
    //const [wrongLetters, setWrongLetters] = useState([])
    
    return (
        <div>
            <Header />
            <Figure />
            <Word correctLetters={correctLetters}/>
            

        </div>
    )
};

export default App;