import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import Contacts from "./containers/Contacts/Contacts";
import Layout from "./components/Layout/Layout";
import AddNewContacts from "./containers/AddNewContacts/AddNewContacts";
import Edit from "./containers/Edit/Edit";

class App extends Component {
  render() {
    return (
        <Fragment>
            <Layout>
              <div className="Container">
                  <Switch>
                      <Route path="/contacts" exact component={Contacts}/>
                      <Route path="/addNewContacts" exact component={AddNewContacts}/>
                      <Route path="/edit/:id" exact component={Edit}/>
                  </Switch>
              </div>
            </Layout>
        </Fragment>
    );
  }
}

export default App;
