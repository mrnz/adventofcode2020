module.exports = (data) => {
    data = data.trim().split('\n')

    const ship = { w: 0, n: 0 }
    const waypoint = { w: -10, n: 1 }
    const comp = ['E', 'S', 'W', 'N']

    data.forEach((instruction) => {
        let inst = instruction[0]
        const numb = Number(instruction.substr(1))

        switch (inst) {
            case 'F':
                ship.w += waypoint.w * numb
                ship.n += waypoint.n * numb
                break
            case 'R':
                w = waypoint.w
                n = waypoint.n
                const times = numb / 90
                if (times === 1) {
                    waypoint.w = n * -1
                    waypoint.n = w
                } else if (times === 2) {
                    waypoint.w = w * -1
                    waypoint.n = n * -1
                } else if (times === 3) {
                    waypoint.w = n
                    waypoint.n = w * -1
                }

                break
            case 'L':
                w = waypoint.w
                n = waypoint.n
                const times2 = numb / 90
                if (times2 === 1) {
                    waypoint.w = n
                    waypoint.n = w * -1
                } else if (times2 === 2) {
                    waypoint.w = w * -1
                    waypoint.n = n * -1
                } else if (times2 === 3) {
                    waypoint.w = n * -1
                    waypoint.n = w
                }
                break
            case 'E':
                waypoint.w -= numb
                break
            case 'W':
                waypoint.w += numb
                break
            case 'N':
                waypoint.n += numb
                break
            case 'S':
                waypoint.n -= numb
                break
            default:
                break
        }
    })

    return Math.abs(ship.w) + Math.abs(ship.n)
}
