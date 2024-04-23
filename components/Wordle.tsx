"use client";
import { useState, useEffect } from "react";
import {
  getRandomWord,
  isValidWord,
  checkinGuess,
  LetterState,
} from "@/utils/wordsUtils";
import { Board } from "./Board";
import Keyboard from "./Keyboard";
import { Modal } from "./Modal";

export enum GameState {
  Playnig,
  Win,
  Lose,
}

const Wordle = () => {
  const [target, setTarget] = useState<string>("");
  const [letter, setLetter] = useState<string>("");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<
    Array<Array<{ char: string; state: LetterState }>>
  >([...Array(6)]);
  const [keysState, setkeysState] = useState<Record<string, LetterState>>({});
  const [row, setRow] = useState<number>(0);
  const [gameState, setGameState] = useState<GameState>(GameState.Playnig);
  const [notification, setNotification] = useState<string>("");

  useEffect(() => {
    setTarget(getRandomWord);
  }, []);

  useEffect(() => {
    // handllen New input letter
    const handleLetter = () => {
      if (letter === "") return;

      const isChar = /^[a-zA-Z]$/.test(letter);

      if (letter === "Enter") {
        if (currentGuess.length !== 5) {
          setNotification("Not enough letter");
          setTimeout(() => {
            setNotification("");
          }, 1000);
          return;
        } else if (!isValidWord(currentGuess)) {
          setNotification("Not a valid word");
          setTimeout(() => {
            setNotification("");
          }, 1000);
          return;
        }

        if (currentGuess === target) setGameState(GameState.Win);

        addGuess();
      } else if (letter === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (isChar && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + letter);
      }
      setLetter("");
    };

    // adding a New guess to the Guess
    const addGuess = () => {
      const guessAsArray = checkinGuess(currentGuess, target);

      setGuesses((prevGuesses) => {
        let newGuesses = [...prevGuesses];
        newGuesses[row] = guessAsArray;
        return newGuesses;
      });

      setRow((prevRow) => prevRow + 1);
      if (row > 4) setGameState(GameState.Lose);

      setkeysState((prevkeysState) => {
        guessAsArray.forEach((l) => {
          const currentColor = prevkeysState[l.char];

          if (l.state === LetterState.Green) {
            prevkeysState[l.char] = LetterState.Green;
            return;
          }
          if (
            l.state === LetterState.Yellow &&
            currentColor !== LetterState.Green
          ) {
            prevkeysState[l.char] = LetterState.Yellow;
            return;
          }
          if (
            l.state === LetterState.Grey &&
            currentColor !== (LetterState.Yellow || LetterState.Green)
          ) {
            prevkeysState[l.char] = LetterState.Grey;
            return;
          }
        });

        return prevkeysState;
      });
      setCurrentGuess("");
    };

    const handleKeyUp = ({ key }: { key: string }) => {
      setLetter(key);
    };

    handleLetter();

    window.addEventListener("keyup", handleKeyUp);

    if (gameState !== GameState.Playnig)
      window.removeEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [letter]);

  return (
    <div className="flex flex-col items-center gap-4">
      <Board currentGuess={currentGuess} guesses={guesses} row={row} />
      <Keyboard setLetter={setLetter} keysState={keysState} />
      {gameState !== GameState.Playnig && (
        <Modal gameState={gameState} trays={row} soloution={target} />
      )}
      {notification && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-notif-color bg-notif-bg rounded-lg py-2 px-4">
          {notification}
        </div>
      )}
    </div>
  );
};

export default Wordle;
