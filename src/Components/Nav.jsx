import React from 'react'
import { debounce } from 'lodash'

const Nav = ({ fetchYoutubeVideos }) => {
  const debouncedFetchYoutubeVideos = debounce(fetchYoutubeVideos, 500, { trailing: true})
  return (
    <div className="search-bar">
      <div className="col-md-6 col-md-offset-3">
        <input
          type="text"
          class="form-control"
          placeholder="Start typing to search for videos.."
          onChange={ (event) => {
              debouncedFetchYoutubeVideos(event.target.value)
            }}
        />
      </div>
    </div>
  )
}

export default Nav
