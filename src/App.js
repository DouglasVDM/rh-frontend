import { Fragment, useEffect, useState } from 'react';
import './App.css';

// components
import Nouns from './components/Nouns';

const baseURL = process.env.NODE_ENV==='production' ? "/api/v1/" : 'http://localhost:5000/api/v1';
// const baseURL = 'http://localhost:5000/api/v1';

function App() {
	const [nouns, setNouns] = useState([]);
	const [selectedNoun, setSelectedNoun]= useState()

	const handleSelectNoun = (noun)=>{
		setSelectedNoun(noun)
		// Use the selected value in this component or pass it to other child components
	};

	const getNouns = async () => {
		try {
			const response = await fetch(`${baseURL}/nouns`);
			const jsonData = await response.json();
			console.log('jsonData', jsonData)
			setNouns(jsonData);
		} catch (err) {
			console.error(err.message);      
		}
	};
  
	useEffect(() => {
    getNouns();
	}, []);
  
  console.log('appJs nouns', nouns);

	return (
		<Fragment>
			<div className="container">
				<p className='text-center mt-5'>Hello from React</p>
				<Nouns onSelectNoun={handleSelectNoun} nouns={nouns}/>
				<p className='text-center mt-5'>Selected noun: {selectedNoun}</p>
			</div>
		</Fragment>
	);
}

export default App;