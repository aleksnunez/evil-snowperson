import React, { useState } from 'react';



let words = []

const Word = ( { correctLetters } ) => {
    const [word, setWord] = useState('')

    const addWord = (event) => {
      event.preventDefault()
      const selectedWord = word
      setWord(words.push(selectedWord))
      setWord('')
      
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`the word you entered was: ${word}`);
      setWord(event.target.value)
    }

  return (
    <div className="text-center">
      <form className="center" onSubmit={addWord}>  
        <input  className="rounded text-pink-500 mt-10" type="text"   value={word} onChange={handleSubmit}/>
        <button className="bg-blue-500 hover:bg-blue-400
                         text-white font-bold py-2 px-4 border-b-4
                         border-blue-700 hover:border-blue-500 rounded"
         type="submit"> play! </button>
    </form>
    <h1>{words[0]}</h1>
    <div className="word" id="word">
       {word.split('').map((letter, i) => {
         return (
           <span className="letter" key={i}>
             {correctLetters.includes(letter) ? letter : ''}
           </span>
         )
       })}
     </div>

    </div>
    
  )
}

export default Word;