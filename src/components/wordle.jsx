import React, { useState , useRef, useEffect} from 'react';
import "../styles/wordle.css";
import Row from "./Line";


export default function Wordle({ LETTERS, WORDS, SOLUTION }) {

  const [guesses, setGuesses] = useState(Array(6).fill("     "));
  const [rightanswer, setRightanswer] = useState(false);
  const [status, setstatus] = useState("");
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);


  const Wref = useRef();

  useEffect(() => {
    Wref.current.focus();
  }, []);

  const replaceCharacter = (string, index, replacement) => {
    return (
      string.slice(0, index) +
      replacement +
      string.slice(index + replacement.length)
    );
  };

  const keysmanagment = (event) => {
    if (rightanswer) return;

    if (LETTERS.includes(event.key)) {
      if (activeLetterIndex < 5) {
        setstatus("");

        let newGuesses = [...guesses];
        newGuesses[activeIndex] = replaceCharacter(
          newGuesses[activeIndex],
          activeLetterIndex,
          event.key
        );

        setGuesses(newGuesses);
        setActiveLetterIndex((index) => index + 1);
      }
    } else if (event.key === "Enter") {
      if (activeLetterIndex === 5) {
        const theGuess = guesses[activeIndex];

        if (!WORDS.includes(theGuess)) {
          setstatus("NOT IN THE WORDS LIST");
        } else if (wrongGuesses.includes(theGuess)) {
          setstatus("WORD TRIED ALREADY");
        } else if (theGuess === SOLUTION) {
          setRightanswer(true);
          setstatus("GOOD JOB!");
          setCorrectLetters([...SOLUTION]);
        }  else {
          const correctLetters = theGuess.split('').filter((letter, index) => SOLUTION[index] === letter);
          setWrongGuesses([...wrongGuesses, theGuess]);
          setActiveIndex(index => index + 1);
          setActiveLetterIndex(0);
        }
      } else {
        setstatus("FIVE LETTER ONLY");
      }
    } else if (event.key === "Backspace") {
      setstatus("");

      if (guesses[activeIndex][0] !== " ") {
        const newGuesses = [...guesses];

        newGuesses[activeIndex] = replaceCharacter(
          newGuesses[activeIndex],
          activeLetterIndex - 1,
          " "
        );

        setGuesses(newGuesses);
        setActiveLetterIndex((index) => index - 1);
      }
    }
  };

  return (
    <div
      className="game"
      ref={Wref}
      tabIndex="0"
      onBlur={(e) => {
        e.target.focus();
      }}
      onKeyDown={keysmanagment}
    >
      <div className={`status ${rightanswer && "status--green"}`}>
        {status}
      </div>
      {guesses.map((guess, index) => {
        return (
          <Row
            key={index}
            word={guess}
            applyRotation={
              activeIndex > index ||
              (rightanswer && activeIndex === index)
            }
            solution={SOLUTION}
            bounceOnError={
              status !== "GOOD JOB!" &&
              status !== "" &&
              activeIndex === index
            }
          />
        );
      })}
    </div>
  );
}