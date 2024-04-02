
function Keyboard( { target, buffer } ) {
    const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    return (
      <div>
        {qwerty.map((row) => (
          <div className="flex justify-center">
            {row.split('').map((char) => {
              const bgColor = (buffer[buffer.length - 1] === target[buffer.length - 1])
                ?  'bg-[#C4CFA1]'
                : buffer.includes(char)
                ? 'bg-[#4D533C]' 
                :  'bg-[#C4CFA1]'
              return (
                <div
                  className={`rounded-m m-px flex h-10 w-10 items-center justify-center uppercase ${bgColor}`}
                >
                  {char}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    )
  }
  export default Keyboard;
