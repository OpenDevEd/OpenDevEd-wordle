import { LetterState } from "@/utils/wordsUtils";
import { Dispatch, SetStateAction } from "react";
import { LiaBackspaceSolid } from "react-icons/lia";

interface KeyboardProps {
  setLetter: Dispatch<SetStateAction<string>>;
  keysState: Record<string, LetterState>;
}

const keyboardKeys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
];

const keyStateStyles = {
  [LetterState.Grey]: "text-white bg-key-bg-absent",
  [LetterState.Yellow]: "text-white bg-present-color",
  [LetterState.Green]: "text-white bg-correct-color",
};

const Keyboard = ({ setLetter, keysState }: KeyboardProps) => {
  const handelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const key = e.currentTarget.dataset.key; // Accessing data-key attribute
    if (key) setLetter(key);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {keyboardKeys.map((keyboardRow, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {keyboardRow.map((key, index) => {
            const color = keyStateStyles[keysState[key]]
              ? keyStateStyles[keysState[key]]
              : "bg-key-bg"

            let style = `h-[58px] w-[42px] text-key-color text-lg font-bold uppercase rounded-[4px] ${color}`;

            if (key === "Enter" || key === "Backspace") {
              style =
                "h-[58px] w-[66px] text-key-color bg-key-bg flex justify-center items-center bg-gray-300 font-bold rounded-[4px]";
            }

            return (
              <button
                key={index}
                data-key={key}
                className={style}
                onClick={handelClick}
              >
                {key === "Backspace" ? <LiaBackspaceSolid size={24} /> : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};


export default Keyboard;
