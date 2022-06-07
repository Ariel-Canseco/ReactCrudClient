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

    deleteClient(idCliente){
        // rest api
        ClientService.delete(idCliente).then(res => {
            this.setState({client: this.state.client.filter(client => client.idCliente !== idCliente)});
        });
    }

    editClient(idCliente){
        this.props.history.push(`/update-client/${idCliente}`);
    }

    componentDidMount(){
        ClientService.show().then((res) => {
            this.setState({client: res});
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
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>RFC</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            this.state.client.map(
                                client => /*Poner los atributos de nuestro servicio*/
                                <tr key = {client.idCliente}>
                                    <td>{client.idCliente}</td>
                                    <td>{client.nombre}</td>
                                    <td>{client.primerApellido}</td>
                                    <td>{client.segundoApellido}</td>
                                    <td>{client.rfc}</td>
                                    <td>
                                        <button onClick={()=> this.editClient(client.idCliente)} className="btn btn-info"> Actualizar</button>
                                        <button style={{marginLeft: "10px"}} onClick={()=> this.deleteClient(client.idCliente)} className="btn btn-danger"> Eliminar</button>
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