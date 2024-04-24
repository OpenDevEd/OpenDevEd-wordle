import { generate } from "random-words";


const useWordGenerator = () : string =>
{
    const word = generate({ minLength: 5, maxLength: 5 }).toString();
    return word;
}

export default useWordGenerator;