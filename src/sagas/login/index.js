import { put, takeEvery, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import * as loginActions from '../../redux/actions/Login';
import * as types from '../../constants/login';
import api from '../../utils/api';

export function* loginUser(action) {
    try {
        const response = yield call(api.loginUser, action.payload);
        const data = response ? response.data : {};
        yield put(loginActions.loginSuccess({ data }));
        console.log("server response", response);
    } catch (error) {
        console.log("we got you", error.response);
        yield put(loginActions.loginFailure({}));
    }
}

export default function* watchLogin() {
    console.log("go propfgfg");
    yield takeLatest(types.LOGIN_START, loginUser);
}