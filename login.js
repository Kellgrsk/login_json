//GET - READ
//Obter os valores do input
function fazerLogin(){
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value

   //Fazer a requisição GET - READ e buscar em pessoas
   fetch('http://localhost:3000/pessoas').then(resposta => resposta.json()).then(dados =>{
    //Buscar os usuarios e senha que foram digitados e que não são existentes JSON - FIND

    let usuario = dados.find(pessoas => pessoas.nome == nome && pessoas.senha == senha)
    if(usuario){
        window.location.href = 'bemvindo.html'      
    } else {
        alert("Usuário/Senha Incorretos! Tente novamente!")
    }


   })
}