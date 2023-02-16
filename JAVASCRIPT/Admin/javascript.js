/* Apenas analistas e desenvolvedores podem possuir Admin os demais são apenas leitores; */
/* Apenas cargos de nível 3 ou superior podem ser Admin; */
/* Cargos inferiores a 3 podem ser removidos da lista de acesso; */

var funcionarios = [
	{
		"funcionario":"Sancho Cedraz",
		"cargo":{
			"nome":"Analista",
			"nível":2
		},
		"autorizado":true
	},		
	{
		"funcionario":"Ionara Pederneiras",
		"cargo":{
			"nome":"Técnico",
			"nível":2
		},
		"autorizado":true
	},
	{
		"funcionario":"Filipe Castanho",
		"cargo":{
			"nome":"Desenvolvedor",
			"nível":1
		},
		"autorizado":false
	},
	{
		"funcionario":"Lívia Bicalho",
		"cargo":{
			"nome":"Analista",
			"nível":3
		},
		"autorizado":true
	},
	{
		"funcionario":"Mauro Varanda",
		"cargo":{
			"nome":"Desenvolvedor",
			"nível":3
		},
		"autorizado":false
	},	
	{
		"funcionario":"Sandro Rosário",
		"cargo":{
			"nome":"Técnico",
			"nível":3
		},
		"autorizado":true
	}
];

var Lista = document.querySelector(".lista-funcio");

function load(){
    funcionarios.forEach(item => {
        let funcio = Lista.cloneNode(true);

        funcio.classList.remove("modelo");

        funcio.querySelector("#nome-funcio").innerHTML = item.nome;
        funcio.querySelector("#lista-funcio").innerHTML = item.qntd;
    });
}
