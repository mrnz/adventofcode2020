module.exports = (data, limit = 2020) => {
    const dataNumbers = data.split(',').map(Number)
    const spokenNumbers = dataNumbers.reduce((acc, number, idx) => {
        if (idx !== dataNumbers.length - 1) {
            acc[number] = idx + 1
        }
        return acc
    }, {})
    let turn = dataNumbers.length
    let lastSpokenNumber = dataNumbers[turn - 1]

    while (turn < limit) {
        // new number
        if (!spokenNumbers[lastSpokenNumber]) {
            spokenNumbers[lastSpokenNumber] = turn
            lastSpokenNumber = 0
        } else {
            let lastTurn = spokenNumbers[lastSpokenNumber]

            spokenNumbers[lastSpokenNumber] = turn
            lastSpokenNumber = turn - lastTurn
        }
        turn++
    }

    return lastSpokenNumber
}
