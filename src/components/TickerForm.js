import React, { useState, useContext } from 'react';
import DataContext from '../contexts/DataContext';
import DividendContext from '../contexts/DividendContext';
import { Form, Button } from 'react-bootstrap';

const axios = require('axios').default;

const TickerForm = () => {

	// eslint-disable-next-line
	const [dataContext, setDataContext] = useContext(DataContext);
	// eslint-disable-next-line
    const [dividendContext, setDividendContext] = useContext(DividendContext);

	const [symbol, setSymbol] = useState();

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

		axios(`https://api.polygon.io/v1/meta/symbols/${ticker}/company?apiKey=${secret}`)
			.then(function (response) {
				setDataContext(response.data);
				console.log(response.data)
			})
			.catch(function (error) {
				return;
			});

		axios(`https://api.polygon.io/v2/reference/dividends/${ticker}?apiKey=${secret}`)
			.then(function (response) {
				setDividendContext(response.data);
				console.log(response.data)
			})
			.catch(function (error) {
				return;
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
