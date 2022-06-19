class ClientService{
    show(){
        return fetch('https://client-development.herokuapp.com/api/cliente/',{ 
            method:'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then((res => res.json()));
    }

    create(client){ 
        return fetch('https://client-development.herokuapp.com/api/cliente/',{
            method:'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(client)
        }).then((res => res.json()))
    }
    getClientByRfc(rfc){
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
        }).then((res => res.json()));
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