function random() {
    const number = Math.random()
    return number
}

// function randomN(n) {
//     LastNumber = n
//     number = (Math.random() * 10) * n
//     return number
// }
function randomN(n) {
    const LastNumber = n;
    const number = Math.floor(Math.random() * (n + 1));  // Whole number between 0 and n
    return number;
  }
  

module.exports.random = random
module.exports.randomN = randomN