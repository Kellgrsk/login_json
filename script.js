//Função que envia os dados para o servidor JSON
// POST - CREATE

function enviarDados(){
    //Obter os valores do input
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value


    //Enviar o dados para o servidor utilizar o FECTH
    fetch('http://localhost:3000/pessoas', {
        method: 'POST',        //Método HTTP utilizando o POST
        headers: {
           'content-Type': 'application/json' //Tipo de conteúdo enviado JSON
        },         
        body: JSON.stringify({nome: nome, senha: senha })      //Dados a serem enviados    
    }).then(resposta => resposta.json())
}