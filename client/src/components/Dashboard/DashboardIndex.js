import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import UserContent from './Content/DashboardContent';

import useStyles from './styles';

function DashboardIndex() {
    
    const classes = useStyles();
    const [user, setUser] = useState({})

    async function getUser(){
        if(Object.keys(user).length === 0){
            const res = await axios.get('http://localhost:5000/user/profile');
            setUser(res.data);
        }
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

export default DashboardIndex;