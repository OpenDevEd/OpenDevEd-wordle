import Board from "./Board";
import Details from "./Details";

const Game = () => 
{
    return (
        <main className="flex flex-col md:flex-row justify-between items-center w-[80dvw] h-screen container">
            <Board/>
            <Details/>
        </main>
    )
}

export default Game;