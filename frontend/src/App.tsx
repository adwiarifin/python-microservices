import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Products from './admin/Products';
import Main from './main/Main';
import ProductsCreate from './admin/ProductsCreate';
import ProductEdit from './admin/ProductsEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Main} />
        <Route path='/admin/products' exact component={Products} />
        <Route path='/admin/products/create' exact component={ProductsCreate} />
        <Route path='/admin/products/:id/edit' exact component={ProductEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
