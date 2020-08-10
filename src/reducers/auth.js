import {
  USER_LOADED,
  USER_ONBOARDED
} from '../actions/types'

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null
}

export default function(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    case USER_ONBOARDED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    default:
      return state
  }
}