import './App.css'
import Toggle from './Components/Toggle';
import Clock from './Components/Clock';
import FiltrableProductTable from './Components/FilterableProductTable';
import {products} from './products';


function App() {
  return (
    <div className="App">
      <FiltrableProductTable 
        products = {products}/>
    </div>
  );
}

export default App;
