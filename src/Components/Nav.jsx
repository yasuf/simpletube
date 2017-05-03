import React from 'react'
import { debounce } from 'lodash'

class Nav extends React.Component {

  componentDidMount() {
    this.textInput.focus()
  }

  render() {
    const { fetchYoutubeVideos } = this.props
    const debouncedFetchYoutubeVideos = debounce(fetchYoutubeVideos, 500, { trailing: true})
    return (
      <div className="navbar navbar-default">
        <div className="col-md-3 logo-title">Simpletube.co</div>
        <div className="col-md-6 main-search-field">
          <input
            type="text"
            class="form-control"
            placeholder="Start typing to search for videos.."
            onChange={ (event) => {
                debouncedFetchYoutubeVideos(event.target.value)
              }}
            ref={ (c) => this.textInput = c}
          />
        </div>
      </div>
    )
  }
}

export default Nav
