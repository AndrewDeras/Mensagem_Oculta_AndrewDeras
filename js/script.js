console.log("Andrew");
let cesar = document.getElementById('cifraCesar');
let base64 = document.getElementById('base64');let codificar = document.getElementById('codificar');
let decodificar = document.getElementById('decodificar');
let botao = document.getElementById('botao');
let resultado = document.getElementById('result');
let divIncremento = document.getElementById('incre');

function mostrar(){
    divIncremento.style.display = 'block';   
}

function esconder(){
    divIncremento.style.display = 'none';
}

cesar.addEventListener('change', mostrar);
base64.addEventListener('change', esconder);

function btnChange(){
    if (codificar.checked){
        botao.innerText = 'CODIFICAR';
    }
    else {
        botao.innerText = 'DECODIFICAR';
    } 
}

function resposta (){
    let mensagem = document.getElementById('mensagem').value;
    if (cesar.checked){
        if (codificar.checked){
            resultado.innerText = codificarCC();
        } else if (decodificar.checked){
            resultado.innerText = decodificarCC();
        } else {
            alert('Por favor selecione se deseja codificar ou decodificar a mensagem!!');
        }
    }  
    else if (base64.checked){
        if (codificar.checked){
            resultado.innerText = btoa(mensagem);
        } else if (decodificar.checked) {
            resultado.innerText = atob(mensagem);
        } else {
            alert('Por favor selecione se deseja codificar ou decodificar a mensagem!!');
        }
    }
    else {
        alert ("Selcione uma opção de criptografia e se deseja codificar ou decodificar!!")
    }
}
     
function codificarCC(){
    let incremento = parseInt(document.getElementById('incremento').value);
    let mensagem = document.getElementById("mensagem").value;
    //transformar a mensagem em um array
    let matrizMensagem = mensagem.split(''); 
    // transformar cada elemento do array em charCode
    let mensagemChar = matrizMensagem.map((caracteres)=> caracteres.charCodeAt());    
    // já com a mensagem em formato charCode, adicionar o incremento
    let mensagemCharMaisIncremento = mensagemChar.map((caracteres) => caracteres + incremento );
    // feito o incremento, transformar o array em formato String e separar cada elemento com espaço vazio com a ajuda da função join 
    let mensagemCodificada = mensagemCharMaisIncremento.map((caracteres) => String.fromCharCode(caracteres)).join("");
    //retornar a mensagem codificada
    return mensagemCodificada;
}
function decodificarCC(){
    let incremento = parseInt(document.getElementById('incremento').value);
    let mensagem = document.getElementById("mensagem").value;
    //transformar a mensagem em um array
    let matrizMensagem = mensagem.split(''); 
    // transformar cada elemento do array em charCode
    let mensagemChar = matrizMensagem.map((caracteres)=> caracteres.charCodeAt());    
    // já com a mensagem em formato charCode, subtrair o incremento
    let mensagemCharMaisIncremento = mensagemChar.map((caracteres) => caracteres - incremento );
    // feito o incremento, transformar o array em formato String e separar cada elemento com espaço vazio com a ajuda da função join 
    let mensagemDecodificada = mensagemCharMaisIncremento.map((caracteres) => String.fromCharCode(caracteres)).join("");
    //retornar a mensagem codificada
    return mensagemDecodificada;
}

