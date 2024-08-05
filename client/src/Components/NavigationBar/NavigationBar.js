import React from 'react'
import Pear from '../../imgs/pears.png';


const NavigationBar = () => {
    return (
        <div className='container d-flex justify-content-between align-items-center'>
            <h1 className='fw-lighter logo-name'>Pear</h1>
            <img width={'85px'} height={"80px"} src={Pear} alt='pear logo'></img>
        </div>
    )
};

export default NavigationBar;
