const name1 = prompt("Informe o nome do personagem de ataque: ")
const attack = prompt("Informe o poder de ataque do personagem de ataque: ")

const name2 = prompt("Informe o nome do personagem de defesa: ")
let life = prompt("Informe a quantidade de pontos de vida do personagem de defesa: ")
const defense = prompt("Informe o poder de defesa do personagem de defesa: ")
const shield = prompt("Informe se o personagem de defesa possui escudo (S/N): ")
let dano = 0

if (attack > defense && shield === "N") {
    dano = attack - defense
} else if (attack > defense && shield === "S") {
    dano = (attack - defense) / 2
}

life -= dano

alert(name1 + " causou " + dano + "  pontos de dano no personagem " + name2)

alert(
    name1 + "\nAttack power: " + attack + "\n\n" +
    name2 + "\nLife points: " + life + 
    "\nDefense power: " + defense + "\nHave shield: " + shield
)