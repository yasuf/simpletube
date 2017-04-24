import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Nav from './Nav'
import VideosList from './VideosList'

@observer
class App extends Component {

  fetchYoutubeVideos = (query) => {
    this.props.appState.fetchYoutubeVideos(query)
  }

  render() {
    return (
      <div>
        <Nav
          fetchYoutubeVideos={ this.fetchYoutubeVideos }
        />
        <VideosList
          data={ this.props.appState.videoList }
        />
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
