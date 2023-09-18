import React, { useContext } from 'react';
import './cart.css'
import { ShopContext } from '../../context/shop-context';
// import { Button } from 'react-bootstrap';

export const CartItem = function (props) {
    const { id, name, price, productImage } = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
    return (

        <div className="cart-item">
            <div className="cart-item-image">
                <img src={productImage} alt={name} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-name">
                    {name}
                </div>
                <div className="cart-item-price">
                    ${price}
                </div>
                <div className="countHandler">
                    <button id="removeBtn" onClick={()=>removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), id)}/>
                    <button id="addBtn" onClick={()=>addToCart(id)}>+</button>
                </div>
            </div>

        </div>
    );
}