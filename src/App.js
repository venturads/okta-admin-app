import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';

function App() {
  return (
    <Router>
      <Security
          issuer="https://dev-409495.oktapreview.com/oauth2/default"
          client_id="0oafhkg1yupTnPW9z0h7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
        <div className="App">
          <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <Route path="/staff" exact={true} component={Staff} />
            </div>
        </div>
      </Security>
    </Router>
  );
}

export default App;
