import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Manage Contacts" />
            <div className="container">
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Contacts} />
				<Route exact path={process.env.PUBLIC_URL + '/contact/add'} component={AddContact} />
				<Route exact path={process.env.PUBLIC_URL + '/contact/edit/:id'} component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
