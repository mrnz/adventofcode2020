/* eslint-disable no-console */
'use strict'

const input = require('fs')
    .readFileSync(`${__dirname}/day03-input.txt`)
    .toString()

console.log(`day 3 part 1 - result is: ${require('./3-1.js')(input, 3, 1)}`)
console.log(
    `day 3 part 2 - result is: ${require('./3-2.js')(input, [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
    ])}`
)
