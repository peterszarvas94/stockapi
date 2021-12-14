import React from 'react';
import '../styles/Bar.css';

const Bar = (props) => {
    return (
        <div className='bar' style={{height: props.height + 'px'}} title={props.title}></div>
    );
}

export default Bar;
