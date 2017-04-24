import React from 'react'

import VideoListItem from './VideoListItem'

const VideosList = (props) => {
  return (
    <div>
      { props.data.map((video, i) => {
          return <VideoListItem
                   data={ video }
                   onVideoEntryClick={ props.onListEntryClick }
                 />
        })
      }
    </div>
  )
}

export default VideosList
