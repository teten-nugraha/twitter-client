import React, { Component } from 'react'
import './signin.css';
import {
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signupUser } from '../../../actions/authActions'

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "teten@mail.com",
            fullname: "teten@mail.com",
            password:"123456",
            confirmPassword:"123456",
            isLoading: false,
            errors:false,
            errorMessage:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        
    }

    componentDidMount() {

        const { isAuthenticated, user }  = this.props.auth;

        if(isAuthenticated) {
            this.props.history.push('/');
        }

    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.errors) {
           
            this.setState({
                errors: nextProps.errors.error,
                errorMessage: nextProps.errors.data.exception
            })

        }

    }

    validateForm() {
        return this.state.username.length >0 && this.state.password.length>0;
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit =  event => {
        event.preventDefault();
        
        const data = {
            username : this.state.username,
            fullname : this.state.fullname,
            password : this.state.password,
            confirmPassword : this.state.confirmPassword
        }
        this.setState({
            isLoading: true,
            errors:false
        })
        // console.log(data)
        this.props.signupUser(data)

    }

    render() {

        let showNotifError = null;
        if(this.state.errors) {
            showNotifError = (
                <div className="alert alert-danger" role="alert">
                    {this.state.errorMessage}
                </div>
            );
        }

        return (
            <div className="row">
          
                <div className="col-md-4 mx-auto text-center">

                    {showNotifError}

                    <form onSubmit={this.handleSubmit}>
                    <img className="mb-4" src="https://bgasparotto.com/wp-content/uploads/2017/12/spring-boot-logo.png" alt="" width="200" height="130" />
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up Form</h1>
                    
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email address" 
                        required 
                        autofocus 
                        value={this.state.username}
                        onChange={this.handleChange}
                        name="username"
                        />

                    <label for="inputEmail" className="sr-only">Fullname</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Fullname" 
                        required 
                        autofocus 
                        value={this.state.fullname}
                        onChange={this.handleChange}
                        name="fullname"
                        />

                    
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input 
                        type="password" 
                        id="inputPassword" 
                        className="form-control" 
                        placeholder="Password" 
                        required 
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                        />

                    <label for="inputPassword" className="sr-only">Password Confirm</label>
                    <input 
                        type="password" 
                        id="inputPassword" 
                        className="form-control" 
                        placeholder="Password" 
                        required 
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        name="confirmPassword"
                        />

                        <button 
                            type="submit" 
                            className="btn btn-primary btn-block mb-2"
                            disabled={!this.validateForm()}
                            >Submit</button>
                    <Link to="/login" className="btn btn-lg btn-default btn-block" type="submit">Sign In</Link>
                    <a href="#">Forgot Password</a>
                    <p className="mt-5 mb-3 text-muted">&copy; hackflix 2019</p>
                    </form>
                </div>

            </div>
        )
    }
}

SignUp.propTypes = {
    signupUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps,{signupUser})(SignUp);
