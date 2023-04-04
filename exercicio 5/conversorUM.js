const metro = prompt("Insira o valor em metros: ")
const um = prompt("Escolha para qual dessas UM voce deseja converter: \nmm\ncm\ndm\ndam\nhm\nkm")

switch (um) {
    case "mm":
        alert("O resultado é: " + metro * 1000 + )
        break
    case "cm":
        alert("O resultado é: " + metro * 100 + "cm")
        break
    case "dm":
        alert("O resultado é: " + metro * 10 + "dm")
        break
    case "dam":
        alert("O resultado é: " + metro / 10 + "dam")
        break
    case "hm":
        alert("O resultado é: " + metro / 100 + "hm")
        break
    case "km":
        alert("O resultado é: " + metro / 1000 + "km")
        break
    default:
        alert("Digite novamente!")
}