import {
  USER_LOADED,
  // AUTH_ERROR
} from './types'

// basic auth
export const loadUser = () => async dispatch => {
  try {
    // fake call, return structured obj res
    const res = {
      data: {
        // only onboard flag, or user info like: 
        // ip/location, static map url, robot icon
        onboarded: false // temp static
      }
    }
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (error) {
    // not dispatching errors for now,
    // but typically would implement something like alerts/notifications/toasters..
    // console.error(error)
  }
}

// 