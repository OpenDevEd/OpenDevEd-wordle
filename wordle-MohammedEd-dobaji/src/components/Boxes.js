import React, { useEffect, useState } from 'react'

export default function ({ Guess, attempts, buffer }) {

    const [animate, setAnimate] = useState(false);
    const [bounce, setBounce] = useState(false);

    useEffect(() => {
        { Guess && setAnimate(true)};
        { buffer && setBounce(true)};
        setTimeout(() => setAnimate(false), 500);
        setTimeout(() => setBounce(false), 500);
    }, [attempts, buffer, Guess])
  return (
    <div className={`mb-2 grid grid-cols-5 gap-2 ${animate && 'animate-flip'}`}>
        {new Array(5).fill(0).map((_, index) => {
            return (
                //add border clor
                <div key={index} className={`${bounce && 'bounce'} ${Guess && Guess[index].color} ${animate && 'animate-flip'} flex h-16 w-16 items-center justify-center border border-gray-400 font-bold uppercase text-white`}>
                    {Guess && Guess[index].ch}
                    {buffer && buffer[index]}
                </div>
            );
        })}
    </div>
  )
}
