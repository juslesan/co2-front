import axios from 'axios'
import config from './../utils/config'
const baseUrl = `${config}/country` 

const getByName = async (name) => {
    // console.log(baseUrl)
    const request = axios.get(`${baseUrl}/${name}`)
    return await request.then(response => response.data)
}

export default {getByName }

