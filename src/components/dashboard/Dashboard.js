import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getQuotes } from '../../actions/quote'

import styled, { css } from 'styled-components'

import Heading from '../ui/heading'
import { Button } from '../ui/button'
import Main from '../layout/Main'
import { Loader } from '../ui/loader'
import XP from '../ui/xp'
import TempNavigation from '../layout/TempNavigation'
import QuoteItem from '../quotes/QuoteItem'
import UserActions from '../quotes/UserActions'

const RoboCTA = styled.div`
  display: flex;
  margin: 2rem 0 0;
`

const RoboIcon = styled.img`
  width: 5rem;
  margin-right: 2rem;
`

const DashMain = styled(Main)`

`

// main app view
const Dashboard = ({
  auth: {
    user,
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
  
  const [robo, setRobo] = useState({
    url: ''
  })

  if ( !isAuthenticated ) return <Redirect to="/" />

  let unviewedQuotes = quotes.filter(q => !q.likes)
  let viewedQuotes = quotes.filter(q => q.likes)

  const playRobot = e => {
    e.preventDefault()
    // remove html and replace spaces with +
    let quoteText = unviewedQuotes[0].content.rendered.replace(/(<([^>]+)>)/gi, '').replace(/ /g, '+')
    // console.log(quoteText)
    setRobo({
      url: `http://api.voicerss.org/?key=0bb282d009b0476f9790b9b76954f35e&src=${quoteText}&hl=en-us`
    })
  }

  return loading ? (
    <Loader />
  ) : (
    <DashMain>
      <TempNavigation />
      {
        unviewedQuotes[0] ? (
          <Fragment>
            <XP level={viewedQuotes.length}>{viewedQuotes.length} XP</XP>
            <Heading level="2">Quote #{unviewedQuotes[0].id}</Heading>
            <RoboCTA>
              <RoboIcon src={user.robot} />
              <Button variant="warning" onClick={e => playRobot(e)}>Robotize me!</Button>
              <audio src={robo.url} autoPlay />
            </RoboCTA>
            <QuoteItem quote={unviewedQuotes[0]} />
            <UserActions quote={unviewedQuotes[0]} />
          </Fragment>
        ) : 'No mas!'
      }
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