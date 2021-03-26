/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day1part1 = require('../day01/1-1.js'),
    // day1part2 = require('../day01/1-2.js');

describe('Day 1', () => {

    describe('Part One', () => {

        it('should +1, -2, +3, +1 results in  3', () => {
            assert.equal(3, day1part1('+1 \n  -2 \n +3 \n  +1'));
        });
        
        

    });

    // describe('Part Two', () => {
    //     it('should +1, -1 results in 0', () => {
    //         assert.equal(0, day1part2('+1 \n -1'));
    //     });

       
    // });

});
