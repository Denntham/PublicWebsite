import { Button, Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

function ProjectTile({projects}) {
    
    const classes = useStyles();

    function renderTiles(){
        if(projects.length < 1 || !projects) return;

        return projects.map((project, idx) => {
            const imgSrc = `http://localhost:5000/projectImage/thumbnail/${project._id}`;
            let color;
            if(project.status == 0) color = '#616161'
            if(project.status == 2) color = '#d32f2f';
            if(project.status == 1) color = 'white';

            return(
                <Grid item xs={2} style={{display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Link to={`/projects/${project._id}`}>
                        <Card className={classes.cardContainer} style={{backgroundColor: `${color}`}}>
                            <img src={imgSrc} className={classes.imageContainer}/>
                        </Card>
                    </Link>
                    <Typography style={{fontSize: 15, fontWeight: 600, marginTop: '10px'}}>{project.name}</Typography>
                </Grid>
            )
        })
    }
    
    return (
        <Grid container xs={12} style={{display: 'inline-flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            {projects.length > 0 && (
                <>
                    {renderTiles()}
                </>
            )}
            {projects.length < 1 && (
                <div style={{width: '100%', justifyContent: 'center', alignContent: 'center', display: 'inline-flex'}}>
                    <Typography>Tidak ada projek yang ditemukan</Typography>
                </div>
            )}
        </Grid>
    );
}

export default ProjectTile;