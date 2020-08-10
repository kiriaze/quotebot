import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getQuotes } from '../../actions/quote'

import styled, { css } from 'styled-components'

import Heading from '../ui/heading'
import Main from '../layout/Main'
import { Loader } from '../ui/loader'
import XP from '../ui/xp'

import TempNavigation from '../layout/TempNavigation'
import QuoteItem from '../quotes/QuoteItem'
import UserActions from '../quotes/UserActions'

const DashMain = styled(Main)`

`

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
  let viewedQuotes = quotes.filter(q => q.likes)

  return loading ? (
    <Loader />
  ) : (
    <DashMain>
      <TempNavigation />
      <div className="rate-quote">
        {
          unviewedQuotes[0] ? (
            <Fragment>
              <XP level={viewedQuotes.length}>{viewedQuotes.length} XP</XP>
              <Heading level="6">{unviewedQuotes.length} remaining</Heading>
              <Heading level="2">Quote #{unviewedQuotes[0].id}</Heading>
              <QuoteItem quote={unviewedQuotes[0]} />
              <UserActions quote={unviewedQuotes[0]} />
            </Fragment>
          ) : 'No mas!'
        }
        {/* robo footer ctas */}
      </div>
    </DashMain>
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