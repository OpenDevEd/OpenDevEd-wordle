"use client";
import React, { useContext, useEffect } from "react";
import Cells from "@/components/cells";
import { ErrorDialog } from "@/components/error-dialog";
import { generateWord } from "@/constants/generateWord";
import { rows, wordLength } from "@/constants/constent";
import {
    moveNextCell,
    DeleteLetter,
    AddLetter,
    handleWord,
} from "@/constants/functionality";
import { validWord } from "@/constants/valid-word";
import GameOver from "@/components/game-over";
import { GameContext } from "@/context/ContextProvider";
import { setupGrid } from "@/constants/setup-game";
import Keyboard from "@/components/keyboard";

const Game = () => {
    const {
        word,
        setWord,
        grid,
        setGrid,
        currentRowIndex,
        setCurrentRowIndex,
        currentCharIndex,
        setCurrentCharIndex,
        guess,
        setGuess,
        modal,
        setModal,
        game,
        setGame,
        notif,
        setNotif,
    } = useContext(GameContext);

    useEffect(() => {
        if (word == "") {
            setWord(generateWord(wordLength));
        }
        if (currentRowIndex === rows || game !== "on") {
            return;
        }
        async function handleKeyDown(e: any) {
            if (
                e.keyCode >= 65 &&
                e.keyCode <= 90 &&
                guess.length < wordLength &&
                currentCharIndex < wordLength
            ) {
                const key = document.getElementById("kbd-" + e.key);
                if (key) {
                    key.classList.add("bg-sky-500");
                    setTimeout(() => {
                        key.classList.remove("bg-sky-500");
                    }, 200);
                }
                const newChar = String.fromCharCode(
                    e.keyCode
                ).toLocaleLowerCase();
                AddLetter({
                    newChar,
                    currentRowIndex,
                    currentCharIndex,
                    setGrid,
                    setGuess,
                    setCurrentCharIndex,
                });
            } else if (e.key === "Enter") {
                handleWord({
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
                });
            } else if (e.key === "Backspace") {
                DeleteLetter({
                    guess,
                    setGuess,
                    currentCharIndex,
                    setCurrentCharIndex,
                    currentRowIndex,
                    setGrid,
                });
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return function cleanup() {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentCharIndex, grid]);

    return (
        <main className="w-full h-full flex flex-col justify-center items-center mt-8 space-y-8">
            <div className="grid grid-cols-5 gap-1 relative">
                {grid.map((row, rowIndex) =>
                    row.map((char, charIndex) => (
                        <div key={`${rowIndex}-${charIndex}`}>
                            <Cells
                                props={{
                                    rowIndex,
                                    charIndex,
                                    char,
                                    currentRowIndex,
                                }}
                            />
                        </div>
                    ))
                )}
                {notif && (
                    <div className="absolute inset-0 m-auto z-10 flex justify-center items-center">
                        <ErrorDialog message={notif} setError={setNotif} />
                    </div>
                )}
                {modal && <GameOver />}
            </div>
            <Keyboard />
            {guess.length === wordLength &&
                guess.length === wordLength &&
                !notif && <span className="text-lg"> Press Enter </span>}
        </main>
    );
};

export default Game;
