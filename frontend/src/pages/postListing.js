import React from 'react';
import axios from 'axios';



const PostListing = () => {
	const[input_description, setDescription] = React.useState('');
	const[input_email, setEmail] = React.useState('');

	//const [list, setList] = React.useState([]);

	const handleDescriptionUpdate = (e) => {
		setDescription(e.target.value);
	};
	const handleEmailUpdate = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = () => {
		const body = {
			email : input_email,
			description : input_description,
		};
		axios.post('/post-listing', body);
			setDescription('');
			setEmail('');
	};
return(
	<div className='postListing'>
		<h1>Post</h1>
		<div className='create-listing'>
			<input value= {input_email} type="email" onChange={handleEmailUpdate} id="input-email" required />
			<input value= {input_description} onChange={handleDescriptionUpdate} id="input-description" required />
			<button onClick={handleSubmit} id="submit">Submit</button>
		</div>
	</div>
);
};

export default PostListing;
