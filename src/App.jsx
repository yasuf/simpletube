import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import SearchBar from './SearchBar'

@observer
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <SearchBar />
        <button onClick={ this.onReset }>
          Seconds passed: { this.props.appState.timer }
        </button>
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
