"use client";
import { resetGame } from "@/constants/functionality";
import { GameContext } from "@/context/ContextProvider";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { useContext, useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import { DialogDescription } from "@radix-ui/react-dialog";
import Image from "next/image";

const DialogPlay = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
}) => {
    const {
        game,
        setGrid,
        setGuess,
        setCurrentRowIndex,
        setCurrentCharIndex,
        setWord,
        setGame,
        setNotif,
    } = useContext(GameContext);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div>
                    <button
                        type="button"
                        title={game === "on" ? "New Game" : "Play"}
                        className="hover:translate-x-1 hover:-translate-y-1 hover:text-sky-500 cursor-pointer transition-all duration-100 delay-76 sm:inline-block hidden"
                    >
                        {game === "on" ? "New Game" : "Play"}
                    </button>
                    <button
                        type="button"
                        title={game === "on" ? "New Game" : "Play"}
                        className="hover:translate-x-1 hover:-translate-y-1 hover:text-sky-500 cursor-pointer transition-all duration-100 delay-76 inline-block sm:hidden"
                    >
                        <GiConsoleController className="h-8 w-8" />
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="flex flex-col justify-center items-center space-y-4 w-4/5 sm:w-auto rounded-2xl shadow-sm dark:shadow-gray-400 shadow-gray-900 bg-gray-200">
                <DialogTitle className="flex justify-center items-center flex-col">
                    <p className="font-sans text-xl w-4/5 text-center">
                        Find the word and improve your{" "}
                        <span className="text-green-400 font-semibold underline dark:decoration-white decoration-black">
                            vocabulary
                        </span>
                    </p>
                </DialogTitle>
                <DialogHeader>
                    <Image
                        src="/wordly.png"
                        alt="wordly"
                        width="100"
                        height="100"
                    />
                </DialogHeader>
                <DialogDescription>
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
                            setOpen(false);
                        }}
                    >
                        New Game
                    </button>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
};

export default DialogPlay;
