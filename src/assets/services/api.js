import axios from 'axios'

export const BASE_URL = 'https://assisted-attire-server-cf6d32af0aa5.herokuapp.com'

const Client = axios.create({baseURL: BASE_URL})

export default Client