import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/features/products/productsSlice'
import cartReducer from '../redux/features/cartSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
})