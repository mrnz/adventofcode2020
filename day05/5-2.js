module.exports = (data) => {
    const found = []
    data.trim()
        .split('\n')
        .forEach((inst) => {
            let rows = 127
            let cols = 7
            const i = { min: 0, max: rows }
            const p = { min: 0, max: cols }

            for (const char of inst.substr(0, 7)) {
                rows = Math.floor(rows / 2)

                if (char === 'F') {
                    i.max -= rows + 1
                } else {
                    i.min += rows + 1
                }
            }

            for (const char of inst.substr(7)) {
                cols = Math.floor(cols / 2)

                if (char === 'L') {
                    p.max -= cols + 1
                } else {
                    p.min += cols + 1
                }
            }

            found.push(i.max * 8 + p.max)
        })
    return (
        found
            .sort((a, b) => a - b)
            .find((numb, idx) => numb + 1 !== found[idx + 1]) + 1
    )
}
