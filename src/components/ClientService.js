class ClientService{
    show(){
        return fetch('https://client-development.herokuapp.com/api/cliente/',{ /*Cambiar enlaces*/
            method:'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then((res => res.json()));
    }

    create(client){ /*https://client-development.herokuapp.com/api/cliente/ */
        return fetch('https://client-development.herokuapp.com/api/cliente/',{
            method:'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(client)
        }).then((res => res.json())
        .catch((err) => console.error('Error: ',err))
        .then(response => console.log('Success:', response)));
    }
    /**http://localhost:8080/api/v1/cliente/ */
    getClientByRfc(rfc){
        //console.log(rfc);
        return fetch('https://client-development.herokuapp.com/api/cliente/'+ rfc,{
            method:'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then((res => res.json()));
    }

    updateClient(client, rfc){
        return fetch('https://client-development.herokuapp.com/api/cliente/'+rfc,{
            method: 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(client,rfc)
        }).then((res => res.json())
        .catch((err) => console.error('Error: ',err))
        .then(response => console.log('Success:', response)));
    }

    delete(rfc){
        return fetch('https://client-development.herokuapp.com/api/cliente/'+rfc,{
            method: 'DELETE',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

export default new ClientService();