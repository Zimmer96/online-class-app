import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    
    const { name, img, description, enroll, vdesc, seller, price } = props.product;
    return (
        <div>
            <div className="product">
                <div>
                    <img src={img} alt=""/>
                </div>
                <div className="product-name">
                    <h4 className='class'>{name}</h4>
                    <p>{description}</p>
                    <p><small>by {seller}</small></p>
                    <p className='class'>Price : $ {price}</p>
                    <div className='description'>
                    <p className='vdecs'><small>{vdesc}</small></p>
                    <p className='enroll'><small>{enroll} students</small></p>
                    </div>
                    
                    <button onClick={() => props.handleAddCart(props.product)} className="add-button"><FontAwesomeIcon icon={faPlus}/>   Add to cart</button>
                </div>
            </div>


        </div>
    );
};

export default Product;