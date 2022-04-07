import axios from "axios"

const BASE_URL = "https://express-ecommerce-lse0d7g2j-hw2821.vercel.app"
// "http://localhost:5000/api"
// https://hw-site-demo.herokuapp.com/api
export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = (token) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: { authorization: `Bearer ${token}` },
  })
}
