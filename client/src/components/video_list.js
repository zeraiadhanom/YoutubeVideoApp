import React from 'react'
import './video_list.css'
import VideoItems from './video_item'

class VideoList extends React.Component {
    render() {
        return(
            <section className="videoList"> 
              <p> <strong>This will have list of videos</strong></p>
              <VideoItems />
            </section>
        )
    }
}

export default VideoList;
