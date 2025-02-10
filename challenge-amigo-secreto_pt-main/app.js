//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = []; // Array para armazenar os amigos

function adicionarAmigo() {
    let nomeDeAmigos = document.querySelector('input').value; // Pegando o valor do input
    
    if (nomeDeAmigos.trim() !== "") { // Verificando se o campo não está vazio
        listaDeAmigos.push(nomeDeAmigos); // Adicionando à lista
        limparCaixa(); // Limpando o input
        mostrarNome();
        console.log("Amigo adicionado:", nomeDeAmigos);    
    } else {
        alert("Digite um nome antes de adicionar!");
    }
}

function limparCaixa() {
    let nomeInput = document.querySelector('input'); // Seleciona o input corretamente
    nomeInput.value = ""; // Limpa o campo
}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) { // Evita erro se a lista estiver vazia
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); // Sorteia um índice
    let nomeSortido = listaDeAmigos[indiceAleatorio]; // Pega o nome sorteado
    document.querySelector('#resultado').textContent = `O amigo sorteado foi: ${nomeSortido}`;
}
