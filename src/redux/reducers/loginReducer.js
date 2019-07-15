import * as actionTypes from '../../constants/login';

const iniatialState = {};

const loginReducer = (state = iniatialState, action = {}) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                payload: action.payload,
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                payload: action.payload,
            }
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                payload: action.payload,
            }
        default:
            return state;
    }
}


export default loginReducer;