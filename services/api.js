'use strict'

import axios from 'axios'

const apiUrl = process.env.API_URL
const token = process.env.API_TOKEN

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json',
    Authorization: token
  },
  withCredentials: true
})

api.interceptors.response.use(
  response => {
    if (response.data) {
      return response.data
    }

    return response
  },
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.error)
    }

    return Promise.reject(error)
  }
)

export default api
