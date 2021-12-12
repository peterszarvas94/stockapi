import React, { useContext } from 'react';
import DataContext from '../contexts/DataContext';

const OutputData = () => {

	const [dataContext, setDataContext] = useContext(DataContext);

	return (
		<>
			<ul style={{listStyle: 'none'}}>
				<li>{dataContext.name}</li>
				<li><a href={dataContext.url} target='_blank' rel="noreferrer">{dataContext.url}</a></li>
				<li><img src={dataContext.logo}/></li>
			</ul>
		</>
	)
}

export default OutputData;
