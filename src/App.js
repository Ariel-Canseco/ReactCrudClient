// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'//import FormBasic from './components/FormBasic';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Table, Button, Container, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup} from 'reactstrap';
// import { render } from '@testing-library/react';
import ClientComponent from './components/ClientComponent';
import CreateClientComponent from './components/CreateClientComponent';
import UpdateClientComponent from './components/UpdateClientComponent';

// const data = [
//   'https://desarrollo-software-123.herokuapp.com/api/v1/cliente/show'
// ];

function App() {
  // state = {
  //   data: data
  // }
    
  //render(){
    return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Router>
        <div className="container">
          <div className="container">
            {/* <FormBasic/> */}
              <Switch> 
                <Route path="/" exact component = {ClientComponent}></Route>
                <Route path="/show" component = {ClientComponent}></Route>
                <Route path="/add-client" component = {CreateClientComponent}></Route>
                <Route path="/update-client/:id" component = {UpdateClientComponent}></Route>
                  {/* <ClientComponent/> */}
              </Switch>
            </div>
        </div>
        </Router>
    </div>
    // <>
    // <Container>
    // <Button color="primary">Insertar Cliente</Button>
    // <br/><br/>
    // <Table>
    //   <thead><tr>ID<th></th>
    //   <th>RFC</th>
    //   <th>Nombre</th>
    //   <th>Apellidos</th></tr></thead>
    //   <tbody>
    //     {this.state.data.map((elemento)=>(
    //       <tr>
    //         <td>{elemento.id}</td>
    //         <td>{elemento.rfc}</td>
    //         <td>{elemento.nombre}</td>
    //         <td><Button color="primary">Editar</Button>
    //         <Button color="primary">Eliminar</Button></td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </Table>
    // </Container>
    // </>);
    //}
  );
}

export default App;
