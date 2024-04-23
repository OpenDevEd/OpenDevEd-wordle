import { resetGame } from "@/constants/functionality";
import { GameState, MyCells } from "@/lib/types";
import { IoClose } from "react-icons/io5";
import React, { useContext } from "react";
import { GameContext } from "@/context/ContextProvider";
import Link from "next/link";

const GameOver = () => {
    const {
        word,
        game,
        setModal,
        setWord,
        setGrid,
        setGuess,
        setCurrentRowIndex,
        setCurrentCharIndex,
        setGame,
        setNotif,
    } = useContext(GameContext);

    return (
        <div className="absolute inset-0 m-auto z-10  flex justify-center items-center ">
            <div className="relative rounded-2xl min-w-72">
                <div
                    className={`text-center font-medium text-xl  min-w-72 py ${
                        game === "win" ? "bg-emerald-400" : "bg-red-500"
                    } rounded-t-2xl py-2`}
                >
                    {game === "win" ? "You Won! 🏆" : "You Lose!"}
                </div>
                <button
                    className="absolute top-1 right-1 hover:scale-95 transition-all duration-100 delay-75"
                    type="button"
                    title="close"
                    onClick={() => setModal(false)}
                >
                    <IoClose className="w-6 h-6 rounded-full border " />
                </button>
                <div className="dark:bg-gray-300 bg-neutral-700 flex flex-col justify-center items-center space-y-3 rounded-b-2xl py-4">
                    {game === "lose" && (
                        <>
                            <div className="text-center text-xl text-black">
                                Correct word is
                            </div>
                            <div className="text-bold  text-3xl text-green-600 px-8 py-2  rounded-lg outline-dotted outline-2 outline-black text-center flex justify-center items-center font-sans">
                                {word.toUpperCase()}
                            </div>
                            <Link
                                href={`https://wordfind.org/dictionary/${word.toLowerCase()}`}
                                rel="noreferrer noopener"
                                target="_blank"
                                className="text-center font-sans font-light text-blue-500 hover:underline text-xs leading-8"
                            >
                                What does this word mean?
                            </Link>
                        </>
                    )}
                    <button
                        type="button"
                        title="New Game"
                        className="px-2 py-1 bg-emerald-500 hover:scale-105 transition-all duration-100 delay-75 text-white dark:text-black rounded-md hover:text-emerald-500 hover:bg-black dark:bg-white dark:hover:bg-emerald-500 dark:hover:text-black"
                        onClick={() => {
                            resetGame({
                                setGrid,
                                setGuess,
                                setCurrentRowIndex,
                                setCurrentCharIndex,
                                setWord,
                                setGame,
                                setNotif,
                            });
                            setModal(false);
                        }}
                    >
                        New Game
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameOver;
