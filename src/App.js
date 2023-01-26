import './App.css';
import data from './components/data';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  
  const [dataToShow, setDataToShow] = useState(data);
  const [numberOfItems, setNumberOfItems] = useState(data.length);
  const [addedList, setAddedList] = useState([]);

  return (
    <div className="App">
      <Navbar dataToShow={dataToShow} setDataToShow={setDataToShow} numberOfItems={numberOfItems} setNumberOfItems={setNumberOfItems} />
      <Sidebar addedList={addedList} setAddedList={setAddedList}/>
      <Content numberOfItems={numberOfItems} setNumberOfItems={setNumberOfItems} dataToShow={dataToShow} setDataToShow={setDataToShow} addedList={addedList} setAddedList={setAddedList} />
    </div>
  );
}

export default App;
