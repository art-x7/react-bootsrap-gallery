import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, REQUEST_PHOTOS } from './types'


export const showLoader = () => {
  return {
    type: SHOW_LOADER
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  }
}

export const showAlert = (text) => {
  return dispatch => {
    dispatch({
    type: SHOW_ALERT,
    payload: text
  })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 2000)
  }
}

export const hideAlert = () => {
  return {
    type: HIDE_ALERT
  }
}

export const fetchPhotos = () => {
  return {
    type: REQUEST_PHOTOS
  }
}
