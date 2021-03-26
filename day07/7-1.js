const l = console.log
module.exports = (data) => {
    const colors = {}
    let toSearch = ['shiny gold']
    const found = new Set()

    const a = data
        .trim()
        .split('\n')
        .forEach((rule) => {
            rule = rule.replace(/\sbags|\sbag|\.|\s\d/g, '').split(' contain ')
            if (!colors[rule[0]]) colors[rule[0]] = new Set()
            rule[1].split(', ').forEach(colors[rule[0]].add, colors[rule[0]])
        })

    while (toSearch.length) {
        toSearch = Object.keys(colors).filter((c) => {
            if (
                toSearch.filter((tt) => {
                    return colors[c].has(tt)
                }).length
            ) {
                found.add(c)
                return true
            }
        })
    }

    return found.size
}
