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
        

        const realToken = response.data.data;
        
        localStorage.setItem('jwtToken', realToken);

        const decoded = jwt_decode(realToken);

        dispatch(setCurrentUser(decoded));
        
    })
    .catch(function(error) {

        // console.log(error)

        // dispatch({
        //     type: GET_ERRORS,
        //     payload: error.response
        // })
    })

}

export const signupUser = userData => dispatch => {

    axios.post(API_URL + "/users/register", userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        
        console.log(response)

        // window.location.href = '/login'
        
    })
    .catch(function(error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
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

    dispatch(setCurrentUser({}))

    window.location.href = '/login'
}