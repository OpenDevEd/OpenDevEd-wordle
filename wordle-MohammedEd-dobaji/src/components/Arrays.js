import React, { useEffect, useState } from 'react'
import Keyboard from './Keyboard';
import GameLogic from '../utils/GameLogic';
import Row from './Row';

function Arrays( {target}) {

    const   { gameState, handleKeyUp } = GameLogic(target);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
        return () =>  window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    useEffect(() => {
        if (gameState.result || gameState.attempts > 5) {
            var timeoutId = setTimeout(() => {
                window.location.reload();
              }, 2500);
        }
        return () => clearTimeout(timeoutId);
    }, [gameState.result, gameState.attempts]);


    return (
        <div className='flex flex-col items-center'>
            <h1>Wordle - game</h1>
            {gameState.result && <h1>You win!</h1>}
            {(!gameState.result && gameState.attempts > 5) && <h1>You lost the target is: {target}</h1>}
            <Row userGuess={gameState.userGuess} attempts={gameState.attempts} buffer={gameState.buffer}/>
			{target && <Keyboard buffer={gameState.buffer.toLowerCase()} target={target.toLowerCase()}/>}
        </div>
    )
}

export default Arrays;