function fibonacci(num) {
    const fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num);
}

function solicitarNum() {
    let num = prompt("Por favor, ingresa un número:");

    while (true) {
        if (!isNaN(num) && num.trim() !== "" && Number(num) > 0) {
            num = Number(num);
            break;
        } else {
            num = prompt("Entrada inválida. Por favor, ingresa un número válido:");
        }
    }

    return num;
}

function mostrarFibonacci() {
    const num = solicitarNum();
    const series = fibonacci(num);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Los primeros ${num} números de la serie de Fibonacci son: ${series.join(', ')}`;
    console.log(`Los primeros ${num} números de la serie de Fibonacci son: ${series.join(', ')}`);
}

mostrarFibonacci();

