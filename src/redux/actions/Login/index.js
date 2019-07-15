
import * as types from '../../../constants/login';

export const loginUser = (data) => ({
    type: types.LOGIN_START,
    payload: data,
});

export const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data,
});

export const loginFailure = (data) => ({
    type: types.LOGIN_FAILURE,
    payload: data,
});