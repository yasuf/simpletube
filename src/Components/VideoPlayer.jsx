import React from 'react'

const VideoPlayer = (props) => {
  if(!props.data) {
    return <div>Type something in the search bar to get your videos!</div>
  }

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${props.data.id.videoId}?autoplay`}
          allowFullScreem>
        </iframe>
      </div>
    </div>
  )
}

export default VideoPlayer
