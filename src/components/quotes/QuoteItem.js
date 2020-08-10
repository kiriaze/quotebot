import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Quote = styled.div`
  line-height: 2;
  margin: 2rem 0 4rem;
  cite {
    display: block;
    margin: 2rem 0 0;
    font-style: italic;
  }
`

const QuoteItem = ({ quote, showMeta }) => {
  return (
    <Quote>
      <div dangerouslySetInnerHTML={{ __html: quote.content.rendered }} />
      <cite>{quote.title.rendered}</cite>
      {showMeta && (<span>{quote.likes === 1 ? 'Liked' : 'Disliked'} on 08.07.2020</span>)}
    </Quote>
  )
}

QuoteItem.defaultProps = {
  showMeta: false
}

QuoteItem.propTypes = {
  quote: PropTypes.object.isRequired
}

export default QuoteItem