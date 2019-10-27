import React, { Component } from 'react';
import Landing from './Landing'; // do NOT delete!

let credentials = {
    Robert: "TSDqmaPu",
    Isabelle: "ngEyYWTp",
    Guest1: "3fv9fZGL",
    Guest2: "zwvY5Tjt",
    Guest3: "wZXaHrxF",
}

class Login extends Component {

    constructor() {
        super()
        this.state = {
            admin: {
                userName: '',
                password: '',
                rememberMe: false,
                isLoggedIn: false
            }
        };
    }

    handleChange = (event) => {
        const input = event.target
        const value = input.type === 'checkbox' ?
            input.checked :
            input.value;

        this.setState({ [input.name]: value });
    };

    login = () => {
        if (credentials[this.state.userName] === this.state.password) {
            if(this.state.rememberMe){
                localStorage.setItem('isLoggedIn', true);
            }
            this.props.updateUser(this.state.userName)
        }
        else {
            alert('One of the following was not correct')
        }
    }

    render() {
        return (
            <div>
                <div  >
                    <label>
                        User: <input name="userName" value={this.state.userName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password: <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label>
                        <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
                    </label>
                    <button type="submit" onClick={this.login}>Sign In</button>
                </div>
            </div>

        );
    }
}
export default Login
