"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

const Cells = ({
    props,
}: {
    props: {
        rowIndex: number;
        charIndex: number;
        char: { key: string; value: string };
        currentRowIndex: number;
    };
}) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
        }
    });
    return (
        <div>
            <div
                title="Enter a character here"
                key={`${props.rowIndex}-${props.charIndex}`}
                id={`${props.rowIndex}-${props.charIndex}`}
                className={cn(
                    `square size-12 text-3xl sm:size-16 sm:text-4xl lg:size-20 lg:text-5xl  text-center flex justify-center items-center ${
                        props.rowIndex === props.currentRowIndex
                            ? "dark:bg-neutral-400 bg-neutral-300"
                            : "dark:bg-neutral-600/70 bg-neutral-100/70"
                    }`,
                    `${
                        props.char.value === "check"
                            ? "dark:bg-orange-400 bg-orange-500 "
                            : props.char.value === "yes"
                            ? "dark:bg-green-400 bg-green-500 "
                            : ""
                    }`
                )}
                // disabled={props.rowIndex !== props.currentRowIndex}
            >
                {props.char.key.toLocaleUpperCase()}
            </div>
        </div>
    );
};

export default Cells;
