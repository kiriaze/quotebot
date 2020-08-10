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
      onboarded: false,
      // http://ip-api.com/json
      location: {
        city: '',
        lat: '',
        lon: ''
      },
      // https://robohash.org/${IP_ADDRESS}.png?bgset=bg2
      robot: '',
      // https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s(-122.4033477,37.7904462)/-122.337798,37.810550,9.67,0.00,0.00/500x500@2x?access_token=pk.eyJ1IjoicmVhbHNlYW4iLCJhIjoiY2s3bnB3YjhjMDE4YjNncGdhaDFraHR2ZiJ9.HbrfAF0MChL2E_T7ZROD9A
      map: ''
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