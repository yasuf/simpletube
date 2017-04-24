import React from 'react'

import SearchBar from './SearchBar'
import VideosList from './VideosList'

import fakeData from 'utils/fakeData'

const MainContainer = (props) => {
  return (
    <div className="main-container">
      <SearchBar
        fetchYoutubeVideos={ props.fetchYoutubeVideos }
      />
      <div onClick={ () => props.fetchYoutubeVideos () }>Click to fetch</div>
      <VideosList
        data={ fakeData }
      />
    </div>
  )
}

export default MainContainer
