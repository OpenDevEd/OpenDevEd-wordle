import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

const YouWonDialog: React.FC<YouWonDialogProps> = ({
  resetGame,
  setShowDialog,
  word,
  gameResult,
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center">
        <Dialog open onClose={() => {}}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Panel className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-6 shadow-lg">
            <Dialog.Title className="text-center text-2xl font-bold">
              {gameResult === "win" ? "You Won!" : "You Lost!"}
            </Dialog.Title>
            <Dialog.Description className="text-center">
              {gameResult === "win"
                ? `Congratulations! You guessed the word "${word}" correctly!`
                : `Sorry! You couldn't guess the word "${word}". Better luck next time!`}
            </Dialog.Description>
            <div className="mt-4 flex justify-center">
              <button
                className="mr-4 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none"
                onClick={() => {
                  resetGame();
                  setShowDialog(false);
                }}
              >
                Play Again
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </>
  );
};

export default YouWonDialog;
