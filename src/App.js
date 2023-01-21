import './App.css';
import Product from './components/Product';
import data from './components/data';
import { useState } from 'react';

function App() {
  const [dataToShow, setDataToShow] = useState(data);
  const [numberOfItems, setNumberOfItems] = useState(data.length);
  const temporaryData = [];

  const handleChoose = (item) => {
    if(item !== "All"){
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
  }

  return (
    <div className="App">
      <div className='navbar'>
        <ul>
          <li><button onClick={()=>{handleChoose("All")}} >All</button></li>
          <li><button onClick={()=>{handleChoose("Android")}}>Android</button></li>
          <li><button onClick={()=>{handleChoose("Google")}}>Google</button></li>
          <li><button onClick={()=>{handleChoose("Waze")}}>Waze</button></li>
          <li><button onClick={()=>{handleChoose("YouTube")}}>YouTube</button></li>
        </ul>
      </div>
      <div>Number of items found is : {numberOfItems}</div>
      <div className="container">
        {
          dataToShow.map((product) => (
            <Product key={product.id} product={product} image="https://random.imagecdn.app/200/300"/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
