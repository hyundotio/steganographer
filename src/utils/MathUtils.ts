/**
 * Checks if a number is a prime number
 *
 * @param   {number} n Required: The number to be checked if prime or not
 * @returns {boolean} Boolean to check if number is prime or not
 */
export function isPrime(n: number): boolean {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
        return false
    }
    if (n % 2 === 0) {
        return (n === 2)
    }
    if (n % 3 === 0) {
        return (n === 3)
    }

    const m = Math.sqrt(n);

    for (let i = 5; i <= m; i+=6) {
      if (n % i === 0) {
        return false
      }
      if (n % (i + 2) === 0) {
        return false
      }
    }

    return true
}

/**
 * A function to find next prime number
 *
 * @param   {number} n Required: The number to start
 * @returns {number} next prime number
 */
export function findNextPrime(n: number): number {
    for (let i = n; true; i += 1) {
        if(isPrime(i)) {
            return i
        }
    }
}