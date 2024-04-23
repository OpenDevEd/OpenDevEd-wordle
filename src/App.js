import "./App.css";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { Board } from "./components/Boad";
import { Input } from "./components/Input";
import { GameOver } from "./components/GameOver";


function App() {
  const [targetWord] = useState(faker.word.noun(5));
  const [guesses, setGuesses] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [attemptsRemaining, setAttemptsRemaining] = useState(10);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    geussedWord: false,
  });

  function handleGuess(guess) {
    if (guess.length !== 5 || !guess.match(/^[a-z]+$/)) return;

    const feedback = guess.split("").map((letter, index) => {
      const targetLetter = targetWord[index];
      if (letter === targetLetter) return "green";
      if (targetWord.includes(letter)) return "yellow";
      return "darkGrey";
    });

    setGuesses([...guesses, { guess, feedback }]);
    setCurrentRow(currentRow + 1);
    setAttemptsRemaining(attemptsRemaining - 1);

    const isWin = feedback.every((f) => f === "green");
    const isLose = attemptsRemaining === 1;

    if (isWin) {
      setGameOver({ gameOver: true, geussedWord: true });
      return;
    }
    if (isLose) {
      setGameOver({ gameOver: true, geussedWord: false });
      return;
    }
  }

  return (
    <div className="h-screen w-full flex flex-col justify-between items-center">
      <nav className="flex justify-center items-center bg-red-500 p-3 w-full">
        <h1 className="text-3xl font-bold">Wordle-Abdeljalil</h1>
      </nav>
      <Board guesses={guesses} />
      <div className="p-5">
        {gameOver.gameOver ? (
          <GameOver
            remaining={attemptsRemaining}
            gameOver={gameOver}
            word={targetWord}
          />
        ) : (
          <div className="flex flex-col justify-center items-center ">
            <Input onSubmit={handleGuess} />
            <p className="text-xl font-bold">Attempts Remaining: {attemptsRemaining}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
