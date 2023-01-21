import React from 'react'

const Product = (props) => {

  return (
    <div className='product'>
        <div className='description'>
            <p>{props.product.description}</p>
        </div>
        <div className='image'>
            <img src={props.image} alt={props.product.name} />
        </div>
        <div className='product_footer'>
            <span>{props.product.price} MAD</span>
            <button className='quantity'>+</button>
            <span>1</span>
            <button className='quantity'>-</button>
            <h3>{props.product.name}</h3>

            <button className="addtocart">ADD TO CART</button>

        </div>
        
    </div>
  )
}

export default Product