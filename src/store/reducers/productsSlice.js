import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    products: []
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action)=>{
            state.products = action.payload
        },
        setLoading: (state, action)=>{
            state.loading = action.payload
        }
    }
})


export const {setLoading, setProducts} = productsSlice.actions;

export default productsSlice.reducer;