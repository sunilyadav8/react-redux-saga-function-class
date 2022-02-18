import { all } from 'redux-saga/effects';

import { watchFetchWalletDetail } from './fetchWalletDetailSaga/';

const rootSaga = function* rootSaga() {
  yield all([
    watchFetchWalletDetail(),
  ]);
};

export default rootSaga;
