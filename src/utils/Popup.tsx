import useGameLogic from "../hooks/useGameLogic";
import { useStore } from "../store/gameStore";
import { StoreState } from "../types/stroreState";


export const PopUpWins = () =>
{
    const {RestartGame} = useGameLogic();
    const {toFind} = useStore((state: StoreState) => state);
    const handleRestart = () => {
        RestartGame(); 
    };
    return (
        <div className="">
            <div className="w-[450px] h-[200px] bg-opacity-50">
                <div className="bg-[#fff] p-6 rounded shadow-lg flex flex-col items-center">
                    <h2 className="text-lg font-bold mb-4">Congratulations,You Win!</h2>
                    <p className="mb-4">You Guessed the Word '<span className="font-bold text-cellCorrect">{toFind}</span>'</p>
                    <button className="bg-cellCorrect  text-[#fff] font-bold py-2 px-4 rounded" onClick={handleRestart}>
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
}

export const PopUp = () => {
    const {RestartGame} = useGameLogic();

    const handleRestart = () => {
        RestartGame(); 
    };


    return (
        <div className="">
            <div className="w-[450px] h-[200px] bg-opacity-50">
                <div className="bg-[#fff] p-6 rounded shadow-lg flex flex-col items-center">
                    <h2 className="text-lg font-bold mb-4">You Lost</h2>
                    <p className="mb-4">You used all 5 tries. </p>
                    <button className="bg-cellCorrect  text-[#fff] font-bold py-2 px-4 rounded" onClick={handleRestart}>
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
};

