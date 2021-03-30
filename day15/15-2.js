module.exports = (data, limit = 30000000) => {
    const dataNumbers = data.split(',').map(Number)
    const spokenNumbers = dataNumbers.reduce((acc, number, idx) => {
        if (idx !== dataNumbers.length - 1) {
            acc.set(number, idx + 1)
        }
        return acc
    }, new Map())
    let turn = dataNumbers.length
    let lastSpokenNumber = dataNumbers[turn - 1]

    while (turn < limit) {
        // new number
        if (!spokenNumbers.has(lastSpokenNumber)) {
            spokenNumbers.set(lastSpokenNumber, turn)
            lastSpokenNumber = 0
        } else {
            let lastTurn = spokenNumbers.get(lastSpokenNumber)
            spokenNumbers.set(lastSpokenNumber, turn)

            lastSpokenNumber = turn - lastTurn
        }
        turn++
    }

    return lastSpokenNumber
}
