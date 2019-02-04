import axios from 'axios'
import config from './../utils/config'
const baseUrl = `${config}/superpowers` 

const getSuperpowers = async () => {
    const request = axios.get(`${baseUrl}`)
    return await request.then(response => response.data)
  
}

export default {getSuperpowers }
