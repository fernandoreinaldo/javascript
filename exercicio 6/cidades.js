const tourist = prompt("Qual é o seu nome?")
let cities = ""
let conta = 0

let continue = prompt("Você visitou alguma cidade? (S/N)")

while (continue === "S") {
    let city = ("Qual é o nome da cidade que você visitou?")
    cities += " - " + city + "\n"
    conta++
    continue = prompt("Você visitou mais alguma cidade? (S/N)")
}