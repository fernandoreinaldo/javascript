let velocidade = prompt("Qual a velocidade do veículo?")

do{
    alert("A velocidade do veículo é de: " + velocidade + "km/h")
    velocidade -= 20
} while (velocidade > 0)

alert("A velocidade do veículo é " + velocidade + "km/h")