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

describe('random(n, o)', () => {
    test('should return a number between n and o (inclusive)', () => {
      const n = 5;
      const o = 10;
      const result = fb.randomNtoO(n, o);  // Using fb.random(n, o)
  
      // Check that the result is a number
      expect(typeof result).toBe('number');
  
      // Check that the number is between n and o (inclusive)
      expect(result).toBeGreaterThanOrEqual(n);
      expect(result).toBeLessThanOrEqual(o);
    });
  
    test('should return different numbers for multiple calls', () => {
      const n = 5;
      const o = 10;
      const result1 = fb.randomNtoO(n, o);  // First call
      const result2 = fb.randomNtoO(n, o);  // Second call
  
      // It's very unlikely that two calls would return exactly the same number
      expect(result1).not.toBe(result2);
    });
  
    test('should return n when n and o are the same', () => {
      const n = 7;
      const o = 7;
      const result = fb.randomNtoO(n, o);  // n and o are equal
  
      // Should always return n when n and o are the same
      expect(result).toBe(n);
    });
  
    test('should handle negative numbers correctly', () => {
      const n = -5;
      const o = -1;
      const result = fb.randomNtoO(n, o);  // Test with negative numbers
  
      // Check that the result is between n and o (inclusive)
      expect(result).toBeGreaterThanOrEqual(n);
      expect(result).toBeLessThanOrEqual(o);
    });
  });

describe('die(x)', () => {
    test('should generate numbers between 1 and x (inclusive)', () => {
      const x = 6;
      const results = Array.from({ length: 1000 }, () => fb.die(x));
      
      // Check that all results are within the expected range
      expect(results.every(result => result >= 1 && result <= x)).toBe(true);
    });
  
    test('should handle edge case when x is 1', () => {
      const x = 1;
      const results = Array.from({ length: 1000 }, () => fb.die(x));
      
      // Check that all results are exactly 1
      expect(results.every(result => result === 1)).toBe(true);
    });
  
    test('should throw an error when x is 0', () => {
      expect(() => fb.die(0)).toThrow("x must be greater than 0");
    });
  
    test('should throw an error when x is negative', () => {
      expect(() => fb.die(-1)).toThrow("x must be greater than 0");
    });
  });