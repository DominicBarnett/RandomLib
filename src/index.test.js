const fb = require("../src/index");

describe('random', () => {
  test('should return a number between 0 and 1', () => {
    const result = fb.random();  // Adjusted to use fb.random()

    // Check that the result is a number
    expect(typeof result).toBe('number');

    // Check that the number is between 0 and 1
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });

  test('should return different numbers for multiple calls', () => {
    const result1 = fb.random();  // Adjusted to use fb.random()
    const result2 = fb.random();  // Adjusted to use fb.random()

    // It's very unlikely that two calls would return exactly the same number
    expect(result1).not.toBe(result2);
  });
});
