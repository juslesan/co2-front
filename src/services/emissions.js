import axios from 'axios'
import config from './../utils/config'
const baseUrl = `${config}` 


const getAll = async () => {
    const request = axios.get(baseUrl)
    return await request.then(response => response.data)
  
}
const getByName = async (name) => {
    const request = axios.get(`${baseUrl}/${name}`)
    return await request.then(response => response.data)
  
}

export default { getAll, getByName }

  