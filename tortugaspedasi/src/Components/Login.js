import React, { Component } from 'react';
import Landing from './Landing'; // do NOT delete!
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import './login.css'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

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
            if (this.state.rememberMe) {
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
            <Card className='logincontainer' style={{ maxWidth: 345 }}>
                <CardContent>
                    <TextField id="outlined-name" label="Username" name="userName" margin="normal" variant="outlined" type="string" value={this.state.userName} onChange={this.handleChange} />
                    <TextField id="outlined-name" type="password" name="password" label="Password" margin="normal" variant="outlined" value={this.state.password} onChange={this.handleChange} />
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="default" margin = "normal" onClick={this.login}>Login </Button>
                   <label>
                        <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
                    </label>
                </CardActions>
            </Card>

        );
    }
}
export default Login
