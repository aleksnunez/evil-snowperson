import React, { useState } from 'react';

const Word = () => {
    const [word, setWord] = useState('')

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`the word you entered was: ${word}`);
      setWord('')
    }

  return (
    <div className="text-center">
      <form className="center" onSubmit={handleSubmit}>  
        <input className="rounded text-pink-500 mt-10" type="text" 
                placeholder="enter word/phrase"  value={word}
                onChange={(e) => setWord(e.target.value)}/>
        <button className="bg-blue-500 hover:bg-blue-400 
                          text-white font-bold py-2 px-4 border-b-4 
                          border-blue-700 hover:border-blue-500 rounded" 
                          type="submit">
        play!
        </button>
    </form>
    </div>
  )
}

export default Word;