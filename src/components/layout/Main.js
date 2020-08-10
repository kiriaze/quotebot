import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  margin: auto;
  padding: 2rem;
  max-width: 56rem;
  min-height: 100vh;
`

const Main = ({...rest}) => {
  return (<StyledMain {...rest} />)
}

export default Main