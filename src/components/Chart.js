import React, { useContext } from 'react';
import DividendContext from '../contexts/DividendContext';

import Bar from './Bar';

const Chart = () => {

    // eslint-disable-next-line
    const [dividendContext, setDividendContext] = useContext(DividendContext);

    let bars = [];

    if (dividendContext) {
        dividendContext.results.forEach((val, index) => {
            bars.unshift(
                <Bar height={val.amount * 100} key={index} title={val.amount}/>
            )
        });
    }
    
    return (
        <>
            {bars}
        </>
    );
}

export default Chart;