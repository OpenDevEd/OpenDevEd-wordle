import React from "react";

function Letter({ letter, feedback }) {
    const colors = {
        grey: "bg-[#ccc]",
        green: "bg-[#4CAF50]",
        yellow: "bg-[#ffc107]",
        darkGrey: "bg-[#777]",
    };

    return (
    <div className={`${colors[feedback] || "bg-white"} w-10 h-10 m-1 inline-block text-center text-xl rounded`}>
            {letter}
        </div>
    );
}

function Row({ guess, feedback }) {
    return (
        <div>
            {guess.split("").map((letter, index) => (
                <Letter key={index} letter={letter} feedback={feedback[index]} />
            ))}
        </div>
    );
}

export function Board({ guesses, ...props }) {
    return (
        <div {...props}>
            {guesses.map((row, index) => (
                <Row key={index} guess={row.guess} feedback={row.feedback} />
            ))}
        </div>
    );
}
