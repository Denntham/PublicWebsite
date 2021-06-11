import { Button, Card, Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import useStyles from './styles';

function ProjectTile({projects, editMode, deleteFunc}) {
    
    const classes = useStyles();
    const history = useHistory();
    
    function AddNewBox(){
        return(
            <Grid item xs={2} style={{display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Link to="/newproject">
                <Button className={classes.addNewCard}>
                    <Typography className={classes.addNewText}>
                        +
                    </Typography>
                </Button>
                </Link>
                <Typography style={{fontSize: 15, fontWeight: 600, marginTop: '10px'}}>Add New</Typography>
            </Grid>
        )
    }

    function renderTiles(){
        if(projects.length < 1 || !projects) return;

        return projects.map((project, idx) => {
            const imgSrc = `http://localhost:5000/projectImage/thumbnail/${project._id}`;
            let color;
            if(project.status == 0) color = '#616161'
            if(project.status == 2) color = '#d32f2f';
            if(project.status == 1) color = 'white';

            return(
                <>
                <Grid key={idx} item xs={2} style={{display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Link to={!editMode ? `/projects/${project._id}` : '#'} style={editMode ? {cursor: 'default'} : {}}>
                        <Card className={classes.cardContainer} style={{backgroundColor: `${color}`}}>
                            {editMode && (
                                <div className={classes.overlay}/>
                            )}
                            <img src={imgSrc} className={classes.imageContainer}/>
                        </Card>
                    </Link>
                    <Typography style={{fontSize: 15, fontWeight: 600, marginTop: '10px'}}>{project.name}</Typography>
                    {editMode && (
                    <div style={{position: 'absolute', top: '50%', width: '100px', display: 'flex', justifyContent: 'space-evenly'}}>
                        <EditIcon style={{backgroundColor: '#ebc934'}} className={classes.icons} onClick={() => {history.push(`/edit/${project._id}`)}}/>
                        <DeleteIcon style={{backgroundColor: 'red'}} className={classes.icons} onClick={() => {deleteFunc(project._id)}}/>
                    </div>
                    )}
                </Grid>
                </>
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
            <AddNewBox/>
        </Grid>
    );
}

export default ProjectTile;