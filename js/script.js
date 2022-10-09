console.log("andrew");
const codificar = document.getElementById('codificar');
const decodificar = document.getElementById('decodificar');
const botao = document.getElementById('botao');

function mudaTexto () {
    if (decodificar.checked){
        botao.innerText = "decodificar";
    } else if (codificar.checked){
        botao.innerText = "codificar";
    }
}
//__________________________________________________________________
