/* eslint-disable react/no-unescaped-entities */
import { Dialog } from "@headlessui/react";
import React from "react";

const ExplainGame: React.FC<ExplainGameProps> = ({
  showDialog,
  handleCloseDialog,
  gameType,
  handleGameTypeChange,
}) => {
  const isButtonDisabled = gameType === "";

  return (
    <>
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-950 bg-opacity-50">
        <Dialog open={showDialog} onClose={() => {}}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Panel className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-gray-700 p-6 shadow-lg">
            <Dialog.Title className="mb-4 text-center text-lg font-bold">
              Instructions
            </Dialog.Title>
            <div className="my-4 flex flex-col items-start gap-2 text-center">
              <h2 className="mb-2 text-lg font-bold">How To Play</h2>
              <p className="mb-2">Guess the Wordle in 6 tries.</p>
              <ul className="mb-2 ml-6 flex list-disc flex-col items-start">
                <li>Each guess must be a valid 5-letter word.</li>
                <li>
                  The color of the tiles will change to show how close your
                  guess was to the word.
                </li>
              </ul>
              <h2 className="mb-2 text-lg font-bold">Examples</h2>
              <div className="flex flex-col items-start gap-2">
                <span className="flex items-center font-bold">
                  <div className="mr-2 inline-block h-8 w-8 rounded-md bg-green-500 p-1 text-white">
                    W
                  </div>
                  is in the word and in the correct spot.
                </span>
                <span className="flex items-center font-bold">
                  <div className="mr-2 inline-block h-8 w-8 rounded-md bg-yellow-500 p-1 text-white">
                    I
                  </div>
                  is in the word but in the wrong spot.
                </span>
                <span className="flex items-center font-bold">
                  <div className="mr-2 inline-block h-8 w-8 rounded-md bg-red-500 p-1 text-white">
                    U
                  </div>
                  is not in the word in any spot.
                </span>
              </div>
            </div>
            <h2 className="mb-4 text-center text-xl font-bold">
              Choose Game Type
            </h2>
            <div className="mb-4 flex items-center justify-center">
              <input
                type="radio"
                id="type-in"
                name="game-type"
                value="type-in"
                checked={gameType === "type-in"}
                onChange={handleGameTypeChange}
                className="mr-2"
              />
              <label htmlFor="type-in" className="mr-4">
                Type In
              </label>
              <input
                type="radio"
                id="keyboard"
                name="game-type"
                value="keyboard"
                checked={gameType === "keyboard"}
                onChange={handleGameTypeChange}
                className="mr-2"
              />
              <label htmlFor="keyboard">Keyboard</label>
            </div>
            <button
              onClick={handleCloseDialog}
              disabled={isButtonDisabled}
              className={`w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none ${
                isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              Got it!
            </button>
          </Dialog.Panel>
        </Dialog>
      </div>
    </>
  );
};

export default ExplainGame;
