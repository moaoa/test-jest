// const axios = require('axios')
const swapoi = require('./script2')

it('calls swapi to get people', () => {
    expect.assertions(2)
    return swapoi.getPeopleAsync().then(({count, results}) => {
        expect(count).toEqual(87)
        expect(results.length).toBeGreaterThan(5)
    })
}, 10000)