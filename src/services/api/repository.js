import axios from 'axios'

const baseDomain = "https://swapi.dev"
const baseURL = `${baseDomain}/api/`

export default axios.create({
    baseURL
})