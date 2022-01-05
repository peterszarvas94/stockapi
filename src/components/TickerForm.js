import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';

import DataContext from '../contexts/DataContext';
import DividendContext from '../contexts/DividendContext';

import '../styles/Form.css';

const axios = require('axios').default;

const TickerForm = () => {

	//using DataContext
	// eslint-disable-next-line
	const [dataContext, setDataContext] = useContext(DataContext);

	//using DividendContext
	// eslint-disable-next-line
    const [dividendContext, setDividendContext] = useContext(DividendContext);

	//defining variables
	const [symbol, setSymbol] = useState();
	const apiKey = process.env.REACT_APP_API_KEY;

	//updating symbol value
	const handleChange = (event) => {
		const newValue = event.target.value;
		setSymbol(newValue);
	}

	//getting the data on submit
	const handleSubmit = (event) => {
    
		event.preventDefault();
		event.stopPropagation();
	
		if (symbol === undefined) {
			setDataContext({name: ''});
			return;
		}

		const upperCaseSymbol = symbol.toUpperCase();

		axios(`https://api.polygon.io/v1/meta/symbols/${upperCaseSymbol}/company?apiKey=${apiKey}`)
			.then((response) => {
				setDataContext(response.data);
				// console.log(response.data)
			})
			.catch((error) => {
				return;
			});

		axios(`https://api.polygon.io/v2/reference/dividends/${upperCaseSymbol}?apiKey=${apiKey}`)
			.then((response) => {
				setDividendContext(response.data);
				// console.log(response.data)
			})
			.catch((error) => {
				return;
			});
	}

	//rendering
	return (
		<>
			<div className='formContainer'>
				<Form onSubmit={handleSubmit}>
					<Form.Control id='symbol' type='text' placeholder='Ticket symbol' onChange={handleChange}/>
					<Button type='sumbit'>Search</Button>
				</Form>
			</div>
		</>
	);
}

export default TickerForm;
