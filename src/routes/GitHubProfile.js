import React, { Component } from 'react';
import GitProfileBasics from './GitHub/Components/GitProfileBasics';
import GitDetails from './GitHub/Components/GitDetails';


class GitHubProfile extends Component {
  render() {
      return (
        <div className="container">
          <div className="GitHubProfile">
              <div className="row">
                  <div className="col-md-3">
                    <GitProfileBasics></GitProfileBasics>
                  </div>
                  <div className="col-md-9">
                    <GitDetails></GitDetails>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

export default GitHubProfile;
