import React from "react";
import { Button, Form } from "react-bootstrap";

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            usernameOrEmail:"",
            password:"",
        }

        this.login = this.login.bind(this);
    }

    changeEmailUserHandler = (ev) => {
        this.setState({usernameOrEmail: ev.target.value});
    }

    changePasswordHandler = (ev) => {
        this.setState({password: ev.target.value});
    }

    login = () => {
        const token = localStorage.getItem('jwt')
        fetch('https://autenticacion-p.herokuapp.com/login/auth/user', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers:{
            "Content-Type": "application/json",
            "Authorization" : token
        },
        redirect: 'follow',
        referrerPolicy: "no-referrer",
        body: JSON.stringify(this.state),
        })
        .then((r) => {
    if (r.status === 200) {
        console.log('Se ha autentificado')
        return r.json()
    }
    return {}
    }).then((j) => {
        if(JSON.stringify(j).includes("data")){
            console.log(j.data)
            localStorage.setItem('jwt', j.data)
            localStorage.setItem('user', this.state.usernameOrEmail)
            
            console.log('Se ha guardado el jwt')
        }else{
            console.log("Credenciales incorrectas")
            
        }
    })
    .catch((e) => {
    console.log(e);
    });
}
    cancel = () => {
        this.props.history.push('/show');
    } 

    render() {
    return (
        <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo o usuario</Form.Label>
        <Form.Control type="email" placeholder="Correo o usuario" 
        name="usernameOrEmail" value={this.state.usernameOrEmail} onChange={this.changeEmailUserHandler}/>
        <Form.Text className="text-muted">
        Se requiere iniciar para realizar la acción.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" 
        name="password" value={this.state.password} onChange={this.changePasswordHandler}/>
        </Form.Group>
        <Button variant="primary" type="button" onClick={this.login}>
        Acceder
        </Button>
        </Form>
        <Button variant="secondary" onClick={this.cancel.bind(this)}>
            Close
        </Button>
        </>
        );
    }
}

export default Login;