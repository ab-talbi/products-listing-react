import React from 'react'
import Product from './Product';

const Content = (props) => {
    
    return (
        <div className='content'>
        <div className='number_of_items'>Number of items found is : {props.numberOfItems}</div>
        <div className="container">
          {
            props.dataToShow.length !== 0? 
            props.dataToShow.map((product) => (
              <Product addedList={props.addedList} setAddedList={props.setAddedList} key={product.id} product={product} image="https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400.png"/>
            )) 
            : 
            <div className='no_product_found'>
              No Product Found
            </div>
          }
        </div>
      </div>
    )
}

export default Content