import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        name: 'casual-T-Shirt',
        category: "GodGets",
        price: 100,
        image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: '11/12/12'
    },
    {
        id: 2,
        name: 'casual-T-Shirt',
        category: "GodGets",
        price: 200,
        image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        date: '11/12/12'
    },
    {
        id: 3,
        name: 'casual-T-Shirt',
        category: "GodGets",
        price: 300,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        date: '11/12/12'
    }, 
    {
        id: 4,
        name: 'casual-T-Shirt',
        category: "GodGets",
        price: 400,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: '11/12/12'
    },
    {
        id: 5,
        name: 'casual-T-Shirt',
        category: "GodGets",
        price: 500,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        date: '11/12/12'
    },
];

const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
        state.push({
            id: state.length > 0 ? state[state.length - 1].id : 1,
            ...action.payload
        })
    }
  }
})

export const {addProduct} = productsSlice.actions;
export default productsSlice.reducer;

