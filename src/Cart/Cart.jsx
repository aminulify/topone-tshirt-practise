import React from 'react';
import './Cart.css';
import toast, {Toaster} from 'react-hot-toast';

const Cart = ({cart, handleRemoveFromCart}) => {

//    if else condition 
    let message;
    if(cart.length === 0){
        message = <small className='text-red-500'>Please add some products</small>
    }
    else{
        message = <div>
            <p><small className='text-green-500'>Thanks for spending your money</small></p>
        </div>
    }


    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            
            {/* ****** condition inside css template string  */}
            <p><small className={`para-text ${cart.length > 5 ? 'text-green-500' : 'text-slate-200'}`}>5 items successfully done!</small></p>

            {/* ternary condition  */}
            {cart.length > 2 ? <p><small className='text-green-500'>Thing Big!!</small></p> : <p><small className='text-red-500'>Gorib!!</small></p>}

            {message}
            {
                cart.map(tshirt =><p 
                    key={tshirt._id}
                    >
                        {tshirt.name}

                    <button onClick={()=>{handleRemoveFromCart(tshirt._id)}} className='ml-20 close-item'>X</button></p>)
            }

            {/* And && condition operator run just true condition  */}
            {
                cart.length === 2 && toast('Congratulation Got 2000 points for 2 items')
            }

            {/* OR conditional operator  run just false condition*/}
            {
                cart.length === 3 || <p><small className='text-slate-500'>Buy More Than 3 Items</small></p>
            } 
            <Toaster></Toaster>
        </div>
    );
};

export default Cart;

/***
 *    CONDITIONAL RENDARING 
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary: condition ? 'true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical OR ( || ): (if the condition is false then the next thing will be displayed)
 * 5. condition inside css
 */