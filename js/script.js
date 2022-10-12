let codificar = document.getElementById('codificar');
let decodificar = document.getElementById('decodificar');
let botao = document.getElementById('botao');
let resultado = document.getElementById('result');
let cesar = document.getElementById('cifraCesar');
let base64 = document.getElementById('base64');

function btnChange(){
    if (decodificar.checked){
        botao.innerText = "DECODIFICAR"
    }
}

function resposta (){
    let mensagem = document.getElementById('mensagem').value;
    if (cesar.checked){
        if (codificar.checked){
            resultado.innerText = codificarCC();
        } else if (decodificar.checked){
            resultado.innerText = decodificarCC();
        }
    }  
    else if (base64.checked){
        if (codificar.checked){
            resultado.innerText = btoa(mensagem);
        } else if (decodificar.checked) {
            resultado.innerText = atob(mensagem);
        } 
    }
    }


function codificarCC(){
    let incremento = parseInt(document.getElementById('incremento').value);
    let mensagem = document.getElementById("mensagem");     
    let matM = mensagem.value.split("");
    let msgNum = matM.map((arrayN) => arrayN.charCodeAt());
    let msgIncremento = msgNum.map((arrayN) => arrayN + incremento);
    let mensagemNova = msgIncremento.map((arrayN) => String.fromCharCode(arrayN)).join("");
    return mensagemNova;
}
function decodificarCC(){
    let incremento = parseInt(document.getElementById('incremento').value);
    let mensagem = document.getElementById("mensagem");     
    let matM = mensagem.value.split("");
    let msgNum = matM.map((arrayN) => arrayN.charCodeAt());
    let msgIncremento = msgNum.map((arrayN) => arrayN - incremento);
    let mensagemNova = msgIncremento.map((arrayN) => String.fromCharCode(arrayN)).join("");
    return mensagemNova;
}
