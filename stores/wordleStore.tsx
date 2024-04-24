import { create } from "zustand";
import words from "../words.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useWordleStore = create<WordleStoreState>((set) => ({
  word: null,
  guessedWords: [],
  maxAttempts: 6,
  currentAttempt: 0,
  gameOver: false,
  shakeCells: false,
  exactGuesses: [],
  allGuesses: [],
  inexactGuesses: [],
  gameResult: null,

  handleGuess: (event) => {
    const { key } = event;

    if (key === "Enter") {
      set((state) => {
        if (state.currentAttempt >= state.maxAttempts) {
          return { gameOver: true };
        }

        const guessedWord =
          state.guessedWords[state.currentAttempt].toLowerCase();

        if (guessedWord.length !== 5) {
          toast.error("Please guess a word with exactly 5 characters");
          return { ...state, shakeCells: true };
        }

        if (!words.includes(guessedWord)) {
          toast.error("The guessed word is not in the current word list");
          return { ...state, shakeCells: true };
        }

        const isExact = guessedWord === state.word;

        const guessedLetters = guessedWord.split("");
        const actualLetters = state.word?.split("");

        let exactGuesses: string[] = [];
        let inexactGuesses: string[] = [];

        guessedLetters.forEach((letter, index) => {
          if (actualLetters && actualLetters[index] === letter) {
            exactGuesses.push(letter);
          } else if (state.word?.includes(letter)) {
            inexactGuesses.push(letter);
          }
        });

        const allGuesses = guessedLetters.filter(
          (letter) => !state.word?.includes(letter),
        );

        if (!isExact && state.currentAttempt + 1 >= state.maxAttempts) {
          return {
            currentAttempt: state.currentAttempt + 1,
            exactGuesses: [...state.exactGuesses, ...exactGuesses],
            allGuesses: [...state.allGuesses, ...allGuesses],
            inexactGuesses: [...state.inexactGuesses, ...inexactGuesses],
            shakeCells: false,
            gameOver: true,
            gameResult: "lose",
          };
        }

        return {
          currentAttempt: state.currentAttempt + 1,
          exactGuesses: [...state.exactGuesses, ...exactGuesses],
          allGuesses: [...state.allGuesses, ...allGuesses],
          inexactGuesses: [...state.inexactGuesses, ...inexactGuesses],
          shakeCells: false,
          gameOver: isExact,
          gameResult: isExact ? "win" : null,
        };
      });
    }

    if (key === "Backspace") {
      set((state) => {
        const { guessedWords, currentAttempt } = state;

        // Get the current guess
        const currentGuess = guessedWords[currentAttempt];

        // If the current guess is not empty, remove the last letter
        if (currentGuess.length > 0) {
          // Remove the last letter from the current guess
          const updatedGuess = currentGuess.slice(0, -1);

          // Create a copy of the guessedWords array with the updated guess
          const updatedGuessedWords = [
            ...guessedWords.slice(0, currentAttempt),
            updatedGuess,
            ...guessedWords.slice(currentAttempt + 1),
          ];

          // Return the updated state with the modified guessedWords array
          return { guessedWords: updatedGuessedWords, shakeCells: false };
        }

        // If the current guess is empty or if Backspace is pressed when no letter has been entered, return the unchanged state
        return { ...state, shakeCells: false };
      });
    }

    if (key.match(/^[A-z]$/i)) {
      set((state) => {
        const { guessedWords, currentAttempt } = state;

        const enteredLetter = key.toUpperCase();

        if (guessedWords[currentAttempt].length < 5) {
          const updatedGuessedWords = guessedWords.map((guess, index) =>
            index === currentAttempt ? guess + enteredLetter : guess,
          );

          if (updatedGuessedWords[currentAttempt].length === 6) {
            return { ...state, shakeCells: false };
          }

          return { guessedWords: updatedGuessedWords, shakeCells: false };
        }

        return { ...state, shakeCells: false };
      });
    }
  },

  submitWordGuess: (typedWord: string) => {
    set((state) => {
      const { currentAttempt, maxAttempts, word, guessedWords } = state;

      // Check if the current attempt has exceeded the max attempts
      if (currentAttempt >= maxAttempts) {
        return { ...state, gameOver: true };
      }

      // Check if the typed word length is not equal to 5 characters
      if (typedWord.length !== 5) {
        toast.error("Please guess a word with exactly 5 characters");
        return { ...state, shakeCells: true };
      }

      // Check if the typed word is not in the word list
      if (!words.includes(typedWord.toLowerCase())) {
        toast.error("The guessed word is not in the current word list");
        return { ...state, shakeCells: true };
      }

      // Check if the typed word matches the actual word
      const isExact = typedWord.toLowerCase() === word;

      const updatedGuessedWords = [...guessedWords];
      updatedGuessedWords[currentAttempt] = typedWord.toLowerCase();

      // Update the guessed words and other guess-related arrays
      const guessedLetters = typedWord.toLowerCase().split("");
      const actualLetters = word?.split("");

      let exactGuesses: string[] = [];
      let inexactGuesses: string[] = [];

      guessedLetters.forEach((letter, index) => {
        if (actualLetters && actualLetters[index] === letter) {
          exactGuesses.push(letter);
        } else if (word?.includes(letter)) {
          inexactGuesses.push(letter);
        }
      });

      const allGuesses = guessedLetters.filter(
        (letter) => !word?.includes(letter),
      );

      if (!isExact && currentAttempt + 1 >= maxAttempts) {
        return {
          guessedWords: updatedGuessedWords,
          currentAttempt: currentAttempt + 1,
          exactGuesses: [...state.exactGuesses, ...exactGuesses],
          allGuesses: [...state.allGuesses, ...allGuesses],
          inexactGuesses: [...state.inexactGuesses, ...inexactGuesses],
          shakeCells: false,
          gameOver: true,
          gameResult: "lose", // Set gameResult to "lose" if the game is lost
        };
      }

      return {
        guessedWords: updatedGuessedWords,
        currentAttempt: currentAttempt + 1,
        exactGuesses: [...state.exactGuesses, ...exactGuesses],
        allGuesses: [...state.allGuesses, ...allGuesses],
        inexactGuesses: [...state.inexactGuesses, ...inexactGuesses],
        shakeCells: false,
        gameOver: isExact,
        gameResult: isExact ? "win" : null,
      };
    });
  },

  setWord: (word: string) => set({ word }),
  guessLetter: (letter: string) =>
    set((state) => ({
      guessedWords: [...state.guessedWords, letter],
      currentAttempt: state.currentAttempt + 1,
    })),
  resetGame: () =>
    set({
      word: words[Math.floor(Math.random() * words.length)],
      guessedWords: new Array(6).fill(""),
      maxAttempts: 6,
      currentAttempt: 0,
      gameOver: false,
      shakeCells: false,
      exactGuesses: [],
      allGuesses: [],
      inexactGuesses: [],
      gameResult: null,
    }),
  initializeGame: () =>
    set({
      word: words[Math.floor(Math.random() * words.length)],
      guessedWords: new Array(6).fill(""),
      shakeCells: false,
      exactGuesses: [],
      allGuesses: [],
      inexactGuesses: [],
      gameResult: null,
    }),
}));

export default useWordleStore;
