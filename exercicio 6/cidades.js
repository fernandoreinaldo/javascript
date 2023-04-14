const turista = prompt("Qual é o seu nome?")
let cidades = ""
let contador = 0

let continuar = prompt("Você visitou alguma cidade? (S/N)")

while (continuar === "S") {
    let cidade = prompt ("Qual é o nome da cidade que você visitou?")
    cidades += " - " + cidade + "\n"
    contador++
    continuar = prompt("Você visitou mais alguma cidade? (S/N)")
}

alert(
    "Turista: " + turista + 
    "\nQuantidade de cidades visitadas: " + contador + 
    "\nCidades visitadas: \n" + cidades
)