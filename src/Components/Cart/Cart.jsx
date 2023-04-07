import React from 'react';

const Cart = ({ cart, handleToRemoveItems }) => {

    let Message;
    if (cart.length === 0) {
        Message = <p>place add some product</p>
    }
    else {
        Message = <p>Thanks for you add to cart!!!!</p>
    }

    return (
        <div>
            <h2>Order Summery:{cart.length}</h2>
            {Message}
            {
                cart.map(tshirt => <h3 key={tshirt._id}>{tshirt.name} <button onClick={() => handleToRemoveItems(tshirt._id)}>Delete</button></h3>)
            }

        </div>
    );
};

export default Cart;