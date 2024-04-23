import wordList from "@/data/wordList.json";

export enum LetterState {
    Grey, // Letter doesn't exist at all
    Yellow, // Letter exists but wrong location
    Green, // Letter exists and is in the right location
}

export const getRandomWord = () => {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

export const isValidWord = (guess: string) => {
    return wordList.includes(guess.toLocaleLowerCase());
}

export const  checkinGuess = (guess: string, target: string) => {

  const targetArray = Array.from(target);
  const guessAsArray = Array.from(guess, (char) => ({ char, state: LetterState.Grey }));
  
    // find any green letters
    guessAsArray.forEach((l, i) => {
      if (targetArray[i] === l.char) {
        guessAsArray[i].state = LetterState.Green;
        targetArray[i] = '';
      }
    });
  
    // find any yellow letters
    guessAsArray.forEach((l, i) => {
      if (targetArray.includes(l.char) && l.state !== LetterState.Green) {
        guessAsArray[i].state = LetterState.Yellow;
        targetArray[targetArray.indexOf(l.char)] = '';
      }
    });
  
    return guessAsArray;
}


export default getRandomWord;