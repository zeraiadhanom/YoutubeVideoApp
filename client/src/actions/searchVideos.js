

import store from '../store'
import axios from 'axios';

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
                type:RECIVE_VIDEO,
                payload: results.item
            })
        })
    }
}
export default searchVideo;