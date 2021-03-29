module.exports = (data) => {
    data = data.trim().split('\n')

    let direction = 'E'
    const cords = { w: 0, n: 0 }
    const comp = ['E', 'S', 'W', 'N']

    data.forEach((instruction) => {
        let inst = instruction[0]
        const numb = Number(instruction.substr(1))

        if (inst === 'F') inst = direction

        switch (inst) {
            case 'R':
                const times = numb / 90
                const thisIdx = comp.indexOf(direction)

                direction = comp[(thisIdx + times) % 4]
                break
            case 'L':
                const times2 = numb / 90
                const thisIdx2 = comp.indexOf(direction)

                const newIdx =
                    thisIdx2 - times2 < 0
                        ? 3 - Math.abs(thisIdx2 - times2) + 1
                        : thisIdx2 - times2

                direction = comp[newIdx]
                break
            case 'E':
                cords.w -= numb
                break
            case 'W':
                cords.w += numb
                break
            case 'N':
                cords.n += numb
                break
            case 'S':
                cords.n -= numb
                break
            default:
                break
        }
    })

    return Math.abs(cords.w) + Math.abs(cords.n)
}
