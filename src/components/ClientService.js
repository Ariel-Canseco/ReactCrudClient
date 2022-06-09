class ClientService{
    show(){ /*https://client-development.herokuapp.com/api/cliente/ http://localhost:8080/api/v1/cliente/show https://desarrollo-software-123.herokuapp.com/api/v1/cliente/show*/
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
        }).then((res => res.json()));
    }
    /**http://localhost:8080/api/v1/cliente/ */
    getClientByRfc(rfc){
        //console.log(id);
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

// const _put = (url,payload,fnExito,fnFallo) =>{
//     fetch(url,{
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(payload)
//     })
//     .then((resp)=> resp.json())
//     .then(fnExito)
//     .catch(fnFallo);
// };

// async function deleteData(ID){
//     URI = 'http://localhost:8080/api/v1/cliente/delete/' + ID
//     console.log(URI)
//     const response = await fetch(URI,{
//         method: 'DELETE',
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers: {'Content-Type': 'application/json'
//     },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body:{
//             idCliente: ID
//         }
//     });
//     return response.json();
// }
export default new ClientService();