import React, { Component } from 'react';
import ClientService from '../components/ClientService';
import 'bootstrap/dist/css/bootstrap.min.css';

/*Regular and irregular expressions */
const rfcCompRegex = RegExp(/^[A-ZÑ&]{3,4}\d{6}(?:[A-Z\d]{3})?$/);

class CreateClientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rfc: '',
            // id: '',
            nombre: '',
            apellidos: '',
            direccion: '',
            email: '',
            telefono: '',
            estatus: '',
            pin: '',
        }
        this.changeRfcHandler = this.changeRfcHandler.bind(this);
        // this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeApellidosHandler = this.changeApellidosHandler.bind(this);
        this.changeDireccionHandler = this.changeDireccionHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeTelefonoHandler = this.changeTelefonoHandler.bind(this);
        this.changeEstatusHandler = this.changeEstatusHandler.bind(this);
        this.changePinHandler = this.changePinHandler.bind(this);
        this.saveClient = this.saveClient.bind(this);

    }

    saveClient(e) {
        e.preventDefault();
        let cliente = {rfc:this.state.rfc, nombre: this.state.nombre, apellidos: this.state.apellidos, direccion: this.state.direccion, correo_electronico: this.state.email, no_telefono: this.state.telefono, estatus: this.state.estatus, pin: this.state.pin};
        console.log('Cliente => ' + JSON.stringify(cliente));

        const rfc = cliente.rfc;
        // eslint-disable-next-line eqeqeq
        if(rfcCompRegex.test(rfc) && rfc != '' && cliente.nombre != '' && cliente.apellidos != '' && cliente.direccion != '' && cliente.correo_electronico != '' && cliente.no_telefono != '' && cliente.estatus != '' && cliente.pin != ''){
            
        ClientService.create(cliente).then(res => {
            this.props.history.push('/show');
        });
        }else{
            alert('Debe completar todos los campos para poder agregar un cliente');
        }
    }

    changeRfcHandler = (ev) => {
        this.setState({rfc: ev.target.value});
    }

    changeNameHandler = (ev) => {
        this.setState({nombre: ev.target.value});
    }

    changeApellidosHandler = (ev) => {
        this.setState({apellidos: ev.target.value});
    }

    changeDireccionHandler = (ev) => {
        this.setState({direccion: ev.target.value});
    }

    changeEmailHandler = (ev) => {
        this.setState({email: ev.target.value});
    }

    changeTelefonoHandler = (ev) => {
        this.setState({telefono: ev.target.value});
    }
    
    changeEstatusHandler = (ev) => {
        this.setState({estatus: ev.target.value});
    }

    changePinHandler = (ev) => {
        this.setState({pin: ev.target.value});
    }

    cancel(){
        this.props.history.push('/show');
    }

    render() {
        /*Mandando a llamar a los errores */
        //const{errores}=this.state
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">AGREGAR CLIENTE</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                        <label>RFC: </label>
                                        <input placeholder="RFC" name="rfc" className="form-control" value={this.state.rfc}type="text" onChange={this.changeRfcHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Nombre: </label>
                                        <input 
                                        placeholder="Nombre" 
                                        name="nombre" 
                                        className="form-control" 
                                        value={this.state.nombre}
                                        type="text" 
                                        autoComplete="off" 
                                        onChange={this.changeNameHandler}>
                                        </input>
                                    
                                    </div>
                                    <div className="form-group">
                                        <label>Apellidos: </label>
                                        <input 
                                        placeholder="Apellidos" name="apellidos" className="form-control"
                                        //onKeyUp = {this.handleChange}
                                        //pattern = {cadenaCompRegex}
                                        value={this.state.apellidos}
                                        type="text"
                                        autoComplete="off"
                                        onChange={this.changeApellidosHandler}></input>

                                    </div>
                                    <div className="form-group">
                                        <label>Direccion: </label>
                                        <input placeholder="Direccion" name="direccion" className="form-control" value={this.state.direccion}type="text" onChange={this.changeDireccionHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Correo Electrónico: </label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.email}type="text" onChange={this.changeEmailHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Teléfono: </label>
                                        <input placeholder="Teléfono" name="telefono" className="form-control" value={this.state.telefono}type="text" onChange={this.changeTelefonoHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Estatus: </label>
                                        <input placeholder="Estatus" name="estatus" className="form-control" value={this.state.estatus}type="text" onChange={this.changeEstatusHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>PIN: </label>
                                        <input placeholder="PIN" name="pin" className="form-control" value={this.state.pin}type="text" onChange={this.changePinHandler}></input>
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