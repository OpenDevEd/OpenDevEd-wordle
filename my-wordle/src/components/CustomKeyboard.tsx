import KeyboardLetter from "./KeyboardLetter";

export const letters_first = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
export const letters_second = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
export const letters_last = ["Z", "X", "C", "V", "B", "N", "M"];

const CustomKeyboard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex gap-2">
        {letters_first.map((letter, index) => (
          <KeyboardLetter key={index} letter={letter} />
        ))}
      </div>
      <div className="flex gap-2">
        {letters_second.map((letter, index) => (
          <KeyboardLetter key={index} letter={letter} />
        ))}
      </div>
      <div className="flex gap-2">
        <KeyboardLetter letter={"ENTER"} />
        {letters_last.map((letter, index) => (
          <KeyboardLetter key={index} letter={letter} />
        ))}
        <KeyboardLetter letter={"DELETE"} />
      </div>
    </div>
  );
};

export default CustomKeyboard;
