import { all, fork } from 'redux-saga/effects';
import watchLogin from './login';
export default function* root() {
    yield all([
        fork(watchLogin),
    ]);
};