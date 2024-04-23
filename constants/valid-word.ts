export const validWord = async (word: string) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error("error: ", error);
        return false;
    }
};
