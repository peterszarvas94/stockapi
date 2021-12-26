import React, { useContext } from 'react';
import DividendContext from '../contexts/DividendContext';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
import '../styles/Chart.css'  

const Chart = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip
        //Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Dividents',
            },
            tooltip: {
                callbacks: {
                    title: () => false,
                    label: (data) => data.formattedValue + ' $'
                }
            }
        },
    };

    const labels = [];
    const dividents = [];

    const data = {
        labels,
        datasets: [{
            label: false,
            data: [...dividents],
            backgroundColor: 'rgba(255, 20, 20, 0.7)',
        }],
    };

    // eslint-disable-next-line
    const [dividendContext, setDividendContext] = useContext(DividendContext);

    // const bars = [];
    // const dates = [];

    if (dividendContext) {
        dividendContext.results.forEach((val, index) => {
            if(labels.length >= 40) return;
            labels.unshift(val.paymentDate.slice(0, 4));
            
            if(dividents.length >= 40) return;
            dividents.unshift(val.amount);
        });

        data.datasets[0].data = [...dividents]
    }
    
    return (
        <div className='chartContainer'>
            <Bar options={options} data={data} />
        </div>
    );
}

export default Chart;