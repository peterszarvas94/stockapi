import React, { useState } from 'react';
import DataContext from '../contexts/DataContext';
import TickerForm from './TickerForm';
import OutputData from './OutputData';

const ParentComponent = () => {

	const [dataContext, setDataContext] = useState({name: 'testname'});

	return (
		<>
			<DataContext.Provider value={[dataContext, setDataContext]}>
				<TickerForm/>
				<OutputData/>
			</DataContext.Provider>
		</>
	)
}

export default ParentComponent;
