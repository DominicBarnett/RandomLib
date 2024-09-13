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

function shuffle(arr) {
    let array = arr.slice(); // Create a copy of the array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

function flip(t = 0.5) {
    if (t > 1 || t < 0) {
        throw "Only values between 0 and 1"
    } else if (t == 1) {
        return true
    }
    else if (t == 0){
        return false
    }
    else{
        randNum = random()
        if(randNum < t){
            return true
        }
        else {
            return false
        }
    }
}

module.exports.random = random
module.exports.randomN = randomN
module.exports.randomNtoO = randomNtoO
module.exports.die = die
module.exports.shuffle = shuffle
module.exports.flip = flip