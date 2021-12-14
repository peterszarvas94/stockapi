import React, { useContext } from 'react';
import DataContext from '../contexts/DataContext';

const OutputData = () => {

	// eslint-disable-next-line
	const [dataContext, setDataContext] = useContext(DataContext);

	return (
		<>
			<ul style={{listStyle: 'none'}}>
				<li>{dataContext.name}</li>
				<li><a href={dataContext.url} target='_blank' rel="noreferrer">{dataContext.url}</a></li>
				<li><img src={dataContext.logo} alt={dataContext.name}/></li>
			</ul>
		</>
	)
}

export default OutputData;
