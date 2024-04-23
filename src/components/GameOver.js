import React from 'react'

export function GameOver({ remaining, gameOver, word }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl font-bold">
                {gameOver.geussedWord ? "congratulations!! you won" : "you lost"}
            </h3>
            <h2 className="text-3xl font-bold">Correct: {word}</h2>
            {gameOver.geussedWord && (
                <h3 className="text-3xl font-bold">
                    {" "}
                    you guessed in {10 - remaining} attempts.
                </h3>
            )}
        </div>
    );
}