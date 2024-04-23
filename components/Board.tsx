import { LetterState } from '@/utils/wordsUtils';
import { Row } from './Row'
interface BoardProps{
    currentGuess: string;
    guesses: Array<Array<{ char: string; state: LetterState }>>;
    row: number;
}

export const Board = ({currentGuess, guesses, row} : BoardProps) => {
  return (
    <div className="h-[360px] w-[300px] grid grid-rows-6 gap-1 p-[10px]">
{guesses.map((g, i) => {
        if (row === i){
          return <Row key={i} currentGuess={currentGuess}/>//display the current guess
        }
        return <Row key={i} guess={g} /> //display the older guesses
      })}

    </div>
  )
}