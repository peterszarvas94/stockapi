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

    //register chart.js elements
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip
    );

    //setting chart.js options
    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    callback: function (val, index) {
                        return this.getLabelForValue(val).slice(0,4);
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Dividends',
                font: {
                    size: 20
                }
            },
            tooltip: {
                displayColors: false,
                callbacks: {
                    title: data => data[0].label,
                    label: (data) => '$ ' + data.formattedValue
                }
            }
        }
    };

    //defining the labels and values for the chart
    const labels = [];
    const dividends = [];

    //providing the data options
    const data = {
        labels,
        datasets: [{
            // label: false,
            data: [...dividends],
            backgroundColor: 'rgba(255, 20, 20, 0.7)',
        }],
    };

    //using the DividendContext
    // eslint-disable-next-line
    const [dividendContext, setDividendContext] = useContext(DividendContext);

    //filling up labels and dividends
    if (dividendContext) {
        dividendContext.results.forEach((val, index) => {
            if(labels.length >= 40) return;
            labels.unshift(val.paymentDate);
            
            if(dividends.length >= 40) return;
            dividends.unshift(val.amount);
        });

        data.datasets[0].data = [...dividends]
    }
    
    //rendering
    return (
        <div className='chartContainer'>
            {(dividends.length === 0) &&
                <div>
                    This company has no dividends
                </div>
            }
            {(dividends.length > 0) && <Bar options={options} data={data} />}
        </div>
    );
}

export default Chart;