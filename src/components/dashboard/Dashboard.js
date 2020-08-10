import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getQuotes } from '../../actions/quote'

import Heading from '../ui/heading'
// import { Button } from '../ui/button'
import { StyledLink } from '../ui/link'

import QuoteItem from '../quotes/QuoteItem'
import UserActions from '../quotes/UserActions'

// main app view
const Dashboard = ({
  auth: {
    // user,
    isAuthenticated // redirect out
  },
  quote: {
    quotes,
    loading
  },
  getQuotes
}) => {
  useEffect(() => {
    getQuotes()
  }, [getQuotes])

  if ( !isAuthenticated ) return <Redirect to="/" />

  let unviewedQuotes = quotes.filter(q => !q.likes)

  return loading ? (
    <span>loading placeholder...</span>
  ) : (
    <Fragment>
      {/* temp nav for demo, first 2 should redirect auto */}
      <StyledLink variant="primary" to="/">Landing</StyledLink>
      <StyledLink variant="success" to="/onboarding">Onboarding</StyledLink>
      <StyledLink variant="info" to="/dashboard">Dashboard</StyledLink>
      <StyledLink variant="danger" to="/quotes">My Quotes</StyledLink>
      <div className="rate-quote">
        {
          unviewedQuotes[0] ? (
            <Fragment>
              <Heading level="6">{unviewedQuotes.length} remaining</Heading>
              <Heading level="2">Quote #{unviewedQuotes[0].id}</Heading>
              <QuoteItem quote={unviewedQuotes[0]} />
              <UserActions quote={unviewedQuotes[0]} />
            </Fragment>
          ) : 'No mas!'
        }
        {/* robo footer ctas */}
      </div>
    </Fragment>
  )
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired,
  getQuotes: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  quote: state.quote
})

export default connect(mapStateToProps, {
  getQuotes
})(Dashboard)