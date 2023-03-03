const cadastroP = 'http://localhost:3000/produtos/create';
const lista = document.querySelector("#lista");
var data = [];


function cadastrarProduto() {
    //Cria um objeto com os dados dos campos html <input>

    let nome = document.querySelector("#nome").value
    let valor = document.querySelector("#valor").value
    let setor_id = document.querySelector("#setor_id").value

    let corpo = {
        "nome": nome,
        "valor": Number(valor),
        "setor_id": Number(setor_id),
    }
    console.log(corpo)

    let options = {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(corpo)
    };

   
        fetch('http://localhost:3000/produtos/create', options)
            .then(res => { return res.json() })
            .then(resp => {
                console.log(resp)
                
                if (resp != undefined) {
                    console.log("Parabens");
                } else {
                    console.log("Deu errado");
                }
            });
        
    }


    function cadastrarVenda() {
        //Cria um objeto com os dados dos campos html <input>
    
        let id_produtos = document.querySelector("#id_produtos").value
        let quantidade = document.querySelector("#quantidade").value
        let id_vendedor = document.querySelector("#id_vendedor").value
    
        let corpo = {
            "id_vendedor": Number(id_vendedor),
            "detalhes":[{
                "id_produtos": Number(id_produtos),
                "quantidade": quantidade
            }]
        }
        console.log(corpo)
    
        let options = {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(corpo)
        };
    
        fetch('http://localhost:3000/vendas/create', options)
        .then(res => { return res.json() })
        .then(resp => {
            console.log(resp)
            
            if (resp != undefined) {
                console.log("Parabens");
            } else {
                console.log("Deu errado");
            }
        });
    
}