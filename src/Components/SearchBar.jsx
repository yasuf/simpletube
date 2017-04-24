import React from 'react'
import { debounce } from 'lodash'

const SearchBar = ({ fetchYoutubeVideos }) => {
  const debouncedFetchYoutubeVideos = debounce(fetchYoutubeVideos, 500, { trailing: true})
  return (
    <div className="search-bar">
      <div className="input-group">
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

export default SearchBar
