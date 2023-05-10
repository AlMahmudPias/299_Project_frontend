import React from 'react';
import { Link } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { TbCurrencyTaka } from 'react-icons/tb';


const Cart = (props) => {
    const cart = props.cart;
    const checkout = props.handleProceedCheckout;
    //console.log(cart);
    //const total = cart.reduce( (total, prd) => total + prd.price , 0 )
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if(total > 1000){
        shipping = 0;
    }
    else if(total > 500){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className='margin'>
             <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/store" className="button link">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
              <h4>Total: <TbCurrencyTaka size={25}/>{formatNumber(total)} </h4>
              <h6>Shipping: {shipping}</h6>
              <h6>Vat + Tax: {tax}</h6>
                <h4>SubTotal:<TbCurrencyTaka size={25}/>{grandTotal}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
            </div>
            
            <br/>
            {
                props.children
            }
            
        </div>

        
    );
};

export default Cart;