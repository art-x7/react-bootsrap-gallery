import { SHOW_LOADER, HIDE_LOADER, FETCH_PHOTOS, SHOW_ALERT, HIDE_ALERT } from './types'

const inititalState = {
  photos: [],
  loading: false,
  alert: null,
}

export const photosReducer = (state = inititalState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    case SHOW_ALERT:
      return {...state, alert: action.payload}
    case HIDE_ALERT:
      return {...state, alert: null}
    case FETCH_PHOTOS: 
      return {...state, photos: action.payload, loading: false}

    default: return state
  }
}
