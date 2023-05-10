import React from 'react';

import './Product.css';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { TbCurrencyTaka } from 'react-icons/tb';
import { BsCart4, BsCartFill } from 'react-icons/bs';


const Product = ({product , handleAddProduct}) => {
    
    const { img, name, seller, price, stock, key,star } = product;
  
    return (
        <div >
            <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    
                    <img

                      src={img}
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                  <h6 className='seller'>{seller}</h6>
                    <h5>
                    <Link className='link' to={"/product/"+key}>{name}</Link>
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={star}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b className='product-price'><TbCurrencyTaka className='tk' size={25}/>{price}</b>
                    <br />
                    <button className='add-to-cart-button gap-15' onClick={() => handleAddProduct(product)}>
                     <BsCartFill/> add to cart
                    </button>
                  </div>
                </div>
            
        </div>
    );
};

export default Product;