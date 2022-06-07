import React, { useEffect } from "react";
import "../../src/bootstrap.css";

const ClientFetch = (props) => {
    const {id,nombre,apellidoPaterno, apellidoMaterno, rfc} = props;
    useEffect(()=>{
        const fnExito = (res) => {console.log(res);};
        const fnFallo = (err) => {console.log(err);};
        
        fetch('https://desarrollo-software-123.herokuapp.com/api/v1/cliente/show').then(res => res.json()).then(fnExito).catch(fnFallo);
    })
    return(
        <div className="card m-3 p-2">
            <h1>{id}</h1>
            <h2>{nombre}</h2>
            <h2>{apellidoPaterno}</h2>
            <h2>{apellidoMaterno}</h2>
            <h2>{rfc}</h2>
            <button>Pick</button>
        </div>
    )
}

export {ClientFetch};