import React, { Component } from 'react';
import GitHubProfile from './routes/GitHubProfile';


class App extends Component {
  render() {
      return (
        <div className="App">
            <div className="App-header">
                  <h1>GitHub Profiler</h1>
            </div>
            <p>To get started enter a username</p>
            <GitHubProfile></GitHubProfile>
        </div>
    );
  }
}

export default App;
