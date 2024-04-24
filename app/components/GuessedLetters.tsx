import React from "react";
import useWordleStore from "../../stores/wordleStore";

type GuessedLettersProps = {
  word: string | null;
  guessedWord: string;
  isGuessedCorrect: boolean;
};

const GuessedLetters: React.FC<GuessedLettersProps> = ({
  word,
  guessedWord,
  isGuessedCorrect,
}) => {
  const shakeCells = useWordleStore((state) => state.shakeCells);

  return (
    <>
      <div className="mb-1 grid grid-cols-5 gap-1">
        {new Array(5).fill(0).map((_, i) => {
          const guessedLetter = guessedWord[i];
          const actualLetter = word?.[i].toUpperCase();

          let cellColor;

          if (!isGuessedCorrect) {
            cellColor = "bg-black";
          } else if (guessedLetter?.toUpperCase() === actualLetter) {
            cellColor = "bg-green-500";
          } else if (
            word &&
            word.toUpperCase().includes(guessedLetter?.toUpperCase())
          ) {
            cellColor = "bg-yellow-500";
          } else {
            cellColor = "bg-gray-500";
          }

          const shakeAnimation =
            shakeCells && guessedLetter ? "animate-shake" : "";

          return (
            <React.Fragment key={i}>
              <div
                key={i}
                className={`flex h-16 w-16 items-center justify-center border border-gray-400 font-bold uppercase text-white ${cellColor} ${shakeAnimation}`}
              >
                {guessedWord[i]}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default GuessedLetters;
