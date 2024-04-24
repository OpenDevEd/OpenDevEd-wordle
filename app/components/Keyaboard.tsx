import React from "react";
import useWordleStore from "../../stores/wordleStore";

const Keyaboard = () => {
  const letters = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const { exactGuesses, inexactGuesses, allGuesses } = useWordleStore();

  const isExactGuess = (letter: string) =>
    exactGuesses.some((guess) => guess.includes(letter));
  const isInexactGuess = (letter: string) =>
    inexactGuesses.some((guess) => guess.includes(letter));
  const isAllGuess = (letter: string) =>
    allGuesses.some((guess) => guess.includes(letter));

  return (
    <>
      <div className="pt-14">
        {letters.map((row, i) => {
          return (
            <div key={`row-${i}`} className="flex justify-center">
              {row.split("").map((letter, j) => {
                const keyColor = isExactGuess(letter)
                  ? "bg-green-500"
                  : isInexactGuess(letter)
                    ? "bg-yellow-500"
                    : isAllGuess(letter)
                      ? "bg-gray-100"
                      : "bg-gray-500";

                return (
                  <div
                    key={`letter-${i}-${j}`}
                    className={`uppercases m-px flex h-10 w-10 items-center justify-center rounded-md ${keyColor}`}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Keyaboard;
