import {
    SET_CURRENT_USER,
    GET_ERRORS
}from './types'
import jwt_decode from 'jwt-decode'
import axios from axios

export const loginUser = userData => dispatch => {

    axios.post("localhost:8080/api/users/login")

}