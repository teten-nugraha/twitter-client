import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './component/partials/Header';
import Signin from './component/pages/auth/Signin.jsx'
import SignUp from './component/pages/auth/SignUp.jsx'

function App() {
  return (
    <div>
    
      <Header />

      <div className="container-fluid gedf-wrapper" style={{ paddingTop:"80px" }}>

        <SignUp />

      </div>

    </div>

  );
}

export default App;
