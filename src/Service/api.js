import axios from 'axios'

const api = axios.create({
    baseURL: 'ecommerce-residencia.herokuapp.com'
})

export default api;