import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import Contacts from "./containers/Contacts/Contacts";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
        <Fragment>
            <Layout>
              <div className="Container">
                  <Switch>
                      <Route path="/contacts" exact component={Contacts}/>
                  </Switch>
              </div>
            </Layout>
        </Fragment>
    );
  }
}

export default App;
