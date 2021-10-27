import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/sagas.js';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
