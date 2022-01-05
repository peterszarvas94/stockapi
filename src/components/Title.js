import React from 'react'

import '../styles/Title.css'

const Title = () => {
    return (
        <>
            <div className='titleContainer'>
                <h1>Dividend checker</h1>
                <p>
                    Search for a stock's ticker symbol to check the dividents of the company
                    (Use only the ticker symbol)
                </p>
                <p className='exampleList'>
                    Some examples: AAPL, MSFT, IBM, PFE, MMM...
                </p>
            </div>
        </>
    )
}

export default Title
