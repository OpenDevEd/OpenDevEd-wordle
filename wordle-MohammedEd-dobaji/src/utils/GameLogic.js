import React, { useState } from 'react'

export default function GameLogic( target ) {

    const [gameState, setGameState] = useState({
        attempts: 0,
        buffer: '',
        userGuess: [...Array(6)], 
        guesses: [],
        result: false,
    });

    const   handleBuffer = () => {
        let wordInfo = [];
        for (let i = 0; i < gameState.buffer.length; i++) {
            gameState.buffer = gameState.buffer.toLowerCase();
            target = target.toLowerCase();
            const   boxColor = ((gameState.buffer[i] === target[i] ? 'bg-[#1F1F1F]' : target.includes(gameState.buffer[i]) ? 'bg-[#4D533C]' : 'bg-[#8B956D]'));
            const wordInfoItem = {ch: gameState.buffer[i], color: boxColor};
            wordInfo.push(wordInfoItem);
        }
        return wordInfo;
    };

    const   trackingGuesses = (wordInfo) => {
        setGameState(prevState => {
            let updatedGuess = [...prevState.userGuess];
            updatedGuess[gameState.attempts] = wordInfo;
            return {
                ...prevState,
                userGuess: updatedGuess,
                result: prevState.buffer === target ? !prevState.result: prevState.result,
                guesses: [...prevState.guesses, prevState.buffer],
                attempts: prevState.attempts + 1,
                buffer: ''
            }
        });
    };

    const   handleKeyUp = (e) => {
        if (/^[A-Za-z]$/.test(e.key))
        {
            if (gameState.buffer.length < 5)
            {
                setGameState(prevState => ({
                    ...prevState,
                    buffer: prevState.buffer + e.key,
                }));
            }
        }
        else if (e.key === 'Enter')
        {
            if (gameState.buffer.length !== 5)
                console.error('Too short!');
            else if (gameState.attempts > 5)
                console.error('You lost!');
            else if (gameState.guesses.includes(gameState.buffer))
                console.error('Try another word!');
            else {
                const   wordInfo = handleBuffer();
                trackingGuesses(wordInfo);
            }
        }
        else if (e.key === 'Backspace'){
            setGameState(prevState => ({
                ...prevState,
                buffer: prevState.buffer.substring(0, (gameState.buffer.length - 1))
            }));
        }
    };

    return ( { gameState, handleKeyUp });
}
