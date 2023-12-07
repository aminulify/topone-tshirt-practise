import React from 'react';
import './Tshirt.css';

const Tshirts = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4 className='text-lg font-bold text-slate-800'>{name}</h4>
            <p className='text-slate-600 mb-2'>Price: ${price}</p>
            <button onClick={()=>{handleAddToCart(tshirt)}} className='buy-btn'>Buy Now</button>
        </div>
    );
};

export default Tshirts;