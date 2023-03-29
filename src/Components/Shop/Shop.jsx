import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';


const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
        .then(res => res.json())
        .then(data => setProducts(data.meals))
    },[]);

    const btnDetail = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart);
} 
    return (
        <div className='row mx-3 '>
            <div className=" col row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product =><Products 
                        product={product}
                        btnDetail={btnDetail}
                        key={product.idMeal}
                    ></Products>)
                }
            </div>
            <div className='col col-lg-2 bg-info-subtle mt-5 sticky-md-top'>
                <h2 className='mt-5'>See Details</h2>
                <p className='fw-bold bg-danger-subtle'>Select Items: {cart.length} </p>
                <h6 className='text-primary fs-5 mb-3'>Clickd Items</h6>
                {
                    cart.map(cart => <Cart cart={cart} key={cart.idMeal}></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;