import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//auth
import jwt_decode from 'jwt-decode'
import SecuredRoute from './util/SecuredRoute'

// redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';


import Header from './component/partials/Header';
import Routes from './Routes'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <div>
      <Router>
      <Header />

      <div className="container-fluid gedf-wrapper" style={{ paddingTop:"80px" }}>

        <Routes />

      </div>
      </Router>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
