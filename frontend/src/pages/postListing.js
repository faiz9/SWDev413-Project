import React from 'react';
import axios from 'axios';


function postListing = ({ ws }) => {
	const[input_description, setDescription] = React.useState('');
	const[input_email, setEmail] = React.useState('');

	const [list, setList] = React.useState([]);

	const handleDescriptionUpdate = (e) => {
		setDescription(e.target.value);
	}
	const handleEmailUpdate = (e) => {
		setEmail(e.target.value);
	}

	const handleSubmit = () => {
		const body = {
			email : input_email,
			description : input_description,
		};

		axios.post('post-listing', body)
		setEmail('');
		setDescription('');
	}
return(
	<div className='App'>
		<div className='create-listing'>
			<input value= {input_email} onChange={handleEmailUpdate} id="input-email" />
			<input value= {input_description} onChange={handleDescriptionUpdate} id="input-description" />
			<button onCLick={handleSubmit} id="submit">Submit</button>
		</div>
	</div>
)
};
