import { createReducer,  current  } from '@reduxjs/toolkit';

const orderReducer = createReducer({
    orderItems:[],
shippingDetails: {},
totalPrice: 0,
totalAmount: 0,
tax:0,
shippingPrice : 0,
modeOfPayment : 'COD',
},
    {
        loadProductsRequest: (state) => {
            state.loading = true;
        },
        AddToCart: (state,action) => {
            const { product } = action.payload;
            if(!state.orderItems){
                state = {
                    orderItems:[],
        shippingDetails: {},
      totalPrice: 0,
      totalAmount: 0,
      tax:0,
      shippingPrice : 0,
      modeOfPayment : 'COD',
                }
            }
            const products = state.orderItems;
            let isProductPresent = false;
            products.forEach(el => {
                if(el._id === product._id){
                    el.quantity +=1;
                    isProductPresent = true;
                }
            })
            if(!isProductPresent){
                products.push({ ...product, quantity: 1 });
            }
            state.orderItems = products;
            state.totalAmount+= product.price*product.quantity;
            state.totalPrice+=product.price*product.quantity;
            state.tax+=product.price*product.quantity*0.12;
            state.shippingPrice = 50;
            console.log(state);
        },
        clearError: (state) =>{
            state.error = null;
        },
        clearMessage:(state) =>{
            state.message = null;
        }
    }
)

export default orderReducer;