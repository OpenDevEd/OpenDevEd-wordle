import { LetterState } from "@/utils/wordsUtils";

const TARGET_LENGTH = 5;

const characterStateStyles = {
  [LetterState.Grey]: "border-absent-color bg-absent-color",
  [LetterState.Yellow]: "border-present-color bg-present-color",
  [LetterState.Green]: "border-correct-color bg-correct-color",
};
interface RowProps {
  currentGuess?: string;
  guess?: Array<{ char: string; state: LetterState }>;
}

export const Row = ({ currentGuess, guess }: RowProps) => {

  if (guess) {
    return (
      <div className="grid grid-cols-5 gap-4">
        {guess.map((l, i) => (
          <CharacterBox key={i} char={l.char} state={l.state} />
        ))}
      </div>
    );
  }

  if (currentGuess) {
    const lettersRemaining = TARGET_LENGTH - currentGuess.length;
    const letters = currentGuess
      .split("")
      .concat(Array(lettersRemaining).fill(""));

    return (
      <div className="grid grid-cols-5 gap-4">
        {letters.map((char, index) => (
          <CharacterBox key={index} char={char} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      <CharacterBox char={""} />
      <CharacterBox char={""} />
      <CharacterBox char={""} />
      <CharacterBox char={""} />
      <CharacterBox char={""} />
    </div>
  );
};

interface CharacterBoxProps {
  char: string;
  state?: LetterState;
}

const CharacterBox = ({ char, state }: CharacterBoxProps) => {
  const style =
    state == null
      ? char === ""
        ? "border-empty-char-box-border"
        : "animate-bounce-short  border-char-box-border"
      : `${characterStateStyles[state]} text-white`;

  return (
    <span
      className={`h-[52px] w-[52px] flex items-center justify-center uppercase font-extrabold text-4xl border-2 ${style}`}
    >
      {char}
    </span>
  );
};
