type YouWonDialogProps = {
  resetGame: () => void;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
  word: string | null;
  gameResult: "win" | "lose" | null;
};

interface WordleStoreState {
  word: string | null;
  guessedWords: string[];
  maxAttempts: number;
  currentAttempt: number;
  shakeCells: boolean;
  gameOver: boolean;
  exactGuesses: string[];
  allGuesses: string[];
  inexactGuesses: string[];
  guessLetter: (letter: string) => void;
  resetGame: () => void;
  initializeGame: () => void;
  handleGuess: (event: KeyboardEvent) => void;
  submitWordGuess: (typedWord: string) => void;
  gameResult: "win" | "lose" | null;
}

type ExplainGameProps = {
  showDialog: boolean;
  handleCloseDialog: () => void;
  gameType: string;
  handleGameTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
