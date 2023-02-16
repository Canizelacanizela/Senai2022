//TELEFONE v1

// var btBusca = document.querySelector("button");

// btBusca.addEventListener("click", CriarNumeros);


// function CriarNumeros(numbers){

// return "(" + numbers[0]  + numbers[1] + numbers[2]  + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];


// }

//========================================================================
//TELEFONE v2

// var btBusca = document.querySelector("button");

// btBusca.addEventListener("click", cretePhoneNumber);


// function createPhoneNumber(numbers) {
//  var format = "(xxx) xxx-xxxx";

// for(var i = 0; i < numbers.length; i++){

//   format = format.replace('x', numbers[i]);
// }

// return format;
// }

//-------------------------------------------------------------------

//---------------------------------CPF-------------------------------

//-------------------------------------------------------------------

function  checaCPF(input){
    const cpfformat = input.value.replace(/\D/g,'')
    let mensagem = ''

if(!checaCPF(cpfFormatado)){
    mensagem = 'O CPF não é valido.'
}

    input.setCustomValidity(mensagem)
}

function checaCPF(cpf){
    const Valores = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',

    ]
    let cpfValido = true

    Valores = forEach(valor => {
        if(valor == cpf) {
            cpfValido == false
        }
    })
    return cpfValido
}

function checaEstruturaCPF(cpf){
    const multiplicador = 10

    return checaVerificador(cpf, multiplicador)
}

function confirmaDigito(soma){
    return 11 - (soma % 11)
}

//----------------------------------------------------------------

//-----------------------GERADOR DE CPF---------------------------
//========================FUNCIONANDO===========================
//----------------------------------------------------------------

  const cpf = document.getElementById("cpf"); 

function gerarCpf() {
  const num1 = aleatorio();
  const num2 = aleatorio();
  const num3 = aleatorio();
  const dig1 = dig(num1, num2, num3);
  const dig2 = dig(num1, num2, num3, dig1);
  return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
}

function dig(n1, n2, n3, n4) { 
  const nums = n1.split("").concat(n2.split(""), n3.split(""));
  if (n4 !== undefined){ 
    nums[9] = n4;
  }
  
  let x = 0;
  for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }
  
  const y = x % 11;
  return y < 2 ? 0 : 11 - y; 
}

function aleatorio() {
  const aleat = Math.floor(Math.random() * 999);
  return ("" + aleat).padStart(3, '0'); 
}

cpf.value = gerarCpf();

//------------------------------------------------------------

// -----------------VALIDAR PLACA DE VEICULO-------------------

//--------------------------------------------------------------

var placa = "ABC1234";
const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
if(regexPlaca.test(placa)){
 console.log("Placa válida");
} else {
 console.log("Placa inválida");
}

function validarPlaca(placa){
  var resposta = "placa inválida";
  const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
  const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
  const regexPlacaMercosulMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
  if(regexPlaca.test(placa)){
  resposta = "Placa válida no formato atual";
  }
  if(regexPlacaMercosulCarro.test(placa)){
  resposta = "Placa válida (padrão Mercosul - carro)";
  }
  if(regexPlacaMercosulMoto.test(placa)){
  resposta = "Placa válida (padrão Mercosul - moto)";
  }
  return resposta;
 }
 


//--------------------------------------------------------------------