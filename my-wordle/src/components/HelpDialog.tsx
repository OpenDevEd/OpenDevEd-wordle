import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function HelpDialog() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" flex items-center justify-center">
        <button type="button" onClick={openModal} className="">
          <QuestionMarkCircleIcon className="w-8 h-8" />
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
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    How To Play
                  </Dialog.Title>
                  <div className="mt-2">
                    <h1 className="text-lg text-gray-900">
                      Guess the Wordle in 5 tries.
                    </h1>
                    <ul className="decoration-solid text-gray-600">
                      <li>Each guess must be a valid 5-letter word.</li>
                      <li>
                        The color of the tiles will change to show how close
                        your guess was to the word
                      </li>
                      <li>
                        characters that don't exist in the word are in gray
                      </li>
                      <li>
                        characters that exist in the word but are wrongly places
                        are in yellow
                      </li>
                      <li>
                        characters that exist in the word and are in the correct
                        place are in green
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
