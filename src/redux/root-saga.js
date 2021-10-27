import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop/sagas.js";
import { userSagas } from "./user/sagas.js";
import { cartSagas } from "./cart/sagas.js";
export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
