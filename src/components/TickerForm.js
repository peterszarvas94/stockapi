import React, {	useState, useContext } from 'react';
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

	//defining context reset function
	const resetContext = () => {
		setDataContext(undefined);
		setDividendContext(undefined);
	}

	//updating symbol value
	const handleChange = (event) => {
		const newValue = event.target.value;
		setSymbol(newValue);
	}

	//getting the data on submit
	const handleSubmit = (event) => {

		event.preventDefault();
		event.stopPropagation();

		if (symbol === undefined || symbol === '') {
			resetContext();
			return;
		}

		const upperCaseSymbol = symbol.toUpperCase();

		
		getTickerData(upperCaseSymbol);
	}

	//getting the ticker data and triggering the next request
	const getTickerData = (upperCaseSymbol) => {
		axios(`https://api.polygon.io/v1/meta/symbols/${upperCaseSymbol}/company?apiKey=${apiKey}`)
			.then((response) => {
				setDataContext(response.data);
				getTickerDividends(upperCaseSymbol);
			})
			.catch(function (error) {
				if(error.response.status === 429) {
					setDataContext({ 'error': 429 });
				} else {
					resetContext();
				}
			});
	}

	//getting the ticker dividends
	const getTickerDividends = (upperCaseSymbol) => {
		axios(`https://api.polygon.io/v2/reference/dividends/${upperCaseSymbol}?apiKey=${apiKey}`)
			.then((response) => {
				setDividendContext(response.data);
			})
			.catch(function (error) {
				if(error.response.status === 429) {
					setDataContext({ 'error': 429 });
					setDividendContext(undefined);
				} else {
					resetContext();
				}
			});
	}

	//rendering
	return ( 
		<>
			<div className = 'formContainer' >
				<Form onSubmit = {handleSubmit}>
					<Form.Control id = 'symbol' type = 'text' placeholder = 'Ticket symbol' onChange = {handleChange}/>
					<Button type = 'sumbit'>Search</Button>
				</Form>
			</div>
		</>
	);
}

export default TickerForm;