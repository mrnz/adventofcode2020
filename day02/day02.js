/* eslint-disable no-console */
'use strict'

const input = require('fs')
    .readFileSync(`${__dirname}/day02-input.txt`)
    .toString()

// console.log(`day 2 part 1 - result is: ${require('./2-1.js')(input)}`)
console.log(`day 2 part 2 - result is: ${require('./2-2.js')(input)}`)
