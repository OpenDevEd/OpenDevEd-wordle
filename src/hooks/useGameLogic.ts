import { useCallback, useState } from "react";
import { UseGameLogicReturn } from "../types/gameLogic";
import { useStore } from "../store/gameStore";


const useGameLogic = (): UseGameLogicReturn => {
    
    const { grid, setGrid, tries, setTries, resetGame, colors, setColors, row, col, setRow, setCol, wordGuessed ,setWordGuessed, toFind } = useStore();
    const [canType, setCanType] = useState<Boolean>(true);

    const RestartGame = () => {
        resetGame();
        setCanType(true);
    }
    const handleEnter = () => {
        const joinedRow = grid[row - 1].join('');
        if(joinedRow === toFind)
        {
            setWordGuessed(true);
            setCanType(true);
            return ;
        } 
        const newColors: { index: number, color: string }[] = [...colors];
        const toFindMap = new Map();
        for (const char of toFind)
            toFindMap.set(char, (toFindMap.get(char) || 0) + 1);
        for (let i = 0; i < joinedRow.length; i++) {
            if (joinedRow[i] === toFind[i]) {
                newColors.push({ index: (row - 1) * grid[0].length + i, color: 'bg-cellCorrect' });
                toFindMap.delete(joinedRow[i]);
            } else if (toFindMap.has(joinedRow[i]) && toFindMap.get(joinedRow[i]) > 0) {
                newColors.push({ index: (row - 1) * grid[0].length + i, color: 'bg-cellWrongPosition' });
                toFindMap.set(joinedRow[i], toFindMap.get(joinedRow[i]) - 1);
            } else {
                newColors.push({ index: (row - 1) * grid[0].length + i, color: 'bg-cellWorngLetter' });
            }
        }
        setColors(newColors);
        setTries(tries - 1);
        setCanType(true);
    };

    const handleBackspace = () => {
        if (col > 0) {
            const newGrid = [...grid];
            newGrid[row][col - 1] = '';
            setGrid(newGrid);
            setCanType(true);
            setRow(row);
            setCol(col - 1);
        } else if (row > 0) {
            const newGrid = [...grid];
            newGrid[row - 1][grid[0].length - 1] = '';
            setGrid(newGrid);
            setCanType(true);
            setCol(grid[0].length - 1);
            setRow(row - 1);
        }
    };
    const handleKeys = (key: string) => {
        if (/^[a-zA-Z]$/.test(key)) {
            if (row < grid.length && col < grid[0].length) {
                const newGrid = [...grid];
                newGrid[row][col] = key.toUpperCase();
                setGrid(newGrid);
                const nextCol = (col + 1) % grid[0].length;
                const nextRow = nextCol === 0 ? row + 1 : row;
                setCanType(nextCol !== 0);
                setRow(nextRow);
                setCol(nextCol);
                return;
            }
        }
        return;
    };

    const handleKeyUp = useCallback((event: KeyboardEvent) => {
        const { key } = event;
        if (!canType && key !== 'Enter' && key !== 'Backspace')
            return;
        switch (key) {
            case "Enter":
                handleEnter();
                break;
            case "Backspace":
                handleBackspace()
                break;
            default:
                handleKeys(key);
        }
    }, [canType, handleEnter, handleBackspace])

    return { handleKeyUp, RestartGame, wordGuessed };
}

export default useGameLogic;