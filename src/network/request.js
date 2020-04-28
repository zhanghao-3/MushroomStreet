import axios from 'axios'

export const request = (config) => {
  const instance1 = axios.create({
    // baseURL:'/data/home/multidata',
    timeout:5000
  })
  // instance1.interceptors.response.use()
  return instance1(config)
}

