import React from 'react';
import ClientService from './ClientService';
import 'bootstrap/dist/css/bootstrap.min.css';

class ClientComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            client:[]
        }
        /*Adding new stuff*/
        this.addClient = this.addClient.bind(this);
        this.editClient = this.editClient.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
    }

    deleteClient(rfc){
        // rest api
        ClientService.delete(rfc).then(res => {
            this.setState({client: this.state.client.filter(client => client.rfc !== rfc)});
        });
    }

    editClient(rfc){
        this.props.history.push(`/update-client/${rfc}`);
    }

    componentDidMount(){
        ClientService.show().then((res) => {
            this.setState({client: res.data});
        });
    }

    addClient(){
        this.props.history.push('/add-client');
    }

    render(){
        return(
            <div>
                <h1 className="text-center">CLIENT LIST</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addClient}>Agregar Cliente</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>RFC</th> */}
                            <th>RFC</th>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Direccion</th>
                            <th>Correo Electrónico</th>
                            <th>Teléfono</th>
                            <th>Estatus</th>
                            <th>Pin</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            this.state.client.map( 
                                client => /*Poner los atributos de nuestro servicio*/
                                // <tr key = {client.idCliente}>
                                //     <td>{client.idCliente}</td>
                                //     <td>{client.nombre}</td>
                                //     <td>{client.primerApellido}</td>
                                //     <td>{client.segundoApellido}</td>
                                //     <td>{client.rfc}</td>
                                //     <td>
                                <tr key = {client.rfc}>
                                        <td>{client.rfc}</td>
                                        <td>{client.id}</td>
                                        <td>{client.nombre}</td>
                                        <td>{client.apellidos}</td>
                                        <td>{client.direccion}</td>
                                        <td>{client.correo_electronico}</td>
                                        <td>{client.no_telefono}</td>
                                        <td>{client.estatus}</td>
                                        <td>{client.pin}</td>
                                        <td>
                                        <button onClick={()=> this.editClient(client.rfc)} className="btn btn-info"> Actualizar</button>
                                        <button style={{marginLeft: "10px"}} onClick={()=> this.deleteClient(client.rfc)} className="btn btn-danger"> Eliminar</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ClientComponent