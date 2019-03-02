import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import Contacts from "./containers/Contacts/Contacts";
import Layout from "./components/Layout/Layout";
import AddNewContacts from "./containers/AddNewContacts/AddNewContacts";

class App extends Component {
  render() {
    return (
        <Fragment>
            <Layout>
              <div className="Container">
                  <Switch>
                      <Route path="/contacts" exact component={Contacts}/>
                      <Route path="/addNewContacts" exact component={AddNewContacts}/>
                  </Switch>
              </div>
            </Layout>
        </Fragment>
    );
  }
}

export default App;
