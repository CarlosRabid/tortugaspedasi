import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './login.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



class Login2 extends Component {
    render() {
        return (<Card className='logincontainer' style={{ maxWidth: 345 }}>
            <CardContent>
                <TextField id="outlined-name" label="Username" name="username" margin="normal" variant="outlined" type="string" name="phone" onChange={this.handleInputChange} />
                <TextField id="outlined-name" type="password" label="Password" margin="normal" name="password" variant="outlined" onChange={this.handleInputChange} name="password" />
            </CardContent>
            <CardActions>
                {/* <input type="text" placeholder={t("username")} name="username" onChange={this.handleInputChange}/>
               <input type="password" placeholder={t("password")} name="password" onChange={this.handleInputChange} /> */}
                <Button size="small" color="primary" onClick={this.login}>Login </Button>
            </CardActions>
        </Card>
        )
    }
}

export default Login2