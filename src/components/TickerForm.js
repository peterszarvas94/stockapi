import React from 'react';
import { Form, Button } from 'react-bootstrap';


const TickerForm = () => {

	const handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();

		console.log(document.getElementById('symbol').value)
	}

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='symbol'>
					<Form.Control type='text' placeholder='Ticket symbol'/>
					<Button variant='primary' type='sumbit'>Search</Button>
				</Form.Group>
			</Form>
		</>
	)
}

export default TickerForm;
