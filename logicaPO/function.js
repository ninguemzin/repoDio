pokedex("Charmander","Level 2")
pokedex("Vaporion", "Level 7")
pokedex("Evee", "Level 4")
pokedex("Granninja", "Level 12")

function pokedex(poke, level = 'Level 1') {
  console.log(poke + " cadastrado " + level)
}

// function com return

let resultado = soma(5, 10)

console.log("O resultado dessa função " + resultado)
function soma(numA, numB){
  let somatorio = numA + numB 
  return somatorio
}

// 

let userName = getFirstName("Carlos-Almeida-Juanito", "-")
console.log("Seja bem vindo " + userName)

function getFirstName(name, pli){
  let firstName = name.split(pli)[0]
  return firstName
}