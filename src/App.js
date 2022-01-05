import './App.css';
import bootstrap from 'bootstrap';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from "reactstrap"
import { Link } from 'react-router-dom'
import Compras from './components/Compras';
import NovoProduto from './components/NovoProduto';

function App() {
  return (
    <div className="App">

      <div className='container'>

        <h1 className='titulo'>COMPRAS ONLINE</h1>
        <br />
        <Compras />
        <NovoProduto />
        <button className='btn btn-primary'>Adicionar</button>
      </div>
    </div>
  );
}

export default App;
