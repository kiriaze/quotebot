import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const QuoteItem = ({ quote, showMeta }) => {
  return (
    <Fragment>
      <h2>Quote #{quote.id}</h2>
      {/* @todo: find alt to below; xss issues */}
      <div dangerouslySetInnerHTML={{ __html: quote.content.rendered }} />
      <cite>{quote.title.rendered}</cite>
      {/* liked/disliked + on 08.07.2020 (format date..use moment or natural..) */}
      {showMeta && (<span>Liked on 08.07.2020</span>)}
    </Fragment>
  )
}

QuoteItem.defaultProps = {
  showMeta: false
}

QuoteItem.PropTypes = {
  quote: PropTypes.object.isRequired
}

export default QuoteItem