var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(Bob) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(Broom) {
  return [...kittens, "Broom"]
}
