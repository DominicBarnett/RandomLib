function random() {
    const number = Math.random()
    return number
}

function randomN(n) {
    const number = Math.floor(Math.random() * (n + 1));  // Whole number between 0 and n
    return number;
  }
  
function randomNtoO(n, o) {
    return Math.floor(Math.random() * (o - n + 1) + n)
}

function die(x) {
    if (x <= 0) {
        throw "x must be greater than 0"
    } else {
        return Math.floor((Math.random() * x)+ 1)
    }
}

module.exports.random = random
module.exports.randomN = randomN
module.exports.randomNtoO = randomNtoO
module.exports.die = die