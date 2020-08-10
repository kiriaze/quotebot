import {
  USER_LOADED,
  USER_ONBOARDED,
  // AUTH_ERROR
} from './types'

// basic auth
export const loadUser = () => async dispatch => {
  try {
    // fake call, return structured obj res
    let user = {
      onboarded: false 
      // only onboard flag, or user info like: 
      // ip/location, static map url, robot icon
    }
    user = localStorage.getItem('user') || localStorage.setItem('user', JSON.stringify(user))
    dispatch({
      type: USER_LOADED,
      payload: JSON.parse(user)
    })
  } catch (error) {
    // not dispatching errors for now,
    // but typically would implement something like alerts/notifications/toasters..
    // console.error(error)
  }
}

// onboard user
export const onboardUser = () => async dispatch => {
  try {
    let user = {
      onboarded: true
    }
    localStorage.setItem('user', JSON.stringify(user))
    dispatch({
      type: USER_ONBOARDED,
      payload: user
    })
  } catch (error) {
    // not dispatching errors for now,
    // but typically would implement something like alerts/notifications/toasters..
    // console.error(error)
  }
}