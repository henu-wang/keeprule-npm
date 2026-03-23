'use strict';

const principles = require('./data/principles.json');

/**
 * Get a random investment principle.
 * @returns {Object} A random principle object.
 */
function getRandom() {
  return principles[Math.floor(Math.random() * principles.length)];
}

/**
 * Get multiple random principles (non-repeating).
 * @param {number} count - Number of principles to return.
 * @returns {Object[]} Array of principle objects.
 */
function getRandomMultiple(count) {
  if (count >= principles.length) return [...principles];
  const shuffled = [...principles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Get principles by author name (case-insensitive partial match).
 * @param {string} name - Author name or partial name.
 * @returns {Object[]} Matching principles.
 */
function getByAuthor(name) {
  const lower = name.toLowerCase();
  return principles.filter(p => p.author.toLowerCase().includes(lower));
}

/**
 * Get principles by category (case-insensitive partial match).
 * @param {string} category - Category name or partial name.
 * @returns {Object[]} Matching principles.
 */
function getByCategory(category) {
  const lower = category.toLowerCase();
  return principles.filter(p => p.category.toLowerCase().includes(lower));
}

/**
 * Search principles by keyword in text, author, category, or source.
 * @param {string} keyword - Search keyword.
 * @returns {Object[]} Matching principles.
 */
function search(keyword) {
  const lower = keyword.toLowerCase();
  return principles.filter(p =>
    p.text.toLowerCase().includes(lower) ||
    p.author.toLowerCase().includes(lower) ||
    p.category.toLowerCase().includes(lower) ||
    p.source.toLowerCase().includes(lower)
  );
}

/**
 * Get all investment principles.
 * @returns {Object[]} All principles.
 */
function getAll() {
  return [...principles];
}

/**
 * Get a list of all unique authors.
 * @returns {string[]} Author names.
 */
function getAuthors() {
  return [...new Set(principles.map(p => p.author))].sort();
}

/**
 * Get a list of all unique categories.
 * @returns {string[]} Category names.
 */
function getCategories() {
  return [...new Set(principles.map(p => p.category))].sort();
}

/**
 * Get a principle by its ID.
 * @param {number} id - Principle ID.
 * @returns {Object|undefined} The principle or undefined.
 */
function getById(id) {
  return principles.find(p => p.id === id);
}

/**
 * Get the total count of principles.
 * @returns {number} Total count.
 */
function count() {
  return principles.length;
}

module.exports = {
  getRandom,
  getRandomMultiple,
  getByAuthor,
  getByCategory,
  search,
  getAll,
  getAuthors,
  getCategories,
  getById,
  count,
};
