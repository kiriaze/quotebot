import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getQuotes } from '../../actions/quote';

// loading screen view
const Landing = ({
  auth: {
    user,
    isAuthenticated,
    // loading  // no need, maybe throw in a timeout
  },
  quote: {
    quotes,
    loading
  },
  getQuotes
}) => {
  // fetch quotes, along with other data
  useEffect(() => {
    getQuotes()
  }, [getQuotes])

  // hard to read?
  return loading ? (
    // loading screen content
    <Fragment>
      {/* logo/botIcon */}
      <h2>QuoteBot</h2>
      <p>Welcome to QuoteBot, where we pair you with your own unique robot to help you find inspirational quotes!</p>
      {/* loading svg/animation */}
      <small>Hold on tight while we find your robot…beep boop</small>
    </Fragment>
  ) : (
    isAuthenticated && user.onboarded ? <Redirect to="/dashboard" /> : <Redirect to="/onboarding" />
  )
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired,
  getQuotes: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  quote: state.quote
})

export default connect(mapStateToProps, {
  getQuotes
})(Landing)