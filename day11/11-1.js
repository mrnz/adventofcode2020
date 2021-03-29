module.exports = (data) => {
    class PlaneView {
        constructor(string) {
            this.map = this.createMap(string)
        }
        createMap(string) {
            return string.split('\n').map((row) => {
                return row.split('').map((cell) => {
                    return cell
                })
            })
        }
        cloneArray2D(array) {
            return array.map((row) => row.map((elem) => elem))
        }
        next() {
            let mapChanged = false
            const prevState = this.cloneArray2D(this.map)
            prevState.forEach((row, y) => {
                row.forEach((elem, x) => {
                    const thisSeat = this.map[y][x]
                    const occupiedSeats = this.occupiedSeats(prevState, x, y)

                    if (thisSeat === 'L' && occupiedSeats === 0) {
                        this.map[y][x] = '#'
                        mapChanged = true
                    } else if (thisSeat === '#' && occupiedSeats > 3) {
                        this.map[y][x] = 'L'
                        mapChanged = true
                    }
                })
            })
            return mapChanged
        }
        occupiedSeats(array, x, y) {
            const prevRow = array[y - 1] || []
            const nextRow = array[y + 1] || []

            return [
                prevRow[x - 1],
                prevRow[x],
                prevRow[x + 1],
                array[y][x - 1],
                array[y][x + 1],
                nextRow[x - 1],
                nextRow[x],
                nextRow[x + 1],
            ].reduce((prev, curr) => (prev += curr === '#'), 0)
        }
        getOccupiedSeats() {
            return this.map.reduce((acc1, row) => {
                return (acc1 += row.reduce(
                    (acc2, elem) => (acc2 += elem === '#' ? 1 : 0),
                    0
                ))
            }, 0)
        }
    }

    const plane = new PlaneView(data.trim())
    let mapChanged = true

    while (mapChanged === true) {
        mapChanged = plane.next()
    }
    return plane.getOccupiedSeats()
}
