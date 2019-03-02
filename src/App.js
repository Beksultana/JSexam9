import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import Contacts from "./containers/Contacts/Contacts";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
        <Fragment>
            <Layout/>
          <Switch>
              <Route path="/contacts" exact coponent={Contacts}/>
          </Switch>
        </Fragment>
    );
  }
}

export default App;
