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

describe('random(n)', () => {
    test('should return a number between 0 and n', () => {
      const n = 10;
      const result = fb.randomN(n);  // Using fb.random(n) now
  
      // Check that the result is a number
      expect(typeof result).toBe('number');
  
      // Check that the number is between 0 and n
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(n);
    });
  
    test('should return different numbers for multiple calls', () => {
      const n = 10;
      const result1 = fb.randomN(n);  // First call
      const result2 = fb.randomN(n);  // Second call
  
      // It's very unlikely that two calls would return exactly the same number
      expect(result1).not.toBe(result2);
    });
  
    test('should return 0 when n is 0', () => {
      const result = fb.randomN(0);  // Testing for n = 0
  
      // Should always return 0 when n is 0
      expect(result).toBe(0);
    });
  });