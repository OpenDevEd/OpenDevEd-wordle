import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const ConstactSend = () => {
    return (
        <form className="flex justify-center items-center flex-col w-1/2 m-auto space-y-2 font-thin text-center text-white dark:text-white ">
            <input type="text" placeholder="Name" className="px-2 rounded-xl" />
            <input
                type="email"
                placeholder="Email"
                className="px-2 py-1 rounded-xl"
            />
            <textarea
                placeholder="Message"
                className="px-2 rounded-xl resize-y"
                maxLength={150}
            ></textarea>
            <button
                type="submit"
                className="rounded-full  px-2 bg-neutral-800 hover:bg-sky-400 hover:scale-105 transition-all duration-100 delay-75"
            >
                Send
            </button>
        </form>
    );
};

const AboutGame = () => {
    return (
        <div className="flex flex-col justify-center items-start space-y-2 ">
            <div className="flex justify-center items-center space-x-1 ">
                <div className="size-6 w-6 h-6 bg-green-500 text-center">G</div>{" "}
                <p> : was correct letter in correct placee</p>
            </div>
            <div>
                <div className="flex justify-center items-center space-x-1">
                    <div className="size-6 text-center bg-yellow-500 ">E</div>
                    <p> : was correct letter in wrong place</p>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center space-x-1">
                    <div className="size-6 text-center bg-gray-500">X</div>
                    <p> : was wrong letter</p>
                </div>
            </div>
        </div>
    );
};

const DialogUi = ({
    dialogItems,
}: {
    dialogItems: {
        icon: JSX.Element;
        title: string;
        description: string;
        content: string;
        image?: string;
        Component?: JSX.Element;
    };
}) => {
    const { Component } = dialogItems;
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <button
                        type="button"
                        title={dialogItems.title}
                        className="hidden sm:inline-block"
                    >
                        {dialogItems.title}
                    </button>
                    <button
                        className="inline-block h-8 w-8 sm:hidden"
                        type="button"
                        title={dialogItems.title}
                    >
                        {dialogItems.icon}
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent
                className={`flex flex-col justify-center items-center shadow-[0_0_20px_#ffffff44] w-[90%] h-4/5 sm:h-auto sm:w-auto rounded-2xl overflow-auto`}
            >
                <DialogHeader>
                    <DialogTitle className="text-4xl">
                        {dialogItems.title}
                    </DialogTitle>
                    <DialogDescription className="text-xl">
                        {dialogItems.description}
                    </DialogDescription>
                </DialogHeader>
                {dialogItems.image && (
                    <div className="w-1/2 h-1/2">
                        <img src={dialogItems.image} alt={dialogItems.title} />
                    </div>
                )}
                <div className="p-4 font-thin font-sans">
                    <p>{dialogItems.content}</p>
                </div>
                {dialogItems.title === "About" ? (
                    <AboutGame />
                ) : (
                    <ConstactSend />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default DialogUi;
