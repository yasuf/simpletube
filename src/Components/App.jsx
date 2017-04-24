import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import MainContainer from './MainContainer'

@observer
class App extends Component {
  render() {
    return (
      <div>
        <MainContainer
          fetchYoutubeVideos={ this.props.appState.fetchYoutubeVideos }
        />
        {/* <button onClick={ this.onReset }>
            Seconds passed: { this.props.appState.timer }
            </button> */}
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
