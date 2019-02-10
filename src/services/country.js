import axios from 'axios'
import config from './../utils/config'
const baseUrl = `${config}/country` 

// Get a country from the API by name
const getByName = async (name) => {
    const request = axios.get(`${baseUrl}/${name}`)
    return await request.then(response => response.data)
}

export default {getByName}