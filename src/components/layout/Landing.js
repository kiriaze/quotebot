import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getQuotes } from '../../actions/quote';
import styled from 'styled-components'
import Heading from '../ui/heading'
import logo from '../../assets/images/app-logo-2.gif'
// import logo from '../../assets/images/app-logo.svg'
import Loader from '../ui/loader'

const StyledLanding = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  justify-content: center;

  margin: auto;
  max-width: 56rem;

  .logo {
    max-width: 20rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 3rem 0;
    max-width: 80%;
    line-height: 1.6;
  }
  small {
    position: absolute;
    bottom: 3rem;
    font-size: 1.1rem;
  }
`

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

  return loading ? 
    // loading screen content
    <StyledLanding>
      <img className="logo" src={logo} alt=""/>
      <Heading level="1">QuoteBot</Heading>
      <p>Welcome to QuoteBot, where we pair you with your own unique robot to help you find inspirational quotes!</p>
      <Loader />
      <small>Hold on tight while we find your robot…beep boop</small>
    </StyledLanding>
  : (
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