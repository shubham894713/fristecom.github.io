import { createReducer } from '@reduxjs/toolkit';

const userReducer = createReducer(
    {
        login: false,
        isAdmin: false
    },
    {
        loadUserRequest: (state) => {
            state.loading = true;
        },
        loadUserSuccess: (state,action) =>{
            state.loading = false;
            state.login = action.payload.user ? true: false;
            state.isAdmin = action.payload.user && action.payload.user.role ==='admin' ? true: false;
            state.user = action.payload.user;
            state.message = action.payload.message;
        },
        loadUserFailed: (state,action) => {
            state.loading = false;
            state.login = false;
            state.isAdmin = false;
            state.error = action.payload;
        },
        loadUserLoginSuccess: (state,action) => {
            state.loading = false;
            state.login = true;
            state.message = action.payload.message;
        },
        loadUserLoginFailed:(state,action) => {
                state.loading = false;
                state.error = action.payload;
                state.login = false;
        },
        loadUserRegisterSuccess: (state,action)=>{
            state.loading = false;
            state.message = action.payload.message;
        },
        loadUserRegisterFailed: (state, action)=>{
            state.loading = false;
            state.message = action.payload;
        },
        loadUserLogoutFailed: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.login = false;
        },
        loadUserLogoutFailed: (state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.login = false;
        },
        clearError: (state) =>{
            state.error = null;
        },
        clearMessage:(state) =>{
            state.message = null;
        }
    }
)

export default userReducer;