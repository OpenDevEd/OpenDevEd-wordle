import { Cell, MyCells } from "@/lib/types";
import { rows, wordLength } from "@/constants/constent";
import { generateWord } from "./generateWord";
import Cells from "@/components/cells";
import { validWord } from "./valid-word";
import { setupGrid } from "./setup-game";

export const resetGame = ({
    setGrid,
    setGuess,
    setWord,
    setGame,
    setCurrentCharIndex,
    setCurrentRowIndex,
    setNotif,
}: {
    setGrid: (prevGrid: MyCells[][]) => void;
    setGuess: (guess: string) => void;
    setWord: (word: string) => void;
    setGame: (game: "on" | "win" | "lose") => void;
    setCurrentCharIndex: (index: number) => void;
    setCurrentRowIndex: (index: number) => void;
    setNotif: (error: string) => void;
}) => {
    setGrid(
        Array.from({ length: rows }, () =>
            Array(wordLength).fill({ key: "", value: "no" })
        )
    );

    for (let i = 0; i < 26; i++) {
        const key = document.getElementById(
            `kbd-${String.fromCharCode(97 + i)}`
        );
        if (key) {
            key.classList.remove("bg-yellow-500");
            key.classList.remove("bg-red-500");
            key.classList.remove("bg-green-500");
        }
    }
    setGuess("");
    setGame("on");
    setWord(generateWord(wordLength));
    setCurrentCharIndex(0);
    setCurrentRowIndex(0);
    setNotif("");
};

export const moveNextCell = ({
    currentRowIndex,
    setCurrentRowIndex,
    setCurrentCharIndex,
    setGame,
    setModal,
}: {
    currentRowIndex: number;
    setCurrentRowIndex: (index: number) => void;
    setCurrentCharIndex: (index: number) => void;
    setGame: (game: "on" | "win" | "lose") => void;
    setModal: (modal: boolean) => void;
}) => {
    if (currentRowIndex === rows - 1) {
        setGame("lose");
        setModal(true);
        setCurrentRowIndex(rows);
        return;
    } else {
        setCurrentRowIndex(currentRowIndex + 1);
    }
    setCurrentCharIndex(0);
};

export const DeleteLetter = ({
    guess,
    setGuess,
    currentCharIndex,
    setCurrentCharIndex,
    currentRowIndex,
    setGrid,
}: {
    guess: string;
    setGuess: any;
    currentCharIndex: number;
    setCurrentCharIndex: any;
    currentRowIndex: number;
    setGrid: any;
}) => {
    if (guess.length > 0) {
        setGuess((prevGuess: string) => {
            if (prevGuess.length === 1) {
                return "";
            }
            return prevGuess.slice(0, -1);
        });
    }

    if (currentCharIndex > 0) {
        setGrid((prevGrid: MyCells[][]) => {
            const newGrid = [...prevGrid];
            newGrid[currentRowIndex][
                currentCharIndex - 1 > 0 ? currentCharIndex - 1 : 0
            ] = {
                key: "",
                value: "no",
            };
            return newGrid;
        });
        setCurrentCharIndex((prevCharIndex: number) =>
            prevCharIndex - 1 > 0 ? prevCharIndex - 1 : 0
        );
    }
    const cell = document.getElementById(
        `${currentRowIndex}-${
            currentCharIndex - 1 > 0 ? currentCharIndex - 1 : 0
        }`
    );
    if (cell) {
        // remove animation
        cell.style.animation = "rev-shake 0.5s";
    }
};

export const AddLetter = ({
    newChar,
    currentRowIndex,
    currentCharIndex,
    setGrid,
    setGuess,
    setCurrentCharIndex,
}: {
    newChar: string;
    currentRowIndex: number;
    currentCharIndex: number;
    setGrid: any;
    setGuess: any;
    setCurrentCharIndex: any;
}) => {
    setGrid((prevGrid: MyCells[][]) => {
        const newGrid = [...prevGrid];
        newGrid[currentRowIndex][currentCharIndex] = {
            key: newChar,
            value: "no",
        };
        return newGrid;
    });
    setGuess((prevGuess: string) => prevGuess + newChar);
    setCurrentCharIndex((prevCharIndex: number) => prevCharIndex + 1);
    const cell = document.getElementById(
        `${currentRowIndex}-${currentCharIndex}`
    );
    if (cell) {
        cell.style.animation = "shake 0.5s";
    }
};

export const handleWord = async ({
    word,
    guess,
    setGame,
    setModal,
    setGrid,
    currentRowIndex,
    setCurrentRowIndex,
    setCurrentCharIndex,
    setNotif,
    setGuess,
}: {
    word: string;
    guess: string;
    setGame: any;
    setModal: any;
    setGrid: any;
    currentRowIndex: number;
    setCurrentRowIndex: any;
    setCurrentCharIndex: any;
    setNotif: any;
    setGuess: any;
}) => {
    if (guess.length !== wordLength) {
        setNotif("Word length is not correct");
        return;
    }
    if (!(await validWord(guess))) {
        setNotif("Word is not correct");
        return;
    }
    if (
        setupGrid({
            word,
            guess,
            setGame,
            setModal,
            setGrid,
            currentRowIndex,
        })
    ) {
        return;
    }
    setGuess("");
    moveNextCell({
        currentRowIndex,
        setCurrentRowIndex,
        setCurrentCharIndex,
        setGame,
        setModal,
    });
};
