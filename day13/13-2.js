module.exports = (data) => {
    const newData = new Map()

    let time = 0
    let stepSize = 0

    data.trim()
        .split('\n')[1]
        .split(',')
        .forEach((numb, idx) => {
            if (!isNaN(Number(numb))) {
                newData.set(Number(numb), idx)
            }
        })

    newData.forEach((idx, x) => {
        if (stepSize === 0) {
            stepSize = x
        } else {
            let nextDep = time + newData.get(x)
            while (nextDep % x) {
                time += stepSize
                nextDep = time + newData.get(x)
            }
            stepSize *= x
        }
    })

    return time
}
