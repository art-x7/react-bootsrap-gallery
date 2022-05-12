import { takeEvery, put, call } from 'redux-saga/effects'
import { REQUEST_PHOTOS, FETCH_PHOTOS} from './types'
import { showAlert, showLoader, hideLoader } from './actions'

import axios from 'axios'
const apiUrl = 'https://jsonplaceholder.typicode.com/photos'


export function* sagaWatcher() {
  yield takeEvery(REQUEST_PHOTOS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPhotos)
    yield put({ type: FETCH_PHOTOS, payload})
    yield put(hideLoader())
  }
  catch (e) {
    yield put(showAlert('Что-то пошло не так'))
    yield put(hideLoader())
  }
}

async function fetchPhotos() {
  const res = await axios.get(apiUrl, {params: {_limit: 14}})
  return await res.data
}

