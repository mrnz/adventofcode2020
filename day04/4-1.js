module.exports = (data) => {
    return data
        .trim()
        .split('\n\n')
        .filter((doc) => {
            const n = doc.split('\n').join(' ')

            if (
                n.includes('byr') &&
                n.includes('iyr') &&
                n.includes('eyr') &&
                n.includes('hgt') &&
                n.includes('hcl') &&
                n.includes('ecl') &&
                n.includes('hcl') &&
                n.includes('pid')
            ) {
                return true
            }
            return false
        }).length
}
