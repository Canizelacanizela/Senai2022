const user = document.querySelector('#user');
const pass = document.querySelector('#senha');

function login(){
    let inf = {
        "nome": user.value,
        "senha": pass.value
    }

    fetch('http://10.87.207.2:3000/login',{
            'method' : 'POST',
            'headers' : {
                'Content-Type' : 'application/json'
           },
            'body' :JSON.stringify(inf)
       })
       .then(resp => {return resp.json() })
       .then(data =>  {
               if(data.err === undefined){
                    window.location.href = "../salgado/"
               }
       })
   
    }
    