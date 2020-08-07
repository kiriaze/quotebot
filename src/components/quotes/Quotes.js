import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { getQuotes } from '../../actions/quote';

import QuoteItem from './QuoteItem'

// my quotes view
const Quotes = ({
  isAuthenticated,
  quote: {
    quotes,
    loading
  },
  getQuotes
}) => {
  useEffect(() => {
    getQuotes()
  }, [getQuotes])

  if ( !isAuthenticated ) {
    return <Redirect to="/" />
  } else {
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
          <h1>My Quotes</h1>
          {quotes && quotes.map(quote => <QuoteItem key={quote.id} quote={quote} showMeta="true" />)}
        </div>
      </Fragment>
    )
  }
}

Quotes.propTypes = {
  isAuthenticated: PropTypes.bool,
  quote: PropTypes.object.isRequired,
  getQuotes: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  quote: state.quote
})

export default connect(mapStateToProps, {
  getQuotes
})(Quotes)