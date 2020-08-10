import {
  GET_QUOTES,
  GET_QUOTE,
  QUOTE_ERROR,
  UPDATE_LIKES
} from '../actions/types'

const initialState = {
  quotes: [],
  quote: null,
  loading: true,
  error: {}
}

export default function( state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: payload,
        loading: false
      }
    case GET_QUOTE:
      return {
        ...state,
        quote: payload,
        loading: false
      }
    case QUOTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case UPDATE_LIKES:
      return {
        ...state,
        quotes: state.quotes.map(quote => quote.id === payload.id ? {
          ...quote,
          likes: {
            count: payload.count,
            date: payload.date
          }
        } : quote ),
        loading: false
      }
    default:
      return state
  }
}