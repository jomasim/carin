import { put, takeEvery, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import * as loginActions from '../../redux/actions/Login';
import * as types from '../../constants/login';
import api from '../../utils/api';
import { storeToken } from '../../utils/auth';
import { Toast } from 'native-base';

export function* loginUser(action) {
    try {
        const response = yield call(api.loginUser, action.payload);
        const data = response ? response.data : {};
        yield put(loginActions.loginSuccess(data));
        if (data && data.message) {
            const token = data.token;
            const message = data.message;
            Toast.show({
                text: message,
                buttonText: "x",
                duration: 3000,
                position: "top",
                type: "success",
            });
            storeToken(token);
        }
    } catch (error) {
        const data = error.response ? error.response.data : {}
        if (data && data.message) {
            const message = data.message;
            Toast.show({
                text: message,
                buttonText: "x",
                duration: 3000,
                position: "top",
            });
        }
        yield put(loginActions.loginFailure(data));
    }
}

export default function* watchLogin() {
    yield takeLatest(types.LOGIN_START, loginUser);
}