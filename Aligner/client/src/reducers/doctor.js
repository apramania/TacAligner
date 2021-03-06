import {
    GET_DOCTORS,
    DOCTOR_ERROR,
} from '../actions/types'

const initialState = {
    doctors: [],
    doctor: null,
    error: {}
}

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case GET_DOCTORS:
            return{
                ...state,
                doctors:payload,
                loading:false
            }
        case DOCTOR_ERROR:
            return{
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}