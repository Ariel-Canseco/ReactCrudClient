import React from "react";
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientComponent from './components/ClientComponent';
import CreateClientComponent from './components/CreateClientComponent';
import UpdateClientComponent from './components/UpdateClientComponent';
import Login from './components/Login';

function App() {

    return (
    <div>
      <Router>
        <div className="container">
          <div className="container">
              <Switch> 
                <Route path="/" exact component = {ClientComponent}></Route>
                <Route path="/show" component = {ClientComponent}></Route>
                <Route path="/add-client" component = {CreateClientComponent}></Route>
                <Route path="/update-client/:rfc" component = {UpdateClientComponent}></Route>
                <Route path="/login" component = {Login}></Route>
              </Switch>
            </div>
        </div>
        </Router>
    </div>
  );
}

export default App;
