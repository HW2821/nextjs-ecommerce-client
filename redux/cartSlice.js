import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userRequest } from "../utils/requestMethod"

export const fetchCartItems = createAsyncThunk("cart/fetchCartItems", async (arg1, { getState }) => {
  const userid = getState().user.currentUser._id
  const token = getState().user.currentUser.accessToken
  const res = await userRequest(token).get("/carts/find/" + userid)
  return res.data
})

export const addToCart = createAsyncThunk("cart/addToCart", async (newItem, { getState, rejectWithValue }) => {
  const cartItems = structuredClone(getState().cart.cartItems)
  const index = cartItems.findIndex((item) => {
    if (item._id === newItem._id && item.color === newItem.color && item.size === newItem.size) return true
  })

  if (index === -1) cartItems.push(newItem)
  else {
    cartItems[index].amount += newItem.amount
    if (cartItems[index].amount === 0) cartItems = cartItems.filter((item, i) => i !== index)
  }
  const currentUser = getState().user.currentUser
  if (!currentUser) return rejectWithValue("请先登录")
  const userid = currentUser._id
  const token = currentUser.accessToken
  const res = await userRequest(token).post("/carts/" + userid, { cartItems })
  return res.data
})

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    quantity: 0,
    totalPrice: 0,
    loading: false,
    error: "",
  },
  reducers: {
    clearCart: (state, action) => {
      state.cartItems = []
      state.quantity = 0
      state.totalPrice = 0
      state.loading = false
      state.error = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state, action) => {
        state.loading = !state.loading
        state.error = ""
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = !state.loading
        state.error = ""
        state.cartItems = action.payload
        state.quantity = state.cartItems.length
        state.totalPrice = state.cartItems.reduce((total, i) => total + i.amount * i.price, 0)
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = !state.loading
      })

    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = !state.loading
        state.cartItems = action.payload
        state.quantity = state.cartItems.length
        state.totalPrice = state.cartItems.reduce((total, i) => total + i.amount * i.price, 0)
      })
      .addCase(addToCart.pending, (state, action) => {
        state.loading = !state.loading
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = !state.loading
        state.error = action.payload
      })
  },
})

export const { clearCart } = cartSlice.actions

const cartReducer = cartSlice.reducer
export default cartReducer
