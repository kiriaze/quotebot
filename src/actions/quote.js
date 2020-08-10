import axios from 'axios';
import {
  GET_QUOTES,
  // GET_QUOTE,
  QUOTE_ERROR,
  UPDATE_LIKES
} from './types';

// get quotes
export const getQuotes = () => async dispatch => {

  // api endpoint def; set in config or lets just place it here for now
  // remove rand param, unsure if wp verifies whether paginated results are correct and keep it random via getQuote()
  // let quotesURL = `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=100`;
  let quotesURL = `https://quotesondesign.com/wp-json/wp/v2/posts/?per_page=100`;

  try {

    // fake timeout testing landing/loading screen
    await new Promise((resolve, reject) => setTimeout(resolve, 3000))

    // check if we have data available in store/localStorage
    if ( !localStorage.getItem('quotes') ) {
      let res = await axios.get(`${quotesURL}`);
      // store it
      localStorage.setItem('quotes', JSON.stringify(res.data))
      // @todo:
      // should we preemptively map thru and attach likes prop to each quote prior to storing stringified data
      // or should we only do this when user interacts with actions
      // and find matching object id, add prop, then merge back into quotes array + store/LS updates?
    }
    
    dispatch({
      type: GET_QUOTES,
      payload: JSON.parse(localStorage.getItem('quotes')) // clean up / var ref
    })

  } catch (error) {
    dispatch({
      type: QUOTE_ERROR,
      payload: {
        msg: 'Placeholder',
        status: 500
      }
    })
  }
}

// // get quote
// // only non viewed (non liked/disliked)
// // @deprecated: no longer in use; using getQuotes instead
// export const getQuote = id => async dispatch => {
//   // @todo: remove ID as we're no longer needing to ref, state should do
//   try {
//     // no fetch, ref store/ls
//     // @todo: load/save methods attached to store..subscription
//     let quotes = JSON.parse(localStorage.getItem('quotes'))
//     quotes.filter(quote => !quote.likes)
//     // randomize quote
//     let randId = Math.floor(Math.random() * Math.floor(quotes.length - 1))
//     dispatch({
//       type: GET_QUOTE,
//       payload: id ? quotes[id] : quotes[randId]
//     })
//   } catch (error) {
//     dispatch({
//       type: QUOTE_ERROR,
//       payload: {
//         msg: 'Placeholder',
//         status: 500
//       }
//     })
//   }
// }

// update likes
export const updateLikes = (quote, val) => async dispatch => {
  // val: -1, +1
  quote.likes = {
    date: new Date().toISOString(),
    count: val
  }
  let quotes = JSON.parse(localStorage.getItem('quotes'))
  quotes[quotes.findIndex(q => q.id === quote.id )] = quote
  localStorage.setItem('quotes', JSON.stringify(quotes))
  try {
    dispatch({
      type: UPDATE_LIKES,
      payload: quote.likes
    })
  } catch (error) {
    // 
  }
}

// robo voice?