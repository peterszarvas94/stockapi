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
			{dataContext && (!dataContext.error) &&
				<div className='outputContainer'>
					<img src={dataContext.logo} alt={dataContext.name}/>
					{dataContext.name && 
						<h4>{dataContext.name} ({dataContext.symbol})</h4>
					}
					<a href={dataContext.url} target='_blank' rel="noreferrer">{dataContext.url}</a>
				</div>
			}
		</>
	)
}

export default OutputData;
