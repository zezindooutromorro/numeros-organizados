// script.js

let numeros = []; // Array para armazenar os números

// Função para adicionar um número à lista
function adicionarNumero() {
    const numeroInput = document.getElementById("numeroInput");
    const numero = parseFloat(numeroInput.value.trim()); // Converte o valor para número

    if (!isNaN(numero)) { // Verifica se é um número válido
        numeros.push(numero);
        numeroInput.value = ""; // Limpa o campo de input
        atualizarLista(); // Atualiza a lista na tela
    } else {
        alert("Por favor, insira um número válido.");
    }
}

// Função para atualizar a lista na tela
function atualizarLista() {
    const listaNumeros = document.getElementById("listaNumeros");
    listaNumeros.innerHTML = ""; // Limpa a lista antes de atualizar

    numeros.forEach((numero) => {
        const li = document.createElement("li");
        li.textContent = numero;
        listaNumeros.appendChild(li);
    });
}

// Função para ordenar os números em ordem crescente
function ordenarNumeros() {
    numeros.sort((a, b) => a - b); // Ordena numericamente em ordem crescente
    atualizarLista(); // Atualiza a lista com os números ordenados
}

// script.js

// Referência aos elementos de áudio e botão
var audio = document.getElementById('audio');
var toggleButton = document.getElementById('toggle-button');

// Função para controlar a música (tocar ou pausar)
toggleButton.onclick = function() {
    if (audio.paused) {  // Se a música estiver pausada
        audio.play();  // Começa a tocar
        toggleButton.textContent = "Parar Música";  // Altera o texto do botão
    } else {  // Se a música já estiver tocando
        audio.pause();  // Pausa a música
        audio.currentTime = 0;  // Reseta a música para o início
        toggleButton.textContent = "Iniciar Música";  // Altera o texto do botão
    }
};





