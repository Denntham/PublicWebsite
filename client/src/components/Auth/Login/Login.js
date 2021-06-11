import React, { useContext, useState } from "react";
import axios from 'axios';
import AuthContext from '../Context/AuthContext';
import {useHistory} from 'react-router';
import { Button, Divider, FormHelperText, Grid, InputLabel, TextField, Typography } from "@material-ui/core";
import bg from '../../../resources/auth/loginbg.jpg';


import useStyles from '../styles';
import { Link } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [error, setError] = useState('');

    const {getLoggedIn} = useContext(AuthContext);

    const classes = useStyles();
    const history = useHistory();

    async function login(e){
        e.preventDefault();

        try{
            const loginData = {
                email, password
            };

            await axios.post("http://localhost:5000/auth/login", loginData);
            await getLoggedIn();

            const user = await axios.get('http://localhost:5000/auth/loggedIn')

            if(user.data.permission > 0) {history.push("/dashboard");}
            if(user.data.permission === 0) {history.push("/");}
        } catch(error) {
            setError(error.response.data.errorMessage);
        }
    }

    return(
        <Grid container className={classes.root}>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{height: '100vh'}}
            >
            <Grid item className={classes.formContainer}>
                <Typography className={classes.formTitle}>Login</Typography>
                <form onSubmit={login} className={classes.form}>
                    <InputLabel className={classes.fieldLabel} htmlFor="email">E-Mail</InputLabel>
                    <TextField id="email" 
                    variant="outlined" 
                    type="email"
                    InputProps={{
                        className: classes.input
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    value={email}
                    />

                    <InputLabel className={classes.fieldLabel} htmlFor="email">Password</InputLabel>
                    <TextField 
                    id="password" 
                    type="password"
                    variant="outlined" 
                    required
                    InputProps={{
                        className: classes.input
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
                    <div style={{width: '90%',}}>
                    <FormHelperText style={{color: 'red', marginTop: '-20px', marginBottom: '20px', fontSize: 12, textAlign: 'center', paddingRight: '-10px'}}>{error}</FormHelperText>      
                    </div>              
                    <Button type="submit" className={classes.submit}>Log In</Button>
                    </form>
                    <Divider style={{marginTop: '5.5%', marginBottom: '3.5%',}}/>
                    <Typography className={classes.rerouteText}>
                        Belum terdaftar? 
                        <Link className={classes.link} to="/register">
                            Klik sini
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.bgContainer}>
                <img src={bg} className={classes.background}/>
            </div>
        </Grid>
    )
}

export default Login;