import React, { Component } from 'react';
import ClientService from './ClientService';

class UpdateClientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            nombre: '',
            primerApellido: '',
            segundoApellido: '',
            rfc: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeApepaHandler = this.changeApepaHandler.bind(this);
        this.changeApemaHandler = this.changeApemaHandler.bind(this);
        this.changeRFCHandler = this.changeRFCHandler.bind(this);
        this.updateClient = this.updateClient.bind(this);
    }

    /*Se dispara al renderizar el component: Se hace en automatico */
    componentDidMount(){
        ClientService.getClientById(this.state.id).then((res) => {
            let cliente = res.data;
            //console.log(res.data);
            this.setState({
                nombre: cliente.nombre, 
                primerApellido: cliente.primerApellido, 
                segundoApellido: cliente.segundoApellido, 
                rfc: cliente.rfc});
        });
    }

    updateClient = (e) => {
        e.preventDefault();
        let cliente = {nombre: this.state.nombre, primerApellido: this.state.primerApellido, segundoApellido: this.state.segundoApellido, rfc: this.state.rfc};
        console.log('Cliente => ' + JSON.stringify(cliente));
        console.log('ID => ' + JSON.stringify(this.state.id));

        ClientService.updateClient(cliente,this.state.id).then(res => {
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
                            <h3 className="text-center">ACTUALIZAR CLIENTE</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>ID: </label>
                                        <input placeholder="ID" name="id" className="form-control" value={this.state.id}type="text" onChange={this.changeNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Nombre: </label>
                                        <input placeholder="Nombre" name="nombre" className="form-control" value={this.state.nombre}type="text" onChange={this.changeNameHandler}></input>
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
                                    <button className="btn btn-success" onClick={this.updateClient}>Guardar</button>
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

export default UpdateClientComponent