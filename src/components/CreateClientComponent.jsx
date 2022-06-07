import React, { Component } from 'react';
import ClientService from '../components/ClientService';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateClientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nombre: '',
            primerApellido: '',
            segundoApellido: '',
            rfc: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeApepaHandler = this.changeApepaHandler.bind(this);
        this.changeApemaHandler = this.changeApemaHandler.bind(this);
        this.changeRFCHandler = this.changeRFCHandler.bind(this);
        this.saveClient = this.saveClient.bind(this);
    }

    saveClient(e) {
        e.preventDefault();
        let cliente = {nombre: this.state.nombre, primerApellido: this.state.primerApellido, segundoApellido: this.state.segundoApellido, rfc: this.state.rfc};
        console.log('Cliente => ' + JSON.stringify(cliente));

        ClientService.create(cliente).then(res => {
            this.props.history.push('/show');
        });
    }

    changeNameHandler = (ev) => {
        this.setState({nombre: ev.target.value});
    }

    changeApepaHandler = (ev) => {
        this.setState({primerApellido: ev.target.value});
    }

    changeApemaHandler = (ev) => {
        this.setState({segundoApellido: ev.target.value});
    }

    changeRFCHandler = (ev) => {
        this.setState({rfc: ev.target.value});
    }

    cancel(){
        this.props.history.push('/show');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">AGREGAR CLIENTE</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Nombre: </label>
                                        <input placeholder="ID" name="id" className="form-control" value={this.state.nombre}type="text" onChange={this.changeNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Apellido Paterno: </label>
                                        <input placeholder="Apellido Paterno" name="apepa" className="form-control" value={this.state.primerApellido}type="text" onChange={this.changeApepaHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Apellido Materno: </label>
                                        <input placeholder="Apellido Materno" name="apema" className="form-control" value={this.state.segundoApellido}type="text" onChange={this.changeApemaHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>RFC: </label>
                                        <input placeholder="RFC" name="rfc" className="form-control" value={this.state.rfc}type="text" onChange={this.changeRFCHandler}></input>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={this.saveClient}>Guardar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateClientComponent;