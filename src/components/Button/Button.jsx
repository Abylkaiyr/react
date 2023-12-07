import './Button.css';
import { useState } from 'react';
function Button(){
	// let text = 'Save';
	const [text, setText] = useState('Save');


	const clicked = () => {
		setText('Close');
		console.log('Privet!');
	
	};

	return (
		<button onClick={clicked} className="button accent">{text}</button>
	);
}

export default Button;