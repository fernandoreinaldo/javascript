const name1 = prompt("Informe o nome do primeiro veículo: ")
const vel1 = prompt("Informe a velocidade do primeiro veículo em km/h: ")
const name2 = prompt("Informe o nome do segundo veículo: ")
const vel2 = prompt("Informe a velocidade do segundo veículo em km/h: ")

if (vel1 > vel2) {
    alert("A velocidade do veículo " + name1 + " é maior.")
} else if (vel1 < vel2) {
    alert ("A velocidade do veículo " + name2 + " é maior.")
} else if (vel1 == vel2) {
    alert ("A velocidade dos dois veículos é igual.")
} else {
    alert("Informe novamente as informações.")
}