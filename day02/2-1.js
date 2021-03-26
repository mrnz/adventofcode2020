module.exports = (data) => {
    let result = 0

    return data
        .trim()
        .split('\n')
        .filter((e) => {
            e = e.split(' ')
            const min = parseInt(e[0].split('-')[0])
            const max = parseInt(e[0].split('-')[1])
            const res = e[2].match(new RegExp(e[1].replace(':', ''), 'g'))
            if (res) {
                return res.length >= min && res.length <= max
            }
            return false
        }).length
}
