
import React, { useState, useEffect } from 'react';
import Wordle from './components/wordle.jsx'; 

import './App.css'; 
import { LETTERS, WORDS } from "./data/data";

const SOLUTION =
  WORDS[Math.floor(Math.random() * WORDS.length)];

console.log(SOLUTION);

function App() {

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Wordle LETTERS={LETTERS} WORDS={WORDS} SOLUTION={SOLUTION}
      />
    </div>
  );
}


export default App;
