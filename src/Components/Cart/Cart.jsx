import React from 'react';

const Cart = (props) => {
    const {strMeal} = props.cart;
   
    return (
        <div className='text-start'>
            
            <p><span className='text-danger fw-bold'>Food:</span> {strMeal}</p>
        </div>
    );
};

export default Cart;