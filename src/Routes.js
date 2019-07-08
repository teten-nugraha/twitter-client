import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import SecuredRoute from './util/SecuredRoute'

import Signin from './component/pages/auth/Signin.jsx'
import SignUp from './component/pages/auth/SignUp.jsx'
import ForgotPassword from './component/pages/auth/ForgotPassword'

import Home from './component/pages/home/Home'
import Profile from './component/pages/home/Profile'

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Signin} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/profile" component={Profile} />
            </div>
        )
    }
}

export default Routes;
