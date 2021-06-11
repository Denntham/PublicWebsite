import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

function InspirationsIndex({albums}) {
    const classes = useStyles();
    function renderAlbums(){
        
        return albums.map((album) => {
            return (
                <Grid item xs={2} style={{margin: '-1em 2rem 1em 1em',display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Link to={`/dashboard/inspirations/${album.id}`}>
                        <Card className={classes.cardContainer}>
                            <img src={`http://localhost:5000/projectImage/thumbnail/${album.inspoList[0]}`} className={classes.imageContainer}/>
                        </Card>
                    </Link>
                    <Typography style={{fontSize: 15, fontWeight: 600, marginTop: '10px'}}>{album.name}</Typography>
                </Grid>
            )
        })
    }

    return (
        <div>
            {renderAlbums()}
        </div>
    );
}

export default InspirationsIndex;