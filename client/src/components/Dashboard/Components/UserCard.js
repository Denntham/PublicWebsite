import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CircularProgress, Divider, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { Link } from 'react-router-dom';
import NoData from '../../Project/Panels/ServiceView/Content/Components/NoData';


function UserCard({userData}){

    //Change formatting so instead of using switch to switch between options, enable the display
    //Using the JSX inline formatting
    function DataDisplay({userData}){

        let parsedUserType;

        if(userData.permission === 0) parsedUserType = 'User';
        if(userData.permission === 2) parsedUserType = 'Admin';

        return(
            <Grid container xs={12} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingBottom: '1em',}}>
            <Grid container xs={12} justify="center"
            className={classes.dataContainer}
            >
                <Typography className={classes.name}>{userData.name}</Typography>
                <Typography className={classes.address}>
                        {userData.address &&    userData.city && userData.province ? 
                        userData.address + ', ' + userData.city + ', ' + userData.province : '--'}
                </Typography>
                <Button component={Link}
                className={classes.contactUs} 
                style={{marginTop: '10%',}}
                to="/dashboard/settings"
                    >
                    Edit
                </Button>
                <Grid container xs={11} justify="flex-start">
                    <span style={{width: '100%', height: '0.1em', backgroundColor: '#D2D2D2', margin: '1em 0em 1em 0em'}}></span>
                    <Typography className={classes.contentTitle}>Deskripsi</Typography>
                    <Typography className={classes.contentText}>{userData.bio}</Typography>
                </Grid>
                <Grid container xs={11} justify="flex-start">
                    <span style={{width: '100%', height: '0.1em', backgroundColor: '#D2D2D2', margin: '1em 0em 1em 0em'}}></span>
                    <Typography className={classes.contentTitle}>{userData.permission === 1? "Servis" : "Tipe User"}</Typography>
                    <Typography className={classes.serviceTag}>{ userData.permission === 1 ? userData.serviceType : parsedUserType}</Typography>    
                </Grid> 
                <Grid container xs={11} justify="flex-start">
                    <span style={{width: '100%', height: '0.1em', backgroundColor: '#D2D2D2', margin: '1em 0em 1em 0em'}}></span>
                    <Typography className={classes.contentTitle}>Kontak</Typography>
                    <Grid container xs={12}>
                        <Grid xs={4}>
                            <Typography className={classes.contentTitle2}>Telefon</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography className={classes.contentTitle2}>{userData.phone ? userData.phone : <NoData/>}</Typography>
                        </Grid>
                        <Grid xs={4}>
                            <Typography className={classes.contentTitle2}>Website</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography className={classes.contentTitle2}>{userData.website ? userData.website : <NoData/>}</Typography>
                        </Grid>
                    </Grid>
                </Grid> 
                </Grid>
            </Grid>
        )
    }

    const classes = useStyles();
    const [isLoaded, setIsLoaded] = useState(false);

    function handleLoad(){
        return(
            <CircularProgress/>
        )
    }

    useEffect(() => {
        setIsLoaded(true);
    }, [userData])

    return(
        <Card className={classes.cardRoot}>
            {!isLoaded && (
                <>
                    <CircularProgress/>
                </>
            )}

            {isLoaded && (
                <Grid container
                direction="column"
                justify="flex-start"
                alignItems="center" >
                    <Avatar 
                    className={classes.cardAvatar} 
                    src={`http://localhost:5000/avatar/render/${userData.username}`}
                    imgProps={{
                        'onLoad': handleLoad,
                    }}
                    />
                    <Typography className={classes.cardUsername}>{userData.username}</Typography>
                     
                     <div>
                        <DataDisplay userData = {userData}/>
                    </div>
                    
                </Grid>
            )}
        </Card>
    )
}

export default UserCard;