import React from 'react';
import img from "../assets/imageError.png"
const LaptopError = ({message}) => {
    return (
        <div className='laptop-form-error'>
            <p>{message}</p>
            <img style={{width:22, height:20}} src={img} alt="" />
        </div>
    );
};

export default LaptopError;