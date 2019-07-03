import React, { Component } from 'react'
import './signin.css';

class SignUp extends Component {
    render() {
        return (
            <div className="row">
          
                <div className="col-md-4 mx-auto text-center">
                    <form >
                    <img className="mb-4" src="https://bgasparotto.com/wp-content/uploads/2017/12/spring-boot-logo.png" alt="" width="200" height="130" />
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up Form</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />

                    <label for="fullName" className="sr-only">Fullname</label>
                    <input type="text" id="fullName" className="form-control" placeholder="fullName" required autofocus />

                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

                    <label for="inputPassword" className="sr-only">Password Confirmation</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                    <button className="btn btn-lg btn-default btn-block" type="submit">Sign In</button>
                    <a href="#">Forgot Password</a>
                    <p className="mt-5 mb-3 text-muted">&copy; hackflix 2019</p>
                    </form>
                </div>

            </div>
        )
    }
}

export default SignUp;