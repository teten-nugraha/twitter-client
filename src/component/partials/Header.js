import React, { Component } from 'react'
import {
    Link,
    NavLink
  } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'


class Header extends Component {

    constructor(props) {
        super(props);
       
        this.onLogoutClick = this.onLogoutClick.bind(this);    
    }

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {

        const { isAuthenticated, user }  = this.props.auth;

        const profileLink = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
                </li>
            </ul>
        );

        const signOut = (
            <button onClick={this.onLogoutClick.bind(this)} className="btn btn-outline-success my-2 my-sm-0">Sign Out</button>
        );

        const signIn = (
            <Link to="/login" className="btn btn-outline-success my-2 my-sm-0 ">
                Sign In
            </Link>
        );

        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        
                        {isAuthenticated ? profileLink: null }

                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                {isAuthenticated ? signOut: signIn }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth: state.auth
  })
  
  export default connect(mapStateToProps,{logoutUser})(Header);
