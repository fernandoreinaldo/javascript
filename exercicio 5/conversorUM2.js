const metro = prompt("Insira o valor em metros: ")

const unidade = prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n1. Milimetros (mm)" +
    "\n2. Centimetros (cm)" +
    "\n3. Decimetros (dm)" +
    "\n4. Decametros (dam)" +
    "\n5. Hectometros (hm)" +
    "\n6. Quilometros (km)" 
)

switch (unidade) {
    case "1":
        alert("Resultado: " + metro + "m= " + metro * 1000 + "mm")
        break
    case "2":
        alert("Resultado: " + metro + "m= " + metro * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + metro + "m= " + metro * 10 + "dm")
        break
    case "4":
        alert("Resultado: " + metro + "m= " + metro / 10 + "dam")
        break
    case "5":
        alert("Resultado: " + metro + "m= " + metro / 100 + "hm")
        break
    case "6":
        alert("Resultado: " + metro + "m= " + metro / 1000 + "km")
        break
    default:
        alert("Digite novamente")
}