import React, {useState} from "react";

export function Input({ onSubmit }) {
    const [guess, setGuess] = useState("");

    const handleChange = (event) => {
        const newGuess = event.target.value.toLowerCase().slice(0, 5);
        setGuess(newGuess);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(guess);
        setGuess("");
    };

    return (
        <form className="flex flex-row p-2" onSubmit={handleSubmit}>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Guess"
                type="text"
                value={guess}
                onChange={handleChange}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}