const googleSearch = require('./script')
dbmock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

describe('googleSearch', () => {
    it('this is a test ', ()=> {
        expect('hello').toBe('hello')
        googleSearch('test', dbmock)
    })
    
    it('is searching google', () => {
        expect(googleSearch('test', dbmock)).toEqual([])
        expect(googleSearch('dog', dbmock)).toEqual(['dog.com', 'dogpictures.com'])
    })
    
    it('work wiht undefiend and null input', () => {
        expect(googleSearch(undefined, dbmock)).toEqual([])
        expect(googleSearch(null, dbmock)).toEqual([])
    })
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbmock).length).toBe(3)
    })
})