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

function App() {
  return (
    <div className="App">

      <div className='container'>

        <h1>COMPRAS ONLINE</h1>
        <table className="table table-striped">
          <thead>
            <tr className='bg-danger'>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Arroz</td>
              <td>3</td>
              <td>30</td>
            </tr>
            <button className='btn btn-warning'>X</button>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
