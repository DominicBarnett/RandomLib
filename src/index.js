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

function dieRoll(desc) {
    // Regular expression to match dice roll patterns (XdY, XdY+Z, XdY-Z, dY)
    const regex = /(\d*)d(\d+)([+-]\d+)?/g;
    
    let total = 0; // Total sum of dice rolls and modifiers
    let match;
    let hasDice = false; // Flag to check if any dice are present

    // While there are matches in the string
    while ((match = regex.exec(desc)) !== null) {
        hasDice = true; // Set flag to true if any dice are matched
        const numberOfDice = match[1] === "" ? 1 : parseInt(match[1]); // Default to 1 if no number before "d"
        const numberOfSides = parseInt(match[2]); // Number of sides on the dice
        const modifier = match[3] ? parseInt(match[3]) : 0; // Optional modifier (e.g., +2 or -3)

        // Roll the dice the specified number of times and sum the results
        let rollTotal = 0;
        for (let i = 0; i < numberOfDice; i++) {
            rollTotal += Math.floor(Math.random() * numberOfSides) + 1; // Roll each die (1 to numberOfSides)
        }

        // Add the modifier to the dice total
        total += rollTotal + modifier;
    }

    // Handle cases where no dice were matched, but there is a static value
    if (!hasDice) {
        // Match static values at the end of the string
        const staticValueMatch = desc.match(/([+-]?\d+)$/);
        if (staticValueMatch) {
            total = parseInt(staticValueMatch[1]);
        }
    }

    return total;
}

module.exports.random = random
module.exports.randomN = randomN
module.exports.randomNtoO = randomNtoO
module.exports.die = die
module.exports.shuffle = shuffle
module.exports.flip = flip
module.exports.dieRoll = dieRoll