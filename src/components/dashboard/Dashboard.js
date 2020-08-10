import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getQuotes } from '../../actions/quote'

import styled, { css } from 'styled-components'

import Heading from '../ui/heading'

import TempNavigation from '../layout/TempNavigation'
import QuoteItem from '../quotes/QuoteItem'
import UserActions from '../quotes/UserActions'

const XP = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: white;
  display: flex;
  width: 5rem;
  height: 5rem;
  font-size: 1rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: var(--theme-colors-success);
  transition: background .35s ease;
  ${props => props.level >= 10 && css`
    background: red;
    // css animation; confetti/pop/bubbly
  `}
  ${props => props.level >= 20 && css`
    background: orange;
    // css animation; confetti/pop/bubbly
  `}
  ${props => props.level >= 30 && css`
    background: purple;
    // css animation; confetti/pop/bubbly
  `}
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
    <span>loading placeholder...</span>
  ) : (
    <Fragment>
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