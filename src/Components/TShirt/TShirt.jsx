import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price:${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Bay Now</button>
        </div>
    );
};

export default TShirt;