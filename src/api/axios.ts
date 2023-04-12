import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:8088',
  timeout: 10000
})
