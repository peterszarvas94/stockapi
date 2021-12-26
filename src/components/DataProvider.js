import React, { useState } from 'react';
import DataContext from '../contexts/DataContext';
import DividendContext from '../contexts/DividendContext';
import TickerForm from './TickerForm';
import OutputData from './OutputData';
import Chart from './Chart';

const DataProvider = () => {

	const [dataContext, setDataContext] = useState({name: ''});
	const [dividendContext, setDividendContext] = useState({results: []});

	return (
		<>
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
