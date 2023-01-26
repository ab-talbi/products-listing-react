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

  const handleAddToCart = (item) => {
    let exist = false;
    for(let i = 0 ; i < props.addedList.length ; i++){
      if(props.addedList[i].id === item.id){
        exist = true;
        break;
      }
    }

    let productElement = document.querySelector('#'+props.product.id);
    if(!exist){
      props.setAddedList(state => [...state, item])

      if(productElement !== null){
        productElement.classList.add('added');
        productElement.classList.remove('addtocart');
        productElement.innerHTML = 'Added';
      }
      
    }else{
      props.setAddedList((current) =>
        current.filter((product) => product.id !== props.product.id)
      );

      if(productElement !== null){
        productElement.classList.add('addtocart');
        productElement.classList.remove('added');
        productElement.innerHTML = 'Add To Cart';
      }
      
    }
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

            <button id={props.product.id} className="button_add addtocart" onClick={()=>{handleAddToCart(props.product)}}>ADD TO CART</button>
        </div>
        
    </div>
  )
}

export default Product