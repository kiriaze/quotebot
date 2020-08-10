import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// temp nav for demo, first 2 should redirect auto

const StyledNav = styled.nav`
  display: flex;
  flex-flow: column;
  margin-bottom: 2rem;
`
const TempNavigation = () => {
  return (
    <StyledNav>
      <Link to="/">Landing</Link>
      <Link to="/onboarding">Onboarding</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/quotes">My Quotes</Link>
    </StyledNav>
  )
}

export default TempNavigation