import React from 'react'


export const Product = (props) => {
    const {id, name, price, productImage} = props.data
  return (
    <div className='product'>
        <h2>{name}</h2>
        <div id="product-img-container"><img id="product-img" src={productImage} alt={name}/></div>
      <p className='price'>${price}</p>
        <button className='addToCartBttn' onClick={() => props.addToCart(id)}>Add to Cart</button>
    </div>
  )
}
