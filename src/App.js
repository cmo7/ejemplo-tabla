import './App.css'
import FiltrableProductTable from './Components/FilterableProductTable';
import {products} from './products';


function App() {
  return (
    <div className="App">
      <h1>Productos</h1>
      <FiltrableProductTable 
        products = {products}/>
    </div>
  );
}

export default App;
