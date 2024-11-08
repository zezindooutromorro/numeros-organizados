function organizeNumbers() {
    // Pega os valores do input
    let input = document.getElementById("inputNumbers").value;
    
    // Separa os números por vírgula e transforma em um array
    let numbersArray = input.split(',').map(num => num.trim());
    
    // Verifica se todos os elementos são números
    if (numbersArray.every(num => !isNaN(num) && num !== '')) {
        // Converte os números para inteiros
        numbersArray = numbersArray.map(num => parseInt(num));
        
        // Ordena os números em ordem crescente
        let sortedNumbers = numbersArray.sort((a, b) => a - b);
        
        // Exibe o resultado
        document.getElementById("result").innerHTML = `Números organizados em ordem crescente: <strong>${sortedNumbers.join(', ')}</strong>`;
    } else {
        document.getElementById("result").innerHTML = "Por favor, insira apenas números válidos separados por vírgula.";
    }
}
