import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getQuotes } from '../../actions/quote'
import Heading from '../ui/heading'
import QuoteItem from './QuoteItem'
import TempNavigation from '../layout/TempNavigation'

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

  quotes = quotes.filter(quote => quote.likes)

  if ( !isAuthenticated ) {
    return <Redirect to="/" />
  } else {
    return loading ? (
      <span>loading placeholder...</span>
    ) : (
      <Fragment>
        <TempNavigation />
        <div className="">
          <Heading level="2">My Quotes ({quotes && quotes.length})</Heading>
          {quotes && quotes.map(quote => (<QuoteItem key={quote.id} quote={quote} showMeta="true" />))}
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