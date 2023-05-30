import { createReducer,  current  } from '@reduxjs/toolkit';

const cartReducer = createReducer({},
    {
        loadCartRequest: (state) => {
            state.loading = true;
        },
        loadCartSuccess: (state,action) =>{
            state.loading = false;
            state.cart = action.payload.cart;
            state.message = action.payload.message;
        },
        loadCartFailed: (state,action) => {
            state.loading = false;
            state.cart = {};
            state.error = action.payload;
        },
        clearError: (state) =>{
            state.error = null;
        },
        clearMessage:(state) =>{
            state.message = null;
        }
    }
)

export default cartReducer;