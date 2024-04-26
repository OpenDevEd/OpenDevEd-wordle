
import { useEffect} from 'react';
import { StoreState } from '../types/stroreState';
import useGameLogic from '../hooks/useGameLogic';
import { useStore } from '../store/gameStore';
import {PopUp, PopUpWins} from '../utils/Popup';

const Board = () => {
    const { handleKeyUp} = useGameLogic();
    const { grid, tries, colors , wordGuessed, toFind} = useStore((state: StoreState) => state);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyUp]);

    const handleEnterButtonClick = () => {
        const enterKeyEvent = new KeyboardEvent('keyup', { key: 'Enter' });
        window.dispatchEvent(enterKeyEvent);
    };
    const handleHintButtonClick = () => {
        const hintLetters = toFind.slice(0, 3).split('');
        alert("the Word has this letters : " + hintLetters);
    }

    const renderCell = (row: string[], rowIndex: number) => (
        row.map((letter: string, colIndex) => {
            const cellIndex = rowIndex * grid[0].length + colIndex;
            const cellColor = colors.find(color => color.index === cellIndex)?.color || '';
            return (
                <div key={colIndex} className={`w-14 h-14 border border-[#dee1e9] text-[#393e4c] font-semibold bg-[#fbfcff] text-[2rem] m-1 rounded-md flex justify-center items-center ${cellColor}`}>
                    {letter}
                </div>
            );
        })
    );

    return (
        <>
            {wordGuessed ? <PopUpWins /> : tries > 0 ? (
                <section className="flex flex-col justify-center items-center">
                    <h1 className="mb-8 font-bold text-4xl">Game</h1>
                    <div className="">
                        {grid.map((row: string[], rowIndex: number) => (
                            <div key={rowIndex} className="flex justify-center">
                                {renderCell(row, rowIndex)}
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-around w-[80%] mt-[25px] text-[#fff]'>
                        <button className='bg-cellCorrect font-semibold text-[1rem] px-[30px] py-[10px] rounded-md outline-none' onClick={handleEnterButtonClick}>Enter</button>
                        <button className='bg-cellWrongPosition font-semibold text-[1rem] px-[30px] py-[10px] rounded-md' onClick={handleHintButtonClick}>Hint</button>
                    </div>
                </section>
            ) : (
                <PopUp />
            )}
        </>
    );
};

export default Board;
