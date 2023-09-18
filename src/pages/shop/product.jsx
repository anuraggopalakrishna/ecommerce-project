import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
  const { id, name, price, productImage } = props.data
  const { addToCart, cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
      <h2>{name}</h2>
      <div id="product-img-container"><img id="product-img" src={productImage} alt={name} /></div>
      <p className='price'>${price}</p>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}
