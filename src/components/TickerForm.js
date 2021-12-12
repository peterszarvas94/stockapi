import React, { useState, useContext } from 'react';
import DataContext from '../contexts/DataContext';
import { Form, Button } from 'react-bootstrap';
// import { FakeResponse } from './FakeResponse';
const axios = require('axios').default;

const TickerForm = () => {

	const [dataContext, setDataContext] = useContext(DataContext);
	const [symbol, setSymbol] = useState();
	const [name, setName] = useState();

	const handleChange = (event) => {
		setSymbol(event.target.value);
	}

	const handleSubmit = (event) => {
    
		event.preventDefault();
		event.stopPropagation();
	
		if (symbol === undefined) {
			setDataContext({name: 'undefined'});
			return;
		}

		const ticker = symbol.toUpperCase();
		const secret = process.env.REACT_APP_API_KEY;

		// setDataContext(FakeResponse.data);

		axios(`https://api.polygon.io/v1/meta/symbols/${ticker}/company?apiKey=${secret}`)
			.then(function (response) {
				console.log(response.data);
				setDataContext(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
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
	);
}

export default TickerForm;
