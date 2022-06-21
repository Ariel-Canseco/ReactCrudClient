import React, { Component } from 'react';
import ClientService from './ClientService';

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, 
    numeros: /^([0-9])*$/,
    direccion: /^[a-zA-Z0-9\s,.#-]+$/
}

const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    //Validando errores cuando esta vacio
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    //Validando errores cuando esta lleno
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });
    
    return valid;
    };

class UpdateClientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rfc: this.props.match.params.rfc,
            nombre: '',
            apellidos: '',
            direccion: '',
            email: '',
            telefono: '',
            estatus: '',
            pin: '',

            formErrors: {
                nombre: '',
                apellidos: '',
                direccion: '',
                email: '',
                telefono: '',
                estatus: '',
                pin: ''
            }
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(formValid(this.state)){
            console.log(`
                --SUBMITTING--
                Nombre: ${this.state.nombre}
                Apellidos: ${this.state.apellidos}
                Direccion: ${this.state.direccion}
                Email: ${this.state.email}
                Telefono: ${this.state.telefono}
                Estatus: ${this.state.estatus}
                Pin: ${this.state.pin}
            `);
        }else{
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            
            case 'nombre':
                formErrors.nombre = expresiones.nombre.test(value) ? '' : 'El nombre no es valido';
                break;
            case 'apellidos':
                formErrors.apellidos = expresiones.nombre.test(value) ? '' : 'El apellido no es valido';
                break;
            case 'direccion':
                formErrors.direccion = expresiones.direccion.test(value) ? '' : 'La direccion no es valida';
                break;
            case 'email':
                formErrors.email = expresiones.correo.test(value) ? '' : 'El correo no es valido';
                break;
            case 'telefono':
                formErrors.telefono = expresiones.telefono.test(value) ? '' : 'El telefono no es valido';
                break;
            case 'estatus':
                formErrors.estatus = expresiones.nombre.test(value) ? '' : 'El estatus no es valido';
                break;
            case 'pin':
                formErrors.pin = expresiones.numeros.test(value) ? '' : 'El pin no es valido';
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    componentDidMount(){
        ClientService.getClientByRfc(this.state.rfc).then((res) => {
            let cliente = res;
            console.log(res);
            this.setState({
                nombre: cliente.data.nombre, 
                apellidos: cliente.data.apellidos, 
                direccion: cliente.data.direccion, 
                email: cliente.data.correo_electronico,
                telefono: cliente.data.no_telefono,
                estatus: cliente.data.estatus,
                pin: cliente.data.pin
            });
        });
    }

    putClient = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'nombre':
                formErrors.nombre = expresiones.nombre.test(value) ? '' : 'El nombre no es valido';
                break;
            case 'apellidos':
                formErrors.apellidos = expresiones.nombre.test(value) ? '' : 'El apellido no es valido';
                break;
            case 'direccion':
                formErrors.direccion = expresiones.direccion.test(value) ? '' : 'La direccion no es valida';
                break;
            case 'email':
                formErrors.email = expresiones.correo.test(value) ? '' : 'El correo no es valido';
                break;
            case 'telefono':
                formErrors.telefono = expresiones.telefono.test(value) ? '' : 'El telefono no es valido';
                break;
            case 'estatus':
                formErrors.estatus = expresiones.nombre.test(value) ? '' : 'El estatus no es valido';
                break;
            case 'pin':
                formErrors.pin = expresiones.numeros.test(value) ? '' : 'El pin no es valido';
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));

        let cliente = {nombre: this.state.nombre, apellidos: this.state.apellidos, direccion: this.state.direccion, correo_electronico: this.state.email, no_telefono: this.state.telefono, estatus: this.state.estatus, pin: this.state.pin};
        console.log('Cliente => ' + JSON.stringify(cliente));
        console.log('RFC => ' + JSON.stringify(this.state.rfc));

        if(formErrors.nombre === '' && formErrors.apellidos === '' && formErrors.direccion === '' && formErrors.email === '' && formErrors.telefono === '' && formErrors.estatus === '' && formErrors.pin === ''){

            ClientService.updateClient(cliente,this.state.rfc).then(res => {
            this.props.history.push('/show');
            }).catch(err => {
            console.log(err);
            }
        );
        }else{
            alert('Debe completar o escribir correctamente todos los campos para poder actualizar los datos');
        }
    }

    cancel(){
        this.props.history.push('/show');
    }

    render() {
        const{ formErrors }=this.state
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">EDITAR CLIENTE</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                        <label>RFC: </label>
                                        <input 
                                        placeholder="RFC" 
                                        name="rfc" 
                                        className="form-control" 
                                        value={this.state.rfc}
                                        type="text" 
                                        onChange={this.handleChange} disabled="disabled"></input>
                                            
                                    </div>
                                    <div className="form-group">
                                        <label>Nombre: </label>
                                        <input 
                                        placeholder="Nombre" 
                                        name="nombre" 
                                        className="form-control" 
                                        value={this.state.nombre}
                                        type="text" 
                                        noValidate
                                        onChange={this.handleChange}></input>

                                        {formErrors.nombre.length > 0 && (
                                            <span className="errorMessage">{formErrors.nombre}</span>)}
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>Apellidos: </label>
                                        <input 
                                        placeholder="Apellidos" name="apellidos" className="form-control" 
                                        value={this.state.apellidos}
                                        type="text" 
                                        noValidate
                                        onChange={this.handleChange}></input>
                                        
                                        {formErrors.apellidos.length > 0 && (
                                            <span className="errorMessage">{formErrors.apellidos}</span>)}
                                    </div>
                                    <div className="form-group">
                                        <label>Direccion: </label>
                                        <input 
                                        placeholder="Direccion" name="direccion" className="form-control" 
                                        value={this.state.direccion}
                                        type="text" 
                                        noValidate
                                        onChange={this.handleChange}></input>

                                        {formErrors.direccion.length > 0 && (
                                            <span className="errorMessage">{formErrors.direccion}</span>)}
                                    </div>
                                    <div className="form-group">
                                        <label>Correo Electrónico: </label>
                                        <input 
                                        placeholder="Email" 
                                        name="email" 
                                        className="form-control" 
                                        value={this.state.email}
                                        type="text" 
                                        noValidate
                                        onChange={this.handleChange}></input>

                                        {formErrors.email.length > 0 && (
                                            <span className="errorMessage">{formErrors.email}</span>)}

                                    </div>
                                    <div className="form-group">
                                        <label>Teléfono: </label>
                                        <input 
                                        placeholder="Teléfono" 
                                        name="telefono" className="form-control" 
                                        value={this.state.telefono}
                                        type="text" 
                                        noValidate
                                        onChange={this.handleChange}></input>

                                        {formErrors.telefono.length > 0 && (
                                            <span className="errorMessage">{formErrors.telefono}</span>)}
                                    </div>
                                    <div className="form-group">
                                        <label>Estatus: </label>
                                        <input 
                                        placeholder="Estatus" 
                                        name="estatus" 
                                        className="form-control" 
                                        value={this.state.estatus}
                                        type="text" 
                                        noValidate
                                        onChange={this.handleChange}></input>

                                        {formErrors.estatus.length > 0 && (
                                            <span className="errorMessage">{formErrors.estatus}</span>)}
                                    </div>

                                    <div className="form-group">
                                        <label>PIN: </label>
                                        <input 
                                        placeholder="PIN" 
                                        name="pin" 
                                        className="form-control" 
                                        value={this.state.pin}
                                        type="text" 
                                        noValidate
                                        onChange={this.handleChange}></input>

                                        {formErrors.pin.length > 0 && (
                                            <span className="errorMessage">{formErrors.pin}</span>)}

                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={this.putClient}>Guardar</button>
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