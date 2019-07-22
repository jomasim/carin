import * as actionTypes from '../../constants/login';

const iniatialState = {};

const loginReducer = (state = iniatialState, action = {}) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                data: action.payload,
                loading: true,
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}


export default loginReducer;