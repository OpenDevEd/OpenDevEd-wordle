import { match } from "assert";
import { rows, wordLength } from "./constent";

export const setupGrid = ({
    word,
    guess,
    setGame,
    setModal,
    setGrid,
    currentRowIndex,
}: {
    word: string;
    guess: string;
    setGame: any;
    setModal: any;
    setGrid: any;
    currentRowIndex: number;
}) => {
    if (word === guess) {
        setGame("win");
        setModal(true);
        setGrid((prevGrid: any) => {
            const newGrid = [...prevGrid];
            for (let i = 0; i < wordLength; i++) {
                newGrid[currentRowIndex][i] = {
                    ...newGrid[currentRowIndex][i],
                    value: "yes",
                };
            }
            return newGrid;
        });
        for (let i = 0; i < wordLength; i++) {
            const key = document.getElementById(`kbd-${word[i]}`);
            if (key) {
                key.classList.remove("bg-yellow-500");
                key.classList.add("bg-green-500");
            }
        }
        return true;
    }
    const tmp = word.split("");
    const newGuess = guess.split("");
    for (let i = 0; i < newGuess.length; i++) {
        if (!tmp.includes(newGuess[i])) {
            const key = document.getElementById(`kbd-${newGuess[i]}`);
            if (key) {
                key.classList.add("bg-red-500");
            }
        }
    }
    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] == newGuess[i]) {
            setGrid((prevGrid: any) => {
                const newGrid = [...prevGrid];
                newGrid[currentRowIndex][i] = {
                    ...newGrid[currentRowIndex][i],
                    value: "yes",
                };
                return newGrid;
            });
            const key = document.getElementById(`kbd-${tmp[i]}`);
            if (key) {
                key.classList.remove("bg-transparent");
                key.classList.remove("bg-red-500");
                key.classList.remove("bg-yellow-500");
                key.classList.add("bg-green-500");
            }
            tmp[i] = " ";
            newGuess[i] = ".";
        }
    }
    for (let i = 0; i < newGuess.length; i++) {
        if (tmp.includes(newGuess[i])) {
            setGrid((prevGrid: any) => {
                const newGrid = [...prevGrid];
                newGrid[currentRowIndex][i] = {
                    ...newGrid[currentRowIndex][i],
                    value: "check",
                };
                return newGrid;
            });
            const key = document.getElementById(`kbd-${newGuess[i]}`);
            if (key && !key.classList.contains("bg-green-500")) {
                key.classList.add("bg-yellow-500");
            }
            tmp[tmp.indexOf(newGuess[i])] = " ";
            newGuess[i] = ".";
        }
    }

    if (currentRowIndex === rows - 1) {
        setGame("lose");
        setModal(true);
    }
    return false;
};
