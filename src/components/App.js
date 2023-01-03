import React, { Component } from 'react';
import { handleInitialData } from '../actions/sharedActions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading'

import Login from './Login';
import NavigationBar from './NavigationBar';
import QuestionListCard from './QuestionListCard';
import Vote from './Vote';
import Error from './Error';
import LeaderBoard from './LeaderBoard';
import NewPoll from './NewPoll';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { AuthenticateUser } = this.props;
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

            <Switch>
              
              <Route exact path="/" component={QuestionListCard} />

              <Route exact path="/questions/:id" component={Vote} />

              <Route exact path="/leaderboard" component={LeaderBoard} />
              <Route exact path="/add" component={NewPoll} />

              <Route component={Error} />
            </Switch>
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