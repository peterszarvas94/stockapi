import React, { useState, useEffect } from 'react';
import DataContext from '../contexts/DataContext';
import DividendContext from '../contexts/DividendContext';

import Title from './Title';
import TickerForm from './TickerForm';
import OutputData from './OutputData';
import Chart from './Chart';

const DataProvider = () => {

	//setting up contexts as a global state
	const [dataContext, setDataContext] = useState();
	const [dividendContext, setDividendContext] = useState();

	// useEffect(() => {
	// 	console.log(dataContext);
	// }, [dataContext]);

	// useEffect(() => {
	// 	console.log(dividendContext);
	// }, [dividendContext]);

	//providing contexts to sub elements
	return (
		<>
			<Title/>
			
			<DataContext.Provider value={[dataContext, setDataContext]}>
				<DividendContext.Provider value={[dividendContext, setDividendContext]}>
					<TickerForm/>
					<OutputData/>
					<Chart/>
				</DividendContext.Provider>
			</DataContext.Provider>
		</>
	)
}

export default DataProvider;
