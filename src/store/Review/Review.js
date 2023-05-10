import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart,clearLocalShoppingCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';





const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useNavigate();


    const handleProceedCheckout = () =>{
        
        history("/shipment");


    }
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts =  productKeys.map( key => {
            const product = fakeData.find( ps => ps.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);
    let thankYou;
    if(orderPlaced){
        
    }

    
    return (
        <div>
              <div className="left cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              
            </div>
            

        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(pc => <ReviewItem 
                        key={pc.key}
                        removeProduct={removeProduct}
                       
                        
                        product={pc}></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
           
            
        </div>
        <div className="">
                <Cart cart={cart} handleProceedCheckout={handleProceedCheckout}>
                    
                </Cart>
                
            </div> 
        </div>
    );
};

export default Review;