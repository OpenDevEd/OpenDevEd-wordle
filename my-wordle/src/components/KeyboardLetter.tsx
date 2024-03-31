import { BackspaceIcon } from "@heroicons/react/24/outline";
import { useCallback, useContext, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { GameContext } from "./GameCard";
import { word } from "../interfaces/word";
import { letters_first, letters_last, letters_second } from "./CustomKeyboard";
import { toast } from "sonner";
import { randomInt } from "../utils/randomInt";

interface KeyboardLetterProps {
  letter: string;
}

const KeyboardLetter = ({ letter }: KeyboardLetterProps) => {
  const {
    words,
    setWords,
    attempt,
    setAttempt,
    guessWord,
    setGuessWord,
    dictionary,
    losses,
    setLosses,
    wins,
    setWins,
    currentStreak,
    setCurrentStreak,
    maxStreak,
    setMaxStreak,
  } = useContext(GameContext);

  const checkValidChar = useCallback((char: string) => {
    if (letters_first.includes(char)) return true;
    if (letters_second.includes(char)) return true;
    if (letters_last.includes(char)) return true;
    return false;
  }, []);
  const appendLetter = useCallback(
    (letter: string) => {
      let newWord: word = words[attempt - 1];
      if (newWord.str === undefined) newWord.str = letter;
      else if (newWord.str.length === 5) return;
      else newWord.str = newWord.str.concat(letter);
      words[attempt - 1] = newWord;
      const newWords = [...words];
      setWords(newWords);
    },
    [words, setWords, attempt]
  );

  const deleteLetter = useCallback(() => {
    let newWord: word = words[attempt - 1];
    if (newWord.str === undefined) return;
    else newWord.str = newWord.str.substring(0, newWord.str.length - 1);
    words[attempt - 1] = newWord;
    const newWords = [...words];
    setWords(newWords);
  }, [words, setWords, attempt]);

  const ResetGame = useCallback(() => {
    let wordNumber = randomInt(dictionary.length);
    const str: string = dictionary[wordNumber];
    setGuessWord(str.toUpperCase());
    setWords([{}, {}, {}, {}, {}]);
    setAttempt(1);
  }, [dictionary, setAttempt, setGuessWord, setWords]);
  const saveGameResult = useCallback(
    (result: string) => {
      if (result === "win") {
        setWins(wins + 1);
        setCurrentStreak(currentStreak + 1);
        if (currentStreak + 1 > maxStreak) setMaxStreak(currentStreak + 1);
      } else {
        setLosses(losses + 1);
        setCurrentStreak(0);
      }
    },
    [
      setWins,
      wins,
      losses,
      maxStreak,
      currentStreak,
      setCurrentStreak,
      setMaxStreak,
      setLosses,
    ]
  );

  const verifyWord = useCallback(() => {
    let currentWord: word = words[attempt - 1];
    if (currentWord.str === undefined) return;
    if (currentWord.str?.length !== 5) return;
    const userWord = currentWord.str.toUpperCase();
    let winCondition = 0;
    if (
      dictionary.find((d: string) => d.toUpperCase() === userWord) === undefined
    ) {
      toast.error("Not A Word");
      return;
    }
    currentWord.condition = [
      "NotExists",
      "NotExists",
      "NotExists",
      "NotExists",
      "NotExists",
    ];
    for (let index = 0; index < userWord.length; index++) {
      if (
        guessWord.indexOf(userWord[index]) === index ||
        userWord[index] === guessWord[index]
      ) {
        currentWord.condition[index] = "inPlace";
      } else if (guessWord.indexOf(userWord[index]) !== -1) {
        currentWord.condition[index] = "Exists";
      }
    }
    words[attempt - 1] = currentWord;
    for (let index = 0; index < 5; index++) {
      if (currentWord.condition[index] === "inPlace") winCondition++;
    }
    if (winCondition === 5) {
      saveGameResult("win");
      toast("You've guessed the word", {
        action: {
          label: "Play Again",
          onClick: () => ResetGame(),
        },
      });
      return;
    } else if (attempt === 5) {
      saveGameResult("lose");
      toast(`You've Lost, the word was ${guessWord}`, {
        action: {
          label: "Retry",
          onClick: () => ResetGame(),
        },
      });
      return;
    }
    setWords(words);
    setAttempt(attempt + 1);
  }, [
    attempt,
    guessWord,
    setAttempt,
    setWords,
    words,
    dictionary,
    saveGameResult,
    ResetGame,
  ]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Backspace") deleteLetter();
      else if (e.key === "Enter") verifyWord();
      else if (checkValidChar(e.key.toUpperCase())) appendLetter(e.key);
    },
    [appendLetter, deleteLetter, checkValidChar, verifyWord]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [words, handleKeyPress]);

  if (letter === "DELETE") {
    return (
      <div
        onClick={deleteLetter}
        className={twMerge(
          "font-extrabold text-xl text-black w-[65px] h-[60px] hover:cursor-pointer bg-[#d3d6da] flex justify-center items-center rounded-md"
        )}
      >
        <BackspaceIcon className="w-8 h-8" />
      </div>
    );
  }

  if (letter === "ENTER") {
    return (
      <div
        onClick={verifyWord}
        className={twMerge(
          "font-extrabold w-[65px] text-lg text-black h-[60px] hover:cursor-pointer bg-[#d3d6da] flex justify-center items-center rounded-md"
        )}
      >
        ENTER
      </div>
    );
  }

  return (
    <div
      onClick={() => appendLetter(letter)}
      className={twMerge(
        "font-extrabold text-black  w-[40px] text-xl h-[60px] bg-[#d3d6da] flex justify-center hover:cursor-pointer items-center rounded-md"
      )}
    >
      {letter}
    </div>
  );
};

export default KeyboardLetter;
