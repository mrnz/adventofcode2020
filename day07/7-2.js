module.exports = (data) => {
    const colors = {}
    let toSearch = ['shiny gold']
    let result = 0
    data.trim()
        .split('\n')
        .forEach((rule) => {
            rule = rule.replace(/\sbags|\sbag|\./g, '').split(' contain ')
            const color = rule[0].replace(/\d\s/g, '')

            if (!colors[color]) colors[color] = new Map()
            rule[1]
                .split(', ')
                .forEach((n) =>
                    colors[color].set(n.replace(/^\d\s/, ''), parseInt(n, 10))
                )
        })

    function findColor(oldColor, n) {
        let levelVal = 0
        for (const newColour of colors[oldColor].entries()) {
            if (!isNaN(newColour[1])) {
                levelVal += newColour[1]
                findColor(newColour[0], n * newColour[1])
            }
        }
        result += levelVal * n
        return result
    }

    return findColor(toSearch, 1)
}
