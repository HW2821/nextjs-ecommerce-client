import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.quantity += 1
      state.totalPrice += action.payload.price * action.payload.amount
      state.cartItems.push(action.payload)
    },
  },
})

export const { addToCart } = cartSlice.actions

const cartReducer = cartSlice.reducer
export default cartReducer
