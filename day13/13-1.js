module.exports = (data) => {
    data = data.trim().split('\n')
    const myTime = Number(data[0])
    const res = data[1]
        .split(',')
        .filter((x) => x !== 'x')
        .reduce(
            (acc, numb) => {
                numb = Number(numb)

                if (Math.floor(myTime / numb) * numb + numb < acc[1]) {
                    return [numb, Math.floor(myTime / numb) * numb + numb]
                }
                return acc
            },
            [0, Infinity]
        )

    return res[0] * (res[1] - myTime)
}
