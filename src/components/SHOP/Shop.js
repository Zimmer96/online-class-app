import React, { useState } from 'react';
import './Shop.css'
import Product from '../PRODUCT/Product';
import onlineClass from '../../fakeData/onlineCourse';
import Cart from '../Cart/Cart';
const Shop = () => {
    const firstData = onlineClass.slice(0,16);
    const [product,setProduct] = useState(firstData);
    const [cart,setcart] = useState([]);
    const handleAddCart = (product)=>{
       
         const newCart = [...cart,product];
         setcart(newCart);
    }
    return (
        <div className="shop-container">
          <div className="product-container">
        {
            product.map(product => <Product handleAddCart={handleAddCart} product={product}></Product>)
        }
          </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;