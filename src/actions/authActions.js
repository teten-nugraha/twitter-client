import {
    SET_CURRENT_USER,
    GET_ERRORS
}from './types'
import jwt_decode from 'jwt-decode'
import axios from axios
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

        const { token } = response.data.data

        //set token to ls
        localStorage.setItem('jwtToken', token)

        const decoded = jwt_decode(token)

        dispatch(setCurrentUser(decoded)

    }).catch(function(error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response
        })
    })

}

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}