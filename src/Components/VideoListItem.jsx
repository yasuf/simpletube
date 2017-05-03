import React from 'react'

const VideoListItem = (props) => {
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={ props.data.snippet.thumbnails.default.url } alt="" />
      </div>
      <div className="media-body">
        <div
          className="video-list-entry-title"
          onClick={ () => props.onVideoEntryClick(props.data)}
        >
          { props.data.snippet.title }
        </div>
        <div className="video-list-entry-detail">
          { props.data.snippet.description }
        </div>
      </div>
    </div>
  )
}

export default VideoListItem
