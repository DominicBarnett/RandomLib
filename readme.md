JavaScript Random Functions
This repository contains a set of utility functions for generating random numbers, shuffling arrays, flipping coins with a weighted probability, and rolling dice with customizable options. Below is a description of each function along with usage examples.

Functions
random()
Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

Usage:

    const num = random();
    console.log(num); // e.g., 0.123456789
    randomN(n)

Generates a random integer between 0 (inclusive) and n (inclusive).

Parameters:

n (number): The upper limit of the random number range.
Usage:

    const num = randomN(10);
    console.log(num); // e.g., 7
    randomNtoO(n, o)

Generates a random integer between n (inclusive) and o (inclusive).

Parameters:

n (number): The lower limit of the random number range.
o (number): The upper limit of the random number range.
Usage:

    const num = randomNtoO(5, 15);
    console.log(num); // e.g., 12
    die(x)

Rolls a single die with x sides and returns the result. Throws an error if x is less than or equal to 0.

Parameters:

x (number): The number of sides on the die.
Usage:

    const roll = die(6);
    console.log(roll); // e.g., 4
    shuffle(arr)

Returns a new array with the elements of arr shuffled randomly.

Parameters:

arr (array): The array to shuffle.
Usage:

    const shuffledArray = shuffle([1, 2, 3, 4, 5]);
    console.log(shuffledArray); // e.g., [3, 1, 5, 4, 2]
    flip(t = 0.5)

Returns a boolean value true or false, weighted by the probability t.

Parameters:

t (number, optional): The probability of returning true (between 0 and 1, inclusive). Defaults to 0.5.
Usage:

    const result = flip(0.7);
    console.log(result); // e.g., true or false
    dieRoll(desc)

Rolls dice based on a description string and returns the total value. Supports multiple dice rolls and modifiers.

Parameters:

desc (string): Description string following the format XdY (e.g., 3d6, 2d10+5).
Usage:

    const total = dieRoll('2d6+1d4');
    console.log(total); // e.g., 12

License
This project is licensed under the MIT License. See the LICENSE file for details.