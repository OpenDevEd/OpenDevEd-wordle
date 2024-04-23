import { rows, wordLength } from "@/constants/constent";
import {
    AddLetter,
    DeleteLetter,
    handleWord,
    moveNextCell,
} from "@/constants/functionality";
import { setupGrid } from "@/constants/setup-game";
import { validWord } from "@/constants/valid-word";
import { GameContext } from "@/context/ContextProvider";
import { cn } from "@/lib/utils";
import React, { useContext } from "react";

const Keyboard = () => {
    const {
        guess,
        setGrid,
        currentCharIndex,
        currentRowIndex,
        setGuess,
        setCurrentCharIndex,
        setCurrentRowIndex,
        word,
        setGame,
        setModal,
        setNotif,
    } = useContext(GameContext);

    const handleClick = (e: any) => {
        const newChar = e.target.innerText.toLowerCase();
        if (guess.length >= wordLength) {
            return;
        }
        AddLetter({
            newChar,
            currentRowIndex,
            currentCharIndex,
            setGrid,
            setGuess,
            setCurrentCharIndex,
        });
    };
    const handleEnter = () => {
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
    };
    const handleDelete = () => {
        DeleteLetter({
            guess,
            setGuess,
            currentCharIndex,
            setCurrentCharIndex,
            currentRowIndex,
            setGrid,
        });
    };

    const kbdStyle =
        "cursor-pointer hover:scale-90 capitalize font-sans text-lg p-1 sm:rounded-md shadow-sm  transition-all duration-100 delay-75 hover:shadow-lg hover:bg-sky-500 hover:text-white dark:text-white select-none text-black  flex justify-center items-center border-b-2 border-gray-800/50 border-[0.5px] w-7 py-3 text-sm rounded-sm sm:w-12 sm:text-md xl:w-14 xl:text-lg";
    return (
        <div className="flex flex-col justify-normal items-center w-full">
            <div className="flex justify-center gap-1 my-1">
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-q">
                    q
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-w">
                    w
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-e">
                    e
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-r">
                    r
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-t">
                    t
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-y">
                    y
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-u">
                    u
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-i">
                    i
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-o">
                    o
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-p">
                    p
                </kbd>
            </div>
            <div className="flex justify-center gap-1 my-1 w-full">
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-a">
                    a
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-s">
                    s
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-d">
                    d
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-f">
                    f
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-g">
                    g
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-h">
                    h
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-j">
                    j
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-k">
                    k
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-l">
                    l
                </kbd>
                <kbd
                    className={cn(
                        kbdStyle,
                        "min-w-auto px-8 border-b-2 border-gray-800/50"
                    )}
                    onClick={handleEnter}
                    id="kbd-enter"
                >
                    ↲
                </kbd>
            </div>
            <div className="flex justify-center gap-1 my-1 w-full">
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-z">
                    z
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-x">
                    x
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-c">
                    c
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-v">
                    v
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-b">
                    b
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-n">
                    n
                </kbd>
                <kbd className={kbdStyle} onClick={handleClick} id="kbd-m">
                    m
                </kbd>
                <kbd
                    className={cn(
                        kbdStyle,
                        "border-b-2 border-gray-800/50 w-10"
                    )}
                    onClick={handleDelete}
                    id="kbd-delete"
                >
                    {"    "}⌫{"   "}
                </kbd>
            </div>
        </div>
    );
};

export default Keyboard;
