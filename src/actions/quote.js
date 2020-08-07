import axios from 'axios';
import {
  GET_QUOTES,
  GET_QUOTE,
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

// get quote
export const getQuote = () => async dispatch => {
  try {
    let id = '';
    // no fetch, ref store/ls
    // @todo: load/save methods attached to store..subscription
    let quotes = JSON.parse(localStorage.getItem('quotes'))
    // randomize quote
    let randId = Math.floor(Math.random() * Math.floor(quotes.length - 1))
    dispatch({
      type: GET_QUOTE,
      payload: id ? quotes[id] : quotes[randId]
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

// update likes
export const updateLikes = (id, val) => async dispatch => {
  // val: 0, 1
  // find quote by id
  // ref store or ls(needs parsing)
  // set prop on quote object
  // merge back in
  // save updated quotes to store/ls
  try {
    // getQuote(id)
    dispatch({
      type: UPDATE_LIKES,
      payload: {
        // ... not sure yet
      }
    })
  } catch (error) {
    // 
  }
}

// robo voice?