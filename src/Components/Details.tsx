

const Details = () =>
{
    return (
        <div>
            <h1 className="font-bold text-[2rem] text-center">How to Play</h1>
            <div className="flex flex-col mt-[1rem]  items-start gap-[10px]">
                <div className="flex gap-[10px] items-center justify-center">
                    <div className="w-[40px] h-[40px] bg-cellCorrect rounded-sm"></div>
                    <p className="text-[18px] font-medium"> :  Correct letter in the correct position.</p>
                </div>
                <div className="flex gap-[10px] items-center justify-center">
                    <div className="w-[40px] h-[40px] bg-cellWrongPosition rounded-sm"></div>
                    <p className="text-[18px] font-medium"> : Correct letter but in the wrong position</p>
                </div>
                <div className="flex gap-[10px] items-center justify-center">
                    <div className="w-[40px] h-[40px] bg-cellWorngLetter rounded-sm"></div>
                    <p className="text-[18px] font-medium"> : Wrong Letter</p>
                </div>
            </div>
            <p className="font-semibold text-[1rem] text-center mt-[20px]">Use the hints wisely to deduce the word and guess again until you solve it!</p>
        </div>
    )
}
export default Details;