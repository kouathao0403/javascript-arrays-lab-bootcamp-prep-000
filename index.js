const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(element) {
  kittens.push(element);
  // windows.kittens.push(element);
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element);
}

function destructivelyRemoveLastKitten(element) {
  kittens.pop(element);
}

function destructivelyRemoveFirstKitten(element) {
  kittens.shift(element);
}
function appendKitten(element) {
  return kittens.splice(element);
}
