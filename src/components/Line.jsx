import React from "react";

import "../styles/Line.css";

export default function Row({ word, applyRotation, solution, bounceOnError }) {
  const getreturn = (letter, index) => {
    if (solution[index] === letter) return "correct";
    if (solution.includes(letter)) return "present";
    return "absent";
  };

  return (
    <div className={`line ${bounceOnError && "row--bounce"}`}>
      {word.split("").map((letter, index) => (
        <div
          className={`letter ${getreturn(letter, index)} ${applyRotation ? `rotate--${index + 1}00` : ""} ${letter !== " " && "letter--active"}`}
          key={index}
        >
          {letter}
          <div className="rotate">{letter}</div>
        </div>
      ))}
    </div>
  );
}
