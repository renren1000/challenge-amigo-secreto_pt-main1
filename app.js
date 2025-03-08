// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
let sorteio = {}
let sorteados = []

// Função para adicionar um amigo
function adicionarAmigos() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value; 

    if (nome === "" || !isNaN(nome)) {
        alert("Por favor, digite um nome válido.");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    document.getElementById("amigo").value = "";
}


// Função para atualizar a lista de amigos
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerText = "";
    // Adiciona os nomes na lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo + (index < amigos.length - 1 ? "," : "");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia');
        return;
    }
    if (amigos.length <= 2) {
        alert("Para realizar o sorteio é preciso três amigos ou mais.");
        return;
    }
    // Sorteia um índice aleatório do array
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Pega o nome correspondente ao índice
    let amigoSorteado = amigos[indiceSorteado];
    sorteados.push(amigoSorteado);

    // Exibe o resultado na seção com ID "resultado"
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "O Amigo sorteado foi " + amigoSorteado;
   // Disparar confete apos soteio do amigo secreto
    dispararConfete();
    sorteados = [];
    atualizarLista();
}

function dispararConfete() {
    var count = 200;
    var defaults = {origin: {y: 0.7}};
}

function fire(particleRatio, opts) {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
    });
}
   
 
    
