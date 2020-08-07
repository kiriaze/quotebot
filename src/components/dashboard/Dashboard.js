import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { getQuote } from '../../actions/quote'

import QuoteItem from '../quotes/QuoteItem'

// main app view
const Dashboard = ({
  auth: {
    // user,
    // isAuthenticated // redirect out
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

  return loading ? (
    <span>loading placeholder...</span>
  ) : (
    <Fragment>
      {/* temp nav for demo, first 2 should redirect auto */}
      <Link to="/">Landing</Link>
      <Link to="/onboarding">Onboarding</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/quotes">My Quotes</Link>
      <div className="">
        <h1>Dashboard</h1>
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

export default connect(mapStateToProps, {})(Dashboard)