import axios from "axios"
export const request = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines',
})

export default request;