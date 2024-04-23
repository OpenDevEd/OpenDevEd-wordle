import { GrContact } from "react-icons/gr";
import { ImQuestion } from "react-icons/im";

export const AboutGame = () => {
    return (
        <div className="flex flex-col justify-center items-start space-y-2 bg-green-400">
            <div className="flex justify-center items-center space-x-1 ">
                <div className="size-6 w-6 h-6 bg-green-500 text-center">G</div>{" "}
                <p> : was correct letter in correct placee</p>
            </div>
            <div>
                <div className="flex justify-center items-center space-x-1">
                    <div className="size-6 text-center bg-yellow-500 font-bold text-6xl">
                        E
                    </div>
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

export const About: {
    icon: JSX.Element;
    title: string;
    description: string;
    content: string;
    image?: string;
} = {
    icon: <ImQuestion className="h-6 w-6" />,
    title: "About",
    description: "About us",
    content:
        "Wordle is a word guessing game that has become popular in recent years. It involves guessing a 6-letter word based on three clues provided after each guess. The game is played using a straightforward text-based interface or on a mobile app. Each guess is free, and the true word is revealed after the player correctly guesses all six letters. The game has become widely popular and is a fun way to pass the time while learning vocabulary..",
    image: "https://nytco-assets.nytimes.com/2022/01/Screen-Shot-2022-01-30-at-10.05.09-PM.png",
};

export const ConstactSend = () => {
    return (
        <form className="flex justify-center items-center flex-col w-1/2 m-auto space-y-2 font-thin text-center text-white dark:text-white ">
            <input type="text" placeholder="Name" className="px-2 rounded-xl" />
            <input
                type="email"
                placeholder="Email"
                className="px-2 rounded-xl"
            />
            <textarea
                placeholder="Message"
                className="px-1 rounded-xl"
            ></textarea>
            <button
                type="submit"
                className="rounded-full px-2 bg-neutral-800 hover:bg-sky-400 hover:scale-105 transition-all duration-100 delay-75"
            >
                Send
            </button>
        </form>
    );
};

export const contact: {
    icon: JSX.Element;
    title: string;
    description: string;
    content: string;
} = {
    icon: <GrContact className="h-6 w-6" />,
    title: "Contact",
    description: "Contact us",
    content: "You can contact us at our email:",
};
