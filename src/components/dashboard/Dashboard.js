import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getQuote } from '../../actions/quote'

import Heading from '../ui/heading'
import { Button } from '../ui/button'
import { StyledLink } from '../ui/link'

import QuoteItem from '../quotes/QuoteItem'

// main app view
const Dashboard = ({
  auth: {
    // user,
    isAuthenticated // redirect out
  },
  quote: {
    quote,
    loading
  },
  getQuote
}) => {
  useEffect(() => {
    getQuote()
  }, [getQuote])

  if ( !isAuthenticated ) return <Redirect to="/" />

  return loading ? (
    <span>loading placeholder...</span>
  ) : (
    <Fragment>
      {/* temp nav for demo, first 2 should redirect auto */}
      <StyledLink variant="primary" to="/">Landing</StyledLink>
      <StyledLink variant="success" to="/onboarding">Onboarding</StyledLink>
      <StyledLink variant="info" to="/dashboard">Dashboard</StyledLink>
      <StyledLink variant="danger" to="/quotes">My Quotes</StyledLink>
      <div className="">
        <Heading level="2">Dashboard</Heading>
        {quote && (<QuoteItem quote={quote} />)}
        {/* updateLikes ctas */}
        {/* robo footer ctas */}
      </div>
    </Fragment>
  )
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired,
  getQuote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  quote: state.quote
})

export default connect(mapStateToProps, {
  getQuote
})(Dashboard)