class ClientService{
    show(){
        const token = localStorage.getItem('jwt')
        return fetch('https://client-app-t.herokuapp.com/api/cliente/',{ 
            method:'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                "Authorization": token
            }
        }).then((res => res.json()));
    }

    create(client){ //https://client-development.herokuapp.com/api/cliente/
        const token = localStorage.getItem('jwt')
        console.log(token)
        return fetch('https://client-app-t.herokuapp.com/api/cliente/',{
            method:'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type':'application/json',
                "Authorization": token
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(client)
        }).then((res => console.log(res.json())))
    }
    getClientByRfc(rfc){
        const token = localStorage.getItem('jwt')
        return fetch('https://client-app-t.herokuapp.com/api/cliente/'+ rfc,{
            method:'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                "Authorization": token
            }
        }).then((res => res.json()));
    }

    updateClient(client, rfc){
        const token = localStorage.getItem('jwt')
        return fetch('https://client-app-t.herokuapp.com/api/cliente/'+rfc,{
            method: 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                "Authorization": token
            },
            body: JSON.stringify(client,rfc)
        }).then((res => res.json()));
    }

    delete(rfc){
        const token = localStorage.getItem('jwt')
        return fetch('https://client-app-t.herokuapp.com/api/cliente/'+rfc,{
            method: 'DELETE',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json',
                "Authorization": token
            }
        })
    }
}

export default new ClientService();