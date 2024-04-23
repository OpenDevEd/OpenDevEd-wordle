import React, { useEffect, useState } from "react";

export const ErrorDialog = ({
    message,
    setError,
    timeout = 2000,
}: {
    message: string;
    setError: (error: string) => void;
    timeout?: number;
}) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 100);
            if (count >= timeout) {
                setError("");
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [count]);
    return (
        <div
            className={`bg-gray-200 shadow-2xl px-8 py-10 flex flex-col rounded-xl justify-center items-center`}
        >
            <p className="text-black text-lg font-semibold text-center">
                {message}
            </p>
        </div>
    );
};
