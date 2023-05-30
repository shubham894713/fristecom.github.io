import axios from 'axios';

export const checkUser=() => async (dispatch) => {
    try{
        dispatch({
            type: 'loadUserRequest',
        });
        const { data :{ data, code, message } } = await axios.get('users/me',{
            withCredentials: true,
            mode: 'cors',
        });
        if(code !==201) {
            return dispatch({
                type: 'loadUserFailed',
                payload: message,
            })
        }
        return dispatch({
            type: 'loadUserSuccess',
            payload: { user: data.user, message }
        });
    } catch(error) {
        dispatch({
            type: 'loadUserFailed',
            payload: error,
        })
    }
}
export const login = ({ email, password }) => async (dispatch) => {
    try{
        dispatch({
            type: 'loadUserRequest',
        });
        const { data:{ data, code, message } } = await axios.post('users/login',{ email, password },{
            withCredentials: true,
            mode: 'cors',
        });
        if(code !==201) {
            return dispatch({
                type: 'loadUserLoginFailed',
                payload: message,
            })
        }
        return dispatch({
            type: 'loadUserLoginSuccess',
            payload: { message }
        });
    } catch(error) {
        dispatch({
            type: 'loadUserLoginFailed',
            payload: error,
        })
    }
}

export const register = ({ email, password, mobile, name, securityAnswer, securityQuestion, pic }) => async (dispatch) => {
    try{
        dispatch({
            type: 'loadUserRequest',
        });
        const { data:{ data, code, message } } = await axios.post('users/signUp',{ email, password, mobile, name, securityAnswer, securityQuestion, pic},{
            withCredentials: true,
            mode: 'cors',
        });
        if(code !==201) {
            return dispatch({
                type: 'loadUserRegisterFailed',
                payload: message,
            })
        }
        return dispatch({
            type: 'loadUserRegisterSuccess',
            payload: { message }
        });
    } catch(error) {
        dispatch({
            type: 'loadUserRegisterFailed',
            payload: error,
        })
    }
}

export const logout = () => async (dispatch) => {
    try{
        dispatch({
            type: 'loadUserRequest',
        });
        const { data:{ data, code, message } } = await axios.put('users/logout',{},{
            withCredentials: true,
            mode: 'cors',
        });
        if(code !==201) {
            return dispatch({
                type: 'loadUserLogoutFailed',
                payload: message,
            })
        }
        return dispatch({
            type: 'loadUserLogoutSuccess',
            payload: { message }
        });
    } catch(error) {
        dispatch({
            type: 'loadUserLogoutFailed',
            payload: error,
        })
    }
}