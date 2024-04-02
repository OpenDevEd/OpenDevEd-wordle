import React from 'react'
import Boxes from './Boxes'

export default function Row({ userGuess, attempts, buffer }) {

    return (
        <div>
            {userGuess.map((Guess, index) => {
                return ((attempts === index) ? 
                    (<Boxes key={index} buffer={buffer}/>) : 
                    (<Boxes key={index} Guess={Guess} attempts={attempts}/>)
                );
            })}
        </div>
    )
}


