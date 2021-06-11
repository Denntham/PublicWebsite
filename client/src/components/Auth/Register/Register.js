import React, { useContext, useState } from "react";
import axios from 'axios';
import AuthContext from '../Context/AuthContext';
import {useHistory} from 'react-router';
import { Button, Divider, FormControl, FormLabel, Grid, InputLabel, TextField, Typography } from "@material-ui/core";
import bg from '../../../resources/auth/loginbg.jpg';
import { Link } from "react-router-dom";
import CustomRadio from "../CustomComponents/CustomRadio";

import useStyles from '../styles';

function Register() {
    const classes = useStyles();

    const [email, setEmail] = useState(""); 
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [passwordVerify, setPasswordVerify] = useState(""); 
    const [permission, setPermission] = useState(0);
    const [serviceType, setServiceType] = useState("");


    const history = useHistory();
    const {getLoggedIn} = useContext(AuthContext);

    function handleSelectPerm(e){
        const permID = e.target.value === "User" ? 0 : 1;
        setPermission(permID);

        if(permID === 0 && serviceType !== "") setServiceType("");
    }

    function selectService(e){
        setServiceType(e.target.value);
    }

    async function register(e){
        e.preventDefault();

        try{
            if(!email || !username || !password || !passwordVerify) return;
            const registerData = {
                email, username,  password, passwordVerify, permission, serviceType
            };
            
            await axios.post("http://localhost:5000/auth/register", registerData);
            await getLoggedIn();
            history.push("/dashboard");
        } catch(err) {
            console.error(err);
        }
    }

    return(
        <Grid container className={classes.root}>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{height: '100vh', width: '100vw',}}
            >
            <Grid item xs={7} className={classes.formContainer} style={{alignItems: 'center', marginRight: '0% !important'}}>
                <Typography className={classes.formTitle}>Pendaftaran</Typography>
                <form onSubmit={register} className={classes.form}>
                    <div>
                        <div className={classes.inputblock}>
                        <FormLabel className={classes.fieldLabel} htmlFor="email">E-Mail</FormLabel>
                        <TextField id="email" 
                        variant="outlined" 
                        type="email"
                        InputProps={{
                            className: classes.input
                        }}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                        </div>
                        
                        <div className={classes.inputblock}>
                        <FormLabel className={classes.fieldLabel} htmlFor="username">Username</FormLabel>
                        <TextField id="username" 
                        variant="outlined" 
                        type="text"
                        InputProps={{
                            className: classes.input
                        }}
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        />
                        </div>
                        <br/>
                        <div className={classes.inputblock}>
                        <FormLabel className={classes.fieldLabel} htmlFor="password">Password</FormLabel>
                        <TextField 
                        id="password" 
                        type="password"
                        variant="outlined" 
                        InputProps={{
                            className: classes.input
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                        </div>
                        <div className={classes.inputblock}>
                        <FormLabel className={classes.fieldLabel} htmlFor="verifyPassword">Verifikasi Password</FormLabel>
                        <TextField 
                        id="verifyPassword" 
                        type="password"
                        variant="outlined" 
                        InputProps={{
                            className: classes.input
                        }}
                        onChange={(e) => setPasswordVerify(e.target.value)}
                        value={passwordVerify}
                        />
                        </div>
                        </div>
                        <div>
                        
                        <div style={{display: 'inline-flex', justify: 'space-between', width: '100%', }}>
                        <div className={classes.inputblock}>
                            <FormLabel className={classes.fieldLabel} htmlFor="permission">Tipe User</FormLabel>
                            <CustomRadio name="permission" values={["User", "Professional"]} handleSelect={handleSelectPerm} defaultValue={"User"}/>
                        </div>
                        
                        {permission === 1 && (
                                <div className={classes.inputblock}>
                                    <FormLabel className={classes.fieldLabel} htmlFor="permission">Tipe Servis</FormLabel>
                                    <CustomRadio name="permission" values={["Interior", "Arsitek", "Kontraktor"]} handleSelect={selectService} defaultValue={"Interior"}/>
                                </div>
                        )}
                        </div>
                        </div>
                        <div>
                        <Button type="submit" style={{width: '100%'}} className={classes.submit}>Daftar</Button>
                        </div>
                </form>
                    <Divider style={{marginTop: '1%', marginBottom: '1%'}}/>
                    <Typography className={classes.rerouteText}>
                        Sudah menjadi user? 
                        <Link className={classes.link} to="/login">
                            Klik sini
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.bgContainer}>
                <img src={bg} className={classes.background} style={{filter: 'blur(2px)', transform: 'scale(1.1)'}}/>
            </div>
        </Grid>
    )
}

export default Register;