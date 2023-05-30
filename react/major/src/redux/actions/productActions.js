import axios from 'axios';

export const getProducts = ({limit, skip}) => async (dispatch) => {
    try{
        dispatch({
            type: 'loadProductsRequest',
        });
        let query = '?';
        if(typeof limit === 'number') {
            query += `limit=${limit}&`;
        }
        if(typeof skip === 'number') {
            query += `skip=${limit}`;
        }
        const { data:{ data, code, message } } = await axios.get(`products/getAllproducts${query}`,{
            withCredentials: true,
            mode: 'cors',
        });
        if(code !==200) {
            return dispatch({
                type: 'loadProductsFailed',
                payload: message,
            })
        }
        return dispatch({
            type: 'loadProductsSuccess',
            payload: { products: data.products, message }
        });
    } catch(error) {
        dispatch({
            type: 'loadProductsFailed',
            payload: error,
        })
    }
}

export const deleteProduct = ({productId}) => async (dispatch) => {
    try{
        dispatch({
            type: 'loadProductsRequest',
        });
        const { data:{ code, message } } = await axios.delete(`/products/admin/deleteProduct?productId=${productId}`,{
            withCredentials: true,
            mode: 'cors',
        });
        if(code !==200) {
            return dispatch({
                type: 'deleteProductsFailed',
                payload: message,
            })
        }
        return dispatch({
            type: 'deleteProductsSuccess',
            payload: { message }
        });
    } catch(error) {
        dispatch({
            type: 'deleteProductsFailed',
            payload: error,
        })
    }
}