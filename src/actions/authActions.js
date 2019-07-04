import {
    SET_CURRENT_USER,
    GET_ERRORS
}from './types'
import jwt_decode from 'jwt-decode'
import axios from "axios"
import {
    API_URL
}from '../util/Url'

export const loginUser = userData => dispatch => {

    axios.post(API_URL + "/users/login", userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        
        const realToken = response.data.data.split("Bearer ");
        
        localStorage.setItem('jwtToken', realToken[1]);

        const decoded = jwt_decode(realToken[1]);

        dispatch(setCurrentUser(decoded));
        
    })
    .catch(function(error) {
        console.log(error)
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: error.response
        // })
    })

}

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('role')

    dispatch(setCurrentUser({}))

    window.location.href = '/login'
}