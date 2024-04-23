import { GameState } from "./Wordle";

interface ModalProps {
  gameState: GameState;
  trays: number;
  soloution: string;
}

export const Modal = ({ gameState, trays, soloution }: ModalProps) => {

  const handleClick = () => {
    window.location.reload();
  }

  return (
    <div className="fixed h-screen w-screen flex justify-center items-center inset-0 text-black bg-gray-600/90 z-10">
      <div className="h-96 w-96 flex flex-col items-center justify-between text-black bg-white p-10 rounded-xl">
        <h1
          className={`text-4xl font-bold ${
            gameState === GameState.Win ? "text-green-500" : "text-red-500"
          }`}
        >
          You {gameState === GameState.Win ? "Won" : "Lose"}
        </h1>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-bold ">trays</h2>
            <span className="text-3xl">{trays}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-bold ">soloution</h2>
            <span className="text-3xl">{soloution}</span>
          </div>
        </div>
        <button
          className="text-lg text-white bg-black py-2 px-14 rounded-full"
          onClick={handleClick}
        >
          Play
        </button>
      </div>
    </div>
  );
};
