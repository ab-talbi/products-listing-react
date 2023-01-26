import React from 'react'

const Sidebar = (props) => {

    const handleDeleteProductAdded = (id) =>{
        props.setAddedList((current) =>
          current.filter((product) => product.id !== id)
        );
        let productElement = document.querySelector('#'+id);
        if(productElement !== null){
            productElement.classList.add('addtocart');
            productElement.classList.remove('added');
            productElement.innerHTML = 'Add To Cart';
        }   
    }

    return (
        <div className='sidebar'>
        <h3>Products added</h3>
        {
          props.addedList.map((product) => (
            <button key={product.id} onClick={()=>{handleDeleteProductAdded(product.id)}}>{product.name}</button>
          )) 
        }
        </div>
    )
}

export default Sidebar