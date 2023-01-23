import './App.css';
import Product from './components/Product';
import data from './components/data';
import { useState, useEffect } from 'react';

function App() {
  const [dataToShow, setDataToShow] = useState(data);
  const [numberOfItems, setNumberOfItems] = useState(data.length);
  const temporaryData = [];

  const [clicked, setClicked] = useState([true,false,false,false,false]);

  const handleChoose = (index,item) => {
    if(index !== 0){
      for (let i=0; i < data.length; i++) {
        if (data[i].name.includes(item)){
          temporaryData.push(data[i]);
        }
      }
      setDataToShow(temporaryData);
      setNumberOfItems(temporaryData.length);
    }else{
      setDataToShow(data);
      setNumberOfItems(data.length);
    }

    //so that the button that is clicked will be colourd
    let tempBool = [false, false, false, false, false] ;
    for(let i = 0 ; i < clicked.length ; i++){
      if( i === index)
        tempBool[i] = true;
      else
        tempBool[i] = false;
    }
    setClicked(tempBool);
  }

  //when the clicked state is updated, thz button clicked will be coulourd
  useEffect( () => {
    for(let i = 0; i < clicked.length; i++){
      if(clicked[i])
        document.getElementById(i).classList.add('clicked_item');
      else
        document.getElementById(i).classList.remove('clicked_item');
    }
  }, [clicked]);

  return (
    <div className="App">
      <div className='navbar'>
        <ul>
          <li><button id='0' onClick={()=>{handleChoose(0,"All")}} >All</button></li>
          <li><button id='1' onClick={()=>{handleChoose(1,"Android")}}>Android</button></li>
          <li><button id='2' onClick={()=>{handleChoose(2,"Google")}}>Google</button></li>
          <li><button id='3' onClick={()=>{handleChoose(3,"Waze")}}>Waze</button></li>
          <li><button id='4' onClick={()=>{handleChoose(4,"YouTube")}}>YouTube</button></li>
          <li><button id='5' onClick={()=>{handleChoose(5,"Null")}}>Null</button></li>
        </ul>
      </div>
      <div className='content'>
        <div className='number_of_items'>Number of items found is : {numberOfItems}</div>
        <div className="container">
          {
            dataToShow.length !== 0? 
            dataToShow.map((product) => (
              <Product key={product.id} product={product} image="https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400.png"/>
            )) 
            : 
            <div className='no_product_found'>
              No Product Found
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
