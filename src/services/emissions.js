import axios from 'axios'
import config from './../utils/config'
const baseUrl = `${config}` 

// Get all emissions from API
// Not used
const getAll = async () => {
    const request = axios.get(baseUrl)
    return await request.then(response => response.data)
  
}

export default { getAll, getByName }

  