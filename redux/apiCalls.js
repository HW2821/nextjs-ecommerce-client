import { publicRequest } from "../utils/requestMethod"
import { loginFail, loginStart, loginSuccess } from "./userSlice"

export const login = async (dispatch, loginInfo) => {
  dispatch(loginStart())

  try {
    const res = await publicRequest.post("/auth/login", loginInfo)
    dispatch(loginSuccess(res.data))
  } catch (error) {
    dispatch(loginFail(error.response.data))
    console.log(error.response.data)
  }
}
