import React from 'react'
import { NavLink } from 'react-router-dom'
import ValidationError from '../ValidationError'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: {
                value: "",
                touched: false,
            },
            password: {
                value: "",
                touched: false,
            },
            repeatPassword: {
                value: "",
                touched: false,
            },

        }
    }
    changeUsername(user_name) {
        this.setState({
            user_name: { value: user_name, touched: true },
        });
    }

    changePassword(password) {
        this.setState({
            password: { value: password, touched: true },
        });
    }

    updateRepeatPassword(repeatPassword) {
        this.setState({
            repeatPassword: { value: repeatPassword, touched: true },
        });
    }

    validateUserName() {
        const user_name = this.state.user_name.value.trim();
        if (user_name.length === 0) {
            return <p className="input-error">Username is required</p>;
        } else if (user_name.length < 2) {
            return (
                <p className="input-error">
                    Username must be at least 2 characters long
                </p>
            );
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return <p className="input-error">Password is required</p>;
        } else if (password.length < 6 || password.length > 72) {
            return (
                <p className="input-error">
                    Password must be between 6 and 72 characters long
                </p>
            );
        } else if (!password.match(/[0-9]/)) {
            return (
                <p className="input-error">
                    Password must contain at least one number
                </p>
            );
        }
    }

    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();

        if (repeatPassword !== password) {
            return <p className="input-error">Passwords do not match</p>;
        }

    }
    registerUser = (event) => {
        event.preventDefault();
        //get the input from the form submission
        const data = {};
        //get the payload from the form submission
        const formData = new FormData(event.target);
        for (let value of formData) {
            data[value[0]] = value[1];
        }
        // console.log(data);

        let { user_name,
            password
        } = data;
        //console.log(user_name, password, repeatPassword);


        this.setState({ error: null })
        AuthApiService.postUser({
            user_name,
            password
        })

            .then(response => {
                //console.log('user:', response)
                TokenService.saveAuthToken(response.authToken)
                TokenService.saveUserId(response.id)
                // window.location = "/add-item"
            })

            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    render() {
        const msg = this.state.error ?
            <p>
                {this.state.error}
            </p> :
            <div></div>;
        return (
            <div className="Register">
                <section id="signUpPage">
                    <h2>Sign up</h2>
                    <form className="registerForm" onSubmit={this.registerUser}>
                        <div className="errorMessage">
                            {msg}
                        </div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Username"
                            onChange={(e) =>
                                this.changeUsername(e.target.value)
                            }
                            required
                        />
                        {this.state.user_name.touched && (
                            <ValidationError
                                message={this.validateUserName()}
                            />
                        )}

                        <label>Password</label>
                        <input
                            type="Password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) =>
                                this.changePassword(e.target.value)
                            }
                            required
                        />

                        {this.state.password.touched && (
                            <ValidationError
                                message={this.validatePassword()}
                            />
                        )}


                        <label>Repeat Password</label>
                        <input
                            type="Password"
                            name="repeatPassword"
                            placeholder="Repeat Password"
                            onChange={(e) =>
                                this.updateRepeatPassword(e.target.value)
                            }
                            required
                        />

                        {this.state.repeatPassword.touched && (
                            <ValidationError
                                message={this.validateRepeatPassword()}
                            />
                        )}
                        <button
                            className="signup-button"
                            id="register-button"
                            type="submit"
                            disabled={this.state.submitButtonDisabled}
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="login">
                        <p>
                            Already have an account?
                        </p>
                        <p>
                            <NavLink to="/login">Log in here</NavLink>
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}