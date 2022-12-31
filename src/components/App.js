import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Grid } from 'semantic-ui-react';
import { handleInitialData } from '../actions/sharedActions'; // <- new
import { connect } from 'react-redux'; // <- new

class App extends Component {
  componentDidMount() { // <- new
    this.props.handleInitialData(); // <- new
  } // <- new
  render() {
    return (
      <Router>
        <div className="App">
          {/* <ContentGrid> */}
            <p>New Start...</p>
          {/* </ContentGrid> */}
        </div>
      </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

export default connect( // <- new
  null, // <- new
  { handleInitialData } // <- new
)(App); // <- new