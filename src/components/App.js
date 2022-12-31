import React, { Component } from 'react';
import { handleInitialData } from '../actions/sharedActions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading'

import Login from './Login';
import  NavigationBar from './NavigationBar';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { AuthenticateUser, dispatch } = this.props;
    return (

      <Router>
        <div className="App">
          <NavigationBar />
          <LoadingBar />
          {AuthenticateUser === null ? (
            <Route
              render={() => (
                <Login />
              )}
            />
          ) : (
            <React.Fragment>
              {/* <Nav /> */}
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/"
                render={() => (
                  <h2>logged in</h2>
                )} />

            </React.Fragment>
          )}

        </div>
      </Router>
    );
  }
}

function mapStateToProps({ AuthenticateUser, users }) {
  return {
    AuthenticateUser,
    users
  };
}


export default connect(
  mapStateToProps,
  { handleInitialData }
)(App); 