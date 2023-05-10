import React from 'react';
import './ReviewItem.css';
import { AiFillDelete } from 'react-icons/ai';

import { TbCurrencyTaka } from 'react-icons/tb';

const ReviewItem = (props) => {
    const {name,price,quantity,img,key} = props.product;
    

    console.log(props.product.name);
    return (
        <div >
            <div className="row cart-size">
          <div className="col-12">
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                <img src={img} alt="" className='cart'/>
                </div>
                <div className="col-12">
                  <h6>{name}</h6>
                  <p>Size: 1</p>
                  <p>Color: Red</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price"><TbCurrencyTaka size={20}/>{price}</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    min={1}
                    max={10}
                    id=""
                    value={quantity}
                  />
                </div>
                <div>
                  <AiFillDelete onClick={()=>props.removeProduct(key)} className="text-danger " />
                </div>
              </div>
             
            </div>
          </div>
             
        </div>
            
            
            
        </div>
        
        
    );
};

export default ReviewItem;