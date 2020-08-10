import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Button } from '../ui/button'
import { updateLikes } from '../../actions/quote'

const StyledUA = styled.div`
  display: flex;
  margin-top: 4rem;
  justify-content: space-between;
  > * {

  }
`

const UserActions = ({
  quote,
  updateLikes
}) => {
  return (
    <StyledUA>
      <Button variant="danger" onClick={e => updateLikes(quote, -1)}>Hate it!</Button>
      <Button variant="success" onClick={e => updateLikes(quote, 1)}>Love it!</Button>
    </StyledUA>
  )
}

UserActions.propTypes = {
  updateLikes: PropTypes.func.isRequired
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  updateLikes
})(UserActions)