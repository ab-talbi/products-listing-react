import './App.css';
import Product from './components/Product';
import data from './components/data';

function App() {
  return (
    <div className="App">
      <div className="container">
        {
          data.map((product) => (
            <Product key={product.id} product={product} image="https://random.imagecdn.app/200/300"/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
