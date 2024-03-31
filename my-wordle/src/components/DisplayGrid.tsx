import { useContext } from "react";
import LetterBox from "./LettreBox";
import { GameContext } from "./GameCard";
import { word } from "../interfaces/word";

const DisplayGrid = () => {
  const { words } = useContext(GameContext);
  return (
    <div className="grid grid-cols-5 gap-2 grid-rows-5 ">
      {words.map((word: word, index: number) => (
        <LetterBox key={index} word={word} />
      ))}
    </div>
  );
};

export default DisplayGrid;
