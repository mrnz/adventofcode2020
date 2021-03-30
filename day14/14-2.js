module.exports = (data, bits = 36) => {
    let currMask

    const getPossibleAddrs = (address) => {
        if (address.length === 0) return ['']
        const fchar = address[0]
        const partial = getPossibleAddrs(address.slice(1))

        if (fchar === 'X') {
            return [
                ...partial.map((x) => '0' + x),
                ...partial.map((x) => '1' + x),
            ]
        }

        return partial.map((x) => fchar + x)
    }

    const applyMask = (decimal, mask) => {
        const bitAddr = decimal.toString(2).padStart(bits, '0')
        let floatingAddr = ''

        for (let idx in mask) {
            if (mask[idx] !== '0') {
                floatingAddr += mask[idx]
            } else {
                floatingAddr += bitAddr[idx]
            }
        }
        return floatingAddr
    }

    const mem = data
        .trim()
        .split('\n')
        .map((x) => x.split(' = '))
        .reduce((acc, instruction) => {
            if (instruction[0] === 'mask') {
                currMask = instruction[1]
            } else {
                const val = parseInt(instruction[0].match(/\d+/g), 10)
                getPossibleAddrs(applyMask(val, currMask)).forEach(
                    (binaryAddr) => {
                        acc[parseInt(binaryAddr, 2)] = parseInt(
                            instruction[1],
                            10
                        )
                    }
                )
            }
            return acc
        }, {})

    return Object.values(mem).reduce((acc, val) => {
        return (acc += val)
    }, 0)
}
