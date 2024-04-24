

export interface StoreState {
    grid: string[][];
    tries: number;
    colors: { index: number, color: string }[];
    row: number;
    col: number;
    wordGuessed: boolean;
    toFind : any,
    setGrid: (newGrid: string[][]) => void;
    setTries: (newTries: number) => void;
    setColors: (newColors: { index: number, color: string }[]) => void;
    setRow: (newRow: number) => void;
    setCol: (newCol: number) => void;
    setWordGuessed: (value: boolean) => void;
    resetGame: () => void;
}