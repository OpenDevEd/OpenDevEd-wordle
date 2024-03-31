import DisplayGrid from "./DisplayGrid";
import Header from "./Header";
import CustomKeyboard from "./CustomKeyboard";
import { createContext, useCallback, useEffect, useState } from "react";
import { word } from "../interfaces/word";
import { randomInt } from "../utils/randomInt";
import { Toaster } from "sonner";

export const GameContext = createContext<any>(null);

const GameCard = () => {
  const [words, setWords] = useState<word[]>([{}, {}, {}, {}, {}]);
  const [attempt, setAttempt] = useState<number>(1);
  const [wins, setWins] = useState<number>(0);
  const [losses, setLosses] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [guessWord, setGuessWord] = useState<string>("");
  let { words: storage } = require("popular-english-words");
  let dictionary = storage.getMostPopularFilter(10000, (word: string) => {
    if (word.length === 5) return true;
    return false;
  });
  const generateGuessWord = useCallback(() => {
    let wordNumber = randomInt(dictionary.length);
    const str: string = dictionary[wordNumber];
    return str.toUpperCase();
  }, [dictionary]);
  useEffect(() => {
    let Word = generateGuessWord();
    setGuessWord(Word);
  }, []);

  return (
    <GameContext.Provider
      value={{
        words,
        setWords,
        attempt,
        setAttempt,
        guessWord,
        setGuessWord,
        dictionary,
        wins,
        setWins,
        losses,
        setLosses,
        currentStreak,
        setCurrentStreak,
        maxStreak,
        setMaxStreak,
      }}
    >
      <Toaster richColors position="top-center" />
      <div className="h-full w-full bg-inherit flex flex-col justify-between p-2 items-center">
        <Header />
        <DisplayGrid />
        <CustomKeyboard />
      </div>
    </GameContext.Provider>
  );
};

export default GameCard;
