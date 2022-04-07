import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { publicRequest } from "../utils/requestMethod"

export const login = createAsyncThunk("user/login", async (loginInfo, { rejectWithValue }) => {
  try {
    const res = await publicRequest.post("/auth/login", loginInfo)
    return res.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: "",
  },
  reducers: {
    loggout: (state, action) => {
      state.currentUser = null
      state.isFetching = false
      state.error = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isFetching = !state.isFetching
        state.error = ""
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isFetching = !state.isFetching
        state.error = ""
        state.currentUser = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isFetching = !state.isFetching
        state.error = action.payload
      })
  },
})

export const { loginStart, loginSuccess, loginFail, loggout } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
