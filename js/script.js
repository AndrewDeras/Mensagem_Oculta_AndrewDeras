var incremento = parseInt(document.getElementById('incremento').value);
let botao = document.getElementById('botao');
console.log(incremento);
console.log(typeof incremento);


function codificarM(){
    let mensagem = document.getElementById("mensagem"); 
    let matM = mensagem.value.split("");
    let msgNum = matM.map((arrayN) => arrayN.charCodeAt());
    console.log(msgNum);
    let msgIncremento = msgNum.map((arrayN) => arrayN + incremento);
    console.log(msgIncremento);
    let mensagemNova = msgIncremento.map((arrayN) => String.fromCharCode(arrayN)).join("");
    console.log(mensagemNova);
    return mensagemNova;
}
console.log(codificarM());

function resultado (){
    
}