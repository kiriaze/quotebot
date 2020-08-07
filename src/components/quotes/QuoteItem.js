import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Heading from '../ui/heading'
import { Button } from '../ui/button'

const UserActions = styled.div`
  display: flex;
  justify-content: space-between;
  > * {

  }
`

const QuoteItem = ({ quote, showMeta }) => {
  const updateLikes = (e) => {

  }
  return (
    <Fragment>
      <Heading level="2">Quote #{quote.id}</Heading>
      {/* @todo: find alt to below; xss issues */}
      <div dangerouslySetInnerHTML={{ __html: quote.content.rendered }} />
      <cite>{quote.title.rendered}</cite>
      {/* liked/disliked + on 08.07.2020 (format date..use moment or natural..) */}
      <UserActions>
        <Button variant="danger" onClick={e => updateLikes(e)}>Hate it!</Button>
        <Button variant="success" onClick={e => updateLikes(e)}>Love it!</Button>
      </UserActions>
      {showMeta && (<span>Liked on 08.07.2020</span>)}
    </Fragment>
  )
}

QuoteItem.defaultProps = {
  showMeta: false
}

QuoteItem.propTypes = {
  quote: PropTypes.object.isRequired
}

export default QuoteItem