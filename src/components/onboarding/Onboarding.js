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

  const userOnboarded = (e) => {
    // fire auth action for flag
    // methodToUpdateState({...data})
    // setData({
    //   ...data,
    //   onboarded: true
    // })
  }

  if ( isAuthenticated && user.onboarded ) {
    return <Redirect to="/dashboard" />
  } else {
    return (
      <Fragment>
        {/* mapbox static img */}
        {/* mini robot blurb..animated? */}
        {/* get started cta -> dash + state.user.onboarded=true */}
        <Link to="/dashboard" onClick={e => userOnboarded(e)}>Get Started!</Link>
      </Fragment>
    )
  }
}

Onboarding.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Onboarding)