import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
  
    const totalPrice = cart.reduce((sum,product) => sum + product.price,0);
    const tax = formatNumber(totalPrice*.15);
    const grandTotalPrice = totalPrice + tax;
    return (
        <div className="cart">
            <div className="cart-price">
            <h1>Review cart </h1>
            <p>Number of products: {cart.length}</p>
            <p>Product price: {totalPrice}</p> 
            <p>Tax rate: {tax}</p>
            </div>
          <div>
          <p>Grand Total: {grandTotalPrice}</p>
          </div><br/>
           
        <button className='add-button'><FontAwesomeIcon icon={faShoppingCart}/> Confirm shopping</button>
        </div>
    );
};

export default Cart;