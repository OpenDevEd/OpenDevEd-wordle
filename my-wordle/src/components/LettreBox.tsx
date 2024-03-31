import { twMerge } from "tailwind-merge";
import { myBoolean, word } from "../interfaces/word";

interface LetterBoxProps {
  word: word;
}

const renderEmpty = () => {
  const jsxElements = [];
  let size = 5;

  for (let index = 0; index < size; index++) {
    jsxElements.push(
      <div
        key={index}
        className="w-[50px] h-[50px] rounded-md bg-gray-400 opacity-30 hover:border-2 hover:border-black flex justify-center items-center"
      >
        <p className="font-extrabold text-4xl text-black"></p>
      </div>
    );
  }

  return jsxElements;
};
const renderCells = (word: word) => {
  const jsxElements = [];
  let size = 5;
  let str = word.str;
  let condition = word.condition as myBoolean[];
  if (str === undefined) return [];

  for (let index = 0; index < str.length; index++) {
    jsxElements.push(
      <div
        key={index}
        className={twMerge(
          "w-[50px] h-[50px] rounded-md bg-gray-400 bg-opacity-30 hover:border-2 hover:border-black flex justify-center items-center",
          condition !== undefined &&
            condition[index] === "inPlace" &&
            "bg-green-600 bg-opacity-100",
          condition !== undefined &&
            condition[index] === "Exists" &&
            "bg-yellow-600 bg-opacity-100",
          condition !== undefined &&
            condition[index] === "NotExists" &&
            "bg-gray-600 bg-opacity-100"
        )}
      >
        <p className="font-extrabold text-4xl text-black ">
          {str[index].toUpperCase()}
        </p>
      </div>
    );
  }
  for (let index = str.length; index < size; index++) {
    jsxElements.push(
      <div
        key={index}
        className="w-[50px] h-[50px] rounded-md bg-gray-400 opacity-30 hover:border-2 hover:border-black flex justify-center items-center"
      >
        <p className="font-extrabold text-4xl text-black"></p>
      </div>
    );
  }

  return jsxElements;
};

const LetterBox = ({ word }: LetterBoxProps) => {
  return (
    <>
      {word.str === undefined
        ? renderEmpty().map((Element) => Element)
        : renderCells(word).map((Element) => Element)}
    </>
  );
};

export default LetterBox;
