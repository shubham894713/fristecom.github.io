import { createReducer } from '@reduxjs/toolkit';

const productReducer = createReducer(
    {
        products: [],
    },
    {
        loadProductsRequest: (state) => {
            state.loading = true;
        },
        loadProductsSuccess: (state,action) =>{
            state.loading = false;
            state.products = action.payload.products;
            state.message = action.payload.message;
        },
        loadProductsFailed: (state,action) => {
            state.loading = false;
            state.products = [];
            state.error = action.payload;
        },
        deleteProductSuccess: (state, action)=>{
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteProductFailed: (state, action)=>{
            state.loading = false;
            state.message = action.payload;
        },
        clearError: (state) =>{
            state.error = null;
        },
        clearMessage:(state) =>{
            state.message = null;
        }
    }
)

export default productReducer;