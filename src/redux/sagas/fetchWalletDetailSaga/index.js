import { put, takeLatest, call } from 'redux-saga/effects';
import ApiCaller from '../../../common/apiCaller';

const fetchWalletDetail = payload => ApiCaller(`activity`, 'get').then(response => response);
export const watchFetchWalletDetail = function* watchFetchWalletDetail() {
  yield takeLatest('FETCH_WALLET_DETAILS', function* (action) {
    try {
      const data = yield call(fetchWalletDetail.bind(this, action.payload));
      yield put({ type: 'FETCH_WALLET_DETAILS_SUCCESS', payload: data });
    } catch (error) {
      yield put({ type: 'FETCH_WALLET_DETAILS_FAILED', payload: error });
    }
  });
};
