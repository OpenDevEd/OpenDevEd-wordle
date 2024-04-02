import axios from 'axios';
import { useEffect, useState } from 'react';
import Arrays from './components/Arrays';


function App() {

	const [target, setTarget] = useState(null);

	useEffect(() => {
		try
		{
			axios.get("/data/words-bank.json").then(response => {
				const	wordsBank = response.data;
				const 	randomWord = wordsBank[Math.floor(Math.random()* wordsBank.length)];
				setTarget(randomWord);
			});
		}
		catch(error) {
			console.error('Error fetching words:', error);
		}
	}, [setTarget]);
 
	return (
		<div className="bg-lime-200 h-screen w-screen flex items-center justify-center">
			<div className='bg-[#EBECEB] rounded-lg w-700 h-900 justify-center'>
				{target && <Arrays target={target} />}
			</div>
    	</div>
	);
}

export default App;
 