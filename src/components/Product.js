import React from 'react'

const Product = (props) => {
  return (
    <div className='movie'>
        <div>
            <p>{props.movie.description}</p>
        </div>
        <div>
            <img src={props.image} alt={props.movie.name} />
        </div>
        <div>
            <span>{props.movie.price}</span>
            <h3>{props.movie.name}</h3>
        </div>
        
    </div>
  )
}

export default Product