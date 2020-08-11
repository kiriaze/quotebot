import {
  USER_LOADED,
  USER_ONBOARDED,
  // AUTH_ERROR
} from './types'

import axios from 'axios'

// basic auth
export const loadUser = () => async dispatch => {
  try {
    let user = localStorage.getItem('user');
    if ( !user ) {
      let ipRes = await axios.get('http://ip-api.com/json')
      let ipAddress = ipRes.data.query.trim('"'),
          city = ipRes.data.city,
          lat = ipRes.data.lat,
          lon = ipRes.data.lon;
      let roboRes = await axios.get(`https://robohash.org/${ipAddress}.png?bgset=bg2`)
      let mapRes = await axios.get(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s(${lon},${lat})/${lon},${lat},9.67,0.00,0.00/500x500@2x?access_token=pk.eyJ1IjoicmVhbHNlYW4iLCJhIjoiY2s3bnB3YjhjMDE4YjNncGdhaDFraHR2ZiJ9.HbrfAF0MChL2E_T7ZROD9A`)
      user = {
        onboarded: false,
        location: {
          city,
          lat,
          lon
        },
        robot: roboRes.config.url,
        map: mapRes.config.url
      }
      localStorage.setItem('user', JSON.stringify(user))
    }
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
    let oldUser = JSON.parse(localStorage.getItem('user'))
    let user = {
      ...oldUser,
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