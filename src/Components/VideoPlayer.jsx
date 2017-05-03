import React from 'react'

import { isEmpty } from 'lodash'

const VideoPlayer = (props) => {
  if(!props.data || isEmpty(props.data)) {
    return null
  }
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${props.data.id.videoId}?autoplay`}
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  )
}

export default VideoPlayer
