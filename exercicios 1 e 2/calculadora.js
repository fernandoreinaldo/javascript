const entrada1 = prompt("Insira o primeiro numero: ")
const entrada2 = prompt("Insira o segundo numero: ")

const num1 = parseFloat(entrada1)
const num2 = parseFloat(entrada2)

const soma = num1 + num2
const subtracao = num1 - num2
const divisao = num1 / num2
const multiplicacao = num1 * num2

alert(
    "\n Soma: " + soma +
    "\n Subtração: " + subtracao +
    "\n Divisão: " + divisao +
    "\n Multiplicação: " + multiplicacao
)