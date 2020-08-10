import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Quote = styled.div`
  ${props => props.showMeta && css`
    p {
      font-size: 1.5rem;
      line-height: 1.8;
    }
  `}
  ${props => !props.showMeta && css`
    line-height: 2;
  `}
  margin: 2rem 0 5rem;
  cite {
    display: block;
    font-style: italic;
  }
  .meta {
    display: flex;
    margin: 2rem 0 0;
    align-items: center;
    justify-content: space-between;
  }
  span {
    font-size: 1.2rem;
  }
`

const QuoteItem = ({ quote, showMeta }) => {
  return (
    <Quote showMeta={showMeta}>
      <div dangerouslySetInnerHTML={{ __html: quote.content.rendered }} />
      <div className="meta">
        <cite>{quote.title.rendered}</cite>
        {showMeta && (<span>{quote.likes.count === 1 ? 'Liked' : 'Disliked'} on 08.07.2020</span>)}
      </div>
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