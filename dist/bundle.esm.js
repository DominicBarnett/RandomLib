// Utility function to generate a random number between 0 and 1
function random() {
    return Math.random();
}
// Utility function to generate a random whole number between 0 and n
function randomN(n) {
    return Math.floor(Math.random() * (n + 1));
}
// Utility function to generate a random whole number between n and o
function randomNtoO(n, o) {
    return Math.floor(Math.random() * (o - n + 1) + n);
}
// Utility function to simulate a die roll with x sides
function die(x) {
    if (x <= 0) {
        throw new Error("x must be greater than 0");
    }
    return Math.floor(Math.random() * x) + 1;
}
// Function to shuffle an array
function shuffle(arr) {
    var _a;
    var array = arr.slice(); // Create a copy of the array
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1]; // Swap elements
    }
    return array;
}
// Function to simulate a coin flip with a given probability t
function flip(t) {
    if (t === void 0) { t = 0.5; }
    if (t > 1 || t < 0) {
        throw new Error("Only values between 0 and 1 are allowed");
    }
    return Math.random() < t;
}
// Function to roll dice based on a description string
function dieRoll(desc) {
    // Regular expression to match dice roll patterns (XdY, XdY+Z, XdY-Z, dY)
    var regex = /(\d*)d(\d+)([+-]\d+)?/g;
    var total = 0; // Total sum of dice rolls and modifiers
    var match;
    var hasDice = false; // Flag to check if any dice are present
    // While there are matches in the string
    while ((match = regex.exec(desc)) !== null) {
        hasDice = true; // Set flag to true if any dice are matched
        var numberOfDice = match[1] === "" ? 1 : parseInt(match[1], 10); // Default to 1 if no number before "d"
        var numberOfSides = parseInt(match[2], 10); // Number of sides on the dice
        var modifier = match[3] ? parseInt(match[3], 10) : 0; // Optional modifier (e.g., +2 or -3)
        // Roll the dice the specified number of times and sum the results
        var rollTotal = 0;
        for (var i = 0; i < numberOfDice; i++) {
            rollTotal += Math.floor(Math.random() * numberOfSides) + 1; // Roll each die (1 to numberOfSides)
        }
        // Add the modifier to the dice total
        total += rollTotal + modifier;
    }
    // Handle cases where no dice were matched, but there is a static value
    if (!hasDice) {
        // Match static values at the end of the string
        var staticValueMatch = desc.match(/([+-]?\d+)$/);
        if (staticValueMatch) {
            total = parseInt(staticValueMatch[1], 10);
        }
    }
    return total;
}

export { die, dieRoll, flip, random, randomN, randomNtoO, shuffle };
//# sourceMappingURL=bundle.esm.js.map
