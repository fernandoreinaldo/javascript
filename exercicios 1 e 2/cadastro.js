const name = window.prompt("Insira o seu primeiro nome: ")
const surname = window.prompt("Insira o seu sobrenome: ")
const study = window.prompt("Insira o seu campo de estudo: ")
const age = window.prompt("Insira o ano de nascimento ")

alert(
    "   Nome Completo: " + name + surname +
    "\n Campo de Estudo: " + study +
    "\n Idade: " + (2022 - age)
)