var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
function destructivelyAppendKitten(kittens, Ralph) {
  kittens = ["Ralph", ...kittens]
  return kittens
}
