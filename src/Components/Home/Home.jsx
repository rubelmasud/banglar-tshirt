import React, { useState } from 'react';
import { createBrowserRouter, useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [cart, setCart] = useState([])
    const tshirts = useLoaderData()

    const handleAddToCart = (tshirt) => {

        const exists = cart.find(ts => ts._id === tshirt._id)

        if (exists) {
            toast("This products is already added from to cart!");
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }

    }

    const handleToRemoveItems = (id) => {
        const remaining = cart.filter(shirt => shirt._id !== id)
        setCart(remaining)
    }


    return (


        <div className='tshirts-container'>

            <div className="tshirt-section">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-section">
                <ToastContainer />
                <Cart
                    cart={cart}
                    handleToRemoveItems={handleToRemoveItems}

                />
            </div>
        </div>
    );
};

export default Home;