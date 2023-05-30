import axios from "axios";

export const createNewCart = 
({ product }) =>
async (dispatch) => {
    try {
        dispatch({
            type: "loadCartRequest",
        });
        console.log(product);
        ///delete product.rating;
        const {
            data: { data, code, message },
        } = await axios.post(
            `cart/addToCart`,
            { product },
            {
                withCredentials: true,
                mode: "cors",
            }
        );
        if (code !== 200) {
            return dispatch({
                type: "loadCartFailed",
                payload: message,
            });
        }
        return dispatch({
            type: "loadCartSuccess",
            payload: { cart: data.cart, message },
        });
    } catch (error) {
        dispatch({
            type: "loadCartFailed",
            payload: error,
        });
    }
}
export const getCart =
  () =>
  async (dispatch) => {
    try {
      dispatch({
        type: "loadCartRequest",
      });
      const {
        data: { data, code, message },
      } = await axios.get(
        `cart/getMyCart`,
        {
          withCredentials: true,
          mode: "cors",
        }
      );
      if (code !== 200) {
        return dispatch({
          type: "loadCartFailed",
          payload: message,
        });
      }
      return dispatch({
        type: "loadCartSuccess",
        payload: { cart: data.cart, message },
      });
    } catch (error) {
      dispatch({
        type: "loadCartFailed",
        payload: error,
      });
    }
  };