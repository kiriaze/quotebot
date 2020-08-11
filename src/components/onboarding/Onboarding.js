import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button } from '../ui/button'
import styled from 'styled-components'
import Main from '../layout/Main'
import { loadUser, onboardUser } from '../../actions/auth'
import { Loader } from '../ui/loader'

const Map = styled.img`
  width: 100%;
  height: 15rem;
  display: block;
  background: var(--theme-colors-baseDark)
`

const RobotBlurb = styled.div`
  width: 100%;
  display: block;
  margin: 2rem 0;
  p {
    padding: 2rem;
    margin: 2rem 0;
    font-size: 1.4rem;
    border-radius: .2rem;
    background: var(--theme-colors-baseLight);
  }
  .robot-icon {
    width: 4rem;
    height: 4rem;
    border-radius: .2rem;
    background: var(--theme-colors-baseLight)
  }
`

// action

// 2nd view after init loading landing view
const Onboarding = ({
  auth: {
    user,
    isAuthenticated,
    loading
  },
  loadUser,
  onboardUser
}) => {

  const [data, setData] = useState({
    user: {
      onboarded: false
    }
  })

  const userOnboarded = (e) => {
    setData({
      user: {
        onboarded: true
      }
    })
    onboardUser({...data})
  }

  if ( isAuthenticated && user.onboarded ) {
    return <Redirect to="/dashboard" />
  } 

  return loading ? (
    <Loader />
  ) : (
    <Main>
      <Map src={user && user.map} />
      {/* mini robot blurb..animated? */}
      <RobotBlurb>
        <p>I was built in {user && user.location.city} to find quotes for you. Rate each quote and I will try to find even better ones.</p>
        <div className="robot-icon"></div>
      </RobotBlurb>
      <Button variant="info" to="/dashboard" onClick={e => userOnboarded(e)}>Get Started!</Button>
    </Main>
  )

}

Onboarding.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  onboardUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {
  loadUser,
  onboardUser
})(Onboarding)