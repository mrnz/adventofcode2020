const l = console.log
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
                const byr = parseInt(n.match(/byr:(\d*)/)[1])
                if (byr < 1919 || byr > 2002) return false

                const iyr = parseInt(n.match(/iyr:(\d*)/)[1])
                if (iyr < 2010 || iyr > 2020) return false

                const eyr = parseInt(n.match(/eyr:(\d*)/)[1])
                if (eyr < 2020 || eyr > 2030) return false

                const hgt = n.match(/hgt:(\d*\w{2,2})(\s|$)/)
                if (!hgt) return false
                const hgtNumb = parseInt(hgt[1], 10)

                if (!hgt[1].includes('cm') && !hgt[1].includes('in'))
                    return false

                if (hgt[1].includes('cm') && (hgtNumb < 150 || hgtNumb > 193))
                    return false

                if (hgt[1].includes('in') && (hgtNumb < 59 || hgtNumb > 76))
                    return false

                if (!n.match(/hcl:(#[0-9,a-f]{6})(\s|$)/)) return false

                const ecl = n.match(/ecl:(\w*)/)[1]
                if (
                    !['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(
                        ecl
                    )
                ) {
                    return false
                }

                const pid = n.match(/pid:(\d*)/)[1].trim()
                if (!/^\d{9}$/.test(pid)) return false
                return true
            }
            return false
        }).length
}
