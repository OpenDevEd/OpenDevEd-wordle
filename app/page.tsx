"use client";

import { useEffect, useState } from "react";
import GuessedLetters from "./components/GuessedLetters";
import useWordleStore from "../stores/wordleStore";
import Header from "./components/Header";
import Keyaboard from "./components/Keyaboard";
import YouWonDialog from "./components/YouWonDialog";
import ExplainGame from "./components/ExplainGame";
import { motion } from "framer-motion";

export default function Home() {
  const {
    word,
    guessedWords,
    currentAttempt,
    gameOver,
    resetGame,
    initializeGame,
    handleGuess,
    shakeCells,
    submitWordGuess,
    gameResult,
  } = useWordleStore();
  const [showDialog, setShowDialog] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);
  const [gameType, setGameType] = useState("keyboard");
  const [typedWord, setTypedWord] = useState("");

  const isButtonDisabled = gameType === "" || typedWord.trim() === "";

  const handleGameTypeChange = (event: any) => {
    setGameType(event.target.value);
  };

  const handleTypedWordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTypedWord(event.target.value);
  };

  useEffect(() => {
    initializeGame();
    if (gameType === "keyboard") {
      window.addEventListener("keyup", handleGuess);
    }

    return () => {
      window.removeEventListener("keyup", handleGuess);
    };
  }, [initializeGame, handleGuess, gameType]);

  useEffect(() => {
    setFirstVisit(true);
  }, []);

  useEffect(() => {
    if (gameOver) {
      setShowDialog(true);
    }
  }, [gameOver]);

  const handleSubmitGuess = () => {
    submitWordGuess(typedWord);
    setTypedWord("");
  };

  return (
    <>
      <>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex min-h-screen flex-col bg-gray-950"
        >
          <Header />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-grow flex-col items-center justify-center py-10"
          >
            {guessedWords.map((_, index) => (
              <GuessedLetters
                key={index}
                word={word}
                guessedWord={guessedWords[index]}
                isGuessedCorrect={index < currentAttempt}
              />
            ))}
            <Keyaboard />
            {gameType === "type-in" && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative mb-6 w-full max-w-md pt-10"
                >
                  <input
                    type="text"
                    value={typedWord}
                    onChange={handleTypedWordChange}
                    placeholder="Enter word"
                    className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-xl placeholder-gray-500 focus:outline-none"
                    style={{
                      borderColor: shakeCells ? "red" : "gray",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 pt-10"
                  >
                    <button
                      onClick={handleSubmitGuess}
                      disabled={isButtonDisabled}
                      className={`rounded-lg bg-blue-500 px-6 py-3 text-xl text-white transition-colors hover:bg-blue-600 focus:outline-none ${
                        isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
                      }`}
                    >
                      Submit
                    </button>
                  </motion.div>
                </motion.div>
              </>
            )}
          </motion.div>
        </motion.div>
      </>
      {showDialog && (
        <YouWonDialog
          word={word}
          resetGame={resetGame}
          setShowDialog={setShowDialog}
          gameResult={gameResult}
        />
      )}
      {firstVisit && (
        <>
          <ExplainGame
            showDialog={firstVisit}
            handleCloseDialog={() => {
              setFirstVisit(false);
            }}
            gameType={gameType}
            handleGameTypeChange={handleGameTypeChange}
          />
        </>
      )}
    </>
  );
}
