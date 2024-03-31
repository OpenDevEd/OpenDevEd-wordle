import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { GameContext } from "./GameCard";

export default function StatisticsDialog() {
  let [isOpen, setIsOpen] = useState(false);

  const { wins, losses, currentStreak, maxStreak } = useContext(GameContext);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const calculateWinRate = () => {
    const totalGames = wins + losses;

    const winRate = (wins / totalGames) * 100;
    return winRate;
  };

  return (
    <>
      <div className=" flex items-center justify-center">
        <button type="button" onClick={openModal} className="">
          <ChartBarIcon className="w-8 h-8" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center   p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-extrabold leading-6 text-gray-900"
                  >
                    Wordle
                  </Dialog.Title>
                  <div className="mt-2">
                    <h1 className="text-lg text-gray-900 self-start">
                      STATISTICS
                    </h1>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-1 justify-center items-center">
                        <h1 className="font-extrabold text-5xl">
                          {wins + losses}
                        </h1>
                        <p>Played</p>
                      </div>
                      <div className="flex flex-col gap-1 justify-center items-center">
                        <h1 className="font-extrabold text-5xl">
                          {calculateWinRate()}
                        </h1>
                        <p>Win %</p>
                      </div>
                      <div className="flex flex-col gap-1 justify-center items-center">
                        <h1 className="font-extrabold text-5xl">
                          {currentStreak}
                        </h1>
                        <p>Current Streak</p>
                      </div>
                      <div className="flex flex-col gap-1 justify-center items-center">
                        <h1 className="font-extrabold text-5xl">{maxStreak}</h1>
                        <p>Max Streak</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
