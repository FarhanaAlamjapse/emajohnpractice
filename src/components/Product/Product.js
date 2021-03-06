import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    //console.log(props);
    return (

        <div className='product'>
            <div>
                <img src={img} alt="" />

            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in-Order soon</small></p>
                <button className='main-button'
                onClick={()=>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faCartShopping} />add to cart</button>
            </div>

        </div>
    );
};
export default Product;