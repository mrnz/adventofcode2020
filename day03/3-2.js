const calc = require('./3-1.js')

module.exports = (data, inst) => {
    return inst.reduce((acc, ins) => {
        return calc(data, ins[0], ins[1]) * acc
    }, 1)
}
