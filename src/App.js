import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";

class App extends Component {
  render() {
    return (
        <Fragment>
          <Switch>
              <Route path="/" exact/>
          </Switch>
        </Fragment>
    );
  }
}

export default App;
