import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from "./redux/reducer/cartReducer";
import userReducer from './redux/reducer/userReducer'; 
import productReducer from './redux/reducer/productReducer'


const store = configureStore({ 
    reducer: combineReducers({
        user: userReducer,
        productStore: productReducer,
        cartStore: cartReducer,
    }),
});

export default store;