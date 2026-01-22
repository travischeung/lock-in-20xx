/**
 * Utility functions
 * Common helper functions used across the application
 */

/**
 * Formats a date to ISO string
 * @param {Date} date - The date to format
 * @returns {string} ISO formatted date string
 */
export function formatDate(date: Date): string {
  return new Date(date).toISOString();
}

/**
 * Validates if a string is a valid email
 * @param {string} email - The email to validate
 * @returns {boolean} True if valid email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generates a random string of specified length
 * @param {number} length - The length of the string to generate
 * @returns {string} Random string
 */
export function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
