import React, { Component } from 'react';
import Landing from './Landing'; // do NOT delete! --> Ok!

let credentials = {
    Admin1: "TSDqmaPu",
    Admin2: "ngEyYWTp",
    Admin3: "3fv9fZGL",
    Admin4: "zwvY5Tjt",
    Admin5: "wZXaHrxF",
}

class Login extends Component {

    constructor() {
        super()
        this.state = {
            admin: {
                user: '',
                password: '',
                rememberMe: false,
                isLoggedIn: false
            }
        };

    }

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
        const { user, password, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
        localStorage.setItem('password', rememberMe ? password : '');
    };

    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const user = rememberMe ? localStorage.getItem('user') : '';
        const password = rememberMe ? localStorage.getItem('password') : '';
        this.setState({ user, password, rememberMe });
    };

    login = (event) => {

        if (credentials[this.state.user] === this.state.password) {
            let admin = { user: this.state.user, password: this.state.password, rememberMe: true, isLoggedIn: true }
            this.setState({ admin: admin })
            localStorage.admin = JSON.stringify(admin)
            event.preventDefault();
            let username = event.target[0].value
            this.props.updateUser(username)
        }
        else {
            alert('One of the following was not correct')
        }

    }

    loginFuncs = (event) => {
        setTimeout(this.handleFormSubmit(), 5000)
        this.login(event)
    }

    // logout = () => {
    //     let admin = {
    //         user: "",
    //         password: "",
    //         rememberMe: false,
    //         isLoggedIn: false
    //     }
    //     localStorage.admin = JSON.stringify(admin)
    //     this.setState({ admin: admin })
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.loginFuncs} >
                    <label>
                        User: <input name="user" value={this.state.user} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label>
                        <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
                    </label>
                    <button type="submit" >Sign In</button>
                </form>
            </div>

        );
    }
}
export default Login
