import React, { Component } from 'react';
import ClientService from '../components/ClientService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles/formStyle.css';

const expresiones = {
    rfc: /^[A-ZÑ&]{3,4}\d{6}(?:[A-Z\d]{3})?$/,
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

class CreateClientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rfc: '',
            nombre: '',
            apellidos: '',
            direccion: '',
            email: '',
            telefono: '',
            estatus: '',
            pin: '',

            formErrors: {
                rfc: '',
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
                Rfc: ${this.state.rfc}
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
            case 'rfc':
                formErrors.rfc = expresiones.rfc.test(value) ? '' : 'El RFC no es valido';
                break;
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

    postClient = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'rfc':
                formErrors.rfc = expresiones.rfc.test(value) ? '' : 'El RFC no es valido';
                break;
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

        let cliente = {rfc:this.state.rfc, nombre: this.state.nombre, apellidos: this.state.apellidos, direccion: this.state.direccion, correo_electronico: this.state.email, no_telefono: this.state.telefono, estatus: this.state.estatus, pin: this.state.pin};
        console.log('Cliente => ' + JSON.stringify(cliente));

        if(formErrors.rfc === '' && formErrors.nombre === '' && formErrors.apellidos === '' && formErrors.direccion === '' && formErrors.email === '' && formErrors.telefono === '' && formErrors.estatus === '' && formErrors.pin === ''){

            ClientService.create(cliente).then(res => {
                this.props.history.push('/show');
            }
            ).catch(err => {
                console.log(err);
            }
            );
        }else{
            alert('Debe completar todos los campos para poder agregar un cliente o escribir correctamente los datos');
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
                            <h3 className="text-center">AGREGAR CLIENTE</h3>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} noValidate>
                                <div className="form-group">
                                        <label>RFC: </label>
                                        <input 
                                        placeholder="RFC" 
                                        name="rfc" 
                                        className="form-control" 
                                        value={this.state.rfc}
                                        type="text" 
                                        noValidate
                                        onChange={this.handleChange}></input>
                                        {formErrors.rfc.length > 0 && (
                                            <span className="errorMessage">{formErrors.rfc}</span>)}
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
                                        noValidate
                                        onChange={this.handleChange}
                                        >
                                        </input>
                                        {formErrors.nombre.length > 0 && (
                                            <span className="errorMessage">{formErrors.nombre}</span>)}
                                    </div>
                                    <div className="form-group">
                                        <label>Apellidos: </label>
                                        <input 
                                        placeholder="Apellidos" name="apellidos" className="form-control"
                                        value={this.state.apellidos}
                                        type="text"
                                        autoComplete="off"
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
                                        type="email" 
                                        noValidate
                                        onChange={this.handleChange}>
                                        </input>

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
                                        onChange={this.handleChange}>
                                        </input>

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
                                        onChange={this.handleChange}
                                        ></input>

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
                                        onChange={this.handleChange}>
                                        </input>

                                        {formErrors.pin.length > 0 && (
                                            <span className="errorMessage">{formErrors.pin}</span>)}
                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={this.postClient}>Guardar</button>
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