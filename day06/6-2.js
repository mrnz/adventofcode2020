module.exports = (data) => {
    return data
        .trim()
        .split('\n\n')
        .reduce((acc, group) => {
            return (
                acc +
                group.split('\n').reduce((acc2, person, idx) => {
                    return person.split('').filter((per) => acc2.includes(per))
                }).length
            )
        }, 0)
}
