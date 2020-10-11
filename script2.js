const axios = require('axios')

const getPeoplePromise = fetchInput => {
    return axios.get('https://swapi.py4e.com/api/people/')
    .then(response => ( {count : response.data.count, results: response.data.results}))
}
const getPeopleAsync = async fetchInput => {
    const {status, data}  =  await axios.get('https://swapi.py4e.com/api/people/')

    return ({
        count: data.count,
        results: data.results
    });
}



console.log(getPeopleAsync());

module.exports= {
    getPeopleAsync,
    getPeoplePromise
}


