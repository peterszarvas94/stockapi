import React, { useContext } from 'react';
import DataContext from '../contexts/DataContext';

import '../styles/Output.css';

const OutputData = () => {

	//using the DataContext
	// eslint-disable-next-line
	const [dataContext, setDataContext] = useContext(DataContext);

	//rendering
	return (
		<>
			<div className='outputContainer'>
				<ul>
					<li>{dataContext.symbol}</li>
					<li>{dataContext.name}</li>
					<li><a href={dataContext.url} target='_blank' rel="noreferrer">{dataContext.url}</a></li>
					<li><img className='companyLogo' src={dataContext.logo} alt={dataContext.name}/></li>
				</ul>
			</div>
		</>
	)
}

export default OutputData;
