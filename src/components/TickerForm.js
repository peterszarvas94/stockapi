import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const axios = require('axios').default;

const TickerForm = () => {

	const [symbol, setSymbol] = useState();
	const [logo, setLogo] = useState();
	const [name, setName] = useState();

	const handleChange = (event) => {
		setSymbol(event.target.value);
	}

	const handleSubmit = (event) => {
		
		event.preventDefault();
		event.stopPropagation();

		const ticker = symbol.toUpperCase();
		const secret = process.env.REACT_APP_API_KEY;

		axios(`https://api.polygon.io/v1/meta/symbols/${ticker}/company?apiKey=${secret}`)
			.then(function (response) {
				setLogo(response.data.logo);
				setName(response.data.name);
			})
			.catch(function (error) {
				console.error(error);
			});
	}

	const reducerFunc = () => {

	}

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='symbol'>
					<Form.Control type='text' placeholder='Ticket symbol' onChange={handleChange}/>
					<Button variant='primary' type='sumbit'>Search</Button>
				</Form.Group>
			</Form>
		</>
	)
}

export default TickerForm;
