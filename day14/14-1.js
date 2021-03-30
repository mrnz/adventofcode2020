module.exports = (data) => {
    let currMask

    data = data
        .trim()
        .split('\n')
        .map((x) => x.split(' = '))

    const translateMask = (input) => {
        return input.split('').reduce((acc, curr, idx) => {
            if (curr !== 'X') {
                acc.set(idx, curr)
            }
            return acc
        }, new Map())
    }

    const maskNumb = (numb, mask) => {
        let thisBin = numb.padStart(36, '0')
        currMask.forEach((v, i) => {
            thisBin = thisBin.substr(0, i) + v + thisBin.substr(i + 1)
        })
        return parseInt(thisBin, 2)
    }

    const mem = data.reduce((acc, inst) => {
        if (inst[0] === 'mask') {
            currMask = translateMask(inst[1])
        } else {
            acc[inst[0].match(/\d+/g)] = maskNumb(
                Number(inst[1]).toString(2),
                currMask
            )
        }

        return acc
    }, {})

    return Object.values(mem).reduce((acc, val) => {
        return (acc += val)
    }, 0)
}
