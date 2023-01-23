import React from 'react'
import { useState } from 'react'

const Product = (props) => {
  const [count, setCount] = useState(1);

  const handleCountPlus = () => {
    if(props.product.quantity){
      if(count < props.product.quantity){
        setCount(count + 1);
      }
    }else{
      setCount(count + 1);
    }
    
  }

  const handleCountMoins = () => {
    if(count > 1)
      setCount(count - 1);
  }

  return (
    <div className='product'>
        <div className='description'>
            <p>{props.product.description}</p>
        </div>
        <div className='image'>
            <img src={props.product.image? props.product.image : props.image} alt={props.product.name} />
        </div>
        <div className='product_footer'>
            <span>{props.product.price} MAD</span>
            <button className='quantity' onClick={()=>{handleCountPlus()}}>+</button>
            <span>{count}</span>
            <button className='quantity' onClick={()=>{handleCountMoins()}}>-</button>
            <span>{props.product.price * count} MAD</span>
            <h3>{props.product.name}</h3>

            <button className="addtocart">ADD TO CART</button>

        </div>
        
    </div>
  )
}

export default Product