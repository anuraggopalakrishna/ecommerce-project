import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import "./cart.css"
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  let totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product}></CartItem>
          }
          else{
            return null;
          }
        })}
        {totalAmount > 0 ?
          <div className='checkout'>
            <h3>Subtotal: ${totalAmount}</h3>
            <button onClick={() => navigate("/")}> Continue Shopping</button>
            <button>Checkout</button>
          </div>
    
      :<h3>Your Cart is Empty</h3>
      }
      </div>
    </div>
  )
}
