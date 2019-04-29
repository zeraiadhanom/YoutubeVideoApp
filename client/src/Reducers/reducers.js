import {
   FETCH_PRODUCTS_PENDING, 
   FETCH_PRODUCTS_SUCCESS, 
   FETCH_PRODUCTS_ERROR } from './actions';


const initialState = {
    pending: false,
    Videos: [],
    error: null
}

export function videosReducer(state = initialState, action) {
   switch(action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
      ...state,
      pending: true
     }  
    case FETCH_PRODUCTS_SUCCESS:
      return {
      ...state,
      pending: false,
      videos: action.payoad
    }
    case FETCH_PRODUCTS_ERROR:
     return {
        ...state,
        pending: false,
        error: action.error
      }
     default:
        return state;
  }
}

const middleware = applyMiddleware(thunk, logger())

store dispatch((dispatch) => {
  dispatch({type: FETCH_PRODUCTS_PENDING})
  axios get('url')
   .then(res => {
     dispatch({type:FETCH_PRODUCTS_SUCCESS, payload: Response.data})
   })
   .catch((err) =>{
     dispatch({type:FETCH_PRODUCTS_ERRO, payload:err})
   })
})


export const getVideos = state => state.videos;
export const getVideosPending = state => state.pending;
export const getVideosError = state => state.error;