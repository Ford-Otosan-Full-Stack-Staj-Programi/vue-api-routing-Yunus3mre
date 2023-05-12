import axios from 'axios'

const baseURL = 'https://rickandmortyapi.com/api/character'

const rickandmortyApi = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default rickandmortyApi
