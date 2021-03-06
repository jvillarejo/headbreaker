const Pair = require('./pair');

/**
 * @typedef {object} Vector
 * @property {number} x
 * @property {number} y
 */

/**
 *
 * @param {number} x
 * @param {number} y
 *
 * @returns {Vector}
 */
function vector(x, y) {
  return { x, y };
}

/**
 * @param {Vector|number} value
 * @returns {Vector}
 */
function cast(value) {
  if (typeof value === 'number') {
    return vector(value, value);
  } else {
    return value;
  }
}

 /**
  * This module contains functions for dealing with objects with x and y
  * coordinates that represent or include point data
  *
  * @module Vector
  */

/**
 * Returns a new (0, 0) vector
 *
 * @returns {Vector}
 */
function origin() {
  return vector(0, 0);
}

/**
 * Compares two points
 *
 * @param {Vector} one
 * @param {Vector} other
 * @returns {boolean}
 */
function equal(one, other) {
  return Pair.equal(one.x, one.y, other.x, other.y);
}

/**
 * Creates a copy of the given point
 *
 * @param {Vector} one
 * @returns {Vector}
 */
function copy({x, y}) {
  return {x, y}
}

/**
 * @param {Vector} vector
 * @param {any} x
 * @param {any} y
 */
function update(vector, x, y) {
  vector.x = x;
  vector.y = y;
}

/**
 * @param {Vector} one
 * @param {Vector} other
 * @returns {import('./pair').Pair};
 */
function diff(one, other) {
  return Pair.diff(one.x, one.y, other.x, other.y);
}

/**
 * @param {Vector|number} one
 * @param {Vector|number} other
 *
 * @returns {Vector}
 */
function multiply(one, other) {
  const first = cast(one);
  const second = cast(other);
  return {x: first.x * second.x , y: first.y * second.y};
}


/**
 * @param {Vector|number} one
 * @param {Vector|number} other
 *
 * @returns {Vector}
 */
function divide(one, other) {
  const first = cast(one);
  const second = cast(other);
  return {x: first.x / second.x , y: first.y / second.y};
}

module.exports = {
  cast,
  vector,
  copy,
  equal,
  origin,
  update,
  diff,
  multiply,
  divide
};
