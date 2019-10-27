import React, { Component } from 'react';
import Landing from './Landing'; // do NOT delete! --> Ok!

let credentials = {
    Robert: "TSDqmaPu",
    Isabelle: "ngEyYWTp",
    Guest1: "3fv9fZGL",
    Guest2: "zwvY5Tjt",
    Guest3: "wZXaHrxF",
}

class Login extends Component {

    constructor() {
        super()
        this.state = {
            admin: {
                firstName: '',
                lastName: '',
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
        const {isLoggedIn, firstName, lastName, password, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('isLoggedIn', rememberMe ? isLoggedIn: true);
        localStorage.setItem('firstName', rememberMe ? firstName: '');
        localStorage.setItem('lastName', rememberMe ? lastName : '');
        localStorage.setItem('password', rememberMe ? password : '');
    };

    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const firstName = rememberMe ? localStorage.getItem('firstName') : '';
        const lastName = rememberMe ? localStorage.getItem('lastName') : '';
        //const password = rememberMe ? localStorage.getItem('password') : '';
        this.setState({ firstName, lastName, rememberMe });
    };

    login = (event) => {

        if (credentials[this.state.firstName] === this.state.password) {
            let admin = {
                    firstName: this.state.firstName, 
                    lastName: this.state.lastName, 
                    password: this.state.password, 
                    rememberMe: true, 
                    isLoggedIn: true }
            this.setState({ admin: admin })
            localStorage.admin = JSON.stringify(admin)

            // not using but cannot delete the code below //
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
                        First Name: <input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Surname: <input name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password: <input  name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label>
                        <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
                    </label>
                    <button type="submit">Sign In</button>
                </form>
            </div>

        );
    }
}
export default Login
