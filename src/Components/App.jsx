import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Nav from './Nav'
import VideosList from './VideosList'
import VideoPlayer from './VideoPlayer'

@observer
class App extends Component {

  fetchYoutubeVideos = (query) => {
    this.props.appState.fetchYoutubeVideos(query)
  }

  selectVideo = (video) => {
    this.props.appState.selectVideo(video)
  }

  render() {
    const { selectedVideo, videoList } = this.props.appState
    return (
      <div>
        <Nav
          fetchYoutubeVideos={ this.fetchYoutubeVideos }
        />
        <div className="row">
          </div>
        { selectedVideo &&
          <div className="col-md-8 col-md-push-4">
            <VideoPlayer
              data={ selectedVideo }
            />
          </div>
          }
          <div className="col-md-4 col-md-pull-8">
            <VideosList
              data={ videoList }
              selectVideo={ this.selectVideo }
            />
          </div>
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
