import axios from 'axios'

const API_URL = 'http://127.0.0.1:3000/'

const HTTP = axios.create({
  baseURL: API_URL
})

HTTP.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/json'
  return config
})

HTTP.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

export { HTTP }
