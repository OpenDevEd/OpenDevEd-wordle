import { create } from 'zustand';
import { StoreState } from '../types/stroreState';
import useWordGenerator from '../hooks/useWordGenerator';

export const useStore = create<StoreState>((set) => ({
    grid: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ],
    tries: 5,
    colors: [],
    row: 0,
    col: 0,
    wordGuessed: false,
    toFind : useWordGenerator().toUpperCase(),

    setGrid: (newGrid) => set({ grid: newGrid }),
    setTries: (newTries) => set({ tries: newTries }),
    setColors: (newColors) => set({ colors: newColors }),
    setRow: (newRow) => set({ row: newRow }),
    setCol: (newCol) => set({ col: newCol }),
    setWordGuessed: (value) => set({ wordGuessed: value }),
    resetGame: () => {
        set({
            grid: [
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
            ],
            tries: 5,
            colors: [],
            row: 0,
            col: 0,
            wordGuessed: false,
            toFind : useWordGenerator().toUpperCase()
        });
    },
}));
