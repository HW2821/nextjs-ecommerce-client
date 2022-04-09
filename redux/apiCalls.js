import { publicRequest, userRequest } from "../utils/requestMethod"

export const register = async (info) => {
  try {
    const res = await publicRequest.post("/auth/register", info)
    return res.data
  } catch (error) {
    return error.response.data
  }
}

export const getCartItems = async (userid) => {
  try {
    const res = await userRequest.get("/carts/find/" + userid)
    return res.data
  } catch (error) {
    return error.response.data
  }
}
