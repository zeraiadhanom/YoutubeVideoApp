

import store from '../store'
import axios from 'axios';


export const FETCH_VIDEO_PENDING = 'FETCH_VIDEO_PENDING';
export const FETCH_VIDEO_SUCCESS = 'FETCH_VIDEO_SUCCESS';
export const FETCH_VIDEO_ERROR = 'FETCH_VIDEO_ERROR';


function fetchVideoPending() {
   return {
    type: FETCH_VIDEO_PENDING
  }
}


function fetchVideoSuccess(videos) {
  return {
    type: FETCH_VIDEO_SUCCESS,
    videos: videos
  }
}


function fetchVideoError(error) {
   return {
     type:FETCH_VIDEO_ERROR,
     error: error 
   }
}




const searchVideo =(id) => {
    return dispatch => {
        dispatch({
            type: 'SEARCH_VIDEO'
        })
        let key = 'AIzaSyD_9xVcB8Uj-uZSLNKe9VELLE_nJyJXBqg'
        axios.get(`https://www.google.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`)
        .then(response => response.data)
        .then(results =>{
            dispatch({
                type:FETCH_VIDEO_SUCCESS,
                payload: results.item
            })
        })
    }
}
export default searchVideo;