const l = console.log
module.exports = (data, step = 3) => {
    let activePaths = [0]
    let res = 0
    const a = data
        .trim()
        .split('\n')
        .map(Number)
        .sort((a, b) => a - b)

    const max = a[a.length - 1]

    const calc = (idx) => {
        return
    }

    class Path {
        constructor(idx, multi) {
            this.idx = idx
            this.multi = multi
        }
        next() {
            return a
                .slice(this.idx + 1, this.idx + 1 + step)
                .filter((x) => {
                    return x - a[this.idx] <= step
                })
                .map((x) => a.indexOf(x))
        }
    }

    let b = [new Path(0, 1)]

    while (b.length) {
        let la = []

        for (let idx = 0; idx < b.length; idx++) {
            thisStep = [...b[idx].next()]
            la = [
                ...la,
                ...b[idx]
                    .next()
                    .map((x) => {
                        return x
                    })
                    .map((x) => new Path(x, b[idx].multi)),
            ]
        }

        b = la.filter((x) => {
            if (a[x.idx] === max) {
                res++
                return false
            }
            return true
        })
    }

    return res
}
