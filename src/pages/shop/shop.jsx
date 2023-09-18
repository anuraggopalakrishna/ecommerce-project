import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './product'
import "./shop.css"

export const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Moto Shoppe</h1>
            </div>
            <div className='row products'>
                {PRODUCTS.map(product => (
                    <div className='col-md-4' key={product.id}>
                        <Product data={product} />
                    </div>
                ))}
            </div>
        </div>

    )
}
