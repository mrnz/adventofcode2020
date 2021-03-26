module.exports = (data) => {
    let result = 0

    return data
        .trim()
        .split('\n')
        .filter((e) => {
            e = e.split(' ')
            const min = parseInt(e[0].split('-')[0]) - 1
            const max = parseInt(e[0].split('-')[1]) - 1
            const char = e[1].replace(':', '')
            const pass = e[2]

            if (
                (pass[min] === char && pass[max] === char) ||
                (pass[min] !== char && pass[max] !== char)
            ) {
                return false
            }

            return true
        }).length
}
