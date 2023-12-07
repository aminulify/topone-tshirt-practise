import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import Cart from '../Cart/Cart';
import './Home.css';
import toast, {Toaster} from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart] = useState([]);
    // console.log(tshirts);

    const handleAddToCart = tshirt =>{
        // exist 
        const exists = cart.find(ts => ts._id == tshirt._id);
        if(exists){
           toast('Here is your toast.',{
                style: {
                    background: '#334155',
                    color:'white',
                    border: '1px solid #334155',
                    fontWeight: 'bold'
                }
            });
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
            {
                tshirts.map(tshirt => <Tshirts
                key={tshirts._id}
                tshirt = {tshirt}
                handleAddToCart = {handleAddToCart}
                ></Tshirts>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleRemoveFromCart = {handleRemoveFromCart}
                ></Cart>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Home;