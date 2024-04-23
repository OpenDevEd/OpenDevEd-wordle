import { generate } from "random-words";

export const generateWord = (len: number) => {
    const word = generate({ minLength: len, maxLength: len }).toString();
    return word;
};
