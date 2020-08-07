import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

// action

// 2nd view after init loading landing view
const Onboarding = ({
  auth: {
    user,
    isAuthenticated,
    // loading
  }
}) => {

  // // or we could use useState
  // const [data, setData] = useState({

  // })

  // const userOnboarded = (e) => {
  //   // fire auth action for flag
  //   // methodToUpdateState({...data})
  //   setData({
  //     ...data,
  //     onboarded: true
  //   })
  // }

  if ( isAuthenticated && user.onboarded ) {
    <Redirect to="/dashboard" />
  } else {
    <div className="">
      {/* mapbox static img */}
      {/* mini robot blurb..animated? */}
      {/* get started cta -> dash + state.user.onboarded=true */}
      <Link to="/dashboard" onClick={e => userOnboarded(e)}>Get Started!</Link>
    </div>
  }
}

Onboarding.PropTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Onboarding)