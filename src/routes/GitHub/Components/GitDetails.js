import React from 'react';

export default class GitDetails extends React.Component {
      render() {
          return (
            <div className="container">
              <div className="row">
                <div className="col-md-3 well">
                  <h1>Followers</h1>
                </div>
                <div className="col-md-3 well">
                  <h1>Following</h1>
                </div>
                <div className="col-md-3 well">
                  <h1>Public Repositories</h1>
                </div>
              </div>

            </div>
        );
    }
}
