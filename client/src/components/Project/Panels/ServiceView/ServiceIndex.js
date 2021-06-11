import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import UserContent from './Content/DashboardContent';

import useStyles from './styles';
import { useParams } from 'react-router';

function ServiceIndex() {
    
    const classes = useStyles();
    const [user, setUser] = useState({})
    const {userID} = useParams();

    function getUser(){
        axios.get('http://localhost:5000/user/profile/'+userID).then(response => {
            if(!response) throw response.data.errorMessage;
            setUser(response.data);
        }).catch(error => {console.log(error)});
    }

    useEffect(() => {
        getUser();
    }, []);

    return(
        <Grid container 
        direction="row"
        alignItems="flex-start"
        xs={12} 
        spacing={2}
        className={classes.root}>
            <Grid item xs={8}>
				<Typography className={classes.breadcrumb}>Breadcrumbs</Typography>
			</Grid>
            {Object.keys(user).length === 0 && (
                <CircularProgress/>
            )}
            {Object.keys(user).length > 0 && (
                <UserContent userData={user}/>
            )}
        </Grid>
    )
}

export default ServiceIndex;